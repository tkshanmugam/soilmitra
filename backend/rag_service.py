import os
import PyPDF2
from pathlib import Path
import numpy as np
import pickle
from typing import List, Dict, Optional
import openai
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings
import faiss

class RAGService:
    def __init__(self):
        self.embeddings_model = OpenAIEmbeddings(api_key=os.getenv("OPENAI_API_KEY"))
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len,
        )
        self.index = None
        self.documents = []
        self.embeddings_file = "rag_embeddings.pkl"
        self.index_file = "rag_index.faiss"
        self.load_existing_embeddings()
    
    def load_existing_embeddings(self):
        """Load existing embeddings and index if they exist"""
        try:
            if os.path.exists(self.embeddings_file) and os.path.exists(self.index_file):
                with open(self.embeddings_file, 'rb') as f:
                    self.documents = pickle.load(f)
                
                self.index = faiss.read_index(self.index_file)
                print(f"Loaded {len(self.documents)} existing documents")
        except Exception as e:
            print(f"Error loading existing embeddings: {e}")
            self.documents = []
            self.index = None
    
    def save_embeddings(self):
        """Save embeddings and index to disk"""
        try:
            with open(self.embeddings_file, 'wb') as f:
                pickle.dump(self.documents, f)
            
            if self.index is not None:
                faiss.write_index(self.index, self.index_file)
            print("Embeddings saved successfully")
        except Exception as e:
            print(f"Error saving embeddings: {e}")
    
    def extract_text_from_pdf(self, pdf_path: str) -> str:
        """Extract text from a PDF file"""
        try:
            with open(pdf_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                text = ""
                for page in pdf_reader.pages:
                    text += page.extract_text() + "\n"
                return text
        except Exception as e:
            print(f"Error extracting text from PDF: {e}")
            return ""
    
    def process_pdf(self, pdf_path: str, filename: str) -> bool:
        """Process a PDF file and add it to the RAG system"""
        try:
            # Extract text from PDF
            text = self.extract_text_from_pdf(pdf_path)
            if not text.strip():
                print(f"No text extracted from {filename}")
                return False
            
            # Split text into chunks
            chunks = self.text_splitter.split_text(text)
            
            # Create embeddings for chunks
            chunk_embeddings = self.embeddings_model.embed_documents(chunks)
            
            # Add to documents list
            for i, chunk in enumerate(chunks):
                self.documents.append({
                    'content': chunk,
                    'source': filename,
                    'chunk_id': i
                })
            
            # Update FAISS index
            if self.index is None:
                # Create new index
                dimension = len(chunk_embeddings[0])
                self.index = faiss.IndexFlatL2(dimension)
            
            # Add embeddings to index
            embeddings_array = np.array(chunk_embeddings).astype('float32')
            self.index.add(embeddings_array)
            
            # Save updated embeddings
            self.save_embeddings()
            
            print(f"Successfully processed {filename}: {len(chunks)} chunks added")
            return True
            
        except Exception as e:
            print(f"Error processing PDF {filename}: {e}")
            return False
    
    def search_relevant_content(self, query: str, top_k: int = 3) -> List[Dict]:
        """Search for relevant content based on user query"""
        try:
            if self.index is None or len(self.documents) == 0:
                return []
            
            # Create query embedding
            query_embedding = self.embeddings_model.embed_query(query)
            query_array = np.array([query_embedding]).astype('float32')
            
            # Search in FAISS index
            distances, indices = self.index.search(query_array, min(top_k, len(self.documents)))
            
            # Return relevant documents
            relevant_docs = []
            for idx in indices[0]:
                if idx < len(self.documents):
                    relevant_docs.append(self.documents[idx])
            
            return relevant_docs
            
        except Exception as e:
            print(f"Error searching content: {e}")
            return []
    
    def get_rag_context(self, query: str) -> str:
        """Get relevant context from PDFs for a query"""
        relevant_docs = self.search_relevant_content(query)
        
        if not relevant_docs:
            return ""
        
        # Filter out product lists and unwanted content
        filtered_docs = []
        for doc in relevant_docs:
            content = doc['content'].strip()
            
            # Skip if content looks like a product list or catalog
            if self._is_product_list(content):
                continue
                
            # Skip if content is too short or generic
            if len(content) < 50:
                continue
                
            filtered_docs.append(doc)
        
        if not filtered_docs:
            return ""
        
        context = "Based on the uploaded documents, here is relevant information:\n\n"
        for i, doc in enumerate(filtered_docs, 1):
            # Clean up the content by removing extra whitespace and formatting
            cleaned_content = doc['content'].strip()
            # Replace multiple newlines with single newlines
            cleaned_content = '\n'.join(line.strip() for line in cleaned_content.split('\n') if line.strip())
            context += f"{i}. From {doc['source']}:\n{cleaned_content}\n\n"
        
        return context
    
    def _is_product_list(self, content: str) -> bool:
        """Check if content appears to be a product list or catalog"""
        content_lower = content.lower()
        
        # Keywords that indicate product lists
        product_keywords = [
            "product list", "available products", "catalog", "price list",
            "here is the list", "following products", "products available",
            "rag_pdf_", "product name", "product code", "sku", "item number"
        ]
        
        # Check for product list indicators
        for keyword in product_keywords:
            if keyword in content_lower:
                return True
        
        # Check for repetitive patterns that look like product lists
        lines = content.split('\n')
        if len(lines) > 5:
            # Count lines that start with common product list patterns
            product_patterns = 0
            for line in lines:
                line = line.strip()
                if (line.startswith('*') or 
                    line.startswith('-') or 
                    line.startswith('•') or
                    line.startswith('1.') or
                    line.startswith('2.') or
                    line.startswith('3.') or
                    '₹' in line or
                    '$' in line or
                    'price' in line.lower()):
                    product_patterns += 1
            
            # If more than 60% of lines look like product list items
            if product_patterns / len(lines) > 0.6:
                return True
        
        return False
    
    def list_uploaded_pdfs(self) -> List[str]:
        """List all PDFs that have been processed"""
        sources = set()
        for doc in self.documents:
            sources.add(doc['source'])
        return list(sources)
    
    def remove_pdf(self, filename: str) -> bool:
        """Remove a PDF and its chunks from the RAG system"""
        try:
            # Find documents to remove
            docs_to_remove = [i for i, doc in enumerate(self.documents) if doc['source'] == filename]
            
            if not docs_to_remove:
                print(f"PDF {filename} not found in RAG system")
                return False
            
            # Remove from documents list
            for i in reversed(docs_to_remove):
                del self.documents[i]
            
            # Rebuild index
            if self.documents:
                all_embeddings = []
                for doc in self.documents:
                    embedding = self.embeddings_model.embed_query(doc['content'])
                    all_embeddings.append(embedding)
                
                embeddings_array = np.array(all_embeddings).astype('float32')
                dimension = len(all_embeddings[0])
                self.index = faiss.IndexFlatL2(dimension)
                self.index.add(embeddings_array)
            else:
                self.index = None
            
            # Save updated embeddings
            self.save_embeddings()
            
            print(f"Successfully removed {filename} from RAG system")
            return True
            
        except Exception as e:
            print(f"Error removing PDF {filename}: {e}")
            return False

# Global RAG service instance
rag_service = RAGService() 