"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuditLog {
  id: number;
  admin_username: string;
  action: string;
  target?: string;
  timestamp: string;
  details?: string;
}

export default function AuditLogViewer() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) router.replace("/admin/login");
    fetchLogs(token);
  }, [router]);

  const fetchLogs = async (token: string | null) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:8000/api/admin/audit-logs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch logs");
      setLogs(await res.json());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Audit Log Viewer</h1>
        {error && <div className="mb-2 text-red-500">{error}</div>}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Time</th>
                <th className="p-2 border">User</th>
                <th className="p-2 border">Action</th>
                <th className="p-2 border">Target</th>
                <th className="p-2 border">Details</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.id}>
                  <td className="p-2 border">{new Date(log.timestamp).toLocaleString()}</td>
                  <td className="p-2 border">{log.admin_username}</td>
                  <td className="p-2 border">{log.action}</td>
                  <td className="p-2 border">{log.target || "-"}</td>
                  <td className="p-2 border">{log.details || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}