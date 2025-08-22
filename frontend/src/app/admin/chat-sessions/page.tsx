"use client";
import { API_URLS } from "@/config/api";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// @ts-ignore
import jsPDF from "jspdf";

interface Session {
  session_id: string;
  last_message_time: string;
  message_count: number;
}

interface Message {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
}

export default function AdminChatSessions() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) router.replace("/admin/login");
    fetch(API_URLS.ADMIN_CHAT_SESSIONS(), {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(setSessions)
      .catch(() => setError("Failed to fetch sessions"));
  }, [router]);

  const loadMessages = async (session_id: string) => {
    setSelected(session_id);
    setLoading(true);
    setError("");
    const token = localStorage.getItem("admin_token");
    try {
      const res = await fetch(API_URLS.ADMIN_CHAT_MESSAGES(session_id), {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      setMessages(await res.json());
    } catch {
      setError("Failed to fetch messages");
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async (session_id: string) => {
    const token = localStorage.getItem("admin_token");
    const res = await fetch(API_URLS.ADMIN_CHAT_MESSAGES(session_id), {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error();
    return await res.json();
  };

  const downloadChat = async (session_id: string) => {
    try {
      const msgs: Message[] = await fetchMessages(session_id);
      const text = msgs.map(m => `[${new Date(m.timestamp).toLocaleString()}] ${m.sender}: ${m.message}`).join("\n");
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `chat_${session_id}.txt`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    } catch {
      alert("Failed to download chat log");
    }
  };

  const downloadChatJson = async (session_id: string) => {
    try {
      const msgs: Message[] = await fetchMessages(session_id);
      const blob = new Blob([JSON.stringify(msgs, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `chat_${session_id}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    } catch {
      alert("Failed to download chat log as JSON");
    }
  };

  const downloadChatCsv = async (session_id: string) => {
    try {
      const msgs: Message[] = await fetchMessages(session_id);
      const csv = [
        "timestamp,sender,message",
        ...msgs.map(m => `"${new Date(m.timestamp).toLocaleString()}","${m.sender}","${m.message.replace(/"/g, '""')}"`)
      ].join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `chat_${session_id}.csv`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    } catch {
      alert("Failed to download chat log as CSV");
    }
  };

  const downloadChatPdf = async (session_id: string) => {
    try {
      const msgs: Message[] = await fetchMessages(session_id);
      const doc = new jsPDF();
      doc.setFontSize(12);
      let y = 10;
      msgs.forEach(m => {
        const line = `[${new Date(m.timestamp).toLocaleString()}] ${m.sender}: ${m.message}`;
        const lines = doc.splitTextToSize(line, 180);
        lines.forEach(l => {
          doc.text(l, 10, y);
          y += 7;
          if (y > 280) {
            doc.addPage();
            y = 10;
          }
        });
      });
      doc.save(`chat_${session_id}.pdf`);
    } catch {
      alert("Failed to download chat log as PDF");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Chat Sessions</h1>
      {error && <div className="mb-2 text-red-500">{error}</div>}
      <div className="flex gap-8">
        <div className="w-1/3">
          <h2 className="font-semibold mb-2">Sessions</h2>
          <ul className="bg-white rounded shadow divide-y">
            {sessions.map(s => (
              <li key={s.session_id} className="flex items-center justify-between gap-1">
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-green-50 ${selected === s.session_id ? "bg-green-100" : ""}`}
                  onClick={() => loadMessages(s.session_id)}
                >
                  <div className="font-mono text-xs truncate">{s.session_id}</div>
                  <div className="text-xs text-gray-500">{new Date(s.last_message_time).toLocaleString()}</div>
                  <div className="text-xs">{s.message_count} messages</div>
                </button>
                <div className="flex flex-col gap-1">
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700"
                    onClick={() => downloadChat(s.session_id)}
                    title="Download as TXT"
                  >TXT</button>
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => downloadChatJson(s.session_id)}
                    title="Download as JSON"
                  >JSON</button>
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-yellow-600 text-white rounded hover:bg-yellow-700"
                    onClick={() => downloadChatCsv(s.session_id)}
                    title="Download as CSV"
                  >CSV</button>
                  <button
                    className="ml-2 px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                    onClick={() => downloadChatPdf(s.session_id)}
                    title="Download as PDF"
                  >PDF</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="font-semibold mb-2">Messages</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="bg-white rounded shadow p-4 min-h-[200px]">
              {messages.length === 0 && <div className="text-gray-400">No messages</div>}
              {messages.map(m => (
                <div key={m.id} className={`mb-2 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`px-3 py-2 rounded ${m.sender === "user" ? "bg-green-100" : "bg-blue-100"}`}>
                    <div className="text-xs text-gray-500 mb-1">{m.sender} • {new Date(m.timestamp).toLocaleString()}</div>
                    {m.message}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}