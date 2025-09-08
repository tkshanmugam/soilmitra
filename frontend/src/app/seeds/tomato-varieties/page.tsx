"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useState } from "react";

const tomatoVarieties = [
  {
    id: 1,
    name: "African Togo Tomato",
    tamilName: "ஆப்பிரிக்க டோகோ தக்காளி",
    description: "Unique African variety with excellent flavor and disease resistance. Perfect for hot climates and produces abundant yields of medium-sized, flavorful tomatoes.",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Hot & Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Disease resistant", "High yield", "Unique flavor", "African variety", "Hot climate tolerant"],
    bestFor: ["Sauces", "Salads", "Fresh eating"],
    plantType: "Indeterminate"
  },
  {
    id: 2,
    name: "Black Cherry (Dihing)",
    tamilName: "கருப்பு செர்ரி தக்காளி (திஹிங்)",
    description: "Exotic black cherry tomato with rich, sweet flavor. Small, round fruits with deep black-purple skin and intense tomato taste. Perfect for gourmet dishes.",
    growingTime: "65-75 days",
    yield: "Medium-High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Black color", "Sweet flavor", "Cherry size", "Exotic variety", "Gourmet quality"],
    bestFor: ["Salads", "Garnishes", "Fresh eating"],
    plantType: "Indeterminate"
  },
  {
    id: 3,
    name: "Black Plum Tomato",
    tamilName: "கருப்பு பிளம் தக்காளி",
    description: "Plum-shaped black tomato perfect for sauces and salads. Meaty texture with low moisture content, making it ideal for cooking and canning.",
    growingTime: "75-85 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Plum shape", "Black color", "Perfect for sauces", "High yield", "Low moisture"],
    bestFor: ["Sauces", "Paste", "Canning", "Cooking"],
    plantType: "Determinate"
  },
  {
    id: 4,
    name: "Black Vernissage Tomato",
    tamilName: "கருப்பு வெர்னிசேஜ் தக்காளி",
    description: "Beautiful striped black tomato with exceptional taste. Unique appearance with dark stripes and rich, complex flavor that's perfect for heirloom enthusiasts.",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Striped pattern", "Black color", "Exceptional taste", "Heirloom quality", "Unique appearance"],
    bestFor: ["Fresh eating", "Salads", "Garnishes"],
    plantType: "Indeterminate"
  },
  {
    id: 5,
    name: "Blue Green Tomato",
    tamilName: "நீல பச்சை தக்காளி",
    description: "Unique blue-green tomato variety with distinctive appearance. The fruits have a beautiful blue-green hue that adds visual interest to any garden or dish.",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Blue-green color", "Unique appearance", "Good flavor", "Medium yield", "Visual appeal"],
    bestFor: ["Salads", "Garnishes", "Fresh eating"],
    plantType: "Determinate"
  },
  {
    id: 6,
    name: "Bolstar Granda Tomato",
    tamilName: "போல்ஸ்டார் கிராண்டா தக்காளி",
    description: "Large, meaty tomato perfect for slicing and sandwiches. Produces big, juicy fruits with excellent flavor and texture. Ideal for burgers and sandwiches.",
    growingTime: "85-95 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Large fruits", "Meaty texture", "Great for slicing", "High yield", "Excellent flavor"],
    bestFor: ["Slicing", "Sandwiches", "Burgers", "Fresh eating"],
    plantType: "Indeterminate"
  },
  {
    id: 7,
    name: "Cherry Sun Gold Tomato",
    tamilName: "செர்ரி சன் கோல்ட் தக்காளி",
    description: "Golden cherry tomato with sweet, tropical flavor. Small, round fruits with bright golden color and intense sweetness. Perfect for snacking and salads.",
    growingTime: "60-70 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Golden color", "Sweet flavor", "Cherry size", "High yield", "Tropical taste"],
    bestFor: ["Snacking", "Salads", "Fresh eating"],
    plantType: "Indeterminate"
  },
  {
    id: 8,
    name: "Doyang Tomato",
    tamilName: "டோயாங் தக்காளி",
    description: "Traditional variety known for excellent flavor and adaptability. Well-suited for various growing conditions and produces reliable yields of flavorful tomatoes.",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Traditional variety", "Excellent flavor", "Good adaptability", "Medium yield", "Reliable"],
    bestFor: ["General cooking", "Sauces", "Fresh eating"],
    plantType: "Determinate"
  },
  {
    id: 9,
    name: "Dwarf Tomato",
    tamilName: "குள்ள தக்காளி",
    description: "Compact variety perfect for containers and small gardens. Bushy growth habit that doesn't require staking, making it ideal for patio gardening.",
    growingTime: "65-75 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Compact size", "Container friendly", "Good for small spaces", "Medium yield", "No staking needed"],
    bestFor: ["Containers", "Small gardens", "Patio gardening"],
    plantType: "Determinate"
  },
  {
    id: 10,
    name: "Frost Resistant Pink Tomato",
    tamilName: "பனி எதிர்ப்பு இளஞ்சிவப்பு தக்காளி",
    description: "Pink tomato variety with excellent cold tolerance. Can withstand light frosts and cooler temperatures, making it suitable for early spring and late fall planting.",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Cool to Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Frost resistant", "Pink color", "Cold tolerant", "High yield", "Extended season"],
    bestFor: ["Early spring", "Late fall", "Cooler climates"],
    plantType: "Determinate"
  },
  {
    id: 11,
    name: "Golden Jubilee Tomato",
    tamilName: "தங்க ஜூபிலி தக்காளி",
    description: "Golden yellow tomato with sweet, mild flavor. Beautiful golden color adds visual appeal to dishes while providing a sweet, low-acid tomato taste.",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Golden yellow", "Sweet flavor", "Mild taste", "Medium yield", "Low acid"],
    bestFor: ["Fresh eating", "Salads", "Low-acid diets"],
    plantType: "Indeterminate"
  },
  {
    id: 12,
    name: "Grape Tomato",
    tamilName: "திராட்சை தக்காளி",
    description: "Small, grape-shaped tomato perfect for snacking and salads. Sweet flavor with firm texture, making it ideal for kids and adults alike.",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Grape shape", "Small size", "Perfect for snacking", "High yield", "Firm texture"],
    bestFor: ["Snacking", "Salads", "Kids", "Lunch boxes"],
    plantType: "Indeterminate"
  },
  {
    id: 13,
    name: "Jamun Tomato",
    tamilName: "நாவல் தக்காளி",
    description: "Unique variety with jamun-like appearance and flavor. Distinctive dark color and rich taste that makes it stand out in any garden or dish.",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Jamun-like", "Unique flavor", "Distinctive appearance", "Medium yield", "Rich taste"],
    bestFor: ["Fresh eating", "Gourmet dishes", "Unique presentations"],
    plantType: "Determinate"
  },
  {
    id: 14,
    name: "Assam Tomato",
    tamilName: "அசாம் தக்காளி",
    description: "Traditional Assamese tomato variety with local adaptation. Well-suited for the humid climate of Assam and produces reliable yields of flavorful tomatoes.",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Humid & Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Assamese variety", "Local adaptation", "Traditional", "High yield", "Humid climate tolerant"],
    bestFor: ["Local cooking", "Traditional dishes", "Humid climates"],
    plantType: "Determinate"
  },
  {
    id: 15,
    name: "Kumkum Kesar Tomato",
    tamilName: "கும்கும் கேசரி தக்காளி",
    description: "Traditional Tamil variety with excellent flavor. Named for its beautiful color and traditional significance in Tamil cuisine and culture.",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Tamil variety", "Traditional", "Excellent flavor", "Medium yield", "Cultural significance"],
    bestFor: ["Traditional Tamil dishes", "Cultural cooking", "Fresh eating"],
    plantType: "Determinate"
  },
  {
    id: 16,
    name: "Red Tomato",
    tamilName: "சிவப்புத் தக்காளி",
    description: "Classic red tomato variety with traditional taste. The most popular and versatile tomato variety, perfect for all types of cooking and fresh eating.",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹20.00",
    discount: "67% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Classic red", "Traditional taste", "High yield", "Best value", "Most versatile"],
    bestFor: ["All cooking", "Sauces", "Salads", "Fresh eating"],
    plantType: "Determinate"
  },
  // Additional varieties from page 2
  {
    id: 17,
    name: "Cherry Tomato (Red)",
    tamilName: "செர்ரி தக்காளி (சிவப்பு)",
    description: "Small, round red cherry tomatoes perfect for salads and snacking. Sweet flavor with firm texture, ideal for kids and adults alike.",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹40.00",
    discount: "33% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Cherry size", "Red color", "Sweet flavor", "High yield", "Perfect for snacking"],
    bestFor: ["Snacking", "Salads", "Kids", "Lunch boxes"],
    plantType: "Indeterminate"
  },
  {
    id: 18,
    name: "Cherry Tomato (Yellow)",
    tamilName: "செர்ரி தக்காளி (மஞ்சள்)",
    description: "Beautiful yellow cherry tomatoes with sweet, mild flavor. Adds visual appeal to dishes while providing a sweet, low-acid tomato taste.",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹50.00",
    discount: "17% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop&crop=center",
    features: ["Cherry size", "Yellow color", "Sweet flavor", "High yield", "Low acid"],
    bestFor: ["Snacking", "Salads", "Fresh eating", "Low-acid diets"],
    plantType: "Indeterminate"
  },
  {
    id: 19,
    name: "Togo Tomato",
    tamilName: "டோகோ தக்காளி",
    description: "Traditional African variety with excellent flavor and disease resistance. Perfect for hot climates and produces abundant yields of flavorful tomatoes.",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Hot & Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["African variety", "Disease resistant", "High yield", "Hot climate tolerant", "Traditional"],
    bestFor: ["Sauces", "Salads", "Fresh eating", "Hot climates"],
    plantType: "Indeterminate"
  },
  {
    id: 20,
    name: "Native Tomato",
    tamilName: "நாட்டுத் தக்காளி",
    description: "Classic native variety with traditional taste and excellent adaptability. The most popular and versatile tomato variety for local growing conditions.",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹20.00",
    discount: "67% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Native variety", "Traditional taste", "High yield", "Best value", "Most versatile"],
    bestFor: ["All cooking", "Sauces", "Salads", "Fresh eating"],
    plantType: "Determinate"
  },
  {
    id: 21,
    name: "Polur Vari Tomato",
    tamilName: "போளூர் வரி தக்காளி",
    description: "Unique variety from Polur region with distinctive flavor and appearance. Well-suited for local growing conditions and produces reliable yields.",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Polur variety", "Distinctive flavor", "Local adaptation", "Medium yield", "Unique appearance"],
    bestFor: ["Local cooking", "Traditional dishes", "Fresh eating"],
    plantType: "Determinate"
  },
  {
    id: 22,
    name: "Madanapalli Tomato",
    tamilName: "மதனப்பள்ளி தக்காளி",
    description: "Traditional variety from Madanapalli region known for excellent flavor and adaptability. Produces reliable yields of flavorful tomatoes.",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    seedsPerPacket: "40 Seeds / Pocket",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center",
    features: ["Madanapalli variety", "Traditional", "Excellent flavor", "Medium yield", "Local adaptation"],
    bestFor: ["Traditional dishes", "Local cooking", "Fresh eating"],
    plantType: "Determinate"
  }
];

export default function TomatoVarietiesPage() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Calculate pagination
  const totalPages = Math.ceil(tomatoVarieties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentVarieties = tomatoVarieties.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-red-600 to-pink-600 text-white py-26"
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
            🍅
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Tomato Varieties
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Premium collection of 22 unique tomato varieties - From traditional to exotic
          </motion.p>
          
          {/* Breadcrumb */}
          <motion.div 
            className="mt-8 flex items-center justify-center space-x-2 text-red-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/seeds" className="hover:text-white transition-colors duration-300">
              Seeds
            </Link>
            <span>→</span>
            <Link href="/seeds" className="hover:text-white transition-colors duration-300">
              Native Seeds
            </Link>
            <span>→</span>
            <span className="text-white font-medium">Tomato Varieties</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Product Count and Sorting */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-gray-600 mb-4 md:mb-0">
            Showing {startIndex + 1}–{Math.min(endIndex, tomatoVarieties.length)} of {tomatoVarieties.length} results
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>
        </motion.div>

        {/* Quick Filter Tags */}
        <motion.div 
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-700 mr-2">Quick Filters:</span>
            <button className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors">
              All Varieties
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              Cherry Tomatoes
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              Heirloom
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              Traditional
            </button>
            <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
              Exotic
            </button>
          </div>
        </motion.div>

        {/* Varieties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {currentVarieties.map((variety, index) => (
            <motion.div
              key={variety.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.05, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="h-40 bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={variety.image}
                    alt={variety.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop&crop=center";
                    }}
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    {variety.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                    {variety.tamilName}
                  </h3>
                  <h4 className="text-sm font-medium text-gray-600 mb-2 group-hover:text-red-500 transition-colors duration-300 line-clamp-1">
                    {variety.name}
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">
                    {variety.seedsPerPacket}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {variety.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {variety.features.slice(0, 4).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-1">
                      {variety.bestFor.slice(0, 3).map((use, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {use}
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
                      <div className="font-semibold text-gray-700">Type</div>
                      <div className="text-gray-600">{variety.plantType}</div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-red-600">
                        {variety.currentPrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {variety.originalPrice}
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 border border-gray-300 rounded-lg transition-colors duration-300 ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              ←
            </button>
            
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 border rounded-lg transition-colors duration-300 ${
                  currentPage === page
                    ? 'bg-red-600 text-white border-red-600'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            {/* Next Button */}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 border border-gray-300 rounded-lg transition-colors duration-300 ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Tomatoes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 Sunlight</h4>
              <p className="text-gray-600 text-sm">Tomatoes need 6-8 hours of direct sunlight daily</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">💧 Watering</h4>
              <p className="text-gray-600 text-sm">Keep soil consistently moist, avoid overhead watering</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌱 Soil</h4>
              <p className="text-gray-600 text-sm">Well-draining, rich soil with pH 6.0-6.8</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌡️ Temperature</h4>
              <p className="text-gray-600 text-sm">Optimal growing temperature: 21-29°C</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🍃 Support</h4>
              <p className="text-gray-600 text-sm">Use cages or stakes for indeterminate varieties</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌿 Fertilizer</h4>
              <p className="text-gray-600 text-sm">Balanced fertilizer every 2-3 weeks during growth</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Help Growing Tomatoes?
            </h3>
            <p className="text-lg text-red-100 mb-6">
              Our AI farming assistant can provide personalized advice for your tomato garden
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chat"
                className="inline-flex items-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <span className="mr-2">💬</span>
                Chat with AI Assistant
              </Link>
              <Link 
                href="/seeds"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
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
