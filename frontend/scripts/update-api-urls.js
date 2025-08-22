#!/usr/bin/env node

/**
 * Script to update all hardcoded API URLs to use the new configuration system
 * Run this script from the frontend directory
 */

const fs = require('fs');
const path = require('path');

// Files that need to be updated
const filesToUpdate = [
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/page.tsx',
  'src/app/admin/audit-logs/page.tsx',
  'src/app/admin/chat-sessions/page.tsx',
  'src/app/admin/manage-pdfs/page.tsx',
  'src/app/admin/pages/page.tsx',
  'src/app/admin/login/page.tsx',
  'src/app/product/page.tsx',
];

// Import statements to add
const importStatement = "import { API_URLS } from \"../../../config/api\";\n";

// URL replacements
const replacements = [
  {
    from: 'fetch(`http://localhost:8000/api/pages/about?lang=${locale}`)',
    to: 'fetch(API_URLS.PAGES("about", locale))'
  },
  {
    from: 'fetch(`http://localhost:8000/api/pages/contact?lang=en`)',
    to: 'fetch(API_URLS.PAGES("contact", "en"))'
  },
  {
    from: 'fetch(`http://localhost:8000/api/contact`, {',
    to: 'fetch(API_URLS.CONTACT(), {'
  },
  {
    from: 'fetch(`http://localhost:8000/api/pages/home?lang=${locale}`)',
    to: 'fetch(API_URLS.PAGES("home", locale))'
  },
  {
    from: 'fetch("http://localhost:8000/api/admin/audit-logs", {',
    to: 'fetch(API_URLS.ADMIN_AUDIT_LOGS(), {'
  },
  {
    from: 'fetch("http://localhost:8000/api/admin/chat-sessions", {',
    to: 'fetch(API_URLS.ADMIN_CHAT_SESSIONS(), {'
  },
  {
    from: 'fetch(`http://localhost:8000/api/admin/chat-messages/${session_id}`, {',
    to: 'fetch(API_URLS.ADMIN_CHAT_MESSAGES(session_id), {'
  },
  {
    from: 'fetch("http://localhost:8000/api/admin/rag-pdfs", {',
    to: 'fetch(API_URLS.ADMIN_RAG_PDFS(), {'
  },
  {
    from: 'fetch(`http://localhost:8000/api/admin/rag-pdfs/${encodeURIComponent(filename)}`, {',
    to: 'fetch(API_URLS.ADMIN_RAG_PDFS() + `/${encodeURIComponent(filename)}`, {'
  },
  {
    from: 'fetch(`http://localhost:8000/api/admin/pages/${slug}`, {',
    to: 'fetch(API_URLS.ADMIN_PAGES(slug), {'
  },
  {
    from: 'fetch("http://localhost:8000/api/admin/login", {',
    to: 'fetch(API_URLS.ADMIN_LOGIN(), {'
  },
  {
    from: 'fetch(`http://localhost:8000/api/pages/product?lang=${locale}`)',
    to: 'fetch(API_URLS.PAGES("product", locale))'
  }
];

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Add import statement if not present
    if (!content.includes('import { API_URLS }')) {
      const lines = content.split('\n');
      const importIndex = lines.findIndex(line => line.startsWith('import'));
      if (importIndex !== -1) {
        lines.splice(importIndex, 0, importStatement);
        content = lines.join('\n');
        updated = true;
      }
    }
    
    // Replace URLs
    replacements.forEach(replacement => {
      if (content.includes(replacement.from)) {
        content = content.replace(replacement.from, replacement.to);
        updated = true;
      }
    });
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

console.log('🚀 Starting API URL updates...\n');

filesToUpdate.forEach(file => {
  updateFile(file);
});

console.log('\n🎉 API URL update complete!');
console.log('\n📝 Next steps:');
console.log('1. Copy env.example to .env.local');
console.log('2. Update NEXT_PUBLIC_API_URL in .env.local if needed');
console.log('3. Test that all pages work correctly');
console.log('\n💡 Now you can change the backend URL in just one place!');
