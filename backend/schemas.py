from pydantic import BaseModel
from datetime import datetime


class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    password: str

class UserOut(UserBase):
    id: int
    created_at: datetime
    class Config:
        from_attributes = True

class AdminLogin(BaseModel):
    username: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class AuditLogOut(BaseModel):
    id: int
    admin_username: str
    action: str
    target: str | None = None
    timestamp: datetime
    details: str | None = None
    class Config:
        from_attributes = True

class ChatMessageOut(BaseModel):
    id: int
    session_id: str
    sender: str
    message: str
    timestamp: datetime
    class Config:
        from_attributes = True 