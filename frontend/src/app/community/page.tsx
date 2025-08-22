"use client";
import { useLanguage } from "../../contexts/LanguageContext";
import ImprovedHero from "../components/ImprovedHero";

export default function CommunityPage() {
  const { t, mounted } = useLanguage();

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImprovedHero
        title="Join Our Community"
        subtitle="Connect with fellow farmers, share experiences, and learn from agricultural experts in our growing community."
        backgroundGradient="from-teal-600 via-emerald-600 to-green-600"
      />

      {/* Community Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Join Our Community?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect, learn, and grow together with farmers from around the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connect with Farmers</h3>
              <p className="text-gray-600">
                Meet like-minded farmers, share experiences, and build lasting relationships with agricultural professionals.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learn & Share</h3>
              <p className="text-gray-600">
                Access expert knowledge, share your farming techniques, and learn from successful agricultural practices.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainable Growth</h3>
              <p className="text-gray-600">
                Collaborate on sustainable farming initiatives and contribute to the future of organic agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Sections */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Discussion Forums */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Discussion Forums</h3>
                <p className="text-gray-600">Join conversations about various farming topics</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Organic Fertilizers</h4>
                    <p className="text-sm text-gray-600">Discuss best practices and experiences</p>
                  </div>
                  <span className="text-blue-600 text-sm font-medium">Active</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Crop Management</h4>
                    <p className="text-sm text-gray-600">Share tips and techniques</p>
                  </div>
                  <span className="text-green-600 text-sm font-medium">Popular</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Soil Health</h4>
                    <p className="text-sm text-gray-600">Learn about soil improvement</p>
                  </div>
                  <span className="text-purple-600 text-sm font-medium">New</span>
                </div>
              </div>
            </div>

            {/* Expert Q&A */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Q&A</h3>
                <p className="text-gray-600">Get answers from agricultural specialists</p>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Dr. Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600 mb-2">Soil Science Expert</p>
                  <p className="text-xs text-gray-500">Available for soil health consultations</p>
                </div>
                
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Priya Sharma</h4>
                  <p className="text-sm text-gray-600 mb-2">Organic Farming Specialist</p>
                  <p className="text-xs text-gray-500">Expert in natural pest control</p>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Amit Patel</h4>
                  <p className="text-sm text-gray-600 mb-2">Crop Management Advisor</p>
                  <p className="text-xs text-gray-500">Specializes in sustainable practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real farmers, real results - discover how our community members are transforming their farms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Tamil Nadu</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "Switched to organic farming with SoilMitra's guidance. My yields increased by 40% and soil health improved dramatically."
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">PS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">Karnataka</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "The community helped me learn natural pest control methods. Now I save money and protect the environment."
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Amit Patel</h4>
                  <p className="text-sm text-gray-600">Maharashtra</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                "SoilMitra's AI assistant and community experts helped me optimize my fertilizer schedule perfectly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with thousands of farmers and start your journey towards sustainable agriculture success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
              Join Community
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/50 hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
