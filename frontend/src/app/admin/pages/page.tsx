"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Page {
  slug: string;
  title: string;
  content: string;
}

export default function PageEditor() {
  const [pages, setPages] = useState<Page[]>([]);
  const [editing, setEditing] = useState<Page | null>(null);
  const [form, setForm] = useState<Page>({ slug: "", title: "", content: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) router.replace("/admin/login");
    fetchPages(token);
  }, [router]);

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 1200);
  };

  const fetchPages = async (token: string | null) => {
    setLoading(true);
    setError("");
    try {
      // For demo, use static slugs
      const slugs = ["home", "about", "product", "contact"];
      const results = await Promise.all(
        slugs.map(async slug => {
          const res = await fetch(`http://localhost:8000/api/admin/pages/${slug}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) return null;
          return await res.json();
        })
      );
      setPages(results.filter(Boolean));
    } catch (err: any) {
      setError("Failed to fetch pages");
      showToast("Failed to fetch pages", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (page: Page) => {
    setEditing(page);
    setForm(page);
    setSuccess("");
    setError("");
  };

  const handleDelete = async (slug: string) => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;
    if (!confirm("Delete this page?")) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/admin/pages/${slug}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Delete failed");
      setPages(pages.filter(p => p.slug !== slug));
      setSuccess("Page deleted");
      showToast("Page deleted", "success");
    } catch (err: any) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("admin_token");
    if (!token) return;
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const method = editing ? "PUT" : "POST";
      const url = editing
        ? `http://localhost:8000/api/admin/pages/${form.slug}`
        : `http://localhost:8000/api/admin/pages`;
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Save failed");
      const saved = await res.json();
      if (editing) {
        setPages(pages.map(p => (p.slug === saved.slug ? saved : p)));
        setSuccess("Page updated");
        showToast("Page updated", "success");
      } else {
        setPages([...pages, saved]);
        setSuccess("Page created");
        showToast("Page created", "success");
      }
      setEditing(null);
      setForm({ slug: "", title: "", content: "" });
    } catch (err: any) {
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {toast && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded shadow z-50 ${toast.type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
          {toast.msg}
        </div>
      )}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Page Editor</h1>
        {error && <div className="mb-2 text-red-500">{error}</div>}
        {success && <div className="mb-2 text-green-600">{success}</div>}
        <form onSubmit={handleFormSubmit} className="mb-6 space-y-2">
          <div>
            <label className="block font-medium">Slug</label>
            <input name="slug" value={form.slug} onChange={handleFormChange} className="w-full border px-2 py-1 rounded" required disabled={!!editing} />
          </div>
          <div>
            <label className="block font-medium">Title</label>
            <input name="title" value={form.title} onChange={handleFormChange} className="w-full border px-2 py-1 rounded" required />
          </div>
          <div>
            <label className="block font-medium">Content</label>
            <textarea name="content" value={form.content} onChange={handleFormChange} className="w-full border px-2 py-1 rounded" required rows={3} />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700" disabled={loading}>
            {editing ? "Update Page" : "Create Page"}
          </button>
          {editing && (
            <button type="button" className="ml-2 bg-gray-300 px-4 py-2 rounded" onClick={() => { setEditing(null); setForm({ slug: "", title: "", content: "" }); }}>Cancel</button>
          )}
        </form>
        <h2 className="text-xl font-semibold mb-2">Pages</h2>
        <ul>
          {pages.map(page => (
            <li key={page.slug} className="mb-2 border-b pb-2 flex justify-between items-center">
              <div>
                <span className="font-bold">{page.slug}</span>: {page.title}
              </div>
              <div className="space-x-2">
                <button className="text-blue-600" onClick={() => handleEdit(page)}>Edit</button>
                <button className="text-red-600" onClick={() => handleDelete(page.slug)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}