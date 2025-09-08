"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import AnimatedSection from "./components/AnimatedSection";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedText from "./components/AnimatedText";
import LoadingAnimation from "./components/LoadingAnimation";
import ImprovedHero from "./components/ImprovedHero";

export default function HomePage() {
  const [data, setData] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { t, mounted } = useLanguage();

  useEffect(() => {
    // Set static content for home page
          setData({
      title: 'Welcome to SoilMitra',
      content: 'Your AI-powered organic farming assistant.'
    });
    setLoading(false);
  }, []);

  if (!mounted) {
    return <LoadingAnimation />;
  }

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Page</h1>
          <p className="text-gray-600">{error}</p>
      </div>
    </div>
  );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-emerald-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-emerald-200/20"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      {/* Hero Section */}
      <ImprovedHero
        title="Welcome to SoilMitra"
        subtitle="Your AI-powered organic farming assistant. Discover sustainable farming practices, organic products, and expert guidance for your agricultural journey."
      >
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:shadow-3xl"
          >
            Start Chatting
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/40 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Explore Products
          </motion.button>
        </div>
      </ImprovedHero>

      {/* Main Content Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Glass Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              <AnimatedText 
                className="text-4xl font-bold text-gray-900 mb-4"
                type="word"
                stagger={0.1}
              >
                SoilMitra – Where Tradition Meets Modern Farming Solutions
              </AnimatedText>
              <div className="flex items-center justify-center mb-6">
                <div className="text-2xl">🌿</div>
                <div className="mx-4 text-lg font-semibold text-green-700">Where Tradition Meets Modern Farming Solutions</div>
                <div className="text-2xl">🌿</div>
              </div>
              <AnimatedText 
                className="text-lg text-gray-600 max-w-4xl mx-auto"
                delay={0.3}
              >
                Welcome to SoilMitra, the official online platform of{" "}
                <span className="font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent relative">
                  Sree Marudhan Agri Care Solutions
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-teal-400/20 rounded-lg blur-sm -z-10"></div>
                </span>
                .
                <br className="mt-2" />
                Carrying forward a proud family legacy and embracing modern innovations, we provide farmers with high-quality seeds, trusted fertilizers, and soil health solutions.
                <br className="mt-4" />
                <div className="bg-gradient-to-r from-emerald-50/80 to-green-50/80 backdrop-blur-sm rounded-2xl p-4 border border-emerald-200/30 shadow-lg">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-2">🎯</span>
                    <span className="text-lg font-bold text-emerald-800">Our Goal</span>
                  </div>
                  <p className="text-emerald-700 font-medium text-center leading-relaxed">
                    To help farmers improve yields, protect the environment, and secure sustainable growth for generations to come.
                  </p>
                </div>
                <br className="mt-4" />
                <div className="flex items-center justify-center mt-4">
                  <span className="text-2xl mr-2">📱</span>
                  <span className="text-gray-700 font-medium">
                    For quick support and orders, reach us on WhatsApp:{" "}
                    <a 
                      href="https://wa.me/918072897988" 
                      className="text-green-600 hover:text-green-700 font-semibold underline decoration-2 underline-offset-2 hover:decoration-green-500 transition-all duration-300"
                    >
                      8072897988
                    </a>
                  </span>
                </div>
              </AnimatedText>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Company Story & Values */}
            <div className="space-y-8">
              {/* About Us */}
              <AnimatedCard className="p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-2xl border border-white/30 hover:bg-white/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌱</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
                    <p className="text-gray-600 leading-relaxed">
                      At SoilMitra, we believe that healthy soil is the foundation of healthy crops. Backed by the expertise of Sree Marudhan Agri Care Solutions, we are committed to delivering eco-friendly agri products and services that improve soil fertility, crop protection, and farmer prosperity.
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Our Legacy */}
              <AnimatedCard className="p-8 rounded-3xl bg-gradient-to-br from-amber-50/60 to-orange-50/60 backdrop-blur-md shadow-2xl border border-amber-200/30 hover:from-amber-50/80 hover:to-orange-50/80 transition-all duration-300" delay={0.2}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌟</div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Legacy</h3>
                    <p className="text-amber-800 leading-relaxed mb-6">
                      The roots of Sree Marudhan Agri Care Solutions trace back to the dedication and vision of my father, who started this business with a deep commitment to helping farmers. His passion for agriculture and service to the farming community laid the foundation on which SoilMitra proudly stands today.
                    </p>
                    <p className="text-amber-800 leading-relaxed">
                      Carrying forward his legacy, we continue to focus on soil health, organic fertilizers, and sustainable farming practices, while also bringing in modern innovations to serve farmers better.
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Founder's Message */}
              <AnimatedCard className="p-8 rounded-3xl bg-gradient-to-br from-purple-50/60 to-pink-50/60 backdrop-blur-md shadow-2xl border border-purple-200/30 hover:from-purple-50/80 hover:to-pink-50/80 transition-all duration-300" delay={0.4}>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-6">Message from the Founder</h3>
                  <blockquote className="text-lg text-purple-800 italic leading-relaxed mb-6 p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30">
                    "SoilMitra is more than just a platform – it is the continuation of my father's vision. Inspired by his hard work and dedication, I strive to take this journey forward with a mission to empower farmers through innovative, soil-friendly, and sustainable solutions. Together, we can ensure prosperity for today's farmers and preserve our land for future generations."
                  </blockquote>
                  <div className="text-purple-700 font-semibold">
                    — K. S. Thilakkumar, M.C.A – Founder
                  </div>
                </div>
              </AnimatedCard>

              {/* Our Mission */}
              <AnimatedCard className="p-8 rounded-3xl bg-gradient-to-br from-cyan-50/60 to-blue-50/60 backdrop-blur-md shadow-2xl border border-cyan-200/30 hover:from-cyan-50/80 hover:to-blue-50/80 transition-all duration-300" delay={0.6}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌍</div>
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-900 mb-4">Our Mission</h3>
                    <p className="text-cyan-800 leading-relaxed">
                      To empower farmers with organic solutions, crop care expertise, and soil-friendly practices, creating a future where farming is both productive and sustainable.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Right Column - Services & Contact */}
            <div className="space-y-8">
              {/* Products & Services */}
              <AnimatedCard className="p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-2xl border border-white/30 hover:bg-white/50 transition-all duration-300" delay={0.1}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌾</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Products & Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Seeds & Organic Fertilizers</h4>
                          <p className="text-gray-600 text-sm">High-quality seeds and natural products designed to boost soil health and crop productivity.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Soil Testing & Analysis</h4>
                          <p className="text-gray-600 text-sm">Accurate soil reports to guide proper nutrient management.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Agri-Consulting</h4>
                          <p className="text-gray-600 text-sm">Expert guidance on sustainable farming methods and smart agricultural practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Knowledge Hub</h4>
                          <p className="text-gray-600 text-sm">Access to valuable resources, tips, and best practices for organic farming.</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Future Products Notice */}
                    <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50/60 to-indigo-50/60 backdrop-blur-sm border border-blue-200/30">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">✨</div>
                        <div>
                          <p className="text-blue-800 text-sm leading-relaxed">
                            <span className="font-semibold">Currently, we provide seeds and fertilizers, while additional solutions like laterals and irrigation products will be introduced soon.</span> Stay connected with SoilMitra for updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* Why Choose Us */}
              <AnimatedCard className="p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-2xl border border-white/30 hover:bg-white/50 transition-all duration-300" delay={0.3}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">Trusted expertise of Sree Marudhan Agri Care Solutions</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">High-quality organic and sustainable farming products</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">Focus on soil health improvement and farmer growth</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700">Reliable partner for modern and eco-friendly agriculture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {/* Contact Info */}
              <AnimatedCard className="p-8 rounded-3xl bg-gradient-to-br from-green-50/60 to-emerald-50/60 backdrop-blur-md shadow-2xl border border-green-200/30 hover:from-green-50/80 hover:to-emerald-50/80 transition-all duration-300" delay={0.5}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">Get in Touch</h3>
                  <p className="text-green-800 mb-6">
                    Join the SoilMitra community today and explore the wide range of organic fertilizers, bio-inputs, soil testing, and agri solutions from Sree Marudhan Agri Care Solutions. Together, let's build healthier soil, stronger crops, and a brighter farming future.
                  </p>
                  <div className="flex flex-col gap-4">
                    <a 
                      href="https://wa.me/918072897988" 
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="text-xl">📱</span>
                      <span>Contact Us on WhatsApp: 8072897988</span>
                    </a>
                    <div className="text-green-700 p-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30">
                      <span className="font-semibold">👤 Founder: K. S. Thilakkumar, M.C.A</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
} 