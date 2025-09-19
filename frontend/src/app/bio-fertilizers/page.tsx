'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const BioFertilizerProducts = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "EM & MA GEL",
      nameTamil: "EM & MA ஜெல்",
      description: "Natural seaweed-based fertilizer with 12 types of nutrients",
      descriptionTamil: "12 வகையான ஊட்டச்சத்துக்களுடன் கடல்பாசி அடிப்படையிலான இயற்கை உரம்",
      price: "₹11,000",
      quantity: "50 kg",
      packaging: ["50 kg - ₹11,000", "10 kg bucket - ₹2,200", "1 kg - ₹300"],
      benefits: [
        "Contains 12 types of essential nutrients",
        "Balances soil pH and increases earthworm population",
        "Increases crop yield by up to 30%",
        "100% naturally prepared from seaweed",
        "Can be used with drip irrigation (venturi method)"
      ],
      benefitsTamil: [
        "12 வகையான அத்தியாவசிய ஊட்டச்சத்துக்கள் கொண்டது",
        "மண் pH சமநிலைப்படுத்தி மண்புழு எண்ணிக்கை அதிகரிக்கிறது",
        "பயிர் விளைச்சலை 30% வரை அதிகரிக்கிறது",
        "கடல்பாசியிலிருந்து 100% இயற்கையாக தயாரிக்கப்பட்டது",
        "டிரிப் நீர்ப்பாசனத்துடன் (வென்டூரி முறை) பயன்படுத்தலாம்"
      ],
      usage: "5 kg per acre for short-term crops, 10 kg per acre for long-term crops. Mix with irrigation water.",
      usageTamil: "குறுகிய கால பயிர்களுக்கு ஏக்கருக்கு 5 கிலோ, நீண்ட கால பயிர்களுக்கு ஏக்கருக்கு 10 கிலோ. நீர்ப்பாசன நீருடன் கலக்கவும்.",
      crops: ["Coconut", "Banana", "Tomato", "Chili", "All Crops"],
      image: "/images/bio-fertilizers/em-ma-gel.jpg"
    },
    {
      id: 2,
      name: "HUMIC",
      nameTamil: "ஹ்யூமிக்",
      description: "Soil conditioner for pH stabilization and improved root development",
      descriptionTamil: "pH நிலைப்படுத்தல் மற்றும் வேர் வளர்ச்சி மேம்பாட்டுக்கான மண் நிலைப்படுத்தி",
      price: "₹1,000",
      quantity: "1 kg",
      packaging: ["1 kg - ₹1,000", "½ kg - ₹500"],
      benefits: [
        "Stabilizes soil pH (acid-alkaline balance)",
        "Contains humic acid, fulvic acid, and potash",
        "Improves soil moisture retention and porosity",
        "Mitigates damage from chemical fertilizers",
        "Enhances root development"
      ],
      benefitsTamil: [
        "மண் pH (அமில-கார சமநிலை) நிலைப்படுத்துகிறது",
        "ஹ்யூமிக் அமிலம், ஃபல்விக் அமிலம் மற்றும் பொட்டாஷ் கொண்டது",
        "மண் ஈரப்பதம் தக்கவைத்தல் மற்றும் துளைத்தன்மையை மேம்படுத்துகிறது",
        "வேதியியல் உரங்களால் ஏற்படும் சேதத்தை குறைக்கிறது",
        "வேர் வளர்ச்சியை மேம்படுத்துகிறது"
      ],
      usage: "1 to 2 kg per acre, or 1 kg per acre when mixed with other fertilizers.",
      usageTamil: "ஏக்கருக்கு 1 முதல் 2 கிலோ, அல்லது பிற உரங்களுடன் கலக்கும்போது ஏக்கருக்கு 1 கிலோ.",
      crops: ["Root Vegetables", "All Crops"],
      image: "/images/bio-fertilizers/humic-k.jpg"
    },
    {
      id: 3,
      name: "BORON",
      nameTamil: "போரான்",
      description: "Boron deficiency correction for enhanced flowering and fruiting",
      descriptionTamil: "மேம்பட்ட பூத்தல் மற்றும் கனிதருவதற்கான போரான் குறைபாடு சரிசெய்தல்",
      price: "₹1,000",
      quantity: "1 kg",
      packaging: ["1 kg - ₹1,000", "½ kg - ₹500"],
      benefits: [
        "Corrects boron deficiency in crops",
        "Increases number of female flowers",
        "Leads to significant increase in fruit count",
        "Improves fruit quality and size",
        "Essential for proper pollination"
      ],
      benefitsTamil: [
        "பயிர்களில் போரான் குறைபாட்டை சரிசெய்கிறது",
        "பெண் பூக்களின் எண்ணிக்கையை அதிகரிக்கிறது",
        "கனி எண்ணிக்கையில் குறிப்பிடத்தக்க அதிகரிப்பு",
        "கனி தரம் மற்றும் அளவை மேம்படுத்துகிறது",
        "சரியான மகரந்தச் சேர்க்கைக்கு அவசியம்"
      ],
      usage: "1-2 kg per acre, 10-20 grams per coconut tree. Can be used as foliar spray (5-10 grams per liter of water).",
      usageTamil: "ஏக்கருக்கு 1-2 கிலோ, ஒரு தேங்காய் மரத்திற்கு 10-20 கிராம். இலை தெளிப்பாக பயன்படுத்தலாம் (ஒரு லிட்டர் நீருக்கு 5-10 கிராம்).",
      crops: ["Coconut", "All Crops"],
      image: "/images/bio-fertilizers/boron-plus.jpg"
    },
    {
      id: 4,
      name: "MICROMAX",
      nameTamil: "மைக்ரோமேக்ஸ்",
      description: "Comprehensive micronutrient solution for enhanced crop yield",
      descriptionTamil: "மேம்பட்ட பயிர் விளைச்சலுக்கான விரிவான நுண்ணூட்டச்சத்து தீர்வு",
      price: "₹1,300",
      quantity: "10 kg",
      benefits: [
        "Addresses micronutrient deficiencies in coconut and other crops",
        "Enhances nutrient uptake by crops",
        "Stimulates flower development hormones",
        "Contains Copper, Iron, Boron, Molybdenum, Manganese, and Zinc",
        "Increases overall crop yield"
      ],
      benefitsTamil: [
        "தேங்காய் மற்றும் பிற பயிர்களில் நுண்ணூட்டச்சத்து குறைபாட்டை சரிசெய்கிறது",
        "பயிர்களின் ஊட்டச்சத்து உறிஞ்சுதலை மேம்படுத்துகிறது",
        "பூ வளர்ச்சி ஹார்மோன்களை தூண்டுகிறது",
        "தாமிரம், இரும்பு, போரான், மாலிப்டினம், மாங்கனீசு மற்றும் துத்தநாகம் கொண்டது",
        "ஒட்டுமொத்த பயிர் விளைச்சலை அதிகரிக்கிறது"
      ],
      usage: "250 grams per coconut tree. Can be applied to soil or as foliar spray.",
      usageTamil: "ஒரு தேங்காய் மரத்திற்கு 250 கிராம். மண்ணில் பயன்படுத்தலாம் அல்லது இலை தெளிப்பாக பயன்படுத்தலாம்.",
      crops: ["Coconut", "Mango", "Beans", "Leafy Greens"],
      image: "/images/bio-fertilizers/micro-max.jpg"
    },
    {
      id: 5,
      name: "CMS MAX",
      nameTamil: "CMS மேக்ஸ்",
      description: "Advanced crop management solution for enhanced productivity",
      descriptionTamil: "மேம்பட்ட உற்பத்தித்திறனுக்கான மேம்பட்ட பயிர் மேலாண்மை தீர்வு",
      price: "₹600",
      quantity: "10 kg",
      benefits: [
        "Advanced crop management system",
        "Enhances overall plant health",
        "Improves nutrient absorption",
        "Suitable for various crop types",
        "Increases yield potential"
      ],
      benefitsTamil: [
        "மேம்பட்ட பயிர் மேலாண்மை அமைப்பு",
        "ஒட்டுமொத்த தாவர ஆரோக்கியத்தை மேம்படுத்துகிறது",
        "ஊட்டச்சத்து உறிஞ்சுதலை மேம்படுத்துகிறது",
        "பல்வேறு பயிர் வகைகளுக்கு ஏற்றது",
        "விளைச்சல் திறனை அதிகரிக்கிறது"
      ],
      usage: "Apply as per crop requirements and growth stage.",
      usageTamil: "பயிர் தேவைகள் மற்றும் வளர்ச்சி நிலைக்கு ஏற்ப பயன்படுத்தவும்.",
      crops: ["All Crops"],
      image: "/images/bio-fertilizers/cms-max.jpg"
    },
    {
      id: 6,
      name: "PSEUDOMONAS",
      nameTamil: "சூடோமோனாஸ்",
      description: "Beneficial bacteria for root and stem health",
      descriptionTamil: "வேர் மற்றும் தண்டு ஆரோக்கியத்திற்கான நன்மை பயக்கும் பாக்டீரியா",
      price: "₹300",
      quantity: "1 kg",
      benefits: [
        "Helps control coconut root wilt disease",
        "Effective against stem rot and neck rot diseases",
        "Contains beneficial bacteria for root and stem health",
        "Improves overall plant immunity",
        "Natural disease prevention"
      ],
      benefitsTamil: [
        "தேங்காய் வேர் வாடல் நோயை கட்டுப்படுத்த உதவுகிறது",
        "தண்டு அழுகல் மற்றும் கழுத்து அழுகல் நோய்களுக்கு பயனுள்ளது",
        "வேர் மற்றும் தண்டு ஆரோக்கியத்திற்கான நன்மை பயக்கும் பாக்டீரியா கொண்டது",
        "ஒட்டுமொத்த தாவர நோய் எதிர்ப்பு சக்தியை மேம்படுத்துகிறது",
        "இயற்கை நோய் தடுப்பு"
      ],
      usage: "2-5 kg per acre, 25-50 grams per coconut tree. Mix with water and apply to soil.",
      usageTamil: "ஏக்கருக்கு 2-5 கிலோ, ஒரு தேங்காய் மரத்திற்கு 25-50 கிராம். நீருடன் கலந்து மண்ணில் பயன்படுத்தவும்.",
      crops: ["Coconut", "All Crops"],
      image: "/images/bio-fertilizers/pseudo-plus.jpg"
    },
    {
      id: 7,
      name: "NPK LIQUID",
      nameTamil: "NPK திரவ",
      description: "Essential for early plant growth and increased root absorption",
      descriptionTamil: "ஆரம்ப தாவர வளர்ச்சிக்கு அவசியம் மற்றும் வேர் உறிஞ்சுதல் அதிகரிப்பு",
      price: "₹1,200",
      quantity: "10 lit",
      packaging: ["10 lit - ₹1,200", "5 lit - ₹600"],
      benefits: [
        "Increases root absorption by 20-30% for higher yields",
        "Contains essential micronutrients: Nitrogen, Phosphorus, Potassium",
        "Rich in organic carbon and organic minerals",
        "Suitable for all crops"
      ],
      benefitsTamil: [
        "20-30% வேர் உறிஞ்சுதல் அதிகரிப்பு மூலம் அதிக விளைச்சல்",
        "அத்தியாவசிய நுண்ணூட்டச்சத்துக்கள்: நைட்ரஜன், பாஸ்பரஸ், பொட்டாசியம்",
        "கரிம கார்பன் மற்றும் கரிம கனிமங்கள் நிறைந்தது",
        "அனைத்து பயிர்களுக்கும் ஏற்றது"
      ],
      usage: "5 liters per acre for short-term crops, up to 10 liters per acre for long-term crops. Mix with irrigation water.",
      usageTamil: "குறுகிய கால பயிர்களுக்கு ஏக்கருக்கு 5 லிட்டர், நீண்ட கால பயிர்களுக்கு ஏக்கருக்கு 10 லிட்டர் வரை. நீர்ப்பாசன நீருடன் கலக்கவும்.",
      crops: ["Coconut", "Rice/Wheat", "Brinjal", "All Crops"],
      image: "/images/bio-fertilizers/soilnpk.png"
    },
    {
      id: 8,
      name: "MICRO NUTRIENT SPECIAL TONIC",
      nameTamil: "நுண்ணூட்டச்சத்து சிறப்பு டானிக்",
      description: "Specialized micronutrient formula for enhanced plant growth",
      descriptionTamil: "மேம்பட்ட தாவர வளர்ச்சிக்கான சிறப்பு நுண்ணூட்டச்சத்து சூத்திரம்",
      price: "₹5,250",
      quantity: "10 lit",
      packaging: ["10L - ₹5,250", "5L - ₹2,625", "1L - ₹525"],
      benefits: [
        "Comprehensive micronutrient solution",
        "Enhances plant growth and development",
        "Improves nutrient absorption",
        "Boosts overall plant health",
        "Suitable for all crop types"
      ],
      benefitsTamil: [
        "விரிவான நுண்ணூட்டச்சத்து தீர்வு",
        "தாவர வளர்ச்சி மற்றும் வளர்ச்சியை மேம்படுத்துகிறது",
        "ஊட்டச்சத்து உறிஞ்சுதலை மேம்படுத்துகிறது",
        "ஒட்டுமொத்த தாவர ஆரோக்கியத்தை அதிகரிக்கிறது",
        "அனைத்து பயிர் வகைகளுக்கும் ஏற்றது"
      ],
      usage: "Apply as per crop requirements and growth stage.",
      usageTamil: "பயிர் தேவைகள் மற்றும் வளர்ச்சி நிலைக்கு ஏற்ப பயன்படுத்தவும்.",
      crops: ["All Crops"],
      image: "/images/bio-fertilizers/micro-nutrient-coconut.jpg"
    },
    {
      id: 9,
      name: "NUTRI GOLD",
      nameTamil: "நியூட்ரி கோல்ட்",
      description: "Foliar spray for enhanced plant respiration and nutrient absorption",
      descriptionTamil: "தாவர சுவாசம் மற்றும் ஊட்டச்சத்து உறிஞ்சுதல் மேம்பாட்டுக்கான இலை தெளிப்பு",
      price: "₹500",
      quantity: "1 lit",
      packaging: ["1L - ₹500", "5L - ₹2,500", "¼L - ₹125"],
      benefits: [
        "Improves plant respiration and ion exchange",
        "Aids in complete absorption of macro and micronutrients",
        "Enhances photosynthesis due to glutamic acid",
        "Prevents shedding of leaves, flowers, and fruits",
        "Removes soil toxicity"
      ],
      benefitsTamil: [
        "தாவர சுவாசம் மற்றும் அயன் பரிமாற்றத்தை மேம்படுத்துகிறது",
        "மேக்ரோ மற்றும் நுண்ணூட்டச்சத்துக்களின் முழுமையான உறிஞ்சுதலை உதவுகிறது",
        "குளுடாமிக் அமிலம் காரணமாக ஒளிச்சேர்க்கையை மேம்படுத்துகிறது",
        "இலைகள், பூக்கள் மற்றும் பழங்களின் விழுதலை தடுக்கிறது",
        "மண் நச்சுத்தன்மையை நீக்குகிறது"
      ],
      usage: "5 to 10 ml per liter of water. Apply as foliar spray.",
      usageTamil: "ஒரு லிட்டர் நீருக்கு 5 முதல் 10 மில்லி. இலை தெளிப்பாக பயன்படுத்தவும்.",
      crops: ["Potato", "Tomato", "Brinjal", "Banana"],
      image: "/images/bio-fertilizers/nutri-gold.jpg"
    },
    {
      id: 10,
      name: "BIO MANURE",
      nameTamil: "உயிர் உரம்",
      description: "Complete organic manure with NPK and essential nutrients",
      descriptionTamil: "NPK மற்றும் அத்தியாவசிய ஊட்டச்சத்துக்களுடன் முழுமையான கரிம உரம்",
      price: "₹1,000",
      quantity: "50 kg",
      minimumOrder: "Minimum 10 bags required",
      minimumOrderTamil: "குறைந்தபட்சம் 10 பைகள் தேவை",
      benefits: [
        "Contains NPK, Neem Cake, Secondary Nutrients, Organic Carbon",
        "Rich in micronutrients and minerals",
        "Naturally produced from poultry farm waste, sugar mill waste, and tapioca",
        "Improves soil fertility and structure",
        "Suitable for all types of crops"
      ],
      benefitsTamil: [
        "NPK, வேம்பு கேக், இரண்டாம் நிலை ஊட்டச்சத்துக்கள், கரிம கார்பன் கொண்டது",
        "நுண்ணூட்டச்சத்துக்கள் மற்றும் கனிமங்கள் நிறைந்தது",
        "கோழி பண்ணை கழிவுகள், சர்க்கரை ஆலை கழிவுகள் மற்றும் மரவள்ளி கழிவுகளிலிருந்து இயற்கையாக தயாரிக்கப்பட்டது",
        "மண் வளத்தன்மை மற்றும் கட்டமைப்பை மேம்படுத்துகிறது",
        "அனைத்து வகையான பயிர்களுக்கும் ஏற்றது"
      ],
      usage: "200-300 kg per acre for short-term crops, 3 kg per coconut tree. Apply to soil and mix well.",
      usageTamil: "குறுகிய கால பயிர்களுக்கு ஏக்கருக்கு 200-300 கிலோ, ஒரு தேங்காய் மரத்திற்கு 3 கிலோ. மண்ணில் பயன்படுத்தி நன்கு கலக்கவும்.",
      crops: ["Coconut", "Banana", "Chili", "All Crops"],
      image: "/images/bio-fertilizers/bio-manure.jpg"
    }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Bio Fertilizer Products
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-green-600 mb-8">
            உயிர் உரம் தயாரிப்புகள்
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-4">
              High-quality organic bio fertilizers for sustainable agriculture. 
              Enhance your crop yield with our premium range of natural fertilizers.
            </p>
            <p className="text-xl text-gray-600">
              நிலையான விவசாயத்திற்கான உயர்தர கரிம உயிர் உரங்கள். 
              எங்கள் பிரீமியம் இயற்கை உரங்களின் வரம்புடன் உங்கள் பயிர் விளைச்சலை அதிகரிக்கவும்.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              {/* Product Image */}
              <div className="h-72 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="text-lg font-bold">{product.price}</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                {/* Product Name */}
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <h4 className="text-xl font-semibold text-green-600 mb-4">
                    {product.nameTamil}
                  </h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Price Card */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                    <div className="text-center">
                      <p className="text-sm text-green-600 font-medium mb-1">Price / விலை</p>
                      <p className="text-2xl font-bold text-green-700">{product.price}</p>
                      <p className="text-sm text-green-600">/ {product.quantity}</p>
                    </div>
                  </div>

                  {/* Quantity Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="text-center">
                      <p className="text-sm text-blue-600 font-medium mb-1">Available / கிடைக்கும்</p>
                      <p className="text-lg font-bold text-blue-700">{product.quantity}</p>
                      {product.minimumOrder && (
                        <p className="text-xs text-blue-600 mt-1">Min: 10 bags</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-gray-700 text-base mb-2 font-medium">
                    {product.description}
                  </p>
                  <p className="text-gray-600 text-base">
                    {product.descriptionTamil}
                  </p>
                </div>

                {/* Benefits - English and Tamil */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <span className="mr-2 text-2xl">🌟</span>
                    Benefits / நன்மைகள்
                  </h5>
                  
                  {/* English Benefits */}
                  <div className="mb-4">
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start bg-blue-50 p-3 rounded-lg">
                          <span className="text-blue-500 mr-3 mt-1 text-lg">✓</span>
                          <span className="text-blue-800 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tamil Benefits */}
                  <div className="mb-4">
                    <div className="space-y-2">
                      {product.benefitsTamil.map((benefit, idx) => (
                        <div key={idx} className="flex items-start bg-green-50 p-3 rounded-lg">
                          <span className="text-green-500 mr-3 mt-1 text-lg">✓</span>
                          <span className="text-green-800 text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Usage Instructions - English and Tamil */}
                <div className="mb-6 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400">
                  <h5 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                    <span className="mr-2 text-xl">📋</span>
                    Usage Instructions / பயன்பாடு வழிமுறைகள்
                  </h5>
                  
                  {/* English Usage */}
                  <div className="mb-3">
                    <p className="text-orange-700 text-sm font-medium">
                      {product.usage}
                    </p>
                  </div>

                  {/* Tamil Usage */}
                  <div className="mb-3">
                    <p className="text-orange-700 text-sm font-medium">
                      {product.usageTamil}
                    </p>
                  </div>
                </div>

                {/* Suitable Crops */}
                <div className="mb-6">
                  <h5 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <span className="mr-2 text-xl">🌱</span>
                    Suitable Crops / ஏற்ற பயிர்கள்
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {product.crops.map((crop, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 text-sm font-medium rounded-full border border-purple-300"
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    All listed crops are suitable for this product / பட்டியலிடப்பட்ட அனைத்து பயிர்களும் இந்த தயாரிப்புக்கு ஏற்றவை
                  </p>
                </div>

                {/* Packaging Options */}
                {product.packaging && (
                  <div className="mb-6 p-4 bg-teal-50 rounded-xl border-l-4 border-teal-400">
                    <h5 className="text-lg font-bold text-teal-800 mb-3 flex items-center">
                      <span className="mr-2 text-xl">📦</span>
                      Available Packings / கிடைக்கும் பேக்கேஜிங்
                    </h5>
                    <div className="space-y-2">
                      {product.packaging.map((pack, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg border border-teal-200 shadow-sm">
                          <p className="text-teal-700 text-sm font-medium text-center">{pack}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-teal-600 mt-2 text-center">
                      Multiple packaging options available / பல பேக்கேஜிங் விருப்பங்கள் கிடைக்கும்
                    </p>
                  </div>
                )}

                {/* Action Button */}
                <a 
                  href={`https://wa.me/918072897988?text=Hi, I'm interested in ${product.name} bio fertilizer. Please provide more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 font-bold text-lg text-center block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact for Details / விவரங்களுக்கு தொடர்பு
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl shadow-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                Need More Information?
              </h3>
              <h4 className="text-3xl font-semibold mb-8">
                மேலும் தகவல் தேவையா?
              </h4>
              <p className="text-xl mb-6 max-w-3xl mx-auto">
                Contact our agricultural experts for personalized advice on bio fertilizer usage 
                and crop management strategies.
              </p>
              <p className="text-xl max-w-3xl mx-auto">
                உயிர் உரம் பயன்பாடு மற்றும் பயிர் மேலாண்மை உத்திகளில் தனிப்பட்ட ஆலோசனைக்கு 
                எங்கள் விவசாய நிபுணர்களைத் தொடர்பு கொள்ளவும்.
              </p>
            </div>
            
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h5 className="text-xl font-bold mb-2">Phone / தொலைபேசி</h5>
                <p className="text-lg font-semibold">+91 8072897988</p>
                <p className="text-sm opacity-90">WhatsApp Available</p>
              </div>
              
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">📧</div>
                <h5 className="text-xl font-bold mb-2">Email / மின்னஞ்சல்</h5>
                <p className="text-lg font-semibold">soilmitra2025@gmail.com</p>
                <p className="text-sm opacity-90">24/7 Support</p>
              </div>
              
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h5 className="text-xl font-bold mb-2">Company / நிறுவனம்</h5>
                <p className="text-lg font-semibold">Sree Marudhan Agro Care</p>
                <p className="text-sm opacity-90">Erode, Tamil Nadu</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/918072897988?text=Hi, I'm interested in your bio fertilizer products. Please provide more information about pricing and availability."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold text-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us / எங்களைத் தொடர்பு கொள்ளுங்கள்
              </a>
              <a 
                href="https://wa.me/918072897988?text=Hi, I would like to download the bio fertilizer brochure. Please send me the details."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-green-600 transition-colors font-bold text-xl text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Download Brochure / பிரோஷர் பதிவிறக்கவும்
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioFertilizerProducts;