"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedCard from "../components/AnimatedCard";
import AnimatedText from "../components/AnimatedText";
import LoadingAnimation from "../components/LoadingAnimation";

export default function AboutPage() {
  const [data, setData] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { t, locale } = useLanguage();

  useEffect(() => {
    fetch(`http://localhost:8000/api/pages/about?lang=${locale}`)
      .then(res => res.json())
      .then(setData)
      .catch(() => setError(t("common.failedToLoad")))
      .finally(() => setLoading(false));
  }, [t, locale]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF3E0]">
      <LoadingAnimation size="lg" color="emerald" text="Loading..." />
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF3E0]">
      <div className="text-[#6D4C41] text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <div className="text-xl">{error}</div>
      </div>
    </div>
  );
  
  if (!data) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FAF3E0] to-[#E8F5E8] py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <AnimatedSection>
              <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-[#2E7D32] rounded-full mb-6 shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <span className="text-3xl">🏢</span>
              </motion.div>
            </AnimatedSection>
            <AnimatedText 
              className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-6"
              type="word"
              stagger={0.1}
            >
              {t("about.title")}
            </AnimatedText>
            <AnimatedText 
              className="text-lg md:text-xl text-[#6D4C41] max-w-4xl mx-auto leading-relaxed"
              delay={0.3}
              type="word"
              stagger={0.05}
            >
              {t("about.description")}
            </AnimatedText>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-10 right-10 w-24 h-24 bg-[#66BB6A]/20 rounded-full opacity-60"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-32 h-32 bg-[#66BB6A]/20 rounded-full opacity-60"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.7, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div>
                <AnimatedText 
                  className="text-3xl font-bold text-[#2B2B2B] mb-6"
                  type="word"
                  stagger={0.1}
                >
                  {t("about.mission.title")}
                </AnimatedText>
                <AnimatedText 
                  className="text-base text-[#6D4C41] leading-relaxed mb-6"
                  delay={0.2}
                >
                  {t("about.mission.description1")}
                </AnimatedText>
                <AnimatedText 
                  className="text-base text-[#6D4C41] leading-relaxed"
                  delay={0.4}
                >
                  {t("about.mission.description2")}
                </AnimatedText>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <AnimatedCard className="bg-gradient-to-br from-[#FAF3E0] to-[#E8F5E8] rounded-3xl p-8 border border-[#66BB6A]/20">
                  <div className="text-center">
                    <motion.div 
                      className="w-24 h-24 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <span className="text-4xl">🎯</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">{t("about.vision.title")}</h3>
                    <p className="text-[#6D4C41] text-sm">
                      {t("about.vision.description")}
                    </p>
                  </div>
                </AnimatedCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 bg-[#FAF3E0]/30">
        <div className="max-w-6xl mx-auto">
          <AnimatedText 
            className="text-3xl font-bold text-center text-[#2B2B2B] mb-8"
            type="word"
            stagger={0.1}
          >
            {t("about.values.title")}
          </AnimatedText>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#66BB6A]/20"
              delay={0.1}
            >
              <motion.div 
                className="w-16 h-16 bg-[#2E7D32] rounded-full flex items-center justify-center mb-6 shadow-md"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <span className="text-2xl">🌱</span>
              </motion.div>
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">{t("about.values.sustainability.title")}</h3>
              <p className="text-[#6D4C41] leading-relaxed text-sm">
                {t("about.values.sustainability.description")}
              </p>
            </AnimatedCard>
            
            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#66BB6A]/20"
              delay={0.2}
            >
              <motion.div 
                className="w-16 h-16 bg-[#66BB6A] rounded-full flex items-center justify-center mb-6 shadow-md"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <span className="text-2xl">💡</span>
              </motion.div>
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">{t("about.values.innovation.title")}</h3>
              <p className="text-[#6D4C41] leading-relaxed text-sm">
                {t("about.values.innovation.description")}
              </p>
            </AnimatedCard>
            
            <AnimatedCard 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#66BB6A]/20"
              delay={0.3}
            >
              <motion.div 
                className="w-16 h-16 bg-[#F9A825] rounded-full flex items-center justify-center mb-6 shadow-md"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <span className="text-2xl">🤝</span>
              </motion.div>
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-4">{t("about.values.community.title")}</h3>
              <p className="text-[#6D4C41] leading-relaxed text-sm">
                {t("about.values.community.description")}
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#2E7D32] to-[#66BB6A]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            {t("about.journey.title")}
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">2020</div>
              <div className="text-white/90">{t("about.journey.2020")}</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">2021</div>
              <div className="text-white/90">{t("about.journey.2021")}</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">2022</div>
              <div className="text-white/90">{t("about.journey.2022")}</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">2023</div>
              <div className="text-white/90">{t("about.journey.2023")}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 