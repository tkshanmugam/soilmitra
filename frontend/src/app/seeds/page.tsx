"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../contexts/LanguageContext";
import { useState, useEffect } from "react";
import ImprovedHero from "../components/ImprovedHero";

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
        title="Native Seeds Collection"
        subtitle="Discover our premium collection of native seeds, carefully selected for optimal growth and sustainability in your local environment."
        backgroundGradient="from-emerald-600 via-green-600 to-teal-600"
        height="min-h-[47vh]"
      />

      {/* Seeds Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Our Seed Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From vegetables to herbs, find the perfect seeds for your organic garden
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seedCategories.map((category, index) => (
              <motion.div
                key={category.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {t(category.labelKey)}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {t(category.descKey)}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Seeds?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality, sustainability, and local adaptation for your farming success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Organic</h3>
              <p className="text-gray-600">
                All our seeds are certified organic and free from genetic modifications, ensuring natural growth and sustainability.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Locally Adapted</h3>
              <p className="text-gray-600">
                Seeds specifically selected and adapted for local climate conditions, soil types, and growing seasons.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Germination</h3>
              <p className="text-gray-600">
                Rigorously tested seeds with proven high germination rates and excellent crop performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose from our extensive collection of native seeds and begin your organic farming journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/918072897988?text=Hi, I'm interested in buying native seeds. Please provide information about available varieties, pricing, and delivery options."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
            >
              <span className="text-xl">📱</span>
              <span>WhatsApp Order / வாட்ஸ்அப் ஆர்டர்</span>
            </a>
            <a 
              href="https://wa.me/918072897988?text=Hi, I need expert advice about native seeds and farming. Please help me with guidance on seed selection and growing techniques."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 text-center flex items-center justify-center space-x-2"
            >
              <span className="text-xl">🌱</span>
              <span>Expert Advice / நிபுணர் ஆலோசனை</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
