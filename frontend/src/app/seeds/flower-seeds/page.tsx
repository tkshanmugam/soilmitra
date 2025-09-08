"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";

const flowerSeedsVarieties = [
  {
    id: 1,
    name: "Amarilis Lily",
    scientificName: "Hippeastrum",
    description: "Beautiful flowering bulb producing large, trumpet-shaped flowers in various colors",
    growingTime: "8-12 weeks",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹40.00",
    discount: "50% OFF",
    image: "🌸",
    features: ["Large flowers", "Trumpet-shaped", "Various colors", "Easy growing"],
    category: "Lily Varieties"
  },
  {
    id: 2,
    name: "Caladium (Mix Colour)",
    scientificName: "Caladium bicolor",
    description: "Stunning foliage plant with colorful, heart-shaped leaves in mixed colors",
    growingTime: "6-8 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹40.00",
    discount: "50% OFF",
    image: "🍃",
    features: ["Colorful foliage", "Heart-shaped leaves", "Mix colors", "Shade loving"],
    category: "Foliage Plants"
  },
  {
    id: 3,
    name: "Calla Lily (Black)",
    scientificName: "Zantedeschia",
    description: "Elegant black calla lily with unique dark blooms, perfect for dramatic arrangements",
    growingTime: "8-10 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹40.00",
    discount: "50% OFF",
    image: "🌺",
    features: ["Black blooms", "Elegant flowers", "Dramatic look", "Unique color"],
    category: "Calla Lilies"
  },
  {
    id: 4,
    name: "Calla Lily (Yellow)",
    scientificName: "Zantedeschia",
    description: "Bright yellow calla lily with cheerful blooms, ideal for sunny gardens",
    growingTime: "8-10 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹40.00",
    discount: "50% OFF",
    image: "🌻",
    features: ["Yellow blooms", "Cheerful flowers", "Sunny gardens", "Bright color"],
    category: "Calla Lilies"
  },
  {
    id: 5,
    name: "Day Lily (Orange)",
    scientificName: "Hemerocallis",
    description: "Vibrant orange day lily that blooms daily, perfect for continuous color",
    growingTime: "6-8 weeks",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹40.00",
    discount: "50% OFF",
    image: "🌺",
    features: ["Orange blooms", "Daily flowering", "Continuous color", "High yield"],
    category: "Day Lilies"
  },
  {
    id: 6,
    name: "Day Lily (Pink)",
    scientificName: "Hemerocallis",
    description: "Delicate pink day lily with soft, romantic blooms for elegant gardens",
    growingTime: "6-8 weeks",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹40.00",
    discount: "50% OFF",
    image: "🌸",
    features: ["Pink blooms", "Romantic flowers", "Elegant gardens", "High yield"],
    category: "Day Lilies"
  },
  {
    id: 7,
    name: "Gladiolus (Mix Colour)",
    scientificName: "Gladiolus",
    description: "Tall spike flowers in mixed colors, perfect for cutting and arrangements",
    growingTime: "8-12 weeks",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌷",
    features: ["Tall spikes", "Mix colors", "Cut flowers", "Arrangements"],
    category: "Gladiolus"
  },
  {
    id: 8,
    name: "Kovakkai Cutting",
    scientificName: "Coccinia grandis",
    description: "Live cutting of kovakkai plant, ready to root and grow into a beautiful vine",
    growingTime: "4-6 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹100.00",
    currentPrice: "₹80.00",
    discount: "20% OFF",
    image: "🌿",
    features: ["Live cutting", "Ready to root", "Beautiful vine", "Fast growing"],
    category: "Live Cuttings"
  },
  {
    id: 9,
    name: "Rain Lily (Orange)",
    scientificName: "Zephyranthes",
    description: "Charming orange rain lily that blooms after rainfall, perfect for monsoon gardens",
    growingTime: "4-6 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌺",
    features: ["Orange blooms", "Rain triggered", "Monsoon gardens", "Charming flowers"],
    category: "Rain Lilies"
  },
  {
    id: 10,
    name: "Rain Lily (Pink)",
    scientificName: "Zephyranthes",
    description: "Delicate pink rain lily that appears after rain, adding beauty to wet weather",
    growingTime: "4-6 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌸",
    features: ["Pink blooms", "Rain triggered", "Wet weather", "Delicate flowers"],
    category: "Rain Lilies"
  },
  {
    id: 11,
    name: "Rain Lily (White)",
    scientificName: "Zephyranthes",
    description: "Pure white rain lily that blooms after rainfall, symbolizing purity and freshness",
    growingTime: "4-6 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌼",
    features: ["White blooms", "Rain triggered", "Pure flowers", "Fresh look"],
    category: "Rain Lilies"
  },
  {
    id: 12,
    name: "Rain Lily (Yellow)",
    scientificName: "Zephyranthes",
    description: "Bright yellow rain lily that brings sunshine after rain, perfect for cheerful gardens",
    growingTime: "4-6 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌻",
    features: ["Yellow blooms", "Rain triggered", "Sunshine flowers", "Cheerful gardens"],
    category: "Rain Lilies"
  },
  {
    id: 13,
    name: "Spider Lily",
    scientificName: "Hymenocallis",
    description: "Unique spider lily with delicate, spider-like petals creating an exotic appearance",
    growingTime: "8-10 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹40.00",
    discount: "50% OFF",
    image: "🕷️",
    features: ["Spider-like petals", "Exotic appearance", "Unique flowers", "Delicate blooms"],
    category: "Spider Lilies"
  },
  {
    id: 14,
    name: "அடுக்கு சம்பங்கி கிழங்கு (Adaku Sampangi Kilangu)",
    scientificName: "Jasminum sambac",
    description: "Traditional jasmine bulb variety with layered growth pattern, perfect for traditional gardens",
    growingTime: "6-8 weeks",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Traditional variety", "Layered growth", "Jasmine family", "Traditional gardens"],
    category: "Traditional Jasmine"
  },
  {
    id: 15,
    name: "சம்பங்கி கிழங்கு (Sampangi Kilangu)",
    scientificName: "Jasminum sambac",
    description: "Classic jasmine bulb variety with fragrant white flowers, essential for traditional Tamil gardens",
    growingTime: "4-6 weeks",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹20.00",
    currentPrice: "₹10.00",
    discount: "50% OFF",
    image: "🌼",
    features: ["Classic variety", "Fragrant flowers", "Traditional gardens", "High yield"],
    category: "Traditional Jasmine"
  }
];

export default function FlowerSeedsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-purple-600 text-white py-26"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            className="text-6xl mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            🌸
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Flower Seeds & Bulbs
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transform your garden with our premium collection of flower seeds and bulbs for year-round beauty
          </motion.p>
          
          {/* Breadcrumb */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-pink-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/seeds" className="hover:text-white transition-colors duration-300">
              Seeds
            </Link>
            <span>→</span>
            <span className="text-white font-medium">Flower Seeds & Bulbs</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Flower Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of 15 premium flower varieties, from exotic lilies to traditional 
            jasmine bulbs. All flowers are sourced from the finest varieties, perfect for creating stunning gardens.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing all {flowerSeedsVarieties.length} products
          </div>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {flowerSeedsVarieties.map((variety, index) => (
            <motion.div
              key={variety.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center relative">
                  <motion.span 
                    className="text-6xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {variety.image}
                  </motion.span>
                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {variety.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
                    {variety.name}
                  </h3>
                  <p className="text-sm text-gray-500 italic mb-2">
                    {variety.scientificName}
                  </p>
                  <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-3">
                    {variety.description}
                  </p>
                  
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">
                      {variety.category}
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {variety.features.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Growing Info */}
                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                    <div className="text-center">
                      <div className="font-semibold text-gray-700">Growth</div>
                      <div className="text-gray-600">{variety.growingTime}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-700">Yield</div>
                      <div className="text-gray-600">{variety.yield}</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-gray-700">Climate</div>
                      <div className="text-gray-600">{variety.climate}</div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-bold text-pink-600">
                        {variety.currentPrice}
                      </div>
                      <div className="text-xs text-gray-400 line-through">
                        {variety.originalPrice}
                      </div>
                    </div>
                    <button className="px-3 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300 font-medium text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Flowers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 Sunlight</h4>
              <p className="text-gray-600 text-sm">Most flowers need 6-8 hours of sunlight daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 Watering</h4>
              <p className="text-gray-600 text-sm">Keep soil moist but not waterlogged</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 Soil</h4>
              <p className="text-gray-600 text-sm">Well-draining soil rich in organic matter</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ Temperature</h4>
              <p className="text-gray-600 text-sm">Plant according to your climate zone</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 Deadheading</h4>
              <p className="text-gray-600 text-sm">Remove spent flowers to encourage more blooms</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 Fertilizer</h4>
              <p className="text-gray-600 text-sm">Use flower-specific fertilizer during growing season</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Help Growing Flowers?
            </h3>
            <p className="text-lg text-pink-100 mb-6">
              Our AI farming assistant can provide personalized advice for your flower garden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat"
                className="inline-flex items-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="mr-2">💬</span>
                Chat with AI Assistant
              </Link>
              <Link 
                href="/seeds"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors duration-300"
              >
                <span className="mr-2">🌱</span>
                Explore More Seeds
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
