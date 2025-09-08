"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useState } from "react";

const spinachGreensVarieties = [
  {
    id: 1,
    name: "அகத்தி (சிவப்பு) (Red Agathi)",
    scientificName: "Sesbania grandiflora",
    description: "Red variety of agathi leaves, rich in protein and minerals, perfect for traditional cooking",
    growingTime: "45-60 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["High protein", "Rich in minerals", "Traditional use", "Fast growing"],
    category: "Leafy Greens"
  },
  {
    id: 2,
    name: "அகத்தி (வெள்ளை) (White Agathi)",
    scientificName: "Sesbania grandiflora",
    description: "White variety of agathi leaves, excellent source of nutrition for healthy living",
    growingTime: "45-60 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["High nutrition", "White variety", "Traditional use", "Fast growing"],
    category: "Leafy Greens"
  },
  {
    id: 3,
    name: "அரைக்கீரை (சிறியது) (Small Arai Keerai)",
    scientificName: "Amaranthus viridis",
    description: "Small variety of arai keerai, tender leaves perfect for daily consumption",
    growingTime: "30-40 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Tender leaves", "Daily consumption", "Small variety", "Quick harvest"],
    category: "Leafy Greens"
  },
  {
    id: 4,
    name: "அரைக்கீரை (பெரியது) (Large Arai Keerai)",
    scientificName: "Amaranthus viridis",
    description: "Large variety of arai keerai, bigger leaves for hearty meals and traditional dishes",
    growingTime: "35-45 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Large leaves", "Hearty meals", "Traditional dishes", "High yield"],
    category: "Leafy Greens"
  },
  {
    id: 5,
    name: "காசினி கீரை (Kasini Keerai)",
    scientificName: "Cichorium intybus",
    description: "Traditional kasini keerai with medicinal properties, excellent for health-conscious cooking",
    growingTime: "40-50 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Medicinal", "Health conscious", "Traditional", "Nutritious"],
    category: "Medicinal Greens"
  },
  {
    id: 6,
    name: "சக்ரவர்த்தி கீரை (Chakravarthy Keerai)",
    scientificName: "Alternanthera sessilis",
    description: "Royal variety of keerai, known for its exceptional taste and nutritional value",
    growingTime: "35-45 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Royal variety", "Exceptional taste", "High nutrition", "Traditional"],
    category: "Premium Greens"
  },
  {
    id: 7,
    name: "சிறுகீரை (சிவப்பு) (Red Siru Keerai)",
    scientificName: "Amaranthus tricolor",
    description: "Red variety of siru keerai, vibrant color and rich in antioxidants",
    growingTime: "30-40 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Red variety", "Rich in antioxidants", "Vibrant color", "Quick growing"],
    category: "Colored Greens"
  },
  {
    id: 8,
    name: "சிறுகீரை (பச்சை) (Green Siru Keerai)",
    scientificName: "Amaranthus tricolor",
    description: "Green variety of siru keerai, classic taste and perfect for traditional recipes",
    growingTime: "30-40 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Green variety", "Classic taste", "Traditional recipes", "Quick growing"],
    category: "Colored Greens"
  },
  {
    id: 9,
    name: "சுக்கான் கீரை (Sukkan Keerai)",
    scientificName: "Trianthema portulacastrum",
    description: "Traditional sukkun keerai, known for its unique flavor and health benefits",
    growingTime: "35-45 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Unique flavor", "Health benefits", "Traditional", "Medium yield"],
    category: "Traditional Greens"
  },
  {
    id: 10,
    name: "செங்கீரை (சிவப்பு) (Red Sen Keerai)",
    scientificName: "Amaranthus cruentus",
    description: "Red variety of sen keerai, beautiful color and excellent nutritional profile",
    growingTime: "35-45 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Red variety", "Beautiful color", "High nutrition", "High yield"],
    category: "Colored Greens"
  },
  {
    id: 11,
    name: "செங்கீரை (பச்சை, சிவப்பு) (Green-Red Sen Keerai)",
    scientificName: "Amaranthus cruentus",
    description: "Mixed green-red variety of sen keerai, combining the best of both colors",
    growingTime: "35-45 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Mixed colors", "Best of both", "High yield", "Attractive"],
    category: "Colored Greens"
  },
  {
    id: 12,
    name: "தண்டுக்கீரை (சிவப்பு) (Red Thandu Keerai)",
    scientificName: "Amaranthus tricolor",
    description: "Red variety of thandu keerai, tender stems and leaves for delicious curries",
    growingTime: "40-50 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Red variety", "Tender stems", "Delicious curries", "Medium yield"],
    category: "Stem Greens"
  },
  {
    id: 13,
    name: "தண்டுக்கீரை (பச்சை) (Green Thandu Keerai)",
    scientificName: "Amaranthus tricolor",
    description: "Green variety of thandu keerai, classic green stems perfect for traditional dishes",
    growingTime: "40-50 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Green variety", "Classic green", "Traditional dishes", "Medium yield"],
    category: "Stem Greens"
  },
  {
    id: 14,
    name: "நாட்டுக் கொத்தமல்லி (Native Coriander)",
    scientificName: "Coriandrum sativum",
    description: "Traditional native coriander variety, aromatic leaves perfect for garnishing and cooking",
    growingTime: "25-35 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Aromatic leaves", "Garnishing", "Traditional variety", "Quick growing"],
    category: "Herb Greens"
  },
  {
    id: 15,
    name: "பசலைக்கீரை (Pasalai Keerai)",
    scientificName: "Basella alba",
    description: "Traditional pasalai keerai, also known as Malabar spinach, excellent for healthy cooking",
    growingTime: "45-55 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Malabar spinach", "Healthy cooking", "Traditional", "High yield"],
    category: "Traditional Greens"
  },
  {
    id: 16,
    name: "பருப்புக் கீரை (Paruppu Keerai)",
    scientificName: "Vigna unguiculata",
    description: "Traditional paruppu keerai, legume leaves rich in protein and perfect for nutritious meals",
    growingTime: "40-50 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Legume leaves", "Rich in protein", "Nutritious meals", "Traditional"],
    category: "Protein Greens"
  },
  {
    id: 17,
    name: "பாலக்கீரை (Palak Keerai)",
    scientificName: "Spinacia oleracea",
    description: "Traditional palak keerai, rich in iron and perfect for healthy cooking and traditional dishes",
    growingTime: "35-45 days",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Rich in iron", "Healthy cooking", "Traditional dishes", "High yield"],
    category: "Iron-Rich Greens"
  },
  {
    id: 18,
    name: "புதினா (Mint)",
    scientificName: "Mentha spicata",
    description: "Aromatic mint leaves, perfect for garnishing, chutneys, and refreshing beverages",
    growingTime: "30-40 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🌿",
    features: ["Aromatic leaves", "Garnishing", "Chutneys", "Refreshing"],
    category: "Aromatic Herbs"
  },
  {
    id: 19,
    name: "புளிச்சகீரை (பச்சை) (Green Puli Keerai)",
    scientificName: "Gongura",
    description: "Green variety of puli keerai, tangy flavor perfect for traditional recipes and pickles",
    growingTime: "40-50 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Tangy flavor", "Traditional recipes", "Pickles", "Green variety"],
    category: "Tangy Greens"
  },
  {
    id: 20,
    name: "புளிச்சகீரை (பச்சை) (Green Puli Keerai) - Duplicate",
    scientificName: "Gongura",
    description: "Green variety of puli keerai, tangy flavor perfect for traditional recipes and pickles",
    growingTime: "40-50 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Tangy flavor", "Traditional recipes", "Pickles", "Green variety"],
    category: "Tangy Greens"
  },
  {
    id: 21,
    name: "மயில் தண்டுக்கீரை (Mayil Thandu Keerai)",
    scientificName: "Amaranthus tricolor",
    description: "Peacock variety of thandu keerai, beautiful colored stems and leaves for attractive dishes",
    growingTime: "40-50 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Peacock variety", "Beautiful colors", "Attractive dishes", "Medium yield"],
    category: "Colored Greens"
  },
  {
    id: 22,
    name: "முளைக்கீரை (சிவப்பு) (Red Mulai Keerai)",
    scientificName: "Amaranthus tricolor",
    description: "Red variety of mulai keerai, vibrant red leaves rich in antioxidants and perfect for salads",
    growingTime: "30-40 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Red variety", "Rich in antioxidants", "Perfect for salads", "Quick growing"],
    category: "Colored Greens"
  },
  {
    id: 23,
    name: "முளைக்கீரை (பச்சை) (Green Mulai Keerai)",
    scientificName: "Amaranthus tricolor",
    description: "Green variety of mulai keerai, classic green leaves perfect for traditional cooking",
    growingTime: "30-40 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Green variety", "Classic green", "Traditional cooking", "Quick growing"],
    category: "Colored Greens"
  },
  {
    id: 24,
    name: "வெந்தயக் கீரை (Vendhaya Keerai)",
    scientificName: "Trigonella foenum-graecum",
    description: "Traditional vendhaya keerai, fenugreek leaves with unique flavor and medicinal properties",
    growingTime: "25-35 days",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Fenugreek leaves", "Unique flavor", "Medicinal properties", "Quick growing"],
    category: "Medicinal Greens"
  }
];

const itemsPerPage = 12;

export default function SpinachGreensPage() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(spinachGreensVarieties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVarieties = spinachGreensVarieties.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 text-white py-26"
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
            🥬
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Spinach & Greens
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Discover our premium collection of nutritious spinach and leafy greens for healthy living
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
            <span className="text-white font-medium">Spinach & Greens</span>
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
            Premium Spinach & Greens Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of 24 premium spinach and leafy green varieties, from traditional 
            Tamil varieties to modern nutritious greens. All seeds are sourced from the finest native varieties.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing {startIndex + 1}-{Math.min(endIndex, spinachGreensVarieties.length)} of {spinachGreensVarieties.length} products
          </div>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {currentVarieties.map((variety, index) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center space-x-2 mb-16"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  currentPage === page
                    ? 'bg-green-600 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Spinach & Greens
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 Sunlight</h4>
              <p className="text-gray-600 text-sm">Most greens prefer partial sun to full sun</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 Watering</h4>
              <p className="text-gray-600 text-sm">Keep soil consistently moist but not waterlogged</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 Soil</h4>
              <p className="text-gray-600 text-sm">Rich, well-draining soil with good organic matter</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ Temperature</h4>
              <p className="text-gray-600 text-sm">Most greens grow best in cool to warm temperatures</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 Harvesting</h4>
              <p className="text-gray-600 text-sm">Harvest outer leaves first for continuous growth</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 Fertilizer</h4>
              <p className="text-gray-600 text-sm">Use nitrogen-rich fertilizer for leafy growth</p>
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
              Need Help Growing Greens?
            </h3>
            <p className="text-lg text-green-100 mb-6">
              Our AI farming assistant can provide personalized advice for your spinach and greens garden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat"
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="mr-2">💬</span>
                Chat with AI Assistant
              </Link>
              <Link 
                href="/seeds"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
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
