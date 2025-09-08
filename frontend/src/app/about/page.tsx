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

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Glass Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-green-200/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/40 to-emerald-200/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <AnimatedText 
              className="text-4xl font-bold text-gray-900 mb-4"
              type="word"
              stagger={0.1}
            >
              About SoilMitra
            </AnimatedText>
            <AnimatedText 
              className="text-lg text-gray-600 max-w-4xl mx-auto"
              delay={0.3}
            >
              Discover our story, mission, and commitment to revolutionizing agriculture through sustainable practices and innovative solutions.
            </AnimatedText>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText 
              className="text-4xl font-bold text-gray-900 mb-4"
              type="word"
              stagger={0.1}
            >
              Why Choose Us?
            </AnimatedText>
            <AnimatedText 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              delay={0.3}
            >
              Discover what makes SoilMitra the trusted choice for farmers
            </AnimatedText>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedCard className="p-8 rounded-3xl bg-white/40 backdrop-blur-md shadow-2xl border border-white/30 hover:bg-white/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🤝</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Advantages</h3>
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

            <AnimatedCard className="p-8 rounded-3xl bg-gradient-to-br from-emerald-50/60 to-green-50/60 backdrop-blur-md shadow-2xl border border-emerald-200/30 hover:from-emerald-50/80 hover:to-green-50/80 transition-all duration-300" delay={0.2}>
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-6">Our Commitment</h3>
                <p className="text-emerald-800 leading-relaxed mb-6">
                  We are committed to providing farmers with the best organic solutions, expert guidance, and innovative technologies to ensure their success and the sustainability of our agricultural future.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30">
                    <div className="text-2xl font-bold text-emerald-600">100%</div>
                    <div className="text-sm text-emerald-700">Organic</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30">
                    <div className="text-2xl font-bold text-emerald-600">24/7</div>
                    <div className="text-sm text-emerald-700">Support</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
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
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Network</h3>
              <p className="text-gray-600">
                Providing comprehensive support through AI-powered tools and expert guidance for sustainable farming success.
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