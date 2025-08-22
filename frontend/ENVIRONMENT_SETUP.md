# Environment Configuration for Backend Services

This guide explains how to configure the frontend to connect to different backend services using environment variables.

## 🎯 What This Solves

**Before:** Hardcoded `http://localhost:8000` in every file
**After:** Configurable backend URL that can be changed per environment

## 📁 Environment Files

### 1. `.env.example` (Template)
```env
# Backend API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 2. `.env.local` (Your Local Development)
```env
# Copy from env.example and modify
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 3. `.env.development` (Development Environment)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. `.env.production` (Production Environment)
```env
NEXT_PUBLIC_API_URL=https://your-production-server.com
```

### 5. `.env.staging` (Staging Environment)
```env
NEXT_PUBLIC_API_URL=https://staging.yourapp.com
```

## 🚀 Quick Setup

### Step 1: Create Local Environment File
```bash
cd frontend
cp env.example .env.local
```

### Step 2: Edit .env.local
```env
# Change this to your backend server
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Step 3: Restart Development Server
```bash
npm run dev
# or
yarn dev
```

## 🌍 Environment-Specific Configurations

### Development (Local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_ENVIRONMENT=development
```

### Staging
```env
NEXT_PUBLIC_API_URL=https://staging-api.yourapp.com
NEXT_PUBLIC_ENVIRONMENT=staging
```

### Production
```env
NEXT_PUBLIC_API_URL=https://api.yourapp.com
NEXT_PUBLIC_ENVIRONMENT=production
```

### Custom Backend
```env
NEXT_PUBLIC_API_URL=http://192.168.1.100:8000
NEXT_PUBLIC_ENVIRONMENT=custom
```

## 🔧 How It Works

### 1. Environment Variable Priority
```typescript
// In src/config/api.ts
BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
```

**Priority Order:**
1. `.env.local` (highest priority)
2. `.env.development` / `.env.production`
3. `.env`
4. Default fallback: `http://localhost:8000`

### 2. Next.js Environment Variables
- **`NEXT_PUBLIC_*`** - Available in browser (client-side)
- **`NEXT_PUBLIC_API_URL`** - Backend API base URL
- **Other variables** - Server-side only

### 3. Automatic URL Building
```typescript
// Instead of hardcoded URLs
fetch("http://localhost:8000/api/chat")

// Use configuration
fetch(API_URLS.CHAT())
```

## 📝 Configuration Examples

### Local Development
```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Docker Development
```env
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Remote Development
```env
# .env.local
NEXT_PUBLIC_API_URL=http://192.168.1.100:8000
```

### Cloud Development
```env
# .env.local
NEXT_PUBLIC_API_URL=https://dev-api.yourapp.com
```

### Production
```env
# .env.production
NEXT_PUBLIC_API_URL=https://api.yourapp.com
```

## 🧪 Testing Configuration

### 1. Check Current Configuration
```typescript
// Add this to any component temporarily
console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
console.log('Full Chat URL:', API_URLS.CHAT());
```

### 2. Verify API Calls
- Open browser console
- Check network tab
- Verify requests go to correct URL

### 3. Test Different Environments
```bash
# Development
NEXT_PUBLIC_API_URL=http://localhost:8000 npm run dev

# Production build
NEXT_PUBLIC_API_URL=https://api.yourapp.com npm run build
```

## 🚨 Troubleshooting

### Environment Variable Not Working
1. **Check file name**: Must be `.env.local` (not `.env`)
2. **Restart server**: Environment changes require restart
3. **Check syntax**: No spaces around `=`
4. **Verify path**: File must be in `frontend/` directory

### API Calls Failing
1. **Check backend**: Is server running?
2. **Check URL**: Is `NEXT_PUBLIC_API_URL` correct?
3. **Check CORS**: Backend must allow frontend origin
4. **Check console**: Look for error messages

### Build Errors
1. **Check imports**: All files must import `API_URLS`
2. **Check paths**: Import paths must be correct
3. **Check types**: TypeScript errors must be fixed

## 🔄 Updating Backend URL

### Single Environment
```bash
# Edit .env.local
NEXT_PUBLIC_API_URL=http://new-backend:8000

# Restart development server
npm run dev
```

### All Environments
```bash
# Update all environment files
sed -i 's|http://localhost:8000|http://new-backend:8000|g' .env*

# Or manually update each file
```

### Production Deployment
```bash
# Set environment variable in deployment
export NEXT_PUBLIC_API_URL=https://api.yourapp.com

# Or use deployment platform's environment variables
```

## 📚 Best Practices

### 1. Never Commit .env.local
```gitignore
# .gitignore
.env.local
.env.*.local
```

### 2. Use Descriptive Names
```env
# Good
NEXT_PUBLIC_API_URL=https://api.yourapp.com

# Bad
NEXT_PUBLIC_URL=https://api.yourapp.com
```

### 3. Document Changes
```env
# .env.example
# Backend API URL - Update this when changing backend services
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Validate Configuration
```typescript
// Add validation in your config
if (!process.env.NEXT_PUBLIC_API_URL) {
  console.warn('NEXT_PUBLIC_API_URL not set, using default');
}
```

## 🎉 Benefits

✅ **Easy Configuration**: Change backend URL in one place
✅ **Environment Support**: Different URLs for dev/staging/prod
✅ **Team Collaboration**: Everyone can use their own backend
✅ **Production Ready**: Easy deployment to different environments
✅ **Maintainable**: No more hardcoded URLs scattered everywhere

---

**Remember:** Now you can easily switch between different backend services! 🚀
