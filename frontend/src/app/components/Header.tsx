"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const { t, locale, setLocale, mounted } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nav = [
    { href: "/", label: mounted ? t("navigation.home") : "Home", icon: "🏠" },
    { href: "/about", label: mounted ? t("navigation.about") : "About Us", icon: "ℹ️" },
    { href: "/product", label: mounted ? t("navigation.products") : "Products", icon: "🛍️" },
    { href: "/contact", label: mounted ? t("navigation.contact") : "Contact", icon: "📧" },
    { href: "/chat", label: mounted ? t("navigation.chat") : "Chats", icon: "💬" },
  ];

  const productSubPages = [
    { href: "/product", label: "Organic Fertilizer", icon: "🌱" },
    { href: "/seeds", label: "Native Seeds", icon: "🌿" },
  ];

  const handleLanguageChange = (newLocale: 'en' | 'ta') => {
    setLocale(newLocale);
  };

  // Always show dark text for better visibility
  const textColor = "text-gray-800";
  const textSecondaryColor = "text-gray-600";
  const hoverColor = "hover:text-emerald-600";
  const activeColor = "text-emerald-600";
  const activeBg = "bg-emerald-50";
  const activeBorder = "border-emerald-200";

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl"></div>
              <div className="h-6 bg-gray-300 rounded w-24"></div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-4 bg-gray-300 rounded w-16"></div>
              ))}
            </div>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
            : "bg-white/90 backdrop-blur-md border-b border-gray-200/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                  🌱
                </span>
              </motion.div>
              <div className="flex flex-col">
                <span className={`text-xl font-bold transition-colors duration-500 ${textColor}`}>
                  SoilMitra
                </span>
                <span className={`text-xs font-medium transition-colors duration-500 ${textSecondaryColor}`}>
                  AI Farming Assistant
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {nav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {item.href === "/product" ? (
                    <div className="relative">
                      <button
                        onMouseEnter={() => setIsProductMenuOpen(true)}
                        onMouseLeave={() => setIsProductMenuOpen(false)}
                        className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                          pathname === item.href || pathname.startsWith("/seeds")
                            ? `${activeColor} ${activeBg} border ${activeBorder}`
                            : `${textColor} ${hoverColor} hover:bg-gray-50`
                        }`}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="font-semibold">{item.label}</span>
                        <motion.span
                          className="text-xs transition-transform duration-200"
                          animate={{ rotate: isProductMenuOpen ? 180 : 0 }}
                        >
                          ▼
                        </motion.span>
                      </button>

                      {/* Product Dropdown */}
                      <AnimatePresence>
                        {isProductMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 backdrop-blur-md"
                            onMouseEnter={() => setIsProductMenuOpen(true)}
                            onMouseLeave={() => setIsProductMenuOpen(false)}
                          >
                            <div className="p-2">
                              {productSubPages.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all duration-200 group"
                                >
                                  <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                                    {subItem.icon}
                                  </span>
                                  <span className="font-medium text-gray-700 group-hover:text-emerald-600">
                                    {subItem.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group relative ${
                        pathname === item.href
                          ? `${activeColor} ${activeBg} border ${activeBorder}`
                          : `${textColor} ${hoverColor} hover:bg-gray-50`
                      }`}
                    >
                      <motion.span
                        className="text-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="font-semibold">{item.label}</span>
                      {pathname === item.href && (
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Language Selector & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={locale}
                  onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'ta')}
                  className="appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:border-emerald-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="en">English</option>
                  <option value="ta">தமிழ்</option>
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <span className="text-xs text-gray-500">▼</span>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    className="w-5 h-0.5 bg-current rounded-full mb-1"
                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="w-5 h-0.5 bg-current rounded-full mb-1"
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="w-5 h-0.5 bg-current rounded-full"
                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {nav.map((item) => (
                <div key={item.href}>
                  {item.href === "/product" ? (
                    <div>
                      <div className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium">
                        <span className="flex items-center space-x-3">
                          <span className="text-lg">{item.icon}</span>
                          <span>{item.label}</span>
                        </span>
                        <span className="text-xs">▼</span>
                      </div>
                      <div className="ml-8 space-y-2">
                        {productSubPages.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-lg">{subItem.icon}</span>
                            <span>{subItem.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        pathname === item.href
                          ? `${activeColor} ${activeBg} border ${activeBorder}`
                          : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}