"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedText from "./components/AnimatedText";
import LoadingAnimation from "./components/LoadingAnimation";

export default function HomePage() {
  const [data, setData] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/pages/home?lang=en`)
      .then(res => res.json())
      .then((response) => {
        // Ensure we only extract the expected fields
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
  }, []);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50">
      <LoadingAnimation size="lg" color="emerald" text="Loading..." />
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50">
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 overflow-x-hidden">
      {/* Hero Section - Image Only */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-6 h-6 border border-emerald-300 rounded-full animate-spin opacity-40" style={{animationDuration: '10s'}}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-green-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-100 to-green-50 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-emerald-50 to-green-100 rounded-full blur-2xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
        </div>
        

        
        <div className="max-w-6xl mx-auto relative z-10 overflow-x-hidden">
          {/* Premium Welcome Card */}
          <AnimatedCard className="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl p-6 md:p-12 relative overflow-hidden">
            {/* Colorful blinking dots inside the card */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Red dots */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-70"></div>
              <div className="absolute top-16 right-12 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-60" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-12 left-10 w-2.5 h-2.5 bg-red-300 rounded-full animate-ping opacity-80" style={{animationDelay: '0.7s'}}></div>
              
              {/* Blue dots */}
              <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-65" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute top-28 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-20 right-8 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-70" style={{animationDelay: '0.9s'}}></div>
              
              {/* Yellow dots */}
              <div className="absolute top-12 left-1/2 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping opacity-80" style={{animationDelay: '0.1s'}}></div>
              <div className="absolute top-32 right-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-ping opacity-65" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping opacity-75" style={{animationDelay: '0.8s'}}></div>
              
              {/* Purple dots */}
              <div className="absolute top-24 right-1/5 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-70" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute top-36 left-1/5 w-2.5 h-2.5 bg-purple-500 rounded-full animate-ping opacity-60" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute bottom-24 right-1/5 w-2 h-2 bg-purple-300 rounded-full animate-ping opacity-80" style={{animationDelay: '0.5s'}}></div>
              
              {/* Orange dots */}
              <div className="absolute top-40 left-1/6 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-65" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute top-44 right-1/6 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-75" style={{animationDelay: '0.7s'}}></div>
              <div className="absolute bottom-28 left-1/5 w-2.5 h-2.5 bg-orange-300 rounded-full animate-ping opacity-70" style={{animationDelay: '0.1s'}}></div>
              
              {/* Pink dots */}
              <div className="absolute top-16 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-80" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute top-48 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-ping opacity-60" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-75" style={{animationDelay: '0.2s'}}></div>
            </div>
            {/* Enhanced Title with Gradient and Effects */}
            <div className="relative mb-12 text-center">
              <AnimatedText 
                className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent drop-shadow-sm"
                type="word"
                stagger={0.1}
              >
                Welcome to SoilMitra
              </AnimatedText>
              {/* Animated underline */}
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </div>
            
            {/* Premium Subtitle */}
            <div className="mb-12 text-center">
              <AnimatedText 
                className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed max-w-4xl mx-auto"
                delay={0.3}
                type="word"
                stagger={0.05}
              >
                Your AI-Powered Organic Farming Assistant
              </AnimatedText>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <motion.div 
                  className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-300 to-emerald-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
                <AnimatedText 
                  className="text-emerald-600 font-semibold"
                  delay={0.8}
                >
                  Revolutionizing Agriculture
                </AnimatedText>
                <motion.div 
                  className="w-16 h-px bg-gradient-to-l from-transparent via-emerald-300 to-emerald-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
              </div>
              
              {/* Animated accent elements */}
              <div className="flex items-center justify-center space-x-3 mt-6">
                <div className="w-6 h-0.5 bg-emerald-300 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="w-6 h-0.5 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
              </div>
            </div>
            
            {/* Enhanced Description Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <AnimatedCard 
                className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                delay={0.6}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <span className="text-2xl">🏢</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">SREE Marudhan Agro Care</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Created by experts in organic farming, SoilMitra brings decades of agricultural knowledge to your fingertips.
                </p>
              </AnimatedCard>
              
              <AnimatedCard 
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                delay={0.8}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <span className="text-2xl">🌿</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900">Organic Excellence</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Specialized guidance for organic fertilizers, soil health improvement, and sustainable farming practices.
                </p>
              </AnimatedCard>
            </div>

            {/* Premium CTA Buttons */}
            <AnimatedSection className="flex flex-col sm:flex-row gap-6 justify-center items-center" delay={1}>
              <motion.a
                href="/chat"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  >
                    🚀
                  </motion.span>
                  <span>Start AI Chat</span>
                  <motion.div 
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </span>
              </motion.a>
              
              <motion.a
                href="/product"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-700 font-bold text-lg rounded-2xl border-2 border-emerald-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-3">
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  >
                    🌾
                  </motion.span>
                  <span>Explore Products</span>
                </span>
              </motion.a>
            </AnimatedSection>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <span>Expert Support</span>
              </div>
            </div>
            
          </AnimatedCard>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-4 h-4 border border-emerald-300 rounded-full animate-spin opacity-40" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-green-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-100/50 to-green-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SoilMitra?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how AI can revolutionize your farming practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow animate-pulse">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">AI-Powered</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced machine learning algorithms provide personalized recommendations for your specific soil conditions and crop requirements.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow animate-pulse" style={{animationDelay: '0.2s'}}>
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Organic Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized in organic farming practices, helping you maintain soil health while maximizing crop yields naturally.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow animate-pulse" style={{animationDelay: '0.4s'}}>
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Smart Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized fertilizer schedules and reminders based on your crop type, soil conditions, and local weather patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500 to-emerald-400 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of farmers who are already using SoilMitra to improve their yields and soil health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/chat"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-500 font-semibold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Chatting Now
              </a>
              <a
                href="/product"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-500 hover:scale-105 transition-all duration-300"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 