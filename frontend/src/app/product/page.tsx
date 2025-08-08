"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

export default function ProductPage() {
  const [data, setData] = useState<{ title: string; content: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { t, locale } = useLanguage();

  useEffect(() => {
    fetch(`http://localhost:8000/api/pages/product?lang=${locale}`)
      .then(res => res.json())
      .then(setData)
      .catch(() => setError(t("common.failedToLoad")))
      .finally(() => setLoading(false));
  }, [t, locale]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-500 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <div className="text-xl">{error}</div>
      </div>
    </div>
  );
  
  if (!data) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t("products.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("products.description")}
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20"></div>
      </section>

      {/* Product Categories */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Organic Farming Products
          </h2>
          
          {/* Liquid Products */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">{t("products.categories.liquidProducts")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">பஞ்சகவ்யா</h4>
                  <span className="text-xl font-bold text-green-600">₹150</span>
                </div>
                <p className="text-gray-600 text-xs">Panchagavya - Traditional organic preparation</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">மீன் அமிலம்</h4>
                  <span className="text-xl font-bold text-blue-600">₹200</span>
                </div>
                <p className="text-gray-600 text-xs">Fish Amino Acid - Natural nitrogen source</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">பூச்சிவிரட்டி</h4>
                  <span className="text-xl font-bold text-yellow-600">₹150</span>
                </div>
                <p className="text-gray-600 text-xs">Poochiviratti - Natural insect repellent</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">அமினோ அமிலம்</h4>
                  <span className="text-xl font-bold text-purple-600">₹500</span>
                </div>
                <p className="text-gray-600 text-xs">Amino Acid - Plant growth promoter</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">கடல்பாசி உரம்</h4>
                  <span className="text-xl font-bold text-indigo-600">₹300</span>
                </div>
                <p className="text-gray-600 text-xs">Seaweed Fertilizer - Marine nutrients</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">ஹியூமிக் அமிலம்</h4>
                  <span className="text-xl font-bold text-red-600">₹300</span>
                </div>
                <p className="text-gray-600 text-xs">Humic Acid - Soil conditioner</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">முட்டை அமினோ அமிலம்</h4>
                  <span className="text-2xl font-bold text-teal-600">₹400</span>
                </div>
                <p className="text-gray-600 text-sm">Egg Amino Acid - Protein-rich fertilizer</p>
              </div>
            </div>
          </div>
          
          {/* Bacterial Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("products.categories.bacterialProducts")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">அசோட்டோ பாக்டர்</h4>
                  <span className="text-2xl font-bold text-green-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Azotobacter - Nitrogen fixing bacteria</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">பொட்டாஷ் மொபிலைசிங் பாக்டீரியா</h4>
                  <span className="text-2xl font-bold text-blue-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Potash Mobilizing Bacteria - Potassium solubilizer</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">ஜிங்க் மொபிலைசிங் பாக்டீரியா</h4>
                  <span className="text-2xl font-bold text-yellow-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Zinc Mobilizing Bacteria - Zinc solubilizer</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">அசோஸ்பைரில்லம்</h4>
                  <span className="text-2xl font-bold text-purple-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Azospirillum - Nitrogen fixing bacteria</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">பாஸ்போ பாக்டீரியா</h4>
                  <span className="text-2xl font-bold text-indigo-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Phospho Bacteria - Phosphate solubilizer</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">ரைசோபியம்</h4>
                  <span className="text-2xl font-bold text-red-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Rhizobium - Legume nitrogen fixer</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">மெட்டார்ரைசியம்</h4>
                  <span className="text-2xl font-bold text-teal-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Metarhizium - Bio pesticide</p>
              </div>
              
              <div className="bg-gradient-to-br from-lime-50 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">வெர்ட்டிசிலியம்</h4>
                  <span className="text-2xl font-bold text-lime-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Verticillium - Bio control agent</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">சூடோமோனாஸ்</h4>
                  <span className="text-2xl font-bold text-amber-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Pseudomonas - Plant growth promoter</p>
              </div>
              
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">டிரைகோடெரமா</h4>
                  <span className="text-2xl font-bold text-rose-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Trichoderma - Bio fungicide</p>
              </div>
              
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">பீவேறியா பாஸ்ஸியானா</h4>
                  <span className="text-2xl font-bold text-sky-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Beauveria Bassiana - Bio insecticide</p>
              </div>
              
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">என்பி கே</h4>
                  <span className="text-2xl font-bold text-violet-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">NPK - Balanced nutrient solution</p>
              </div>
            </div>
          </div>
          
          {/* Bulk Products */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("products.categories.bulkProducts")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">ஆர்கானிக் காம்பிளக்ஸ்</h4>
                  <div className="text-2xl font-bold text-green-600 mb-1">₹1250</div>
                  <p className="text-gray-600 text-sm">50 kg bag</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">போஷ்</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-1">₹950</div>
                  <p className="text-gray-600 text-sm">50 kg bag</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">வேப்பம்கொட்டை தூள்</h4>
                  <div className="text-2xl font-bold text-yellow-600 mb-1">₹50</div>
                  <p className="text-gray-600 text-sm">Per kg</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">இஎம் கரைசல்</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-1">₹750</div>
                  <p className="text-gray-600 text-sm">10 Liters</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">வேம்</h4>
                  <div className="text-2xl font-bold text-teal-600 mb-1">₹70</div>
                  <p className="text-gray-600 text-sm">Per kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            {t("products.features.title")}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("products.features.organic.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("products.features.organic.description")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">💧</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("products.features.easyApplication.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("products.features.easyApplication.description")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📊</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("products.features.provenResults.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("products.features.provenResults.description")}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("products.features.aiRecommendations.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("products.features.aiRecommendations.description")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("products.features.expertSupport.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("products.features.expertSupport.description")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("products.features.environmentFriendly.title")}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t("products.features.environmentFriendly.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t("products.demo.title")}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t("products.demo.description")}
              </p>
              <div className="space-y-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {t("products.demo.viewDemo")}
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ml-4">
                  {t("products.demo.contactUs")}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl">🎬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("products.demo.demoTitle")}</h3>
                  <p className="text-gray-600">
                    {t("products.demo.demoDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 