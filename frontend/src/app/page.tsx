"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedText from "./components/AnimatedText";
import LoadingAnimation from "./components/LoadingAnimation";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomePage() {
  const [data, setData] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { t, locale, mounted } = useLanguage();

  useEffect(() => {
    fetch(`http://localhost:8000/api/pages/home?lang=${locale}`)
      .then(res => res.json())
      .then((response) => {
        if (response && typeof response === 'object') {
          setData({
            title: response.title || 'Welcome to SoilMitra',
            content: response.content || 'Your AI-powered organic farming assistant.'
          });
        } else {
          setError("Invalid data format received");
        }
      })
      .catch(() => setError("Failed to load page"))
      .finally(() => setLoading(false));
  }, [locale]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <LoadingAnimation size="lg" color="emerald" text={mounted ? t("common.loading") : "Loading..."} />
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">⚠️</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    </div>
  );
  
  if (!data) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        {/* Nature Wave Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Nature Waves */}
          <motion.div 
            className="absolute -top-10 left-0 w-full h-20 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur-xl"
            animate={{ 
              x: [0, 100, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -top-5 right-0 w-full h-16 bg-gradient-to-l from-teal-400/30 to-green-400/30 rounded-full blur-xl"
            animate={{ 
              x: [0, -80, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/3 left-1/4 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl"
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Elegant Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Floating Nature Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-16 left-16 text-2xl opacity-60"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            🌿
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-20 text-xl opacity-50"
            animate={{ 
              y: [0, -10, 0],
              x: [0, -8, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          >
            🍃
          </motion.div>
          <motion.div 
            className="absolute bottom-24 left-1/4 text-lg opacity-40"
            animate={{ 
              y: [0, -8, 0],
              x: [0, 5, 0],
              rotate: [0, 90, 180]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          >
            🌱
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Elegant Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span className="text-sm font-medium text-white/90">
                {mounted ? t("common.aiFarmingAssistant") : "AI Farming Assistant"}
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {mounted ? t("home.title") : "Welcome to SoilMitra"}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {mounted ? t("home.subtitle") : "Your AI-powered organic farming and fertilizer schedule assistant."}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="/chat"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <span>{mounted ? t("home.cta.startChat") : "Start AI Chat"}</span>
              </span>
            </motion.a>
            
            <motion.a
              href="/product"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold text-base rounded-lg border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">🌾</span>
                <span>{mounted ? t("home.cta.exploreProducts") : "Explore Products"}</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center space-x-8 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span>{mounted ? t("home.trust.aiPowered") : "AI-Powered"}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>{mounted ? t("home.trust.organic") : "100% Organic"}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
              <span>{mounted ? t("home.trust.expertSupport") : "Expert Support"}</span>
            </div>
          </motion.div>
        </div>

        {/* Simple Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {mounted ? t("home.description.part1") : "SoilMitra is an online service created by SREE Marudhan Agro Care for farmers."}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="space-y-3">
                <p className="text-base text-gray-700 leading-relaxed">
                  {mounted ? t("home.description.part2") : "It helps farmers use organic fertilizers correctly. Our goal is to improve soil health, select suitable organic fertilizers for crops, and provide simple guidance on when and how to use them."}
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  {mounted ? t("home.description.part3") : "This reduces the need for chemical fertilizers and allows farming to be done naturally, easily, and at lower cost."}
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  {mounted ? t("home.description.part4") : "SoilMitra will be a friend and guide for every farmer who wants to grow healthy crops and protect farm land."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">SREE Marudhan Agro Care</h3>
                  <p className="text-white/95 leading-relaxed text-sm">
                    Created by experts in organic farming, SoilMitra brings decades of agricultural knowledge to your fingertips.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 bg-green-300 rounded-full blur-xl opacity-70"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-emerald-300 rounded-full blur-xl opacity-70"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        {/* Nature Wave Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-r from-green-200/20 to-emerald-200/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute -bottom-20 right-0 w-full h-32 bg-gradient-to-l from-teal-200/20 to-green-200/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {mounted ? t("home.features.title") : "Why Choose SoilMitra?"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how AI can revolutionize your farming practices and boost your yields naturally
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {mounted ? t("home.features.aiPowered.title") : "AI-Powered"}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {mounted ? t("home.features.aiPowered.description") : "Advanced machine learning algorithms provide personalized recommendations for your specific soil conditions and crop requirements."}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-xl">🌿</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {mounted ? t("home.features.organicFocus.title") : "Organic Focus"}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {mounted ? t("home.features.organicFocus.description") : "Specialized in organic farming practices, helping you maintain soil health while maximizing crop yields naturally."}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative z-10 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-xl">📅</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {mounted ? t("home.features.scheduleManagement.title") : "Smart Scheduling"}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {mounted ? t("home.features.scheduleManagement.description") : "Get personalized fertilizer schedules and reminders based on your crop type, soil conditions, and local weather patterns."}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-25 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-48 h-48 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-64 h-64 bg-white/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/25 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {mounted ? t("home.cta.title") : "Ready to Transform Your Farming?"}
            </h2>
            <p className="text-lg text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
              {mounted ? t("home.cta.subtitle") : "Join thousands of farmers who are already using SoilMitra to improve their yields and soil health naturally."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/chat"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-bold text-base rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  {mounted ? t("home.cta.startChattingNow") : "Start Chatting Now"}
                </span>
              </motion.a>
              <motion.a
                href="/product"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-base rounded-xl hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">🌾</span>
                  {mounted ? t("home.cta.exploreProducts") : "Explore Products"}
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 