# PDF Upload for RAG-Based Chat

This feature allows administrators to upload PDF files that will be used for Retrieval-Augmented Generation (RAG) in the chat system.

## Features

- **Secure Upload**: Only authenticated admins can upload PDFs
- **File Validation**: Only PDF files are accepted
- **Unique Naming**: Files are saved with timestamps to prevent conflicts
- **Audit Logging**: All uploads are logged in the admin audit system
- **Error Handling**: Proper error handling and cleanup

## API Endpoint

### POST `/api/admin/upload-pdf`

**Authentication Required**: Bearer token (admin login required)

**Request**:
- Content-Type: `multipart/form-data`
- Body: PDF file with field name `pdf`

**Response**:
```json
{
  "message": "PDF uploaded successfully",
  "filename": "rag_pdf_20241201_143022_document.pdf",
  "file_path": "uploads/rag_pdf_20241201_143022_document.pdf"
}
```

**Error Responses**:
- `400`: Invalid file type (non-PDF)
- `401`: Unauthorized (invalid/missing token)
- `500`: Server error during upload

## File Storage

- Files are stored in the `uploads/` directory
- Filename format: `rag_pdf_YYYYMMDD_HHMMSS_originalname.pdf`
- The uploads directory is created automatically if it doesn't exist

## Frontend Integration

The upload page is available at `/admin/upload-pdf` and includes:
- File selection with PDF validation
- Upload progress indication
- Success/error messaging
- Authentication checks

## Next Steps for RAG Implementation

To complete the RAG-based chat feature, you'll need to:

1. **PDF Processing**: Extract text from uploaded PDFs
2. **Vector Database**: Store PDF content as embeddings
3. **Search Integration**: Implement semantic search for relevant content
4. **Chat Enhancement**: Modify chat endpoint to include RAG context

## Security Considerations

- Only PDF files are accepted
- Files are stored with unique names to prevent conflicts
- Admin authentication is required for all uploads
- All actions are logged in the audit system 