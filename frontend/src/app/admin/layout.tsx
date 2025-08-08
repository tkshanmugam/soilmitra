"use client";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin/login");
  };
  return (
    <>
      <header className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-lg">SoilMitra Admin</span>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded font-semibold">Logout</button>
      </header>
      <main className="min-h-screen bg-gray-50">{children}</main>
    </>
  );
}