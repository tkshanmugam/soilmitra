"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";

const brinjalVarieties = [
  {
    id: 1,
    tamilName: "ஆலவயல் கத்திரி",
    englishName: "Alavayal Brinjal",
    scientificName: "Solanum melongena",
    description: "Traditional variety from Alavayal region, known for its excellent taste and cooking qualities",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Traditional variety", "Excellent taste", "High yield", "Disease resistant"]
  },
  {
    id: 2,
    tamilName: "ஊதா கத்திரி (குண்டு)",
    englishName: "Purple Brinjal (Round)",
    scientificName: "Solanum melongena",
    description: "Round purple brinjal perfect for stuffing and traditional curries",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Round shape", "Perfect for stuffing", "Rich flavor", "Traditional cooking"]
  },
  {
    id: 3,
    tamilName: "ஊதா கத்திரி (நீளம்)",
    englishName: "Purple Brinjal (Long)",
    scientificName: "Solanum melongena",
    description: "Long purple brinjal variety ideal for slicing and various cooking methods",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Long shape", "High yield", "Versatile cooking", "Excellent taste"]
  },
  {
    id: 4,
    tamilName: "கண்ணாடி கத்திரி",
    englishName: "Kannadi Brinjal",
    scientificName: "Solanum melongena",
    description: "Unique variety with glass-like appearance, known for its special texture",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Unique appearance", "Special texture", "Medium yield", "Distinctive variety"]
  },
  {
    id: 5,
    tamilName: "கருப்பு கத்திரி",
    englishName: "Black Brinjal",
    scientificName: "Solanum melongena",
    description: "Deep black brinjal variety with rich flavor and excellent cooking properties",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Deep black color", "Rich flavor", "Excellent cooking", "Traditional variety"]
  },
  {
    id: 6,
    tamilName: "தொப்பி கத்திரி",
    englishName: "Topi Brinjal",
    scientificName: "Solanum melongena",
    description: "Premium variety with unique cap-like appearance, higher quality seeds",
    growingTime: "75-85 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Premium quality", "Unique appearance", "High yield", "Superior variety"]
  },
  {
    id: 7,
    tamilName: "பச்சை கத்திரி (குண்டு)",
    englishName: "Green Brinjal (Round)",
    scientificName: "Solanum melongena var. viride",
    description: "Round green brinjal with firm texture and excellent cooking properties",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Green color", "Firm texture", "High yield", "Great for curries"]
  },
  {
    id: 8,
    tamilName: "பச்சை கத்திரி (நீளம்)",
    englishName: "Green Brinjal (Long)",
    scientificName: "Solanum melongena var. viride",
    description: "Long green brinjal variety perfect for slicing and various dishes",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Long green variety", "High yield", "Versatile cooking", "Excellent texture"]
  },
  {
    id: 9,
    tamilName: "மணப்பாறை கத்திரி",
    englishName: "Manapparai Brinjal",
    scientificName: "Solanum melongena",
    description: "Traditional variety from Manapparai region, known for its unique characteristics",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Regional variety", "Traditional", "Unique characteristics", "Medium yield"]
  },
  {
    id: 10,
    tamilName: "முள் கத்திரி",
    englishName: "Spiny Brinjal",
    scientificName: "Solanum melongena",
    description: "Brinjal variety with spiny surface, known for its distinctive appearance",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Spiny surface", "Distinctive appearance", "Medium yield", "Unique variety"]
  },
  {
    id: 11,
    tamilName: "வரி கத்திரி",
    englishName: "Striped Brinjal",
    scientificName: "Solanum melongena var. striatum",
    description: "Beautiful striped brinjal with unique pattern and excellent flavor",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Striped pattern", "Unique appearance", "Excellent flavor", "Ornamental value"]
  },
  {
    id: 12,
    tamilName: "வெள்ளை கத்திரி (குண்டு)",
    englishName: "White Brinjal (Round)",
    scientificName: "Solanum melongena var. album",
    description: "Round white brinjal with mild, sweet flavor and unique appearance",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["White color", "Mild flavor", "Sweet taste", "Unique variety"]
  },
  {
    id: 13,
    tamilName: "வெள்ளை கத்திரி (நீளம்)",
    englishName: "White Brinjal (Long)",
    scientificName: "Solanum melongena var. album",
    description: "Long white brinjal variety perfect for slicing and various cooking methods",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍆",
    features: ["Long white variety", "Mild flavor", "Versatile cooking", "Unique appearance"]
  }
];

export default function BrinjalVarietiesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-26"
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
            🍆
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            கத்திரி வகைகள் / Brinjal Varieties
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore our premium collection of 14 authentic brinjal varieties from Sree Marudhan Agro Care
          </motion.p>
          
          {/* Breadcrumb */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-purple-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/seeds" className="hover:text-white transition-colors duration-300">
              Seeds
            </Link>
            <span>→</span>
            <span className="text-white font-medium">Brinjal Varieties</span>
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
            🎉 Special Offer: All Brinjal Varieties at 50% OFF! Limited Time Only 🎉
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
            Why Choose Sree Marudhan Agro Care Brinjal Varieties?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our authentic brinjal seeds are carefully selected from traditional farming regions, 
            offering excellent cooking qualities, disease resistance, and high yield potential. 
            Perfect for both home gardens and commercial farming.
          </p>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {brinjalVarieties.map((variety, index) => (
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
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
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
                          className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
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
                    <a 
                      href={`https://wa.me/918072897988?text=Hi, I'm interested in buying ${variety.englishName} (${variety.tamilName}) brinjal seeds. Price: ${variety.currentPrice}. Please provide more details about availability and delivery.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 font-medium text-center block shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center space-x-1 text-sm"
                    >
                      <span>📱</span>
                      <span>Buy Now / இப்போது வாங்க</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Brinjal (கத்திரி)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 சூரிய ஒளி / Sunlight</h4>
              <p className="text-gray-600 text-sm">கத்திரிக்கு தினமும் 6-8 மணி நேரம் நேரடி சூரிய ஒளி தேவை</p>
              <p className="text-gray-500 text-xs mt-1">Brinjal needs 6-8 hours of direct sunlight daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 நீர்ப்பாசனம் / Watering</h4>
              <p className="text-gray-600 text-sm">மண் ஈரமாக இருக்க வேண்டும், தாவரத்தின் அடிப்பகுதியில் தண்ணீர் ஊற்றவும்</p>
              <p className="text-gray-500 text-xs mt-1">Keep soil consistently moist, water at base of plant</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 மண் / Soil</h4>
              <p className="text-gray-600 text-sm">நன்கு வடிகட்டும், செழிப்பான மண், pH 5.5-6.5</p>
              <p className="text-gray-500 text-xs mt-1">Well-draining, rich soil with pH 5.5-6.5</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ வெப்பநிலை / Temperature</h4>
              <p className="text-gray-600 text-sm">சிறந்த வளர்ச்சிக்கான வெப்பநிலை: 24-32°C</p>
              <p className="text-gray-500 text-xs mt-1">Optimal growing temperature: 24-32°C</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 ஆதரவு / Support</h4>
              <p className="text-gray-600 text-sm">தாவரங்கள் உயரமாக வளரும்போது ஆதரவுக்கு கம்பங்களைப் பயன்படுத்தவும்</p>
              <p className="text-gray-500 text-xs mt-1">Use stakes for support as plants grow tall</p>
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
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              கத்திரி வளர்ப்பதில் உதவி தேவையா? / Need Help Growing Brinjal?
            </h3>
            <p className="text-lg text-purple-100 mb-6">
              எங்கள் AI விவசாய உதவியாளர் உங்கள் கத்திரி தோட்டத்திற்கு தனிப்பட்ட ஆலோசனையை வழங்கும்
            </p>
            <p className="text-base text-purple-200 mb-6">
              Our AI farming assistant can provide personalized advice for your brinjal garden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918072897988?text=Hi, I'm interested in buying brinjal seeds. Please provide information about available varieties, pricing, and delivery options."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="mr-2 text-lg">📱</span>
                <span>WhatsApp Order / வாட்ஸ்அப் ஆர்டர்</span>
              </a>
              <Link 
                href="/seeds"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-300"
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
