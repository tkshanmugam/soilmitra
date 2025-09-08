"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useState } from "react";

const climberPlants = [
  {
    id: 1,
    tamilName: "குண்டு வெள்ளரி",
    englishName: "Round Cucumber",
    scientificName: "Cucumis sativus",
    description: "Round cucumber variety perfect for pickling and traditional dishes",
    growingTime: "60-70 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Round shape", "Perfect for pickling", "High yield", "Traditional variety"]
  },
  {
    id: 2,
    tamilName: "கும்ப சுரை",
    englishName: "Kumba Sorakkai",
    scientificName: "Lagenaria siceraria",
    description: "Traditional bottle gourd variety with excellent cooking qualities",
    growingTime: "80-90 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🎃",
    features: ["Bottle gourd", "Traditional variety", "Excellent cooking", "High yield"]
  },
  {
    id: 3,
    tamilName: "குழவிக்கல் பரங்கி",
    englishName: "Baby Stone Snake Gourd",
    scientificName: "Trichosanthes cucumerina",
    description: "Small snake gourd variety perfect for daily cooking and curries",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Small size", "Snake gourd", "Daily cooking", "Medium yield"]
  },
  {
    id: 4,
    tamilName: "கொடி அவரை (பச்சை, சிவப்பு)",
    englishName: "Climbing Cowpea (Green, Red)",
    scientificName: "Vigna unguiculata",
    description: "Climbing cowpea variety with both green and red pods",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Green and red pods", "High yield", "Dual color"]
  },
  {
    id: 5,
    tamilName: "கொடி அவரை (பச்சை)",
    englishName: "Climbing Cowpea (Green)",
    scientificName: "Vigna unguiculata",
    description: "Green climbing cowpea variety with excellent taste and nutrition",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Green pods", "Excellent taste", "High nutrition"]
  },
  {
    id: 6,
    tamilName: "கொடி காராமணி (சிவப்பு)",
    englishName: "Climbing Karamani (Red)",
    scientificName: "Vigna unguiculata",
    description: "Red climbing karamanai variety with rich flavor and color",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Red color", "Rich flavor", "Medium yield"]
  },
  {
    id: 7,
    tamilName: "கொடி காராமணி (பச்சை)",
    englishName: "Climbing Karamani (Green)",
    scientificName: "Vigna unguiculata",
    description: "Green climbing karamanai variety perfect for traditional dishes",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Green color", "Traditional dishes", "Medium yield"]
  },
  {
    id: 8,
    tamilName: "கொடி கோழி அவரை",
    englishName: "Climbing Chicken Cowpea",
    scientificName: "Vigna unguiculata",
    description: "Climbing variety of chicken cowpea with excellent taste",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Chicken cowpea", "Excellent taste", "High yield"]
  },
  {
    id: 9,
    tamilName: "கொடி பட்டை அவரை",
    englishName: "Climbing Pattai Cowpea",
    scientificName: "Vigna unguiculata",
    description: "Climbing variety with striped pods and unique appearance",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Striped pods", "Unique appearance", "Medium yield"]
  },
  {
    id: 10,
    tamilName: "கொடி பீன்ஸ் (ஊதா)",
    englishName: "Climbing Beans (Purple)",
    scientificName: "Phaseolus vulgaris",
    description: "Purple climbing beans with beautiful color and excellent taste",
    growingTime: "75-85 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Purple color", "Beautiful appearance", "High yield"]
  },
  {
    id: 11,
    tamilName: "கொடி பீன்ஸ் (பச்சை)",
    englishName: "Climbing Beans (Green)",
    scientificName: "Phaseolus vulgaris",
    description: "Green climbing beans perfect for daily cooking and salads",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Green color", "Daily cooking", "High yield"]
  },
  {
    id: 12,
    tamilName: "கொடி பீன்ஸ் (மஞ்சள்)",
    englishName: "Climbing Beans (Yellow)",
    scientificName: "Phaseolus vulgaris",
    description: "Yellow climbing beans with unique color and excellent flavor",
    growingTime: "75-85 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Climbing variety", "Yellow color", "Unique color", "Excellent flavor"]
  },
  {
    id: 13,
    tamilName: "கொத்தவரை",
    englishName: "Kothavara",
    scientificName: "Vigna unguiculata",
    description: "Traditional variety of cowpea with excellent cooking qualities",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Traditional variety", "Excellent cooking", "High yield", "Authentic taste"]
  },
  {
    id: 14,
    tamilName: "சாம்பார் வெள்ளரி",
    englishName: "Sambar Cucumber",
    scientificName: "Cucumis sativus",
    description: "Cucumber variety perfect for making sambar and traditional dishes",
    growingTime: "60-70 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Sambar variety", "Traditional dishes", "High yield", "Perfect cooking"]
  },
  {
    id: 15,
    tamilName: "சிறகு அவரை (சிவப்பு)",
    englishName: "Winged Cowpea (Red)",
    scientificName: "Vigna unguiculata",
    description: "Red winged cowpea variety with unique wing-like pods",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Winged variety", "Red color", "Unique pods", "Medium yield"]
  },
  {
    id: 16,
    tamilName: "சிறகு அவரை (பச்சை)",
    englishName: "Winged Cowpea (Green)",
    scientificName: "Vigna unguiculata",
    description: "Green winged cowpea with distinctive wing-like appearance",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Winged variety", "Green color", "Distinctive appearance", "Medium yield"]
  },
  // Page 2 Varieties
  {
    id: 17,
    tamilName: "தர்பூசணி (சிறியது)",
    englishName: "Watermelon (Small)",
    scientificName: "Citrullus lanatus",
    description: "Small-sized watermelon variety perfect for small families and limited spaces",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍉",
    features: ["Small size", "Perfect for families", "Sweet taste", "Space efficient"]
  },
  {
    id: 18,
    tamilName: "தர்பூசணி (பெரியது)",
    englishName: "Watermelon (Large)",
    scientificName: "Citrullus lanatus",
    description: "Large watermelon variety with excellent sweetness and juiciness",
    growingTime: "85-95 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍉",
    features: ["Large size", "Excellent sweetness", "High juiciness", "High yield"]
  },
  {
    id: 19,
    tamilName: "நீள சிறகு அவரை",
    englishName: "Long Winged Cowpea",
    scientificName: "Vigna unguiculata",
    description: "Long-podded winged cowpea variety with unique appearance and taste",
    growingTime: "75-85 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Long pods", "Winged variety", "Unique appearance", "High yield"]
  },
  {
    id: 20,
    tamilName: "நீள சுரை",
    englishName: "Long Bottle Gourd",
    scientificName: "Lagenaria siceraria",
    description: "Long bottle gourd variety perfect for traditional cooking and crafts",
    growingTime: "85-95 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🎃",
    features: ["Long variety", "Bottle gourd", "Traditional cooking", "Craft uses"]
  },
  {
    id: 21,
    tamilName: "நீள வெள்ளரி",
    englishName: "Long Cucumber",
    scientificName: "Cucumis sativus",
    description: "Long cucumber variety with excellent taste and perfect for salads",
    growingTime: "65-75 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Long variety", "Excellent taste", "Perfect for salads", "High yield"]
  },
  {
    id: 22,
    tamilName: "நுரை பீர்க்கங்காய்",
    englishName: "Sponge Gourd",
    scientificName: "Luffa cylindrica",
    description: "Traditional sponge gourd variety with excellent cooking qualities",
    growingTime: "80-90 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Sponge gourd", "Traditional variety", "Excellent cooking", "Medium yield"]
  },
  {
    id: 23,
    tamilName: "பச்சைப் பட்டாணி",
    englishName: "Green Peas",
    scientificName: "Pisum sativum",
    description: "Fresh green peas variety perfect for cooking and salads",
    growingTime: "70-80 days",
    yield: "High",
    climate: "Cool",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫛",
    features: ["Green peas", "Fresh variety", "Perfect cooking", "High yield"]
  },
  {
    id: 24,
    tamilName: "பரங்கி (சிறியது)",
    englishName: "Snake Gourd (Small)",
    scientificName: "Trichosanthes cucumerina",
    description: "Small snake gourd variety perfect for daily cooking and curries",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Small size", "Snake gourd", "Daily cooking", "Medium yield"]
  },
  {
    id: 25,
    tamilName: "பாகற்காய்",
    englishName: "Bitter Gourd",
    scientificName: "Momordica charantia",
    description: "Traditional bitter gourd variety with medicinal properties and unique taste",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Bitter gourd", "Medicinal properties", "Unique taste", "Traditional variety"]
  },
  {
    id: 26,
    tamilName: "பீர்க்கங்காய் (குட்டை)",
    englishName: "Ridge Gourd (Short)",
    scientificName: "Luffa acutangula",
    description: "Short ridge gourd variety perfect for traditional dishes and curries",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Short variety", "Ridge gourd", "Traditional dishes", "Medium yield"]
  },
  {
    id: 27,
    tamilName: "புடலங்காய் (குட்டை)",
    englishName: "Pumpkin (Short)",
    scientificName: "Cucurbita maxima",
    description: "Short pumpkin variety with excellent taste and cooking qualities",
    growingTime: "90-100 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🎃",
    features: ["Short variety", "Pumpkin", "Excellent taste", "High yield"]
  },
  {
    id: 28,
    tamilName: "புடலங்காய் (நீளம்)",
    englishName: "Pumpkin (Long)",
    scientificName: "Cucurbita maxima",
    description: "Long pumpkin variety perfect for traditional cooking and festivals",
    growingTime: "95-105 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🎃",
    features: ["Long variety", "Pumpkin", "Traditional cooking", "Festival use"]
  },
  {
    id: 29,
    tamilName: "மிதி பாகற்காய்",
    englishName: "Dwarf Bitter Gourd",
    scientificName: "Momordica charantia",
    description: "Compact bitter gourd variety perfect for small gardens and containers",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Dwarf variety", "Bitter gourd", "Container friendly", "Small gardens"]
  },
  {
    id: 30,
    tamilName: "முலாம்பழம்",
    englishName: "Banana",
    scientificName: "Musa acuminata",
    description: "Traditional banana variety with excellent taste and nutritional value",
    growingTime: "12-18 months",
    yield: "High",
    climate: "Tropical",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🍌",
    features: ["Banana variety", "Excellent taste", "High nutrition", "Traditional variety"]
  },
  {
    id: 31,
    tamilName: "மூக்குத்தி அவரை (பச்சை)",
    englishName: "Mookuthi Cowpea (Green)",
    scientificName: "Vigna unguiculata",
    description: "Green mookuthi cowpea variety with distinctive nose-ring shaped pods",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Mookuthi variety", "Green color", "Unique pod shape", "Medium yield"]
  },
  {
    id: 32,
    tamilName: "மூக்குத்தி அவரை (சிவப்பு)",
    englishName: "Mookuthi Cowpea (Red)",
    scientificName: "Vigna unguiculata",
    description: "Red mookuthi cowpea variety with beautiful color and unique pod shape",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Mookuthi variety", "Red color", "Beautiful appearance", "Unique pods"]
  },
  // Page 3 Varieties
  {
    id: 33,
    tamilName: "யானைக்காது அவரை",
    englishName: "Elephant Ear Cowpea",
    scientificName: "Vigna unguiculata",
    description: "Unique cowpea variety with large, elephant ear-shaped leaves and pods",
    growingTime: "70-80 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🫘",
    features: ["Elephant ear variety", "Large leaves", "Unique appearance", "Medium yield"]
  },
  {
    id: 34,
    tamilName: "வெண் பூசணி",
    englishName: "White Pumpkin",
    scientificName: "Benincasa hispida",
    description: "Traditional white pumpkin variety with excellent cooking qualities and long shelf life",
    growingTime: "90-100 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🎃",
    features: ["White pumpkin", "Long shelf life", "Excellent cooking", "High yield"]
  },
  {
    id: 35,
    tamilName: "வெள்ளரி",
    englishName: "Cucumber",
    scientificName: "Cucumis sativus",
    description: "Classic cucumber variety perfect for salads, pickling, and daily consumption",
    growingTime: "60-70 days",
    yield: "High",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Classic variety", "Perfect for salads", "Pickling friendly", "High yield"]
  },
  {
    id: 36,
    tamilName: "வெள்ளரி (பிஞ்சு)",
    englishName: "Baby Cucumber",
    scientificName: "Cucumis sativus",
    description: "Baby cucumber variety harvested early for tender, crisp texture and mild flavor",
    growingTime: "45-55 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹40.00",
    currentPrice: "₹20.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["Baby variety", "Tender texture", "Early harvest", "Mild flavor"]
  },
  {
    id: 37,
    tamilName: "வெள்ளைப் பாகற்காய்",
    englishName: "White Bitter Gourd",
    scientificName: "Momordica charantia",
    description: "White bitter gourd variety with milder taste and excellent medicinal properties",
    growingTime: "75-85 days",
    yield: "Medium",
    climate: "Warm",
    originalPrice: "₹60.00",
    currentPrice: "₹30.00",
    discount: "50% OFF",
    image: "🥒",
    features: ["White variety", "Milder taste", "Medicinal properties", "Traditional variety"]
  }
];

export default function ClimberPlantsPage() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(climberPlants.length / itemsPerPage);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = climberPlants.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white py-26"
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
            கொடி தாவரங்கள் / Climber Plants
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Explore our premium collection of 37 authentic climber plant varieties from Sree Marudhan Agro Care
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
            <span className="text-white font-medium">Climber Plants</span>
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
            🎉 Special Offer: All Climber Plant Varieties at 50% OFF! Limited Time Only 🎉
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
            Why Choose Sree Marudhan Agro Care Climber Plants?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our authentic climber plant seeds are carefully selected from traditional farming regions, 
            offering excellent vertical growth, high yields, and space-efficient gardening solutions. 
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
            Showing {startIndex + 1}-{Math.min(endIndex, climberPlants.length)} of {climberPlants.length} varieties
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Page {currentPage} of {totalPages}
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
            Showing {startIndex + 1}-{Math.min(endIndex, climberPlants.length)} of {climberPlants.length} varieties
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
                  <div className="h-48 bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
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
                : "bg-green-600 text-white hover:bg-green-700"
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
                    ? "bg-green-600 text-white"
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
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Next →
          </button>
        </motion.div>

        {/* Growing Tips */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌱 Growing Tips for Climber Plants (கொடி தாவரங்கள்)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">🌞 சூரிய ஒளி / Sunlight</h4>
              <p className="text-gray-600 text-sm">கொடி தாவரங்களுக்கு தினமும் 6-8 மணி நேரம் நேரடி சூரிய ஒளி தேவை</p>
              <p className="text-gray-500 text-xs mt-1">Climber plants need 6-8 hours of direct sunlight daily</p>
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
              <h4 className="font-semibold text-gray-900 mb-2">🍃 ஆதரவு / Support</h4>
              <p className="text-gray-600 text-sm">கொடி தாவரங்களுக்கு வலுவான ஆதரவு மற்றும் கம்பங்கள் தேவை</p>
              <p className="text-gray-500 text-xs mt-1">Climber plants need strong support and trellises</p>
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
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              கொடி தாவரங்கள் வளர்ப்பதில் உதவி தேவையா? / Need Help Growing Climber Plants?
            </h3>
            <p className="text-lg text-green-100 mb-6">
              எங்கள் AI விவசாய உதவியாளர் உங்கள் கொடி தாவர தோட்டத்திற்கு தனிப்பட்ட ஆலோசனையை வழங்கும்
            </p>
            <p className="text-base text-green-200 mb-6">
              Our AI farming assistant can provide personalized advice for your climber plant garden
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
