from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Page
from ..schemas import PageOut

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter(prefix="/api/pages", tags=["pages"])

@router.get("/{slug}", response_model=PageOut)
def get_page(slug: str, lang: str = Query("en", description="Language code (en or ta)"), db: Session = Depends(get_db)):
    page = db.query(Page).filter(Page.slug == slug).first()
    if not page:
        raise HTTPException(status_code=404, detail="Page not found")
    
    # For now, return the same content for both languages
    # In a real implementation, you would have language-specific content in the database
    return page 