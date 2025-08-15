#!/usr/bin/env python3
"""
Database Initialization Script
Run this script to create all database tables for the first time.
"""

import os
import sys
from pathlib import Path

# Add the current directory to Python path
sys.path.append(str(Path(__file__).parent))

from database import engine, Base
from models import Page, Contact, User, AuditLog, ChatMessage
from sqlalchemy import text

def init_database():
    """Initialize the database by creating all tables"""
    try:
        print("🚀 Starting database initialization...")
        
        # Test database connection
        with engine.connect() as conn:
            result = conn.execute(text("SELECT version();"))
            version = result.fetchone()
            print(f"✅ Connected to PostgreSQL: {version[0]}")
        
        # Create all tables
        print("📋 Creating database tables...")
        Base.metadata.create_all(bind=engine)
        print("✅ All tables created successfully!")
        
        # Verify tables were created
        with engine.connect() as conn:
            result = conn.execute(text("""
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public'
                ORDER BY table_name;
            """))
            tables = [row[0] for row in result.fetchall()]
            print(f"📊 Tables created: {', '.join(tables)}")
        
        print("\n🎉 Database initialization completed successfully!")
        print("\nNext steps:")
        print("1. Start your FastAPI server: uvicorn main:app --reload")
        print("2. Access the API documentation at: http://localhost:8000/docs")
        print("3. Test your endpoints")
        
    except Exception as e:
        print(f"❌ Error during database initialization: {e}")
        print("\nTroubleshooting tips:")
        print("1. Make sure PostgreSQL is running")
        print("2. Check your .env file has correct DATABASE_URL")
        print("3. Verify database and user exist")
        print("4. Check network connectivity to database")
        sys.exit(1)

def check_database_status():
    """Check the current status of the database"""
    try:
        with engine.connect() as conn:
            # Check if tables exist
            result = conn.execute(text("""
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public'
                ORDER BY table_name;
            """))
            existing_tables = [row[0] for row in result.fetchall()]
            
            if existing_tables:
                print(f"📊 Existing tables: {', '.join(existing_tables)}")
                return True
            else:
                print("📭 No tables found in database")
                return False
                
    except Exception as e:
        print(f"❌ Cannot connect to database: {e}")
        return False

if __name__ == "__main__":
    print("🔍 Checking database status...")
    
    if check_database_status():
        print("\n⚠️  Database tables already exist!")
        response = input("Do you want to recreate them? (y/N): ").lower().strip()
        if response == 'y':
            print("🗑️  Dropping existing tables...")
            Base.metadata.drop_all(bind=engine)
            print("✅ Tables dropped successfully!")
            init_database()
        else:
            print("✅ Database is ready to use!")
    else:
        init_database()
