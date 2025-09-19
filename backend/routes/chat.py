from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel
import os
import openai
from sqlalchemy.orm import Session
from database import SessionLocal
from models import ChatMessage
from schemas import ChatMessageOut
from rag_service import rag_service

router = APIRouter(prefix="/api/chat", tags=["chat"])

class ChatRequest(BaseModel):
    message: str
    session_id: str
    language: str = "en"  # Default to English, can be "en" or "ta"

class ChatResponse(BaseModel):
    reply: str

openai.api_key = os.getenv("OPENAI_API_KEY")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=ChatResponse)
def chat_endpoint(chat: ChatRequest, db: Session = Depends(get_db)):
    if not openai.api_key:
        return ChatResponse(reply="OpenAI API key not configured.")
    # Save user message
    db.add(ChatMessage(session_id=chat.session_id, sender="user", message=chat.message))
    db.commit()
    try:
        # Build system message
        system_message = """You are SoilMitra a friendly AI guide for farmers.
You only talk about:
Organic farming
Soil health
Fertilizers
Crop care
Pest control
Farm techniques
If someone asks about politics, movies, sports, or anything not related to farming, kindly say:
"I'm here to help only with farming. Please ask me about agriculture."
How to reply:
Use simple words farmers can easily understand
Keep it short and useful
Use bullet points if listing things
Stay focused on farming always
Your job is to help farmers grow better, naturally.
FORMATTING GUIDELINES:
- Use clear, well-structured responses with proper paragraph breaks
- Use bullet points or numbered lists when providing multiple items
- Keep responses concise but informative
- Use proper spacing and formatting for readability

LANGUAGE INSTRUCTION:
- If the user's language is Tamil (ta), respond in Tamil
- If the user's language is English (en), respond in English
- Always maintain the same language as the user's request"""
        
        client = openai.OpenAI(api_key=openai.api_key)
        
        # Handle Tamil input by translating to English for RAG processing
        if chat.language == "ta":
            # First, translate Tamil to English for RAG processing
            translation_response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a translator. Translate the following Tamil text to English. Only provide the English translation, nothing else."},
                    {"role": "user", "content": f"Translate to English: {chat.message}"}
                ]
            )
            english_message = translation_response.choices[0].message.content.strip()
            
            # Use English message for RAG context
            if _should_include_rag_context(english_message):
                rag_context = rag_service.get_rag_context(english_message)
                if rag_context:
                    system_message += f"\n\nRELEVANT DOCUMENT CONTEXT:\n{rag_context}\n\nUse this context to provide more accurate and specific answers based on the uploaded documents. Always cite the source document when using information from it. Format your responses clearly with proper spacing and structure."
            
            # Generate response in Tamil
            user_message = f"Please respond in Tamil: {chat.message}"
        else:
            # English message - use as-is for RAG
            if _should_include_rag_context(chat.message):
                rag_context = rag_service.get_rag_context(chat.message)
                if rag_context:
                    system_message += f"\n\nRELEVANT DOCUMENT CONTEXT:\n{rag_context}\n\nUse this context to provide more accurate and specific answers based on the uploaded documents. Always cite the source document when using information from it. Format your responses clearly with proper spacing and structure."
            
            user_message = f"Please respond in English: {chat.message}"
        
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_message}
            ]
        )
        reply = completion.choices[0].message.content.strip()
    except Exception as e:
        reply = f"Error: {str(e)}"
    # Save bot reply
    db.add(ChatMessage(session_id=chat.session_id, sender="bot", message=reply))
    db.commit()
    return ChatResponse(reply=reply)

@router.get("/history", response_model=list[ChatMessageOut])
def get_chat_history(session_id: str = Query(...), db: Session = Depends(get_db)):
    return db.query(ChatMessage).filter(ChatMessage.session_id == session_id).order_by(ChatMessage.timestamp).all()

def _should_include_rag_context(message: str) -> bool:
    """Determine if RAG context should be included for this message"""
    message_lower = message.lower()
    
    # Keywords that indicate the user wants specific information that might be in PDFs
    rag_keywords = [
        "specific", "detailed", "guide", "manual", "procedure", "method",
        "technique", "process", "step by step", "how to", "what is",
        "explain", "describe", "tell me about", "information about",
        "recommendation", "advice", "best practice", "organic", "fertilizer",
        "soil", "crop", "pest", "disease", "treatment", "solution",
        # Tamil RAG keywords
        "விவரங்கள்", "வழிகாட்டுதல்", "முறை", "படிப்படியாக", "எப்படி", "என்ன",
        "விளக்கு", "சொல்", "பரிந்துரை", "ஆலோசனை", "சிறந்த நடைமுறை"
    ]
    
    # Check if message contains agriculture-related keywords that might benefit from PDF context
    agriculture_keywords = [
        "farming", "agriculture", "organic", "fertilizer", "soil", "crop",
        "plant", "grow", "harvest", "pest", "disease", "treatment", "compost",
        "manure", "irrigation", "seeding", "transplanting", "pruning",
        # Tamil agriculture keywords
        "விவசாயம்", "கரிம", "உரம்", "மண்", "பயிர்", "சாகுபடி", "பூச்சி", 
        "நோய்", "சிகிச்சை", "உரங்கள்", "நீர்ப்பாசனம்", "நடவு", "அறுவடை"
    ]
    
    # If message contains agriculture keywords and specific information request keywords
    has_agriculture_keywords = any(keyword in message_lower for keyword in agriculture_keywords)
    has_rag_keywords = any(keyword in message_lower for keyword in rag_keywords)
    
    # Include RAG context if it's an agriculture question that might benefit from specific documentation
    return has_agriculture_keywords and has_rag_keywords 