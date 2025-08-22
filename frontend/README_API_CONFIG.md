# API Configuration System

This document explains how to use the new centralized API configuration system that replaces hardcoded backend URLs.

## 🎯 Problem Solved

**Before:** Hardcoded `http://localhost:8000` in 15+ files
- ❌ Need to change URL in every file manually
- ❌ Easy to miss files when updating
- ❌ Maintenance nightmare
- ❌ Not production-ready

**After:** Centralized configuration in one place
- ✅ Change backend URL in one file
- ✅ All pages automatically updated
- ✅ Easy to maintain
- ✅ Production-ready

## 🚀 Quick Start

### 1. Environment Configuration

Copy the example environment file:
```bash
cp env.example .env.local
```

Edit `.env.local` to set your backend URL:
```env
# Development
NEXT_PUBLIC_API_URL=http://localhost:8000

# Production
# NEXT_PUBLIC_API_URL=https://your-production-server.com
```

### 2. Using API URLs in Components

Instead of hardcoded URLs:
```typescript
// ❌ OLD WAY (Don't do this)
fetch("http://localhost:8000/api/chat")

// ✅ NEW WAY
import { API_URLS } from "../../../config/api";
fetch(API_URLS.CHAT())
```

## 📁 File Structure

```
frontend/
├── src/
│   ├── config/
│   │   └── api.ts          # Central API configuration
│   └── app/
│       ├── chat/
│       ├── admin/
│       └── ...
├── .env.local              # Your environment variables
├── env.example             # Example environment file
└── scripts/
    └── update-api-urls.js  # Script to update existing files
```

## 🔧 Available API Endpoints

### Chat
- `API_URLS.CHAT()` - Send chat message
- `API_URLS.CHAT_HISTORY(sessionId)` - Get chat history

### Pages
- `API_URLS.PAGES(page, lang)` - Get page content

### Contact
- `API_URLS.CONTACT()` - Submit contact form

### Admin
- `API_URLS.ADMIN_LOGIN()` - Admin login
- `API_URLS.ADMIN_UPLOAD_PDF()` - Upload PDF
- `API_URLS.ADMIN_RAG_PDFS()` - Manage RAG PDFs
- `API_URLS.ADMIN_CHAT_SESSIONS()` - View chat sessions
- `API_URLS.ADMIN_CHAT_MESSAGES(sessionId)` - View chat messages
- `API_URLS.ADMIN_AUDIT_LOGS()` - View audit logs
- `API_URLS.ADMIN_PAGES(slug?)` - Manage pages

## 🔄 Updating Existing Files

### Option 1: Run the Update Script (Recommended)

```bash
cd frontend
node scripts/update-api-urls.js
```

This script will automatically update all existing files to use the new configuration.

### Option 2: Manual Update

1. Add import to each file:
   ```typescript
   import { API_URLS } from "../../../config/api";
   ```

2. Replace hardcoded URLs:
   ```typescript
   // From
   fetch("http://localhost:8000/api/chat")
   
   // To
   fetch(API_URLS.CHAT())
   ```

## 🌍 Environment Variables

### Development
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Staging
```env
NEXT_PUBLIC_API_URL=https://staging.yourapp.com
```

### Production
```env
NEXT_PUBLIC_API_URL=https://yourapp.com
```

## 🧪 Testing

After updating, test that all pages work:

1. **Chat page** - Send a message
2. **Admin pages** - Login and access admin features
3. **Contact page** - Submit contact form
4. **All other pages** - Check they load correctly

## 🚨 Troubleshooting

### Import Error
If you get "Cannot find module" error:
- Check the import path is correct
- Make sure `src/config/api.ts` exists
- Verify the file structure

### API Not Working
If API calls fail:
- Check `.env.local` has correct `NEXT_PUBLIC_API_URL`
- Verify backend server is running
- Check browser console for errors

### Build Errors
If build fails:
- Make sure all imports use correct paths
- Check that `API_URLS` is imported in all files
- Verify TypeScript types are correct

## 🔮 Future Enhancements

- Add API versioning support
- Add request/response interceptors
- Add retry logic for failed requests
- Add request caching
- Add API rate limiting

## 📞 Support

If you encounter issues:
1. Check this README first
2. Look at browser console for errors
3. Verify environment configuration
4. Check that all files are updated

---

**Remember:** Now you can change the backend URL in just one place! 🎉
