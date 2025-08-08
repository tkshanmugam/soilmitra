"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const nav = [
    { href: "/", label: t("navigation.home"), icon: "🏠" },
    { href: "/about", label: t("navigation.about"), icon: "ℹ️" },
    { href: "/product", label: t("navigation.products"), icon: "🌿" },
    { href: "/chat", label: t("navigation.chat"), icon: "💬" },
    { href: "/community", label: t("navigation.community"), icon: "👥" },
    { href: "/contact", label: t("navigation.contact"), icon: "📧" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
         <header className={`sticky top-0 z-50 transition-all duration-500 ${
       scrolled 
         ? 'bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-100/95 backdrop-blur-xl border-b border-emerald-200/50 shadow-lg' 
         : 'bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-100/90 backdrop-blur-md border-b border-emerald-200/30 shadow-sm'
     }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-all duration-300 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-emerald-400 to-green-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <span className="text-2xl relative z-10">🌱</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-gray-900 tracking-tight bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                SoilMitra
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">AI Farming Assistant</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
                     <nav className="hidden lg:flex items-center space-x-3">
            {nav.map(({ href, label, icon }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Link
                  href={href}
                                     className={`relative px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group hover-lift ${
                     pathname === href 
                       ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg transform scale-105" 
                       : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                   }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{icon}</span>
                    <span>{label}</span>
                  </span>
                                     {pathname === href && (
                     <motion.div 
                       className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full z-10"
                       animate={{ scale: [1, 1.2, 1] }}
                       transition={{ duration: 2, repeat: Infinity }}
                     />
                   )}
                                     <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Enhanced Language Switcher and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Language Switcher */}
            <div className="hidden sm:block">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-1 shadow-sm">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Premium CTA Button */}
            <Link 
              href="/chat" 
              className="hidden md:flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group whitespace-nowrap"
            >
              <span className="text-lg">🚀</span>
              <span className="text-sm">Start Chat</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </Link>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
                  open ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
                  open ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

                 {/* Enhanced Mobile Navigation */}
         {open && (
           <div className="lg:hidden border-t border-emerald-200/50 bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-100/95 backdrop-blur-xl animate-slideDown">
             <div className="px-4 py-6 space-y-3">
               {/* Mobile Language Switcher */}
               <div className="mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-200/50">
                <LanguageSwitcher />
              </div>
              
              {/* Mobile Navigation Links */}
              {nav.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    pathname === href 
                      ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg" 
                      : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                  {pathname === href && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Link 
                href="/chat" 
                className="flex items-center justify-center gap-2 px-4 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-lg mt-4"
                onClick={() => setOpen(false)}
              >
                <span className="text-lg">🚀</span>
                <span>Start Chat Now</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}