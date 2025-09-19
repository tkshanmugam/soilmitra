from sqlalchemy import Column, Integer, String, Text, DateTime, func
from database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)  # Store hashed password
    created_at = Column(DateTime(timezone=True), server_default=func.now()) 

class AuditLog(Base):
    __tablename__ = "audit_logs"
    id = Column(Integer, primary_key=True, index=True)
    admin_username = Column(String, nullable=False)
    action = Column(String, nullable=False)
    target = Column(String, nullable=True)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    details = Column(Text, nullable=True) 

class ChatMessage(Base):
    __tablename__ = "chat_messages"
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String, index=True, nullable=False)
    sender = Column(String, nullable=False)  # 'user' or 'bot'
    message = Column(Text, nullable=False)
    timestamp = Column(DateTime(timezone=True), server_default=func.now()) 