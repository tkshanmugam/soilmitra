"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";

const seedCategories = [
  {
    href: "/seeds/tomato-varieties",
    labelKey: "seeds.tomato.title",
    descKey: "seeds.tomato.desc",
    icon: "🍅",
    color: "from-red-500 to-pink-500"
  },
  {
    href: "/seeds/brinjal-varieties",
    labelKey: "seeds.brinjal.title",
    descKey: "seeds.brinjal.desc",
    icon: "🍆",
    color: "from-purple-500 to-indigo-500"
  },
  {
    href: "/seeds/ladies-finger-varieties",
    labelKey: "seeds.ladies-finger.title",
    descKey: "seeds.ladies-finger.desc",
    icon: "🥬",
    color: "from-green-500 to-emerald-500"
  },
  {
    href: "/seeds/chilli-varieties",
    labelKey: "seeds.chilli.title",
    descKey: "seeds.chilli.desc",
    icon: "🌶️",
    color: "from-orange-500 to-red-500"
  },
  {
    href: "/seeds/climbers-plants",
    labelKey: "seeds.climbers.title",
    descKey: "seeds.climbers.desc",
    icon: "🌿",
    color: "from-teal-500 to-cyan-500"
  },
  {
    href: "/seeds/tubers",
    labelKey: "seeds.tubers.title",
    descKey: "seeds.tubers.desc",
    icon: "🥔",
    color: "from-amber-500 to-yellow-500"
  },
  {
    href: "/seeds/exotic-vegetables",
    labelKey: "seeds.exotic.title",
    descKey: "seeds.exotic.desc",
    icon: "🥑",
    color: "from-pink-500 to-rose-500"
  },
  {
    href: "/seeds/herbs",
    labelKey: "seeds.herbs.title",
    descKey: "seeds.herbs.desc",
    icon: "🌿",
    color: "from-lime-500 to-green-500"
  },
  {
    href: "/seeds/flower-seeds",
    labelKey: "seeds.flowers.title",
    descKey: "seeds.flowers.desc",
    icon: "🌸",
    color: "from-fuchsia-500 to-purple-500"
  },
  {
    href: "/seeds/spinach-greens",
    labelKey: "seeds.spinach.title",
    descKey: "seeds.spinach.desc",
    icon: "🥬",
    color: "from-emerald-500 to-teal-500"
  },
  {
    href: "/seeds/tree-seeds",
    labelKey: "seeds.tree.title",
    descKey: "seeds.tree.desc",
    icon: "🌳",
    color: "from-green-600 to-emerald-600"
  }
];

export default function SeedsPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading state during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              🌱 Premium Seeds Collection
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Discover our comprehensive collection of high-quality seeds for every type of garden and farm
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Seed Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From traditional vegetables to exotic varieties, we have the perfect seeds for your agricultural needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {seedCategories.map((category, index) => (
              <div key={category.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {category.labelKey === 'seeds.tomato.title' ? 'Tomato Varieties' : 
                       category.labelKey === 'seeds.brinjal.title' ? 'Brinjal Varieties' :
                       category.labelKey === 'seeds.ladies-finger.title' ? 'Ladies Finger Varieties' :
                       category.labelKey === 'seeds.chilli.title' ? 'Chilli Varieties' :
                       category.labelKey === 'seeds.climbers.title' ? 'Climbers Plants' :
                       category.labelKey === 'seeds.tubers.title' ? 'Tubers' :
                       category.labelKey === 'seeds.exotic.title' ? 'Exotic Vegetables' :
                       category.labelKey === 'seeds.herbs.title' ? 'Herbals' :
                       category.labelKey === 'seeds.flowers.title' ? 'Flower Seeds' :
                       category.labelKey === 'seeds.spinach.title' ? 'Spinach / Greens' :
                       'Tree Seeds'}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.descKey === 'seeds.tomato.desc' ? 'Discover a wide range of tomato seeds for your garden' :
                       category.descKey === 'seeds.brinjal.desc' ? 'Premium brinjal seeds for healthy harvests' :
                       category.descKey === 'seeds.ladies-finger.desc' ? 'Fresh okra seeds for traditional and modern gardens' :
                       category.descKey === 'seeds.chilli.desc' ? 'Spice up your garden with diverse chilli varieties' :
                       category.descKey === 'seeds.climbers.desc' ? 'Vertical gardening solutions with climbing plants' :
                       category.descKey === 'seeds.tubers.desc' ? 'Root vegetables and tuber crops for your farm' :
                       category.descKey === 'seeds.exotic.desc' ? 'Unique and rare vegetable varieties' :
                       category.descKey === 'seeds.herbs.desc' ? 'Medicinal and culinary herbs for your garden' :
                       category.descKey === 'seeds.flowers.desc' ? 'Beautiful flowers to enhance your garden aesthetics' :
                       category.descKey === 'seeds.spinach.desc' ? 'Nutritious leafy greens for healthy living' :
                       'Fruit trees and ornamental trees for your landscape'}
                    </p>
                    <div className="mt-4 flex items-center text-emerald-600 font-medium text-sm group-hover:text-emerald-700">
                      Explore Seeds
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t("seeds.hero.title")}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t("seeds.hero.subtitle")}
          </motion.p>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 text-4xl opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🌱
        </motion.div>
        <motion.div 
          className="absolute top-20 right-20 text-3xl opacity-20"
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🌿
        </motion.div>
        <motion.div 
          className="absolute bottom-20 left-1/4 text-2xl opacity-20"
          animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          🌸
        </motion.div>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("seeds.categories.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("seeds.categories.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {seedCategories.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Link href={category.href}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <motion.span 
                      className="text-5xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {category.icon}
                    </motion.span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                      {t(category.labelKey)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(category.descKey)}
                    </p>
                    <motion.div 
                      className="mt-4 flex items-center text-emerald-600 font-medium text-sm group-hover:text-emerald-700"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {t("seeds.exploreSeeds")}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t("seeds.cta.title")}
            </h3>
            <p className="text-lg text-green-100 mb-6">
              {t("seeds.cta.subtitle")}
            </p>
            <Link 
              href="/chat"
              className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <span className="mr-2">💬</span>
              {t("seeds.cta.button")}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
