from pydantic import BaseModel, EmailStr
from datetime import datetime

class PageBase(BaseModel):
    slug: str
    title: str
    content: str

class PageOut(PageBase):
    created_at: datetime
    updated_at: datetime | None = None

    class Config:
        from_attributes = True

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

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