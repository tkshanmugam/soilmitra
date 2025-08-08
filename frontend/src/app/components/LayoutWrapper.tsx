"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from "../../contexts/LanguageContext";
import LanguageAttribute from "./LanguageAttribute";
import PageTransition from "./PageTransition";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <LanguageProvider>
      <LanguageAttribute />
      {!isAdminRoute && <Header />}
      <main className="flex-1 overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      {!isAdminRoute && <Footer />}
    </LanguageProvider>
  );
} 