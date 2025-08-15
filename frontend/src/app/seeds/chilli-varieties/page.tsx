"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";

const chilliVarieties = [
  {
    id: 1,
    tamilName: "காந்தாரி மிளகாய்",
    englishName: "Kandhari Chilli",
    scientificName: "Capsicum annuum",
    description: "Traditional variety known for its intense heat and authentic flavor, perfect for traditional cooking",
    growingTime: "80-90 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌶️",
    features: ["Intense heat", "Traditional variety", "Authentic flavor", "High yield"]
  },
  {
    id: 2,
    tamilName: "குடை மிளகாய் (ஆரஞ்சு)",
    englishName: "Kudai Chilli (Orange)",
    scientificName: "Capsicum annuum",
    description: "Umbrella-shaped orange chilli with unique appearance and medium heat level",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹40.00",
    discount: "33% OFF",
    image: "🌶️",
    features: ["Umbrella shape", "Orange color", "Medium heat", "Unique appearance"]
  },
  {
    id: 3,
    tamilName: "குடை மிளகாய் (ஊதா)",
    englishName: "Kudai Chilli (Purple)",
    scientificName: "Capsicum annuum",
    description: "Purple umbrella-shaped chilli variety with distinctive color and flavor",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹40.00",
    discount: "33% OFF",
    image: "🌶️",
    features: ["Umbrella shape", "Purple color", "Medium heat", "Distinctive flavor"]
  },
  {
    id: 4,
    tamilName: "குடை மிளகாய் (சிவப்பு)",
    englishName: "Kudai Chilli (Red)",
    scientificName: "Capsicum annuum",
    description: "Red umbrella-shaped chilli with classic heat and traditional cooking qualities",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹40.00",
    discount: "33% OFF",
    image: "🌶️",
    features: ["Umbrella shape", "Red color", "Classic heat", "Traditional cooking"]
  },
  {
    id: 5,
    tamilName: "குடை மிளகாய் (பச்சை)",
    englishName: "Kudai Chilli (Green)",
    scientificName: "Capsicum annuum",
    description: "Green umbrella-shaped chilli perfect for fresh use and daily cooking",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌶️",
    features: ["Umbrella shape", "Green color", "Fresh use", "Daily cooking"]
  },
  {
    id: 6,
    tamilName: "குடை மிளகாய் (மஞ்சள்)",
    englishName: "Kudai Chilli (Yellow)",
    scientificName: "Capsicum annuum",
    description: "Yellow umbrella-shaped chilli with mild heat and beautiful appearance",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹40.00",
    discount: "33% OFF",
    image: "🌶️",
    features: ["Umbrella shape", "Yellow color", "Mild heat", "Beautiful appearance"]
  },
  {
    id: 7,
    tamilName: "குண்டு மிளகாய்",
    englishName: "Kundu Chilli",
    scientificName: "Capsicum annuum",
    description: "Round chilli variety with compact shape, perfect for stuffing and pickling",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌶️",
    features: ["Round shape", "Compact size", "Perfect for stuffing", "High yield"]
  },
  {
    id: 8,
    tamilName: "நீள மிளகாய்",
    englishName: "Neela Chilli",
    scientificName: "Capsicum annuum",
    description: "Long chilli variety ideal for slicing, drying, and powder making",
    growingTime: "75-85 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌶️",
    features: ["Long shape", "Perfect for drying", "High yield", "Powder making"]
  },
  {
    id: 9,
    tamilName: "நெய் மிளகாய் (சிவப்பு)",
    englishName: "Ney Chilli (Red)",
    scientificName: "Capsicum annuum",
    description: "Premium red chilli variety with rich flavor, currently out of stock",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹40.00",
    discount: "33% OFF",
    stockStatus: "Out of Stock",
    image: "🌶️",
    features: ["Premium quality", "Rich flavor", "Red variety", "High quality"]
  },
  {
    id: 10,
    tamilName: "பஜ்ஜி மிளகாய்",
    englishName: "Bajji Chilli",
    scientificName: "Capsicum annuum",
    description: "Perfect chilli variety for making bajjis and fritters, with ideal size and heat",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌶️",
    features: ["Perfect for bajjis", "Ideal size", "Medium heat", "High yield"]
  }
];

export default function ChilliVarietiesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white py-20"
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
            🌶️
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            மிளகாய் வகைகள் / Chilli Varieties
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore our premium collection of 10 authentic chilli varieties from Sree Marudhan Agro Care
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
            <span className="text-white font-medium">Chilli Varieties</span>
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
            🎉 Special Offer: All Chilli Varieties at 33-50% OFF! Limited Time Only 🎉
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
            Why Choose Sree Marudhan Agro Care Chilli Varieties?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our authentic chilli seeds are carefully selected from traditional farming regions, 
            offering a wide range of heat levels, colors, and flavors. Perfect for both home gardens and commercial farming.
          </p>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {chilliVarieties.map((variety, index) => (
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
                  <div className="h-48 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
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
                  {variety.stockStatus && (
                    <div className="absolute top-2 left-2 bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {variety.stockStatus}
                    </div>
                  )}
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
                    <button 
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        variety.stockStatus === "Out of Stock" 
                          ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
                          : "bg-orange-600 text-white hover:bg-orange-700"
                      }`}
                      disabled={variety.stockStatus === "Out of Stock"}
                    >
                      {variety.stockStatus === "Out of Stock" ? "Out of Stock" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Chilli (மிளகாய்)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 சூரிய ஒளி / Sunlight</h4>
              <p className="text-gray-600 text-sm">மிளகாய்க்கு தினமும் 6-8 மணி நேரம் நேரடி சூரிய ஒளி தேவை</p>
              <p className="text-gray-500 text-xs mt-1">Chillies need 6-8 hours of direct sunlight daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 நீர்ப்பாசனம் / Watering</h4>
              <p className="text-gray-600 text-sm">மண் ஈரமாக இருக்க வேண்டும், அதிகமாக தண்ணீர் ஊற்ற வேண்டாம்</p>
              <p className="text-gray-500 text-xs mt-1">Keep soil consistently moist, avoid overwatering</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 மண் / Soil</h4>
              <p className="text-gray-600 text-sm">நன்கு வடிகட்டும், செழிப்பான மண், pH 6.0-7.0</p>
              <p className="text-gray-500 text-xs mt-1">Well-draining, rich soil with pH 6.0-7.0</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ வெப்பநிலை / Temperature</h4>
              <p className="text-gray-600 text-sm">சிறந்த வளர்ச்சிக்கான வெப்பநிலை: 21-29°C</p>
              <p className="text-gray-500 text-xs mt-1">Optimal growing temperature: 21-29°C</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 ஆதரவு / Support</h4>
              <p className="text-gray-600 text-sm">தாவரங்கள் உயரமாக வளரும்போது ஆதரவுக்கு கம்பங்களைப் பயன்படுத்தவும்</p>
              <p className="text-gray-500 text-xs mt-1">Use stakes for support as plants grow tall</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 உரம் / Fertilizer</h4>
              <p className="text-gray-600 text-sm">வளர்ச்சியின் போது 2-3 வாரங்களுக்கு ஒரு முறை சமச்சீர் உரம்</p>
              <p className="text-gray-500 text-xs mt-1">Balanced fertilizer every 2-3 weeks during growth</p>
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
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              மிளகாய் வளர்ப்பதில் உதவி தேவையா? / Need Help Growing Chilli?
            </h3>
            <p className="text-lg text-orange-100 mb-6">
              எங்கள் AI விவசாய உதவியாளர் உங்கள் மிளகாய் தோட்டத்திற்கு தனிப்பட்ட ஆலோசனையை வழங்கும்
            </p>
            <p className="text-base text-orange-200 mb-6">
              Our AI farming assistant can provide personalized advice for your chilli garden
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
