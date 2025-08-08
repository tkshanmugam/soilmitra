"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface PDFInfo {
  pdfs: string[];
  count: number;
}

export default function ManagePDFsPage() {
  const [pdfs, setPdfs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const router = useRouter();

  // Get admin token from localStorage
  const getAdminToken = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("admin_token");
    }
    return null;
  };

  // Check authentication on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        router.replace("/admin/login");
      }
    }
  }, [router]);

  // Load PDFs
  useEffect(() => {
    loadPDFs();
  }, []);

  const loadPDFs = async () => {
    try {
      const token = getAdminToken();
      if (!token) return;

      const res = await fetch("http://localhost:8000/api/admin/rag-pdfs", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (res.ok) {
        const data: PDFInfo = await res.json();
        setPdfs(data.pdfs);
      }
    } catch (err) {
      setMessage("Failed to load PDFs");
    } finally {
      setLoading(false);
    }
  };

  const deletePDF = async (filename: string) => {
    try {
      setDeleting(filename);
      const token = getAdminToken();
      if (!token) return;

      const res = await fetch(`http://localhost:8000/api/admin/rag-pdfs/${encodeURIComponent(filename)}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (res.ok) {
        setMessage("PDF removed successfully");
        loadPDFs(); // Reload the list
      } else {
        setMessage("Failed to remove PDF");
      }
    } catch (err) {
      setMessage("Failed to remove PDF");
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Manage RAG PDFs</h1>
            <a 
              href="/admin/upload-pdf" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Upload New PDF
            </a>
          </div>

          {message && (
            <div className="mb-4 p-4 rounded-lg bg-blue-100 text-blue-700 border border-blue-200">
              {message}
            </div>
          )}

          {pdfs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No PDFs uploaded</h3>
              <p className="text-gray-500">Upload PDFs to enable RAG-based chat responses</p>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Uploaded PDFs ({pdfs.length})
              </h2>
              {pdfs.map((pdf, index) => (
                <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600">📄</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{pdf}</p>
                      <p className="text-sm text-gray-500">Available for RAG chat</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deletePDF(pdf)}
                    disabled={deleting === pdf}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold disabled:opacity-50"
                  >
                    {deleting === pdf ? "Removing..." : "Remove"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 