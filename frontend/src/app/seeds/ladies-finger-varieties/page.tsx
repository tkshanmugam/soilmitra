"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";

const ladiesFingerVarieties = [
  {
    id: 1,
    tamilName: "கஸ்தூரி வெண்டை",
    englishName: "Kasturi Vendai",
    scientificName: "Abelmoschus esculentus",
    description: "Premium variety with aromatic qualities, known for its distinctive fragrance and excellent taste",
    growingTime: "55-65 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Aromatic variety", "Premium quality", "Distinctive fragrance", "Excellent taste"]
  },
  {
    id: 2,
    tamilName: "சிவப்பு வெண்டை (குட்டை)",
    englishName: "Red Vendai (Short)",
    scientificName: "Abelmoschus esculentus var. rubra",
    description: "Short red ladies finger variety that turns green when cooked, perfect for traditional dishes",
    growingTime: "50-60 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Red color", "Short variety", "Traditional cooking", "Ornamental value"]
  },
  {
    id: 3,
    tamilName: "பச்சை வெண்டை (குட்டை)",
    englishName: "Green Vendai (Short)",
    scientificName: "Abelmoschus esculentus",
    description: "Classic short green ladies finger with tender pods perfect for traditional dishes",
    growingTime: "50-60 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Tender pods", "High yield", "Traditional variety", "Easy to grow"]
  },
  {
    id: 4,
    tamilName: "பருமன் வெண்டை",
    englishName: "Baruman Vendai",
    scientificName: "Abelmoschus esculentus",
    description: "Thick and fleshy ladies finger variety, known for its substantial texture and rich flavor",
    growingTime: "60-70 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Thick texture", "Fleshy variety", "Rich flavor", "High yield"]
  },
  {
    id: 5,
    tamilName: "மர வெண்டை",
    englishName: "Mara Vendai",
    scientificName: "Abelmoschus esculentus",
    description: "Tree-like variety with woody stems, produces abundant pods throughout the season",
    growingTime: "70-80 days",
    yield: "Very High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Tree-like growth", "Woody stems", "Abundant yield", "Extended harvest"]
  },
  {
    id: 6,
    tamilName: "யானைத் தந்த வெண்டை",
    englishName: "Yanai Thandha Vendai",
    scientificName: "Abelmoschus esculentus",
    description: "Large ladies finger variety resembling elephant tusk, perfect for stuffing and curries",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["Large size", "Elephant tusk shape", "Perfect for stuffing", "High yield"]
  },
  {
    id: 7,
    tamilName: "வெள்ளை வெண்டை",
    englishName: "White Vendai",
    scientificName: "Abelmoschus esculentus var. albus",
    description: "Unique white ladies finger variety with mild, sweet flavor and tender texture",
    growingTime: "55-65 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥬",
    features: ["White color", "Mild flavor", "Sweet taste", "Tender texture"]
  }
];

export default function LadiesFingerVarietiesPage() {
  const { t } = useLanguage();

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
            வெண்டை வகைகள் / Ladies Finger Varieties
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore our premium collection of 7 authentic ladies finger varieties from Sree Marudhan Agro Care
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
            <span className="text-white font-medium">Ladies Finger Varieties</span>
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
            🎉 Special Offer: All Ladies Finger Varieties at 50% OFF! Limited Time Only 🎉
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
            Why Choose Sree Marudhan Agro Care Ladies Finger Varieties?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our authentic ladies finger seeds are carefully selected from traditional farming regions, 
            offering excellent cooking qualities, disease resistance, and high yield potential. 
            Perfect for both home gardens and commercial farming.
          </p>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ladiesFingerVarieties.map((variety, index) => (
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
                  <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
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
                          className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full"
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
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium">
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
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Ladies Finger (வெண்டை)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 சூரிய ஒளி / Sunlight</h4>
              <p className="text-gray-600 text-sm">வெண்டைக்கு தினமும் 6-8 மணி நேரம் நேரடி சூரிய ஒளி தேவை</p>
              <p className="text-gray-500 text-xs mt-1">Ladies finger needs 6-8 hours of direct sunlight daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 நீர்ப்பாசனம் / Watering</h4>
              <p className="text-gray-600 text-sm">மண் ஈரமாக இருக்க வேண்டும், தாவரத்தின் அடிப்பகுதியில் தண்ணீர் ஊற்றவும்</p>
              <p className="text-gray-500 text-xs mt-1">Keep soil consistently moist, water at base of plant</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 மண் / Soil</h4>
              <p className="text-gray-600 text-sm">நன்கு வடிகட்டும், செழிப்பான மண், pH 6.0-7.0</p>
              <p className="text-gray-500 text-xs mt-1">Well-draining, rich soil with pH 6.0-7.0</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ வெப்பநிலை / Temperature</h4>
              <p className="text-gray-600 text-sm">சிறந்த வளர்ச்சிக்கான வெப்பநிலை: 24-32°C</p>
              <p className="text-gray-500 text-xs mt-1">Optimal growing temperature: 24-32°C</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 அறுவடை / Harvesting</h4>
              <p className="text-gray-600 text-sm">பழங்கள் 3-4 அங்குல நீளமாக இருக்கும்போது அறுவடை செய்யவும்</p>
              <p className="text-gray-500 text-xs mt-1">Harvest when pods are 3-4 inches long for best taste</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 உரம் / Fertilizer</h4>
              <p className="text-gray-600 text-sm">வளர்ச்சியின் போது 3-4 வாரங்களுக்கு ஒரு முறை சமச்சீர் உரம்</p>
              <p className="text-gray-500 text-xs mt-1">Balanced fertilizer every 3-4 weeks during growth</p>
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
              வெண்டை வளர்ப்பதில் உதவி தேவையா? / Need Help Growing Ladies Finger?
            </h3>
            <p className="text-lg text-green-100 mb-6">
              எங்கள் AI விவசாய உதவியாளர் உங்கள் வெண்டை தோட்டத்திற்கு தனிப்பட்ட ஆலோசனையை வழங்கும்
            </p>
            <p className="text-base text-green-200 mb-6">
              Our AI farming assistant can provide personalized advice for your ladies finger garden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat"
                className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="mr-2">💬</span>
                AI உதவியாளருடன் பேசுங்கள் / Chat with AI Assistant
              </Link>
              <Link 
                href="/seeds"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300"
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
