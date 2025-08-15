# RAG (Retrieval-Augmented Generation) Implementation

This document describes the complete RAG system implementation for the SoilMitra chat application.

## Overview

The RAG system allows the chat to provide more accurate and context-aware responses by referencing uploaded PDF documents. When users ask questions, the system searches through uploaded PDFs for relevant information and includes it in the AI's response.

## Features

### ✅ **Complete RAG Pipeline**
- PDF text extraction using PyPDF2
- Text chunking with LangChain
- Embedding generation using OpenAI
- Vector search using FAISS
- Context injection into chat responses

### ✅ **Admin Management**
- Upload PDFs through admin panel
- View all uploaded PDFs
- Remove PDFs from RAG system
- Processing status feedback

### ✅ **Smart Chat Integration**
- Automatic context retrieval for user questions
- Agriculture-focused responses with PDF references
- Source citation in responses
- Fallback to general knowledge when no PDF context is available

## Architecture

### Backend Components

1. **RAG Service** (`rag_service.py`)
   - PDF text extraction
   - Text chunking and embedding
   - Vector search and retrieval
   - Persistent storage of embeddings

2. **Admin Routes** (`routes/admin.py`)
   - PDF upload with RAG processing
   - PDF management (list, delete)
   - Audit logging

3. **Chat Routes** (`routes/chat.py`)
   - Enhanced chat with RAG context
   - Agriculture-focused responses
   - PDF reference integration

### Frontend Components

1. **Upload Page** (`/admin/upload-pdf`)
   - PDF file upload
   - Processing status display
   - Success/error feedback

2. **Management Page** (`/admin/manage-pdfs`)
   - List uploaded PDFs
   - Remove PDFs
   - Navigation to upload

## API Endpoints

### PDF Management
- `POST /api/admin/upload-pdf` - Upload and process PDF for RAG
- `GET /api/admin/rag-pdfs` - List all processed PDFs
- `DELETE /api/admin/rag-pdfs/{filename}` - Remove PDF from RAG system

### Enhanced Chat
- `POST /api/chat/` - Chat with RAG context (existing endpoint, now enhanced)

## How It Works

### 1. PDF Upload Process
```
User uploads PDF → Text extraction → Chunking → Embedding → FAISS index → Save to disk
```

### 2. Chat with RAG
```
User question → Query embedding → FAISS search → Retrieve relevant chunks → Inject context → AI response
```

### 3. Response Generation
The AI receives:
- System prompt (agriculture-focused)
- Relevant PDF context (if available)
- User question
- Generates response citing sources when applicable

## File Storage

- **PDFs**: `uploads/` directory
- **Embeddings**: `rag_embeddings.pkl`
- **FAISS Index**: `rag_index.faiss`

## Dependencies

### New Dependencies Added
```
PyPDF2          # PDF text extraction
langchain       # Text processing and chunking
langchain-openai # OpenAI embeddings
faiss-cpu       # Vector similarity search
numpy           # Numerical operations
```

## Usage Examples

### Admin Workflow
1. Log in to admin panel
2. Go to "Upload PDF for RAG"
3. Select agriculture-related PDF
4. Upload and wait for processing
5. PDF is now available for chat queries

### Chat Workflow
1. User asks: "What's the best fertilizer for tomatoes?"
2. System searches uploaded PDFs for tomato/fertilizer content
3. Relevant PDF excerpts are included in AI context
4. AI responds with specific information from PDFs + general knowledge
5. Response cites source documents when applicable

## Example Chat Responses

**With PDF Context:**
```
Based on the uploaded documents, here's information about tomato fertilization:

From organic_farming_guide.pdf:
"Tomatoes benefit from nitrogen-rich organic fertilizers like fish emulsion or compost tea. Apply 1-2 tablespoons per gallon of water every 2 weeks during growing season."

Additionally, consider using bone meal for phosphorus and kelp meal for potassium. This combination provides balanced nutrition for healthy tomato growth.
```

**Without PDF Context:**
```
For tomatoes, I recommend organic fertilizers like:
- Compost (general nutrition)
- Fish emulsion (nitrogen)
- Bone meal (phosphorus)
- Kelp meal (potassium)

Apply every 2-3 weeks during the growing season for best results.
```

## Security & Performance

- **Authentication**: All admin endpoints require authentication
- **File Validation**: Only PDF files accepted
- **Error Handling**: Comprehensive error handling and cleanup
- **Persistence**: Embeddings saved to disk for fast loading
- **Scalability**: FAISS index for efficient similarity search

## Future Enhancements

1. **Multi-language Support**: Process PDFs in different languages
2. **Document Types**: Support for Word docs, text files
3. **Advanced Search**: Semantic search with filters
4. **User Feedback**: Rate response quality
5. **Analytics**: Track which PDFs are most useful

## Troubleshooting

### Common Issues
1. **PDF Processing Fails**: Check if PDF is text-based (not scanned images)
2. **No Context Found**: Ensure PDFs contain relevant agriculture content
3. **Memory Issues**: Large PDFs may require more RAM
4. **API Limits**: Monitor OpenAI API usage for embeddings

### Debug Commands
```python
# Check loaded documents
from rag_service import rag_service
print(rag_service.list_uploaded_pdfs())

# Test search
results = rag_service.search_relevant_content("tomato fertilizer")
print(results)
``` 