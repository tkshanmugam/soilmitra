"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useState } from "react";

const tuberVarieties = [
  {
    id: 1,
    tamilName: "லகடோங் மஞ்சள்",
    englishName: "Lakadong Turmeric",
    scientificName: "Curcuma longa",
    description: "Premium Lakadong turmeric variety known for its high curcumin content and excellent medicinal properties",
    growingTime: "8-10 months",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🟡",
    features: ["High curcumin", "Medicinal properties", "Premium quality", "Traditional variety"]
  },
  {
    id: 2,
    tamilName: "மகிர் இஞ்சி",
    englishName: "Makhir Ginger",
    scientificName: "Zingiber officinale",
    description: "Traditional Makhir ginger variety with excellent flavor and medicinal benefits",
    growingTime: "8-10 months",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🟤",
    features: ["Traditional variety", "Excellent flavor", "Medicinal benefits", "High yield"]
  },
  {
    id: 3,
    tamilName: "சாம்பு இஞ்சி",
    englishName: "Shampoo Ginger",
    scientificName: "Zingiber zerumbet",
    description: "Unique shampoo ginger variety with aromatic properties and traditional uses",
    growingTime: "8-10 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹50.00",
    discount: "17% OFF",
    image: "🟡",
    features: ["Aromatic variety", "Traditional uses", "Unique properties", "Medium yield"]
  },
  {
    id: 4,
    tamilName: "அதலைக்காய் கிழங்கு",
    englishName: "Adalaikkai Tuber",
    scientificName: "Colocasia esculenta",
    description: "Traditional adalaikkai tuber variety perfect for traditional cooking and curries",
    growingTime: "6-8 months",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹30.00",
    discount: "25% OFF",
    image: "🥔",
    features: ["Traditional variety", "Perfect cooking", "High yield", "Authentic taste"]
  },
  {
    id: 5,
    tamilName: "ஆட்டுக் கொம்பு காவள்",
    englishName: "Goat Horn Yam",
    scientificName: "Dioscorea alata",
    description: "Unique goat horn yam variety with distinctive shape and excellent taste",
    growingTime: "8-10 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹50.00",
    discount: "17% OFF",
    image: "🥔",
    features: ["Unique shape", "Distinctive variety", "Excellent taste", "Medium yield"]
  },
  {
    id: 6,
    tamilName: "கரு இஞ்சி",
    englishName: "Black Ginger",
    scientificName: "Kaempferia parviflora",
    description: "Premium black ginger variety with high medicinal value and unique properties",
    growingTime: "8-10 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹140.00",
    currentPrice: "₹120.00",
    discount: "14% OFF",
    image: "⚫",
    features: ["Premium variety", "High medicinal value", "Unique properties", "Medium yield"]
  },
  {
    id: 7,
    tamilName: "கரு மஞ்சள் கிழங்கு",
    englishName: "Black Turmeric",
    scientificName: "Curcuma caesia",
    description: "Rare black turmeric variety with exceptional medicinal properties and unique color",
    growingTime: "8-10 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "⚫",
    features: ["Rare variety", "Exceptional properties", "Unique color", "Medium yield"]
  },
  {
    id: 8,
    tamilName: "கஸ்தூரி மஞ்சள் (ஆரஞ்சு)",
    englishName: "Kasturi Turmeric (Orange)",
    scientificName: "Curcuma aromatica",
    description: "Orange kasturi turmeric variety with aromatic properties and beautiful color",
    growingTime: "8-10 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🟠",
    features: ["Aromatic variety", "Beautiful color", "Orange variety", "Medium yield"]
  },
  {
    id: 9,
    tamilName: "கஸ்தூரி மஞ்சள் (வெள்ளை)",
    englishName: "Kasturi Turmeric (White)",
    scientificName: "Curcuma aromatica",
    description: "White kasturi turmeric variety with unique properties and traditional uses",
    growingTime: "8-10 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "⚪",
    features: ["White variety", "Unique properties", "Traditional uses", "Medium yield"]
  },
  {
    id: 10,
    tamilName: "கொடி உருளைக்கிழங்கு",
    englishName: "Climbing Potato",
    scientificName: "Solanum tuberosum",
    description: "Climbing potato variety perfect for vertical gardening and space-efficient farming",
    growingTime: "3-4 months",
    yield: "High",
    climate: "Cool",
    originalPrice: "₹80.00",
    currentPrice: "₹60.00",
    discount: "25% OFF",
    image: "🥔",
    features: ["Climbing variety", "Vertical gardening", "Space efficient", "High yield"]
  },
  {
    id: 11,
    tamilName: "நாட்டு மஞ்சள் கிழங்கு",
    englishName: "Native Turmeric",
    scientificName: "Curcuma longa",
    description: "Traditional native turmeric variety with authentic taste and medicinal properties",
    growingTime: "8-10 months",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹140.00",
    currentPrice: "₹120.00",
    discount: "14% OFF",
    image: "🟡",
    features: ["Native variety", "Authentic taste", "Medicinal properties", "High yield"]
  },
  {
    id: 12,
    tamilName: "பெரு வள்ளிக் கிழங்கு",
    englishName: "Peru Sweet Potato",
    scientificName: "Ipomoea batatas",
    description: "Peru sweet potato variety with excellent taste and high nutritional value",
    growingTime: "4-5 months",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹50.00",
    discount: "38% OFF",
    image: "🍠",
    features: ["Peru variety", "Excellent taste", "High nutrition", "High yield"]
  },
  {
    id: 13,
    tamilName: "மா இஞ்சி",
    englishName: "Mango Ginger",
    scientificName: "Curcuma amada",
    description: "Mango ginger variety with unique mango-like flavor and medicinal properties",
    growingTime: "8-10 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹70.00",
    discount: "13% OFF",
    image: "🟡",
    features: ["Mango flavor", "Unique taste", "Medicinal properties", "Medium yield"]
  },
  {
    id: 14,
    tamilName: "வெற்றிலை வள்ளிக் கிழங்கு",
    englishName: "Betel Leaf Sweet Potato",
    scientificName: "Ipomoea batatas",
    description: "Betel leaf sweet potato variety with distinctive flavor and traditional uses",
    growingTime: "4-5 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹80.00",
    currentPrice: "₹50.00",
    discount: "38% OFF",
    image: "🍠",
    features: ["Betel leaf variety", "Distinctive flavor", "Traditional uses", "Medium yield"]
  }
];

export default function TubersPage() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(tuberVarieties.length / itemsPerPage);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = tuberVarieties.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-26"
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
            🥔
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            கிழங்கு வகைகள் / Tuber Varieties
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore our premium collection of 14 authentic tuber varieties from Sree Marudhan Agro Care
          </motion.p>
          
          {/* Breadcrumb */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-orange-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/seeds" className="hover:text-white transition-colors duration-300">
              Seeds
            </Link>
            <span>→</span>
            <span className="text-white font-medium">Tubers</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Special Offer Banner */}
      <motion.div 
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 px-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-semibold">
            🎉 Special Offer: All Tuber Varieties at Discounted Prices! Limited Time Only 🎉
          </p>
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
            Why Choose Sree Marudhan Agro Care Tuber Varieties?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our authentic tuber varieties are carefully selected from traditional farming regions, 
            offering excellent underground growth, high yields, and space-efficient gardening solutions. 
            Perfect for both home gardens and commercial farming.
          </p>
        </motion.div>

        {/* Page Info */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-lg text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, tuberVarieties.length)} of {tuberVarieties.length} varieties
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Page {currentPage} of {totalPages}
          </p>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentItems.map((variety, index) => (
            <motion.div
              key={variety.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Discount Badge */}
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                    <motion.span 
                      className="text-6xl group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {variety.image}
                    </motion.span>
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {variety.discount}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {variety.tamilName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {variety.englishName}
                  </p>
                  <p className="text-xs text-gray-500 italic mb-3">
                    {variety.scientificName}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {variety.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {variety.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Growing Info */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                    <div className="text-center">
                      <div className="font-semibold text-gray-700">Growing Time</div>
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
                      <div className="text-sm text-gray-500 line-through">
                        {variety.originalPrice}
                      </div>
                      <div className="text-2xl font-bold text-red-600">
                        {variety.currentPrice}
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div 
          className="flex justify-center items-center space-x-2 mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-600 text-white hover:bg-orange-700"
            }`}
          >
            ← Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
                  currentPage === page
                    ? "bg-orange-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-orange-600 text-white hover:bg-orange-700"
            }`}
          >
            Next →
          </button>
        </motion.div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Tubers (கிழங்கு வகைகள்)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 சூரிய ஒளி / Sunlight</h4>
              <p className="text-gray-600 text-sm">கிழங்கு தாவரங்களுக்கு தினமும் 6-8 மணி நேரம் நேரடி சூரிய ஒளி தேவை</p>
              <p className="text-gray-500 text-xs mt-1">Tuber plants need 6-8 hours of direct sunlight daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 நீர்ப்பாசனம் / Watering</h4>
              <p className="text-gray-600 text-sm">மண் ஈரமாக இருக்க வேண்டும், ஆனால் நீர் தேங்கக்கூடாது</p>
              <p className="text-gray-500 text-xs mt-1">Keep soil moist but avoid waterlogging</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 மண் / Soil</h4>
              <p className="text-gray-600 text-sm">நன்கு வடிகட்டும், செழிப்பான மண், pH 6.0-7.0</p>
              <p className="text-gray-500 text-xs mt-1">Well-draining, rich soil with pH 6.0-7.0</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ வெப்பநிலை / Temperature</h4>
              <p className="text-gray-600 text-sm">சிறந்த வளர்ச்சிக்கான வெப்பநிலை: 20-30°C</p>
              <p className="text-gray-500 text-xs mt-1">Optimal growing temperature: 20-30°C</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 உரம் / Fertilizer</h4>
              <p className="text-gray-600 text-sm">வளர்ச்சியின் போது 4-6 வாரங்களுக்கு ஒரு முறை சமச்சீர் உரம்</p>
              <p className="text-gray-500 text-xs mt-1">Balanced fertilizer every 4-6 weeks during growth</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 அறுவடை / Harvesting</h4>
              <p className="text-gray-600 text-sm">கிழங்குகள் முழுமையாக வளர்ந்த பிறகு அறுவடை செய்யவும்</p>
              <p className="text-gray-500 text-xs mt-1">Harvest tubers when they are fully matured</p>
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
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              கிழங்கு வகைகள் வளர்ப்பதில் உதவி தேவையா? / Need Help Growing Tubers?
            </h3>
            <p className="text-lg text-orange-100 mb-6">
              எங்கள் AI விவசாய உதவியாளர் உங்கள் கிழங்கு தோட்டத்திற்கு தனிப்பட்ட ஆலோசனையை வழங்கும்
            </p>
            <p className="text-base text-orange-200 mb-6">
              Our AI farming assistant can provide personalized advice for your tuber garden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="mr-2">💬</span>
                AI உதவியாளருடன் பேசுங்கள் / Chat with AI Assistant
              </Link>
              <Link 
                href="/seeds"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                <span className="mr-2">🌱</span>
                மேலும் விதைகளை ஆராயுங்கள் / Explore More Seeds
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
