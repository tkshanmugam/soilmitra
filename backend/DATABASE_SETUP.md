# Database Setup Guide for AgriAdvisor

This guide will help you set up the PostgreSQL database for AgriAdvisor for the first time.

## Prerequisites

- Python 3.8+ installed
- PostgreSQL installed and running
- pip (Python package manager)

## Step 1: Install PostgreSQL

### Windows
1. Download PostgreSQL from: https://www.postgresql.org/download/windows/
2. Run the installer and follow the setup wizard
3. Remember the password you set for the `postgres` user
4. Keep the default port (5432)

### macOS
```bash
brew install postgresql
brew services start postgresql
```

### Ubuntu/Debian
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## Step 2: Create Database and User

1. Connect to PostgreSQL as the postgres user:

**Windows:**
```bash
psql -U postgres
```

**macOS/Linux:**
```bash
sudo -u postgres psql
```

2. Create the database and user:
```sql
CREATE DATABASE agriadvisor;
CREATE USER agriadvisor_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE agriadvisor TO agriadvisor_user;
ALTER USER agriadvisor_user CREATEDB;
\q
```

**Important:** Replace `'your_secure_password'` with a strong password!

## Step 3: Install Python Dependencies

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

3. Install required packages:
```bash
pip install -r requirements.txt
```

## Step 4: Configure Environment Variables

1. Create a `.env` file in the `backend` directory:
```env
# Database Configuration
DATABASE_URL=postgresql://agriadvisor_user:your_secure_password@localhost:5432/agriadvisor

# Security
SECRET_KEY=your_super_secret_key_here_change_this_in_production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# OpenAI Configuration (if using AI features)
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
HOST=0.0.0.0
PORT=8000
DEBUG=True
```

2. Replace the following values:
   - `your_secure_password`: The password you set for `agriadvisor_user`
   - `your_super_secret_key_here_change_this_in_production`: A random secret key
   - `your_openai_api_key_here`: Your OpenAI API key (optional)

## Step 5: Initialize Database

The database tables will be created automatically when you start the FastAPI server. The application will create the necessary tables for:
- Users (admin authentication)
- Audit logs (admin actions)
- Chat messages (conversation history)

## Step 6: Create Admin User

1. Start the server first:
```bash
uvicorn main:app --reload
```

2. Use the admin registration endpoint to create an admin user:
```bash
curl -X POST "http://localhost:8000/api/admin/register" \
     -H "Content-Type: application/json" \
     -d '{"username": "admin", "password": "admin123"}'
```

**Important:** Change the default admin password in production!

## Step 7: Start the Server

1. Start your FastAPI server:
```bash
uvicorn main:app --reload
```

2. Access the API documentation at: http://localhost:8000/docs

## Step 8: Verify Setup

1. Test the health endpoint:
```bash
curl http://localhost:8000/health
```

2. Test the admin registration:
```bash
curl -X POST "http://localhost:8000/api/admin/register" \
     -H "Content-Type: application/json" \
     -d '{"username": "admin", "password": "admin123"}'
```

## Troubleshooting

### Common Issues

1. **Connection Error:**
   - Ensure PostgreSQL is running
   - Check the DATABASE_URL in your .env file
   - Verify the database and user exist

2. **Permission Error:**
   - Make sure the user has proper privileges
   - Check if the database exists

3. **Port Already in Use:**
   - Change the PORT in .env file
   - Or stop the service using the port

4. **Import Error:**
   - Make sure you're in the backend directory
   - Activate the virtual environment
   - Install all requirements

### Useful Commands

**Check PostgreSQL status:**
```bash
# Windows
sc query postgresql

# macOS
brew services list | grep postgresql

# Linux
sudo systemctl status postgresql
```

**Connect to database manually:**
```bash
psql -h localhost -U agriadvisor_user -d agriadvisor
```

**List all tables:**
```sql
\dt
```

**Check table structure:**
```sql
\d table_name
```

## Production Considerations

1. **Security:**
   - Use strong, unique passwords
   - Change default admin credentials
   - Use environment variables for sensitive data
   - Enable SSL for database connections

2. **Performance:**
   - Configure PostgreSQL for your workload
   - Set appropriate connection pool sizes
   - Monitor query performance

3. **Backup:**
   - Set up regular database backups
   - Test restore procedures
   - Document backup/restore processes

## Next Steps

After successful setup:
1. Explore the API endpoints at `/docs`
2. Test the authentication system
3. Try the AI chat features
4. Upload PDFs for RAG functionality
5. Monitor chat sessions and audit logs

## Support

If you encounter issues:
1. Check the error messages carefully
2. Verify all prerequisites are met
3. Check the troubleshooting section
4. Review the logs for detailed error information

---

**Happy coding! 🚀**
