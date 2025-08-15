from .database import SessionLocal, engine
from .models import Page, Base, User
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

seed_data = [
    {
        "slug": "home",
        "title": "Welcome to SoilMitra",
        "content": "Your AI-powered organic farming and fertilizer schedule assistant."
    },
    {
        "slug": "about",
        "title": "About SoilMitra",
        "content": "We help farmers adopt organic practices with AI-generated fertilizer schedules."
    },
    {
        "slug": "product",
        "title": "Our Product",
        "content": "SoilMitra provides personalized crop nutrition plans and reminders."
    },
    {
        "slug": "contact",
        "title": "Contact Us",
        "content": "Reach out to us for support or partnership inquiries."
    },
]

def seed_pages():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    for data in seed_data:
        exists = db.query(Page).filter(Page.slug == data["slug"]).first()
        if not exists:
            page = Page(**data)
            db.add(page)
    db.commit()
    db.close()

def seed_admin():
    db = SessionLocal()
    admin_username = "admin"
    admin_password = "admin123"
    hashed_password = pwd_context.hash(admin_password)
    exists = db.query(User).filter(User.username == admin_username).first()
    if not exists:
        user = User(username=admin_username, password=hashed_password)
        db.add(user)
        db.commit()
    db.close()

if __name__ == "__main__":
    seed_pages()
    seed_admin() 