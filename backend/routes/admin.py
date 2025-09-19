from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from database import SessionLocal
from models import User, AuditLog, ChatMessage
from schemas import AdminLogin, TokenResponse, AuditLogOut, ChatMessageOut, UserCreate
import os
import shutil
from pathlib import Path
from sqlalchemy import func
from rag_service import rag_service

SECRET_KEY = os.environ.get("SECRET_KEY", "soilmitrasecret")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/admin/login")

router = APIRouter(prefix="/api/admin", tags=["admin"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def authenticate_user(db, username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.password):
        return None
    return user

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def get_current_admin(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = db.query(User).filter(User.username == username).first()
    if user is None:
        raise credentials_exception
    return user

def log_action(db: Session, admin_username: str, action: str, target: str = None, details: str = None):
    log = AuditLog(
        admin_username=admin_username,
        action=action,
        target=target,
        details=details
    )
    db.add(log)
    db.commit()

@router.post("/register", response_model=TokenResponse)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    existing_user = db.query(User).filter(User.username == user_data.username).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already registered")
    
    # Hash password and create user
    hashed_password = pwd_context.hash(user_data.password)
    user = User(username=user_data.username, password=hashed_password)
    db.add(user)
    db.commit()
    db.refresh(user)
    
    # Log the registration
    log_action(db, user.username, "register", details="Admin user registered")
    
    # Return token
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/login", response_model=TokenResponse)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    access_token = create_access_token(data={"sub": user.username})
    log_action(db, user.username, "login", details="Admin logged in")
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/audit-logs", response_model=list[AuditLogOut], dependencies=[Depends(get_current_admin)])
def get_audit_logs(db: Session = Depends(get_db)):
    return db.query(AuditLog).order_by(AuditLog.timestamp.desc()).all()


@router.get("/chat-sessions", dependencies=[Depends(get_current_admin)])
def list_chat_sessions(db: Session = Depends(get_db)):
    sessions = db.query(
        ChatMessage.session_id,
        func.max(ChatMessage.timestamp).label("last_message_time"),
        func.count(ChatMessage.id).label("message_count")
    ).group_by(ChatMessage.session_id).order_by(func.max(ChatMessage.timestamp).desc()).all()
    return [
        {
            "session_id": s.session_id,
            "last_message_time": s.last_message_time,
            "message_count": s.message_count
        }
        for s in sessions
    ]

@router.get("/chat-messages/{session_id}", response_model=list[ChatMessageOut], dependencies=[Depends(get_current_admin)])
def get_chat_messages(session_id: str, db: Session = Depends(get_db)):
    return db.query(ChatMessage).filter(ChatMessage.session_id == session_id).order_by(ChatMessage.timestamp).all()

@router.get("/all-chat-messages", dependencies=[Depends(get_current_admin)])
def get_all_chat_messages(
    page: int = 1, 
    limit: int = 20, 
    search: str = None,
    sender: str = None,
    db: Session = Depends(get_db)
):
    """Get all chat messages with pagination and optional filtering"""
    query = db.query(ChatMessage)
    
    # Apply search filter
    if search:
        query = query.filter(ChatMessage.message.ilike(f"%{search}%"))
    
    # Apply sender filter
    if sender:
        query = query.filter(ChatMessage.sender == sender)
    
    # Get total count for pagination
    total_count = query.count()
    
    # Apply pagination
    offset = (page - 1) * limit
    messages = query.order_by(ChatMessage.timestamp.desc()).offset(offset).limit(limit).all()
    
    # Calculate pagination info
    total_pages = (total_count + limit - 1) // limit
    
    return {
        "messages": [
            {
                "id": msg.id,
                "session_id": msg.session_id,
                "sender": msg.sender,
                "message": msg.message,
                "timestamp": msg.timestamp
            }
            for msg in messages
        ],
        "pagination": {
            "page": page,
            "limit": limit,
            "total_count": total_count,
            "total_pages": total_pages,
            "has_next": page < total_pages,
            "has_prev": page > 1
        }
    }

@router.post("/upload-pdf", dependencies=[Depends(get_current_admin)])
async def upload_pdf(
    pdf: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_admin: User = Depends(get_current_admin)
):
    # Validate file type
    if not pdf.filename.lower().endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Only PDF files are allowed")
    
    # Create uploads directory if it doesn't exist
    upload_dir = Path("uploads")
    upload_dir.mkdir(exist_ok=True)
    
    # Create a unique filename
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"rag_pdf_{timestamp}_{pdf.filename}"
    file_path = upload_dir / filename
    
    try:
        # Save the uploaded file
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(pdf.file, buffer)
        
        # Process PDF for RAG
        rag_success = rag_service.process_pdf(str(file_path), filename)
        
        # Log the upload action
        log_action(
            db, 
            current_admin.username, 
            "upload_pdf", 
            target=filename,
            details=f"PDF uploaded for RAG: {pdf.filename} - Processing: {'Success' if rag_success else 'Failed'}"
        )
        
        return {
            "message": "PDF uploaded successfully" + (" and processed for RAG" if rag_success else " but RAG processing failed"),
            "filename": filename,
            "file_path": str(file_path),
            "rag_processed": rag_success
        }
        
    except Exception as e:
        # Clean up if there's an error
        if file_path.exists():
            file_path.unlink()
        raise HTTPException(status_code=500, detail=f"Failed to upload PDF: {str(e)}")

@router.get("/rag-pdfs", dependencies=[Depends(get_current_admin)])
def list_rag_pdfs():
    """List all PDFs that have been processed for RAG"""
    pdfs = rag_service.list_uploaded_pdfs()
    return {"pdfs": pdfs, "count": len(pdfs)}

@router.delete("/rag-pdfs/{filename}", dependencies=[Depends(get_current_admin)])
def remove_rag_pdf(filename: str, db: Session = Depends(get_db), current_admin: User = Depends(get_current_admin)):
    """Remove a PDF from the RAG system"""
    success = rag_service.remove_pdf(filename)
    if success:
        log_action(db, current_admin.username, "remove_rag_pdf", target=filename)
        return {"message": f"PDF {filename} removed from RAG system"}
    else:
        raise HTTPException(status_code=404, detail=f"PDF {filename} not found in RAG system") 