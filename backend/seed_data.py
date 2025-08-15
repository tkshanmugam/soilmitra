#!/usr/bin/env python3
"""
Data Seeding Script
Run this script to populate the database with sample data after initialization.
"""

import os
import sys
from pathlib import Path
from datetime import datetime

# Add the current directory to Python path
sys.path.append(str(Path(__file__).parent))

from database import SessionLocal
from models import Page, Contact, User, AuditLog, ChatMessage
from passlib.context import CryptContext

# Password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    """Hash a password using bcrypt"""
    return pwd_context.hash(password)

def seed_sample_data():
    """Seed the database with sample data"""
    db = SessionLocal()
    
    try:
        print("🌱 Starting data seeding...")
        
        # Check if data already exists
        existing_pages = db.query(Page).count()
        if existing_pages > 0:
            print("⚠️  Sample data already exists in database!")
            response = input("Do you want to clear existing data and reseed? (y/N): ").lower().strip()
            if response != 'y':
                print("✅ Keeping existing data!")
                return
            else:
                print("🗑️  Clearing existing data...")
                db.query(Page).delete()
                db.query(Contact).delete()
                db.query(User).delete()
                db.query(AuditLog).delete()
                db.query(ChatMessage).delete()
                db.commit()
                print("✅ Existing data cleared!")
        
        print("📝 Creating sample pages...")
        
        # Sample pages
        sample_pages = [
            {
                "slug": "home",
                "title": "Welcome to AgriAdvisor",
                "content": "Your AI-powered farming companion for better agriculture practices."
            },
            {
                "slug": "about",
                "title": "About Us",
                "title": "Learn about our mission to revolutionize farming with AI technology."
            },
            {
                "slug": "seeds",
                "title": "Seed Collection",
                "content": "Explore our comprehensive collection of native and hybrid seeds."
            },
            {
                "slug": "chat",
                "title": "AI Farming Assistant",
                "content": "Get personalized farming advice from our AI-powered assistant."
            }
        ]
        
        for page_data in sample_pages:
            page = Page(**page_data)
            db.add(page)
        
        print("👥 Creating sample users...")
        
        # Sample admin user
        admin_user = User(
            username="admin",
            password=hash_password("admin123")  # Change this in production!
        )
        db.add(admin_user)
        
        print("📞 Creating sample contacts...")
        
        # Sample contact messages
        sample_contacts = [
            {
                "name": "John Farmer",
                "email": "john@example.com",
                "message": "Great platform! Looking forward to using the AI assistant."
            },
            {
                "name": "Maria Garcia",
                "email": "maria@example.com",
                "message": "Need help with organic farming practices. Can you assist?"
            }
        ]
        
        for contact_data in sample_contacts:
            contact = Contact(**contact_data)
            db.add(contact)
        
        print("📊 Creating sample audit logs...")
        
        # Sample audit logs
        audit_log = AuditLog(
            admin_username="admin",
            action="database_initialization",
            target="all_tables",
            details="Initial database setup and data seeding completed"
        )
        db.add(audit_log)
        
        print("💬 Creating sample chat messages...")
        
        # Sample chat messages
        sample_chats = [
            {
                "session_id": "sample_session_1",
                "sender": "user",
                "message": "How do I grow tomatoes organically?"
            },
            {
                "session_id": "sample_session_1",
                "sender": "bot",
                "message": "To grow tomatoes organically, start with organic seeds, use compost-rich soil, and avoid chemical pesticides. Would you like specific tips for your region?"
            }
        ]
        
        for chat_data in sample_chats:
            chat = ChatMessage(**chat_data)
            db.add(chat)
        
        # Commit all changes
        db.commit()
        
        print("✅ Sample data seeded successfully!")
        print(f"📊 Created: {len(sample_pages)} pages, 1 user, {len(sample_contacts)} contacts, 1 audit log, {len(sample_chats)} chat messages")
        
        print("\n🔑 Default admin credentials:")
        print("Username: admin")
        print("Password: admin123")
        print("⚠️  IMPORTANT: Change these credentials in production!")
        
    except Exception as e:
        print(f"❌ Error during data seeding: {e}")
        db.rollback()
        raise
    finally:
        db.close()

def check_data_status():
    """Check what data exists in the database"""
    db = SessionLocal()
    
    try:
        pages_count = db.query(Page).count()
        users_count = db.query(User).count()
        contacts_count = db.query(Contact).count()
        audit_logs_count = db.query(AuditLog).count()
        chat_messages_count = db.query(ChatMessage).count()
        
        print("📊 Current database status:")
        print(f"   Pages: {pages_count}")
        print(f"   Users: {users_count}")
        print(f"   Contacts: {contacts_count}")
        print(f"   Audit Logs: {audit_logs_count}")
        print(f"   Chat Messages: {chat_messages_count}")
        
        return pages_count > 0
        
    except Exception as e:
        print(f"❌ Error checking data status: {e}")
        return False
    finally:
        db.close()

if __name__ == "__main__":
    print("🔍 Checking data status...")
    
    if check_data_status():
        print("\n⚠️  Data already exists in database!")
        response = input("Do you want to reseed the data? (y/N): ").lower().strip()
        if response == 'y':
            seed_sample_data()
        else:
            print("✅ Database is ready with existing data!")
    else:
        seed_sample_data()
