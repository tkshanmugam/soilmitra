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
    <div className="min-h-screen">
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
            className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
          >
            Start Chatting
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
          >
            Explore Products
          </motion.button>
        </div>
      </ImprovedHero>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText 
              className="text-4xl font-bold text-gray-900 mb-4"
              type="word"
              stagger={0.1}
            >
              Why Choose SoilMitra?
            </AnimatedText>
            <AnimatedText 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              delay={0.3}
            >
              Experience the future of farming with AI-powered insights and organic solutions
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Guidance</h3>
              <p className="text-gray-600">
                Get personalized farming advice and solutions based on your specific needs and conditions.
              </p>
            </AnimatedCard>

            <AnimatedCard className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" delay={0.2}>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
                  </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Organic Products</h3>
              <p className="text-gray-600">
                Premium quality organic fertilizers, seeds, and farming supplies for sustainable agriculture.
              </p>
            </AnimatedCard>

            <AnimatedCard className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" delay={0.4}>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Community</h3>
              <p className="text-gray-600">
                Connect with fellow farmers and agricultural experts to share knowledge and experiences.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <AnimatedCard className="p-6" delay={0.1}>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Farmers</div>
            </AnimatedCard>
            <AnimatedCard className="p-6" delay={0.2}>
              <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
              <div className="text-gray-600">Products Sold</div>
            </AnimatedCard>
            <AnimatedCard className="p-6" delay={0.3}>
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Advisors</div>
            </AnimatedCard>
            <AnimatedCard className="p-6" delay={0.4}>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText 
            className="text-4xl font-bold text-white mb-6"
            type="word"
            stagger={0.1}
          >
            Ready to Transform Your Farming?
          </AnimatedText>
          <AnimatedText 
            className="text-xl text-white/90 mb-8"
            delay={0.3}
          >
            Join thousands of farmers who are already using SoilMitra to improve their yields and sustainability.
          </AnimatedText>
          <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
          >
            Get Started Today
          </motion.button>
          </div>
      </section>
    </div>
  );
} 