"use client";
import { useLanguage } from "../../contexts/LanguageContext";
import ImprovedHero from "../components/ImprovedHero";

export default function ProductPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImprovedHero
        title="Our Products"
        subtitle="Discover our premium collection of organic fertilizers, seeds, and farming supplies designed to enhance your agricultural success."
        backgroundGradient="from-teal-600 via-green-600 to-emerald-600"
      >
        {/* Product Categories Overview */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Organic Fertilizers</h3>
              <p className="text-white/80 text-sm">Natural solutions for soil health and plant growth</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-semibold text-white mb-2">Native Seeds</h3>
              <p className="text-white/80 text-sm">High-quality seeds adapted to local conditions</p>
            </div>
          </div>
        </div>
      </ImprovedHero>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Organic Farming Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality products to support your sustainable farming journey
            </p>
          </div>
          
          {/* Liquid Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("products.categories.liquidProducts")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">பஞ்சகவ்யா</h4>
                  <span className="text-xl font-bold text-green-600">₹150</span>
                </div>
                <p className="text-gray-600 text-xs">Panchagavya - Traditional organic preparation</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Best Seller</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">மீன் அமிலம்</h4>
                  <span className="text-xl font-bold text-blue-600">₹200</span>
                </div>
                <p className="text-gray-600 text-xs">Fish Amino Acid - Natural nitrogen source</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">New</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">பூச்சிவிரட்டி</h4>
                  <span className="text-xl font-bold text-yellow-600">₹150</span>
                </div>
                <p className="text-gray-600 text-xs">Poochiviratti - Natural insect repellent</p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Organic</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">அமினோ அமிலம்</h4>
                  <span className="text-xl font-bold text-purple-600">₹500</span>
                </div>
                <p className="text-gray-600 text-xs">Amino Acid - Plant growth promoter</p>
                <div className="mt-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Premium</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">கடல்பாசி உரம்</h4>
                  <span className="text-xl font-bold text-indigo-600">₹300</span>
                </div>
                <p className="text-gray-600 text-xs">Seaweed Fertilizer - Marine nutrients</p>
                <div className="mt-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">Marine</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-base font-semibold text-gray-900">ஹியூமிக் அமிலம்</h4>
                  <span className="text-xl font-bold text-red-600">₹300</span>
                </div>
                <p className="text-gray-600 text-xs">Humic Acid - Soil conditioner</p>
                <div className="mt-4">
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Soil Health</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">முட்டை அமினோ அமிலம்</h4>
                  <span className="text-2xl font-bold text-teal-600">₹400</span>
                </div>
                <p className="text-gray-600 text-sm">Egg Amino Acid - Protein-rich fertilizer</p>
                <div className="mt-4">
                  <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">Protein Rich</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bacterial Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t("products.categories.bacterialProducts")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">அசோட்டோ பாக்டர்</h4>
                  <span className="text-2xl font-bold text-green-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Azotobacter - Nitrogen fixing bacteria</p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Nitrogen Fixer</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">பொட்டாஷ் மொபிலைசிங் பாக்டீரியா</h4>
                  <span className="text-2xl font-bold text-blue-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Potash Mobilizing Bacteria - Potassium solubilizer</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Potassium</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">பாஸ்பேட் மொபிலைசிங் பாக்டீரியா</h4>
                  <span className="text-2xl font-bold text-yellow-600">₹300</span>
                </div>
                <p className="text-gray-600 text-sm">Phosphate Mobilizing Bacteria - Phosphorus solubilizer</p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Phosphorus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing Products?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our AI assistant can help you select the perfect products for your specific farming needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-lg">
              Chat with AI Assistant
            </button>
            <button className="px-8 py-4 bg-transparent text-green-600 font-semibold rounded-full border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
              Contact Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 