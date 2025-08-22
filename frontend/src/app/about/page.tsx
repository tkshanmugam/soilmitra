"use client";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedText from "../components/AnimatedText";
import ImprovedHero from "../components/ImprovedHero";

export default function AboutPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImprovedHero
        title="About SoilMitra"
        subtitle="Discover our mission to revolutionize farming through AI-powered organic solutions and sustainable agricultural practices."
        backgroundGradient="from-emerald-600 via-green-600 to-teal-600"
      />

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <AnimatedText 
                  className="text-3xl font-bold text-gray-900 mb-6"
                  type="word"
                  stagger={0.1}
                >
                  Our Mission
                </AnimatedText>
                <AnimatedText 
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  delay={0.2}
                >
                  SoilMitra is dedicated to empowering farmers with AI-driven insights and organic farming solutions. We believe that sustainable agriculture is the key to feeding our growing population while preserving our planet.
                </AnimatedText>
                <AnimatedText 
                  className="text-lg text-gray-700 leading-relaxed"
                  delay={0.4}
                >
                  Our platform combines cutting-edge technology with traditional farming wisdom to create a comprehensive solution for modern agricultural challenges.
                </AnimatedText>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <AnimatedCard className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200">
                  <div className="text-center">
                    <motion.div 
                      className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <span className="text-4xl">🎯</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-700 text-sm">
                      To create a world where every farmer has access to sustainable, profitable, and environmentally conscious farming practices through innovative technology.
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText 
              className="text-4xl font-bold text-gray-900 mb-4"
              type="word"
              stagger={0.1}
            >
              Our Core Values
            </AnimatedText>
            <AnimatedText 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              delay={0.3}
            >
              The principles that guide everything we do
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to farming practices that protect our environment and ensure long-term agricultural viability.
              </p>
            </AnimatedCard>

            <AnimatedCard className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" delay={0.2}>
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Leveraging cutting-edge AI technology to provide farmers with intelligent, data-driven farming solutions.
              </p>
            </AnimatedCard>

            <AnimatedCard className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" delay={0.4}>
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Building a supportive network of farmers, experts, and agricultural professionals to share knowledge and experiences.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText 
              className="text-4xl font-bold text-gray-900 mb-4"
              type="word"
              stagger={0.1}
            >
              Meet Our Team
            </AnimatedText>
            <AnimatedText 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              delay={0.3}
            >
              Passionate experts dedicated to revolutionizing agriculture
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🌾</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Agricultural Experts</h3>
              <p className="text-gray-600 text-sm">
                Seasoned farmers and agricultural scientists with decades of experience in organic farming.
              </p>
            </AnimatedCard>

            <AnimatedCard className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200" delay={0.2}>
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Engineers</h3>
              <p className="text-gray-600 text-sm">
                Technology professionals developing intelligent solutions to solve complex agricultural challenges.
              </p>
            </AnimatedCard>

            <AnimatedCard className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl border border-teal-200" delay={0.4}>
              <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Research Team</h3>
              <p className="text-gray-600 text-sm">
                Scientists conducting ongoing research to improve organic farming methods and product effectiveness.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
} 