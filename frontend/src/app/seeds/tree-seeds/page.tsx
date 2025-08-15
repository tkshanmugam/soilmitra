"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useState } from "react";

const treeVarieties = [
  {
    id: 1,
    name: "எலுமிச்சை (Lemon)",
    scientificName: "Citrus limon",
    description: "Citrus tree producing tangy lemons year-round, perfect for home gardens",
    growingTime: "3-5 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🍋",
    features: ["Year-round fruit", "Tangy flavor", "Citrus family", "Container friendly"],
    category: "Fruit Trees"
  },
  {
    id: 2,
    name: "கருங்காலி (Blackwood)",
    scientificName: "Acacia melanoxylon",
    description: "Fast-growing timber tree with beautiful dark wood, ideal for landscaping",
    growingTime: "8-12 years",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Timber quality", "Fast growing", "Landscaping", "Shade tree"],
    category: "Timber Trees"
  },
  {
    id: 3,
    name: "கல்யாண முருங்கை (Wedding Drumstick)",
    scientificName: "Moringa oleifera",
    description: "Special variety of moringa with enhanced nutritional properties",
    growingTime: "1-2 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Highly nutritious", "Fast growing", "Medicinal", "Drought resistant"],
    category: "Medicinal Trees"
  },
  {
    id: 4,
    name: "கொடுக்காய்ப் புளி (Tamarind)",
    scientificName: "Tamarindus indica",
    description: "Traditional tamarind tree producing sour fruits used in cooking",
    growingTime: "5-7 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Traditional use", "Culinary value", "Shade tree", "Long-lived"],
    category: "Fruit Trees"
  },
  {
    id: 5,
    name: "கொன்றை (Golden Shower)",
    scientificName: "Cassia fistula",
    description: "Beautiful flowering tree with golden yellow blossoms",
    growingTime: "4-6 years",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌸",
    features: ["Ornamental", "Golden flowers", "Landscaping", "Shade tree"],
    category: "Ornamental Trees"
  },
  {
    id: 6,
    name: "சந்தனம் (Sandalwood)",
    scientificName: "Santalum album",
    description: "Precious aromatic tree known for its fragrant heartwood",
    growingTime: "15-20 years",
    yield: "Low",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Aromatic wood", "Medicinal", "High value", "Slow growing"],
    category: "Aromatic Trees"
  },
  {
    id: 7,
    name: "சப்போட்டா (Sapodilla)",
    scientificName: "Manilkara zapota",
    description: "Sweet tropical fruit tree with brown, grainy-textured fruits",
    growingTime: "5-8 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🍐",
    features: ["Sweet fruits", "Tropical", "Disease resistant", "Low maintenance"],
    category: "Fruit Trees"
  },
  {
    id: 8,
    name: "சீத்தாப்பழம் (Custard Apple)",
    scientificName: "Annona squamosa",
    description: "Delicious custard-like fruit tree with green scaly skin",
    growingTime: "3-5 years",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍎",
    features: ["Custard-like fruit", "Tropical", "Easy growing", "Container friendly"],
    category: "Fruit Trees"
  },
  {
    id: 9,
    name: "செம்மரம் (Red Sandalwood)",
    scientificName: "Pterocarpus santalinus",
    description: "Rare red sandalwood tree with valuable heartwood",
    growingTime: "20-25 years",
    yield: "Low",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Red heartwood", "High value", "Medicinal", "Rare species"],
    category: "Aromatic Trees"
  },
  {
    id: 10,
    name: "தேக்கு (Teak)",
    scientificName: "Tectona grandis",
    description: "Premium timber tree known for its durable and beautiful wood",
    growingTime: "20-30 years",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Premium timber", "Durable wood", "Long-lived", "High value"],
    category: "Timber Trees"
  },
  {
    id: 11,
    name: "நாட்டு முருங்கை (Native Drumstick)",
    scientificName: "Moringa oleifera",
    description: "Traditional moringa variety adapted to local conditions",
    growingTime: "1-2 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Local variety", "Highly nutritious", "Fast growing", "Traditional use"],
    category: "Medicinal Trees"
  },
  {
    id: 12,
    name: "நீர் மருது (Water Neem)",
    scientificName: "Azadirachta indica",
    description: "Water-loving variety of neem tree for wetland areas",
    growingTime: "5-7 years",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Water tolerant", "Medicinal", "Pest repellent", "Wetland suitable"],
    category: "Medicinal Trees"
  },
  {
    id: 13,
    name: "நெல்லி (Indian Gooseberry)",
    scientificName: "Phyllanthus emblica",
    description: "Highly nutritious fruit tree rich in vitamin C and antioxidants",
    growingTime: "4-6 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫐",
    features: ["High vitamin C", "Antioxidant rich", "Medicinal", "Traditional use"],
    category: "Fruit Trees"
  },
  {
    id: 14,
    name: "புங்கன் (Pongam)",
    scientificName: "Pongamia pinnata",
    description: "Biofuel tree with oil-rich seeds and nitrogen-fixing properties",
    growingTime: "5-8 years",
    yield: "Medium",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌳",
    features: ["Biofuel potential", "Nitrogen fixing", "Drought resistant", "Multi-purpose"],
    category: "Biofuel Trees"
  },
  {
    id: 15,
    name: "மாதுளை (Pomegranate)",
    scientificName: "Punica granatum",
    description: "Drought-tolerant tree with nutritious ruby-red fruits",
    growingTime: "3-4 years",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🍎",
    features: ["Drought tolerant", "Nutritious fruits", "Ornamental", "Low maintenance"],
    category: "Fruit Trees"
  },
  {
    id: 16,
    name: "யாழ்ப்பாண முருங்கை (Jaffna Drumstick)",
    scientificName: "Moringa oleifera",
    description: "Premium moringa variety from Jaffna region with enhanced properties",
    growingTime: "1-2 years",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🌿",
    features: ["Premium variety", "Enhanced nutrition", "Fast growing", "Regional specialty"],
    category: "Medicinal Trees"
  },
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
    image: "��",
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

const itemsPerPage = 16;

export default function TreeSeedsPage() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(treeVarieties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVarieties = treeVarieties.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            Tree Seeds
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Plant the future with our premium tree seeds for fruit, shade, and landscaping
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
            <span className="text-white font-medium">Tree Seeds</span>
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
            Premium Tree Seeds Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive collection of 20 premium tree seed varieties, from fruit trees to timber and medicinal varieties. 
            All seeds are sourced from the finest native varieties, perfect for your landscape and farming needs.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Showing {startIndex + 1}-{Math.min(endIndex, treeVarieties.length)} of {treeVarieties.length} products
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
            🌱 Growing Tips for Trees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 Sunlight</h4>
              <p className="text-gray-600 text-sm">Most trees need full sun for optimal growth</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 Watering</h4>
              <p className="text-gray-600 text-sm">Deep watering encourages strong root development</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 Soil</h4>
              <p className="text-gray-600 text-sm">Well-draining soil with good organic matter</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ Temperature</h4>
              <p className="text-gray-600 text-sm">Plant according to your climate zone</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 Pruning</h4>
              <p className="text-gray-600 text-sm">Regular pruning maintains shape and health</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 Fertilizer</h4>
              <p className="text-gray-600 text-sm">Tree-specific fertilizer during growing season</p>
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
              Need Help Growing Trees?
            </h3>
            <p className="text-lg text-green-100 mb-6">
              Our AI farming assistant can provide personalized advice for your tree planting project
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
