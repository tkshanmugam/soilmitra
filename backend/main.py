from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .routes import pages, contact, chat, admin

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(pages.router)
app.include_router(contact.router)
app.include_router(chat.router)
app.include_router(admin.router)

@app.get("/health")
def health_check():
    return {"status": "ok"} 