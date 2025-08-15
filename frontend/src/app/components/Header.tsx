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
  const [productOpen, setProductOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const nav = [
    { href: "/", label: mounted ? t("navigation.home") : "Home", icon: "🏠" },
    { href: "/about", label: mounted ? t("navigation.about") : "About Us", icon: "ℹ️" },
    { href: "/product", label: mounted ? t("navigation.products") : "Products", icon: "🛍️" },
    { href: "/community", label: mounted ? t("navigation.community") : "Community", icon: "👥" },
    { href: "/chat", label: mounted ? t("navigation.chat") : "Chats", icon: "💬" },
    { href: "/contact", label: mounted ? t("navigation.contact") : "Contact", icon: "📧" },
  ];

  const productSubPages = [
    { href: "/product", label: "Organic Fertilizer", icon: "🌱" },
    { href: "/seeds", label: "Native Seeds", icon: "🌿" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
    setProductOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (open && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setOpen(false);
      }
      if (productOpen && !target.closest('.product-dropdown')) {
        setProductOpen(false);
      }
    };

    if (open || productOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, productOpen]);

  const isProductActive = pathname.startsWith('/products') || pathname.startsWith('/seeds');

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-500/95 via-emerald-500/95 to-teal-500/95 backdrop-blur-sm border-b border-green-400/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-all duration-500 group-hover:scale-110">
                <span className="text-2xl filter drop-shadow-sm">🌱</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">Soil</span>
                  <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Mitra</span>
                </h1>
                <p className="text-sm font-medium bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent tracking-wide -mt-1">{mounted ? t("common.aiFarmingAssistant") : "AI Farming Assistant"}</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
              <div className="px-3 py-2 rounded-lg font-medium text-white">🏠 {mounted ? t("navigation.home") : "Home"}</div>
              <div className="px-3 py-2 rounded-lg font-medium text-white">💬 {mounted ? t("navigation.chat") : "Chats"}</div>
              <div className="px-3 py-2 rounded-lg font-medium text-white">ℹ️ {mounted ? t("navigation.about") : "About Us"}</div>
              <div className="px-3 py-2 rounded-lg font-medium text-white">🛍️ {mounted ? t("navigation.products") : "Products"}</div>
              <div className="px-3 py-2 rounded-lg font-medium text-white">👥 {mounted ? t("navigation.community") : "Community"}</div>
              <div className="px-3 py-2 rounded-lg font-medium text-white">📧 {mounted ? t("navigation.contact") : "Contact"}</div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-500/95 via-emerald-500/95 to-teal-500/95 backdrop-blur-sm border-b border-green-400/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Nature Wave Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-5 left-0 w-full h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
          animate={{ 
            x: [0, 50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -top-3 right-0 w-full h-12 bg-gradient-to-l from-teal-400/20 to-green-400/20 rounded-full blur-xl"
          animate={{ 
            x: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.1 
            }}
          >
            <Link href="/" className="flex items-center space-x-4 group">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05, rotate: -5 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10 
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-xl group-hover:shadow-green-500/40 transition-all duration-500 group-hover:scale-110">
                  <span className="text-2xl filter drop-shadow-sm">🌱</span>
                </div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-400/50"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
              <motion.div 
                className="flex flex-col"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.h1 
                  className="text-2xl font-bold"
                  whileHover={{ 
                    textShadow: "0 0 20px rgba(251, 191, 36, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">Soil</span>
                  <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">Mitra</span>
                </motion.h1>
                <motion.p 
                  className="text-sm font-medium bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent tracking-wide -mt-1"
                  whileHover={{ 
                    textShadow: "0 0 15px rgba(148, 163, 184, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {mounted ? t("common.aiFarmingAssistant") : "AI Farming Assistant"}
                </motion.p>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Made more prominent */}
          <motion.nav 
            className="hidden lg:flex items-center space-x-1 bg-green-100/20 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-green-300/30"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20, 
              delay: 0.2 
            }}
          >
            {/* Home */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.3 
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                href="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:text-green-400 hover:bg-white/20 hover:shadow-sm ${
                  pathname === "/" 
                    ? "text-green-400 bg-white/20 shadow-sm border border-white/30" 
                    : ""
                }`}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  🏠
                </motion.span>
                <span className="font-semibold">{t("navigation.home")}</span>
                {pathname === "/" && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                )}
              </Link>
            </motion.div>

            {/* Chat */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.4 
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                href="/chat"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:text-green-400 hover:bg-white/20 hover:shadow-sm ${
                  pathname === "/chat" 
                    ? "text-green-400 bg-white/20 shadow-sm border border-white/30" 
                    : ""
                }`}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  💬
                </motion.span>
                <span className="font-semibold">{t("navigation.chat")}</span>
                {pathname === "/chat" && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                )}
              </Link>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.5 
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                href="/about"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:text-green-400 hover:bg-white/20 hover:shadow-sm ${
                  pathname === "/about" 
                    ? "text-green-400 bg-white/20 shadow-sm border border-white/30" 
                    : ""
                }`}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  ℹ️
                </motion.span>
                <span className="font-semibold">{t("navigation.about")}</span>
                {pathname === "/about" && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                )}
              </Link>
            </motion.div>

            {/* Product Dropdown Menu */}
            <motion.div
              className="relative product-dropdown"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.6 
              }}
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <motion.button
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:text-green-400 hover:bg-white/20 hover:shadow-sm ${
                  isProductActive 
                    ? "text-green-400 bg-white/20 shadow-sm border border-white/30" 
                    : ""
                }`}
                whileHover={{ y: -2 }}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  🛍️
                </motion.span>
                <span className="font-semibold">Products</span>
                <motion.span 
                  className="text-sm transition-transform duration-200"
                  animate={{ rotate: productOpen ? 180 : 0 }}
                >
                  ▼
                </motion.span>
                {isProductActive && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                )}
              </motion.button>

              {/* Product Dropdown Content */}
              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 25 
                    }}
                  >
                    {productSubPages.map(({ href, label, icon }, index) => (
                      <motion.div
                        key={href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 25, 
                          delay: index * 0.05 
                        }}
                      >
                        <Link
                          href={href}
                          className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg font-medium transition-all duration-200 hover:bg-green-50 hover:text-green-600 ${
                            pathname === href 
                              ? "bg-green-50 text-green-600" 
                              : "text-gray-700"
                          }`}
                          onClick={() => setProductOpen(false)}
                        >
                          <span className="text-lg">{icon}</span>
                          <span className="text-sm">{label}</span>
                          {pathname === href && (
                            <motion.div 
                              className="ml-auto w-2 h-2 bg-green-500 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.7 
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                href="/community"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:text-green-600 hover:bg-white hover:shadow-sm ${
                  pathname === "/community" 
                    ? "text-green-600 bg-white shadow-sm border border-green-200" 
                    : ""
                }`}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  👥
                </motion.span>
                <span className="font-semibold">{t("navigation.community")}</span>
                {pathname === "/community" && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                )}
              </Link>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                delay: 0.8 
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                href="/contact"
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:text-green-600 hover:bg-white hover:shadow-sm ${
                  pathname === "/contact" 
                    ? "text-green-600 bg-white shadow-sm border border-green-200" 
                    : ""
                }`}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  📧
                </motion.span>
                <span className="font-semibold">{t("navigation.contact")}</span>
                {pathname === "/contact" && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                )}
              </Link>
            </motion.div>
          </motion.nav>

          {/* Right Section */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 0.4 
            }}
          >
            {/* Language Switcher */}
            <motion.div 
              className="hidden sm:block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <LanguageSwitcher />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="mobile-menu-button lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span 
                  className={`w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 ${
                    open ? 'rotate-45 translate-y-1' : ''
                  }`}
                  animate={{ 
                    rotate: open ? 45 : 0, 
                    y: open ? 8 : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.span 
                  className={`w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 mt-1 ${
                    open ? 'opacity-0' : ''
                  }`}
                  animate={{ opacity: open ? 0 : 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.span 
                  className={`w-5 h-0.5 bg-gray-600 rounded-full transition-all duration-300 mt-1 ${
                    open ? '-rotate-45 -translate-y-1' : ''
                  }`}
                  animate={{ 
                    rotate: open ? -45 : 0, 
                    y: open ? -8 : 0 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div 
              className="mobile-menu lg:hidden border-t border-green-200 bg-green-50/95 backdrop-blur-sm"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20, 
                duration: 0.4 
              }}
            >
              <motion.div 
                className="py-6 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Mobile Language Switcher */}
                <motion.div 
                  className="pb-4 border-b border-green-100"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <LanguageSwitcher />
                </motion.div>
                
                {/* Mobile Navigation Links */}
                {nav.map(({ href, label, icon }, index) => (
                  <motion.div
                    key={href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 20, 
                      delay: 0.3 + index * 0.1 
                    }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        pathname === href 
                          ? "text-green-600 bg-green-50 border border-green-200" 
                          : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <motion.span 
                        className="text-lg"
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {icon}
                      </motion.span>
                      <span>{label}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Product Section */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20, 
                    delay: 1.1 
                  }}
                >
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center space-x-3 px-4 py-3 rounded-lg font-medium text-green-600 bg-green-50 border border-green-200">
                      <span className="text-lg">🛍️</span>
                      <span>Products</span>
                    </div>
                    
                    {/* Product Sub-pages */}
                    <div className="mt-3 space-y-2 pl-8">
                      {productSubPages.map(({ href, label, icon }, index) => (
                        <motion.div
                          key={href}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 100, 
                            damping: 20, 
                            delay: 1.2 + index * 0.05 
                          }}
                        >
                          <Link
                            href={href}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                              pathname === href 
                                ? "text-green-600 bg-green-50 border border-green-200" 
                                : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            <span className="text-lg">{icon}</span>
                            <span className="text-sm">{label}</span>
                            {pathname === href && (
                              <motion.div 
                                className="ml-auto w-2 h-2 bg-green-500 rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}