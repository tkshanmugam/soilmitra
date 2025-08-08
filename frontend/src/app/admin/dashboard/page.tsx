"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");
      if (!token) router.replace("/admin/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="space-y-4">
          <a href="/admin/pages" className="block bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700">Page Editor</a>
          <a href="/admin/upload-pdf" className="block bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700">Upload PDF for RAG</a>
          <a href="/admin/manage-pdfs" className="block bg-orange-600 text-white py-2 rounded font-semibold hover:bg-orange-700">Manage RAG PDFs</a>
          <a href="/admin/chat-sessions" className="block bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700">Chat Sessions</a>
          <a href="/admin/messages" className="block bg-teal-600 text-white py-2 rounded font-semibold hover:bg-teal-700">All Chat Messages</a>
          <a href="/admin/audit-logs" className="block bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700">Audit Log Viewer</a>
        </div>
      </div>
    </div>
  );
}