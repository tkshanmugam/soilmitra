"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useState } from "react";

const herbVarieties = [
  {
    id: 1,
    tamilName: "அவுரி",
    englishName: "Auri",
    scientificName: "Senna auriculata",
    description: "Traditional auri herb variety known for its medicinal properties and traditional uses in Ayurveda",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Medicinal herb", "Traditional uses", "Ayurvedic properties", "Medium yield"]
  },
  {
    id: 2,
    tamilName: "ஆவாரை",
    englishName: "Avarai",
    scientificName: "Cassia auriculata",
    description: "Avarai herb variety with excellent medicinal properties and traditional healing benefits",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Medicinal herb", "Traditional healing", "Excellent properties", "Medium yield"]
  },
  {
    id: 3,
    tamilName: "இனிப்புத் துளசி",
    englishName: "Sweet Basil",
    scientificName: "Ocimum basilicum",
    description: "Sweet basil variety with aromatic leaves perfect for culinary and medicinal purposes",
    growingTime: "2-3 months",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Sweet variety", "Aromatic leaves", "Culinary herb", "High yield"]
  },
  {
    id: 4,
    tamilName: "கரிசலாங்கண்ணி (வெள்ளை)",
    englishName: "Karishalanganni (White)",
    scientificName: "Eclipta alba",
    description: "White karishalanganni variety with excellent medicinal properties and traditional uses",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["White variety", "Medicinal properties", "Traditional uses", "Medium yield"]
  },
  {
    id: 5,
    tamilName: "திருநீற்றுப் பச்சிலை",
    englishName: "Tiruneerru Pachilai",
    scientificName: "Achyranthes aspera",
    description: "Traditional tiruneerru pachilai herb with unique properties and cultural significance",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Traditional herb", "Unique properties", "Cultural significance", "Medium yield"]
  },
  {
    id: 6,
    tamilName: "துளசி",
    englishName: "Tulsi",
    scientificName: "Ocimum tenuiflorum",
    description: "Sacred tulsi herb variety with spiritual significance and excellent medicinal properties",
    growingTime: "2-3 months",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Sacred herb", "Spiritual significance", "Medicinal properties", "High yield"]
  },
  {
    id: 7,
    tamilName: "நீர்முள்ளி",
    englishName: "Neermulli",
    scientificName: "Achyranthes aspera",
    description: "Neermulli herb variety with excellent water-based medicinal properties and traditional uses",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Water-based herb", "Medicinal properties", "Traditional uses", "Medium yield"]
  },
  {
    id: 8,
    tamilName: "நெற்பவளம்",
    englishName: "Nerpavalam",
    scientificName: "Achyranthes aspera",
    description: "Nerpavalam herb variety with unique properties and excellent traditional medicinal benefits",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Unique herb", "Traditional benefits", "Medicinal properties", "Medium yield"]
  },
  {
    id: 9,
    tamilName: "பூனைக்காலி (கருப்பு)",
    englishName: "Poonaikkali (Black)",
    scientificName: "Achyranthes aspera",
    description: "Black poonaikkali herb variety with distinctive color and excellent medicinal properties",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Black variety", "Distinctive color", "Medicinal properties", "Medium yield"]
  },
  {
    id: 10,
    tamilName: "பூனைக்காலி (வெள்ளை)",
    englishName: "Poonaikkali (White)",
    scientificName: "Achyranthes aspera",
    description: "White poonaikkali herb variety with beautiful appearance and traditional medicinal uses",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["White variety", "Beautiful appearance", "Traditional uses", "Medium yield"]
  },
  {
    id: 11,
    tamilName: "முடக்கத்தான்",
    englishName: "Mudakkathan",
    scientificName: "Cardiospermum halicacabum",
    description: "Mudakkathan herb variety with unique medicinal properties and traditional healing benefits",
    growingTime: "3-4 months",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Unique herb", "Medicinal properties", "Traditional healing", "Medium yield"]
  }
];

export default function HerbsPage() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(herbVarieties.length / itemsPerPage);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = herbVarieties.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-26"
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
            🌿
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            மூலிகை விதைகள் / Herb Seeds
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore our premium collection of 11 authentic herb varieties from Sree Marudhan Agro Care
          </motion.p>
          
          {/* Breadcrumb */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-emerald-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/seeds" className="hover:text-white transition-colors duration-300">
              Seeds
            </Link>
            <span>→</span>
            <span className="text-white font-medium">Herbs</span>
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
            🎉 Special Offer: All Herb Varieties at 50% OFF! Limited Time Only 🎉
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
            Why Choose Sree Marudhan Agro Care Herb Varieties?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our authentic herb varieties are carefully selected from traditional farming regions, 
            offering excellent medicinal properties, aromatic qualities, and traditional healing benefits. 
            Perfect for both home gardens and commercial herb farming.
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
            Showing {startIndex + 1}-{Math.min(endIndex, herbVarieties.length)} of {herbVarieties.length} varieties
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
                  <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
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
                          className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
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
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 font-medium">
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
                : "bg-emerald-600 text-white hover:bg-emerald-700"
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
                    ? "bg-emerald-600 text-white"
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
                : "bg-emerald-600 text-white hover:bg-emerald-700"
            }`}
          >
            Next →
          </button>
        </motion.div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Herbs (மூலிகை வகைகள்)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 சூரிய ஒளி / Sunlight</h4>
              <p className="text-gray-600 text-sm">மூலிகை தாவரங்களுக்கு தினமும் 4-6 மணி நேரம் நேரடி சூரிய ஒளி தேவை</p>
              <p className="text-gray-500 text-xs mt-1">Herb plants need 4-6 hours of direct sunlight daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 நீர்ப்பாசனம் / Watering</h4>
              <p className="text-gray-600 text-sm">மண் ஈரமாக இருக்க வேண்டும், ஆனால் நீர் தேங்கக்கூடாது</p>
              <p className="text-gray-500 text-xs mt-1">Keep soil moist but avoid waterlogging</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 மண் / Soil</h4>
              <p className="text-gray-600 text-sm">நன்கு வடிகட்டும், செழிப்பான மண், pH 6.0-7.5</p>
              <p className="text-gray-500 text-xs mt-1">Well-draining, rich soil with pH 6.0-7.5</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ வெப்பநிலை / Temperature</h4>
              <p className="text-gray-600 text-sm">சிறந்த வளர்ச்சிக்கான வெப்பநிலை: 18-28°C</p>
              <p className="text-gray-500 text-xs mt-1">Optimal growing temperature: 18-28°C</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 உரம் / Fertilizer</h4>
              <p className="text-gray-600 text-sm">வளர்ச்சியின் போது 3-4 வாரங்களுக்கு ஒரு முறை சமச்சீர் உரம்</p>
              <p className="text-gray-500 text-xs mt-1">Balanced fertilizer every 3-4 weeks during growth</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 அறுவடை / Harvesting</h4>
              <p className="text-gray-600 text-sm">மூலிகைகளை பூப்பதற்கு முன் அறுவடை செய்யவும்</p>
              <p className="text-gray-500 text-xs mt-1">Harvest herbs before they start flowering</p>
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
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              மூலிகை வகைகள் வளர்ப்பதில் உதவி தேவையா? / Need Help Growing Herbs?
            </h3>
            <p className="text-lg text-emerald-100 mb-6">
              எங்கள் AI விவசாய உதவியாளர் உங்கள் மூலிகை தோட்டத்திற்கு தனிப்பட்ட ஆலோசனையை வழங்கும்
            </p>
            <p className="text-base text-emerald-200 mb-6">
              Our AI farming assistant can provide personalized advice for your herb garden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat"
                className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="mr-2">💬</span>
                AI உதவியாளருடன் பேசுங்கள் / Chat with AI Assistant
              </Link>
              <Link 
                href="/seeds"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors duration-300"
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
