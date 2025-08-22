#!/usr/bin/env python3
"""
Main Setup Script for AgriAdvisor
This script automates the entire setup process for first-time users.
"""

import os
import sys
import subprocess
import platform
from pathlib import Path

def print_banner():
    """Print a welcome banner"""
    print("=" * 60)
    print("🚀 Welcome to AgriAdvisor Database Setup! 🚀")
    print("=" * 60)
    print()

def check_python_version():
    """Check if Python version is compatible"""
    version = sys.version_info
    if version.major < 3 or (version.major == 3 and version.minor < 8):
        print("❌ Python 3.8+ is required!")
        print(f"Current version: {version.major}.{version.minor}.{version.micro}")
        sys.exit(1)
    
    print(f"✅ Python {version.major}.{version.minor}.{version.micro} detected")
    return True

def check_postgresql():
    """Check if PostgreSQL is accessible"""
    try:
        import psycopg2
        print("✅ psycopg2 is available")
        return True
    except ImportError:
        print("❌ psycopg2 not found. Installing...")
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", "psycopg2-binary"])
            print("✅ psycopg2 installed successfully")
            return True
        except subprocess.CalledProcessError:
            print("❌ Failed to install psycopg2")
            return False

def create_env_file():
    """Create .env file if it doesn't exist"""
    env_path = Path(".env")
    
    if env_path.exists():
        print("✅ .env file already exists")
        return True
    
    print("📝 Creating .env file...")
    
    # Get database credentials from user
    print("\nPlease provide the following information:")
    db_user = input("Database username (default: agriadvisor_user): ").strip() or "agriadvisor_user"
    db_password = input("Database password: ").strip()
    db_name = input("Database name (default: agriadvisor): ").strip() or "agriadvisor"
    db_host = input("Database host (default: localhost): ").strip() or "localhost"
    db_port = input("Database port (default: 5432): ").strip() or "5432"
    
    if not db_password:
        print("❌ Database password is required!")
        return False
    
    # Generate a random secret key
    import secrets
    secret_key = secrets.token_urlsafe(32)
    
    env_content = f"""# Database Configuration
DATABASE_URL=postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}

# Security
SECRET_KEY={secret_key}
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# OpenAI Configuration (optional)
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
HOST=0.0.0.0
PORT=8000
DEBUG=True
"""
    
    try:
        with open(env_path, 'w') as f:
            f.write(env_content)
        print("✅ .env file created successfully")
        return True
    except Exception as e:
        print(f"❌ Failed to create .env file: {e}")
        return False

def install_dependencies():
    """Install Python dependencies"""
    print("📦 Installing Python dependencies...")
    
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ Dependencies installed successfully")
        return True
    except subprocess.CalledProcessError:
        print("❌ Failed to install dependencies")
        return False

def run_scripts():
    """Run the database setup scripts"""
    print("\n🔧 Running database setup scripts...")
    
    # Run database initialization
    print("📋 Initializing database...")
    try:
        subprocess.check_call([sys.executable, "init_db.py"])
        print("✅ Database initialized successfully")
    except subprocess.CalledProcessError:
        print("❌ Database initialization failed")
        return False
    
    # Run data seeding
    print("🌱 Seeding sample data...")
    try:
        subprocess.check_call([sys.executable, "seed_data.py"])
        print("✅ Sample data seeded successfully")
    except subprocess.CalledProcessError:
        print("❌ Data seeding failed")
        return False
    
    return True

def print_next_steps():
    """Print next steps for the user"""
    print("\n" + "=" * 60)
    print("🎉 Setup Completed Successfully! 🎉")
    print("=" * 60)
    print("\nNext steps:")
    print("1. Start your FastAPI server:")
    print("   uvicorn main:app --reload")
    print("\n2. Access the API documentation:")
    print("   http://localhost:8000/docs")
    print("\n3. Test the default admin account:")
    print("   Username: admin")
    print("   Password: admin123")
    print("\n4. Explore the endpoints and test functionality")
    print("\n⚠️  IMPORTANT: Change default passwords in production!")
    print("\nFor more information, see: DATABASE_SETUP.md")
    print("\nHappy coding! 🚀")

def main():
    """Main setup function"""
    print_banner()
    
    # Check prerequisites
    print("🔍 Checking prerequisites...")
    if not check_python_version():
        return
    
    # Create virtual environment if needed
    if not Path("venv").exists():
        print("🐍 Creating virtual environment...")
        try:
            subprocess.check_call([sys.executable, "-m", "venv", "venv"])
            print("✅ Virtual environment created")
            print("💡 Activate it with:")
            if platform.system() == "Windows":
                print("   venv\\Scripts\\activate")
            else:
                print("   source venv/bin/activate")
        except subprocess.CalledProcessError:
            print("❌ Failed to create virtual environment")
            return
    
    # Check PostgreSQL
    if not check_postgresql():
        return
    
    # Create .env file
    if not create_env_file():
        return
    
    # Install dependencies
    if not install_dependencies():
        return
    
    # Run setup scripts
    if not run_scripts():
        return
    
    # Print next steps
    print_next_steps()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n❌ Setup interrupted by user")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        sys.exit(1)

