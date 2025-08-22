// API Configuration
export const API_CONFIG = {
  // Backend base URL - change this in one place for all pages
  // Priority: .env.local > .env > default
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  
  // API endpoints
  ENDPOINTS: {
    // Chat
    CHAT: '/api/chat',
    CHAT_HISTORY: '/api/chat/history',
    
    // Pages
    PAGES: '/api/pages',
    
    // Contact
    CONTACT: '/api/contact',
    
    // Admin
    ADMIN_LOGIN: '/api/admin/login',
    ADMIN_UPLOAD_PDF: '/api/admin/upload-pdf',
    ADMIN_RAG_PDFS: '/api/admin/rag-pdfs',
    ADMIN_CHAT_SESSIONS: '/api/admin/chat-sessions',
    ADMIN_CHAT_MESSAGES: '/api/admin/chat-messages',
    ADMIN_AUDIT_LOGS: '/api/admin/audit-logs',
    ADMIN_PAGES: '/api/admin/pages',
  }
};

// Helper function to build full API URLs
export const buildApiUrl = (endpoint: string, params?: Record<string, string>): string => {
  let url = `${API_CONFIG.BASE_URL}${endpoint}`;
  
  if (params) {
    const queryParams = new URLSearchParams(params);
    url += `?${queryParams.toString()}`;
  }
  
  return url;
};

// Pre-built API URLs for common endpoints
export const API_URLS = {
  CHAT: () => buildApiUrl(API_CONFIG.ENDPOINTS.CHAT),
  CHAT_HISTORY: (sessionId: string) => buildApiUrl(API_CONFIG.ENDPOINTS.CHAT_HISTORY, { session_id: sessionId }),
  PAGES: (page: string, lang: string) => buildApiUrl(API_CONFIG.ENDPOINTS.PAGES, { lang }),
  CONTACT: () => buildApiUrl(API_CONFIG.ENDPOINTS.CONTACT),
  ADMIN_LOGIN: () => buildApiUrl(API_CONFIG.ENDPOINTS.ADMIN_LOGIN),
  ADMIN_UPLOAD_PDF: () => buildApiUrl(API_CONFIG.ENDPOINTS.ADMIN_UPLOAD_PDF),
  ADMIN_RAG_PDFS: () => buildApiUrl(API_CONFIG.ENDPOINTS.ADMIN_RAG_PDFS),
  ADMIN_CHAT_SESSIONS: () => buildApiUrl(API_CONFIG.ENDPOINTS.ADMIN_CHAT_SESSIONS),
  ADMIN_CHAT_MESSAGES: (sessionId: string) => buildApiUrl(`${API_CONFIG.ENDPOINTS.ADMIN_CHAT_MESSAGES}/${sessionId}`),
  ADMIN_AUDIT_LOGS: () => buildApiUrl(API_CONFIG.ENDPOINTS.ADMIN_AUDIT_LOGS),
  ADMIN_PAGES: (slug?: string) => slug ? buildApiUrl(`${API_CONFIG.ENDPOINTS.ADMIN_PAGES}/${slug}`) : buildApiUrl(API_CONFIG.ENDPOINTS.ADMIN_PAGES),
};
