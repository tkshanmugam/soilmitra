"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const exoticVegetablesVarieties = [
  {
    id: 1,
    name: "Celery",
    scientificName: "Apium graveolens",
    description: "Crisp, aromatic celery stalks perfect for salads, soups, and healthy snacking",
    growingTime: "70-90 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Crisp texture", "Aromatic flavor", "Low calorie", "Rich in fiber"],
    category: "Leafy Greens"
  },
  {
    id: 2,
    name: "Chilli Hot Pepper",
    scientificName: "Capsicum annuum",
    description: "Spicy hot peppers that add intense heat and flavor to your dishes",
    growingTime: "60-80 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🌶️",
    features: ["Intense heat", "High yield", "Disease resistant", "Compact growth"],
    category: "Hot Peppers"
  },
  {
    id: 3,
    name: "Chinese Cabbage",
    scientificName: "Brassica rapa subsp. pekinensis",
    description: "Tender, mild-flavored cabbage perfect for stir-fries and Asian cuisine",
    growingTime: "50-70 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Mild flavor", "Tender leaves", "Quick growing", "Cold tolerant"],
    category: "Asian Vegetables"
  },
  {
    id: 4,
    name: "Coriander (Multi Cu...)",
    scientificName: "Coriandrum sativum",
    description: "Fresh coriander leaves and seeds for authentic Indian and international cuisine",
    growingTime: "30-45 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Fresh leaves", "Aromatic seeds", "Quick harvest", "Multiple uses"],
    category: "Herbs & Spices"
  },
  {
    id: 5,
    name: "Curley Kale",
    scientificName: "Brassica oleracea var. sabellica",
    description: "Nutrient-rich curly kale leaves perfect for healthy salads and smoothies",
    growingTime: "50-65 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Nutrient dense", "Cold hardy", "Continuous harvest", "Rich in vitamins"],
    category: "Super Greens"
  },
  {
    id: 6,
    name: "Dill",
    scientificName: "Anethum graveolens",
    description: "Aromatic dill herb perfect for pickling, fish dishes, and fresh garnishes",
    growingTime: "40-60 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Aromatic leaves", "Pickling herb", "Attracts beneficial insects", "Easy growing"],
    category: "Herbs & Spices"
  },
  {
    id: 7,
    name: "Fennel Florence",
    scientificName: "Foeniculum vulgare var. azoricum",
    description: "Sweet, anise-flavored fennel bulbs perfect for salads and Mediterranean cuisine",
    growingTime: "80-100 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Sweet flavor", "Anise taste", "Bulb formation", "Mediterranean herb"],
    category: "Mediterranean Vegetables"
  },
  {
    id: 8,
    name: "Garlic Chives",
    scientificName: "Allium tuberosum",
    description: "Mild garlic-flavored chives perfect for Asian cooking and garnishes",
    growingTime: "60-80 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Garlic flavor", "Perennial growth", "Easy maintenance", "Continuous harvest"],
    category: "Asian Herbs"
  },
  {
    id: 9,
    name: "German Chamomile",
    scientificName: "Matricaria chamomilla",
    description: "Calming chamomile flowers perfect for herbal teas and natural remedies",
    growingTime: "60-80 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌸",
    features: ["Calming tea", "Medicinal herb", "Attracts pollinators", "Drought tolerant"],
    category: "Medicinal Herbs"
  },
  {
    id: 10,
    name: "Lavender",
    scientificName: "Lavandula angustifolia",
    description: "Fragrant lavender flowers perfect for aromatherapy, tea, and garden beauty",
    growingTime: "90-120 days",
    yield: "Medium",
    climate: "Mediterranean",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌸",
    features: ["Fragrant flowers", "Aromatherapy", "Drought resistant", "Perennial"],
    category: "Aromatic Herbs"
  },
  {
    id: 11,
    name: "Lemon Balm",
    scientificName: "Melissa officinalis",
    description: "Lemon-scented herb perfect for calming teas and natural stress relief",
    growingTime: "60-80 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Lemon scent", "Calming herb", "Easy growing", "Perennial"],
    category: "Medicinal Herbs"
  },
  {
    id: 12,
    name: "Lemon Basil",
    scientificName: "Ocimum basilicum var. citriodorum",
    description: "Citrus-scented basil perfect for Thai cuisine and refreshing dishes",
    growingTime: "40-60 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Lemon flavor", "Thai cuisine", "Fast growing", "Aromatic"],
    category: "Asian Herbs"
  },
  {
    id: 13,
    name: "Lettuce (Iceberg)",
    scientificName: "Lactuca sativa",
    description: "Crisp, refreshing iceberg lettuce perfect for salads and sandwiches",
    growingTime: "50-70 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Crisp texture", "Mild flavor", "Heat tolerant", "Quick harvest"],
    category: "Salad Greens"
  },
  {
    id: 14,
    name: "Lettuce (Lolla Rosa...)",
    scientificName: "Lactuca sativa",
    description: "Beautiful red-tipped lettuce with tender leaves and mild flavor",
    growingTime: "45-65 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Red tips", "Tender leaves", "Ornamental", "Mild flavor"],
    category: "Salad Greens"
  },
  {
    id: 15,
    name: "Muskmelon (Punjab S...)",
    scientificName: "Cucumis melo",
    description: "Sweet, aromatic muskmelon perfect for summer desserts and fresh eating",
    growingTime: "80-100 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🍈",
    features: ["Sweet flavor", "Aromatic", "High yield", "Summer fruit"],
    category: "Melons"
  },
  {
    id: 16,
    name: "Oregano",
    scientificName: "Origanum vulgare",
    description: "Aromatic Mediterranean herb perfect for Italian cuisine and pizza",
    growingTime: "60-80 days",
    yield: "Medium",
    climate: "Mediterranean",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Mediterranean herb", "Italian cuisine", "Drought tolerant", "Perennial"],
    category: "Mediterranean Herbs"
  },
  {
    id: 17,
    name: "Pak Choi",
    scientificName: "Brassica rapa subsp. chinensis",
    description: "Tender Asian cabbage with white stems and dark green leaves, perfect for stir-fries",
    growingTime: "45-60 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Asian vegetable", "Tender stems", "Quick growing", "Cold tolerant"],
    category: "Asian Vegetables"
  },
  {
    id: 18,
    name: "Parsley",
    scientificName: "Petroselinum crispum",
    description: "Fresh, aromatic parsley perfect for garnishing and adding flavor to dishes",
    growingTime: "70-90 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Fresh garnish", "Aromatic flavor", "Rich in vitamins", "Easy growing"],
    category: "Herbs & Spices"
  },
  {
    id: 19,
    name: "Redlady Papaya",
    scientificName: "Carica papaya",
    description: "Sweet, red-fleshed papaya perfect for tropical gardens and fresh eating",
    growingTime: "8-12 months",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹100.00",
    currentPrice: "₹90.00",
    discount: "10% OFF",
    image: "🥭",
    features: ["Red flesh", "Sweet flavor", "Tropical fruit", "High yield"],
    category: "Tropical Fruits"
  },
  {
    id: 20,
    name: "Rosemary",
    scientificName: "Salvia rosmarinus",
    description: "Aromatic Mediterranean herb perfect for meat dishes and Mediterranean cuisine",
    growingTime: "90-120 days",
    yield: "Medium",
    climate: "Mediterranean",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Mediterranean herb", "Aromatic leaves", "Drought tolerant", "Perennial"],
    category: "Mediterranean Herbs"
  },
  {
    id: 21,
    name: "Spring Onion",
    scientificName: "Allium fistulosum",
    description: "Fresh green onions perfect for garnishing and adding mild onion flavor",
    growingTime: "60-80 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🧅",
    features: ["Mild flavor", "Quick harvest", "Continuous cutting", "Easy growing"],
    category: "Allium Vegetables"
  },
  {
    id: 22,
    name: "Squash Round (Green...)",
    scientificName: "Cucurbita pepo",
    description: "Round green squash perfect for stuffing, roasting, and summer dishes",
    growingTime: "50-70 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🎃",
    features: ["Round shape", "Green skin", "Versatile cooking", "High yield"],
    category: "Summer Squash"
  },
  {
    id: 23,
    name: "Squash Round (Yello...)",
    scientificName: "Cucurbita pepo",
    description: "Round yellow squash with sweet, tender flesh perfect for various dishes",
    growingTime: "50-70 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🎃",
    features: ["Yellow skin", "Sweet flavor", "Tender flesh", "Quick growing"],
    category: "Summer Squash"
  },
  {
    id: 24,
    name: "Strawberry",
    scientificName: "Fragaria × ananassa",
    description: "Sweet, juicy strawberries perfect for desserts, jams, and fresh eating",
    growingTime: "60-90 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹70.00",
    discount: "12.5% OFF",
    image: "🍓",
    features: ["Sweet berries", "Juicy flesh", "Perennial plant", "Runner propagation"],
    category: "Berries"
  },
  {
    id: 25,
    name: "Watercress",
    scientificName: "Nasturtium officinale",
    description: "Peppery watercress perfect for salads, sandwiches, and garnishing",
    growingTime: "40-60 days",
    yield: "Medium",
    climate: "Temperate",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🥬",
    features: ["Peppery taste", "Nutrient rich", "Water loving", "Quick harvest"],
    category: "Water Vegetables"
  },
  {
    id: 26,
    name: "Watermelon (Sugar B...)",
    scientificName: "Citrullus lanatus",
    description: "Sweet, juicy watermelon perfect for summer refreshment and desserts",
    growingTime: "80-100 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🍉",
    features: ["Sweet flavor", "Juicy flesh", "Summer fruit", "High yield"],
    category: "Melons"
  },
  {
    id: 27,
    name: "Watermelon (Sugar B...)",
    scientificName: "Citrullus lanatus",
    description: "Sweet, juicy watermelon perfect for summer refreshment and desserts",
    growingTime: "80-100 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🍉",
    features: ["Sweet flavor", "Juicy flesh", "Summer fruit", "High yield"],
    category: "Melons"
  },
  {
    id: 28,
    name: "Zucchini",
    scientificName: "Cucurbita pepo",
    description: "Versatile green zucchini perfect for grilling, baking, and various dishes",
    growingTime: "45-65 days",
    yield: "High",
    climate: "Temperate",
    originalPrice: "₹60.00",
    currentPrice: "₹45.00",
    discount: "25% OFF",
    image: "🥒",
    features: ["Green skin", "Versatile cooking", "Quick growing", "High yield"],
    category: "Summer Squash"
  }
];

const itemsPerPage = 12;

export default function ExoticVegetablesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(exoticVegetablesVarieties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVarieties = exoticVegetablesVarieties.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20"
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
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Exotic Vegetables Collection
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover unique and rare vegetable varieties from around the world for your garden
          </motion.p>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-10 left-10 text-4xl opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          🥑
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
          🥬
        </motion.div>
      </motion.div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-700 hover:text-purple-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/seeds" className="text-gray-700 hover:text-purple-600">
                  Seeds
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-purple-600 font-medium">Exotic Vegetables</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Exotic Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of 28 exotic vegetables, herbs, and unique varieties from around the world. 
            From Mediterranean herbs to Asian specialties, discover flavors that will transform your garden and kitchen.
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentVarieties.map((variety, index) => (
            <motion.div
              key={variety.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Discount Badge */}
                {variety.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    {variety.discount}
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  {variety.category}
                </div>

                <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <motion.span 
                    className="text-5xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {variety.image}
                  </motion.span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {variety.name}
                  </h3>
                  <p className="text-sm text-gray-500 italic mb-2">
                    {variety.scientificName}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {variety.description}
                  </p>
                  
                  {/* Growing Info */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="text-center bg-purple-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">Time</div>
                      <div className="text-gray-600">{variety.growingTime}</div>
                    </div>
                    <div className="text-center bg-pink-50 p-2 rounded">
                      <div className="font-semibold text-pink-700">Yield</div>
                      <div className="text-gray-600">{variety.yield}</div>
                    </div>
                    <div className="text-center bg-purple-50 p-2 rounded">
                      <div className="font-semibold text-purple-700">Climate</div>
                      <div className="text-gray-600">{variety.climate}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {variety.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">
                        {variety.currentPrice}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {variety.originalPrice}
                      </span>
                    </div>
                  </div>

                  <motion.button 
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center space-x-2 mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  currentPage === page
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-600 border border-purple-300 hover:bg-purple-50"
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Next
            </button>
          </motion.div>
        )}
      </div>

      {/* Growing Tips */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Growing Tips for Exotic Vegetables
            </h3>
            <p className="text-lg text-gray-600">
              Expert advice to help your exotic vegetables thrive
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Start Early</h4>
              <p className="text-gray-600">Many exotic varieties need longer growing seasons. Start seeds indoors 6-8 weeks before last frost.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Temperature Control</h4>
              <p className="text-gray-600">Monitor soil and air temperatures. Most exotic vegetables prefer consistent, moderate temperatures.</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💧</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Proper Watering</h4>
              <p className="text-gray-600">Maintain consistent moisture. Many exotic varieties are sensitive to both drought and waterlogging.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="text-center py-16"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Explore Exotic Flavors?
          </h3>
          <p className="text-lg text-purple-100 mb-6">
            Transform your garden with unique vegetables from around the world. Get expert advice from our AI farming assistant!
          </p>
          <Link 
            href="/chat"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            <span className="mr-2">💬</span>
            Chat with AI Assistant
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
