"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../../contexts/LanguageContext";

const treeVarietiesPage2 = [
  {
    id: 17,
    name: "வன்னி (Vanni)",
    scientificName: "Prosopis cineraria",
    description: "Desert tree with deep roots, excellent for arid regions",
    growingTime: "8-12 years",
    yield: "Medium",
    climate: "Arid",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Drought resistant", "Deep roots", "Arid climate", "Fodder tree"],
    category: "Desert Trees"
  },
  {
    id: 18,
    name: "வாகை (Vagai)",
    scientificName: "Albizia lebbeck",
    description: "Fast-growing shade tree with beautiful flowers and nitrogen-fixing ability",
    growingTime: "5-8 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Fast growing", "Shade tree", "Nitrogen fixing", "Beautiful flowers"],
    category: "Shade Trees"
  },
  {
    id: 19,
    name: "வில்வம் (Vilvam)",
    scientificName: "Aegle marmelos",
    description: "Sacred tree with medicinal properties, used in traditional medicine",
    growingTime: "6-8 years",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Sacred tree", "Medicinal", "Traditional use", "Religious significance"],
    category: "Sacred Trees"
  },
  {
    id: 20,
    name: "வேங்கை (Vengai)",
    scientificName: "Pterocarpus marsupium",
    description: "Valuable timber tree with medicinal bark and beautiful wood",
    growingTime: "25-30 years",
    yield: "Low",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Valuable timber", "Medicinal bark", "Beautiful wood", "Long-lived"],
    category: "Timber Trees"
  }
];

export default function TreeSeedsPage2() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20"
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
            🌳
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Tree Seeds - Page 2
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Continuing our premium tree seeds collection - specialized varieties for unique landscapes
          </motion.p>
          
          {/* Breadcrumb */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-green-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/seeds" className="hover:text-white transition-colors duration-300">
              Seeds
            </Link>
            <span>→</span>
            <Link href="/seeds/tree-seeds" className="hover:text-white transition-colors duration-300">
              Tree Seeds
            </Link>
            <span>→</span>
            <span className="text-white font-medium">Page 2</span>
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
            Specialized Tree Varieties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our specialized tree varieties including desert-adapted trees, sacred medicinal trees, 
            and premium timber varieties. Perfect for unique landscape requirements and specialized farming needs.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing 17-20 of 20 products
          </div>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {treeVarietiesPage2.map((variety, index) => (
            <motion.div
              key={variety.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center relative">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
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
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
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
                          className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
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
                      <div className="text-lg font-bold text-green-600">
                        {variety.currentPrice}
                      </div>
                      <div className="text-xs text-gray-400 line-through">
                        {variety.originalPrice}
                      </div>
                    </div>
                    <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Navigation */}
        <motion.div 
          className="flex justify-center items-center space-x-4 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Link
            href="/seeds/tree-seeds"
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium"
          >
            ← Page 1
          </Link>
          
          <div className="text-gray-500 font-medium">
            Page 2 of 2
          </div>
          
          <button
            disabled
            className="px-6 py-3 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed font-medium"
          >
            Page 2 →
          </button>
        </motion.div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Specialized Tree Growing Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🏜️ Desert Trees</h4>
              <p className="text-gray-600 text-sm">Deep watering and well-draining soil for arid climate trees</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 Sacred Trees</h4>
              <p className="text-gray-600 text-sm">Respect traditional growing methods and cultural significance</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🪵 Timber Trees</h4>
              <p className="text-gray-600 text-sm">Long-term investment requiring patience and proper spacing</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌳 Shade Trees</h4>
              <p className="text-gray-600 text-sm">Plant away from buildings and consider mature size</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 Water Management</h4>
              <p className="text-gray-600 text-sm">Adjust watering based on tree type and climate requirements</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 Soil Preparation</h4>
              <p className="text-gray-600 text-sm">Test soil and amend based on specific tree requirements</p>
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
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Complete Your Tree Collection
            </h3>
            <p className="text-lg text-green-100 mb-6">
              Explore our full range of tree seeds and get expert advice from our AI farming assistant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/seeds/tree-seeds"
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="mr-2">🌳</span>
                View All Tree Seeds
              </Link>
              <Link 
                href="/chat"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
              >
                <span className="mr-2">💬</span>
                Get Growing Advice
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
