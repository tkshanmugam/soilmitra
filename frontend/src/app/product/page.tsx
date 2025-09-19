"use client";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Products
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-6">
            தயாரிப்புகள்
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of agricultural products designed to enhance your farming success and crop yield.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bio Fertilizers Card */}
          <Link href="/bio-fertilizers">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bio Fertilizers</h3>
                    <h4 className="text-lg font-semibold opacity-90">உயிர் உரம் தயாரிப்புகள்</h4>
                  </div>
                  <div className="text-4xl opacity-80">🧪</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  High-quality organic bio fertilizers for sustainable agriculture. 
                  Enhance your crop yield with our premium range of natural fertilizers.
                </p>
                <p className="text-gray-600 mb-6">
                  நிலையான விவசாயத்திற்கான உயர்தர கரிம உயிர் உரங்கள். 
                  எங்கள் பிரீமியம் இயற்கை உரங்களின் வரம்புடன் உங்கள் பயிர் விளைச்சலை அதிகரிக்கவும்.
                </p>
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold">
                    Explore Products / தயாரிப்புகளை ஆராயுங்கள்
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Native Seeds Card */}
          <Link href="/seeds">
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Native Seeds</h3>
                    <h4 className="text-lg font-semibold opacity-90">நாட்டு விதைகள்</h4>
                  </div>
                  <div className="text-4xl opacity-80">🌿</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  High-quality native seeds adapted to local conditions. 
                  Discover our comprehensive collection of traditional and exotic seed varieties.
                </p>
                <p className="text-gray-600 mb-6">
                  உள்ளூர் நிலைமைகளுக்கு ஏற்ற உயர்தர நாட்டு விதைகள். 
                  பாரம்பரிய மற்றும் அரிய விதை வகைகளின் எங்கள் விரிவான தொகுப்பைக் கண்டறியவும்.
                </p>
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold">
                    Explore Products / தயாரிப்புகளை ஆராயுங்கள்
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Future Products Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            More Products Coming Soon
          </h2>
          <h3 className="text-xl font-semibold text-green-600 mb-6">
            மேலும் தயாரிப்புகள் விரைவில் வருகின்றன
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re constantly expanding our product range to better serve your agricultural needs. 
            Stay tuned for new categories and products.
          </p>
        </div>
      </div>
    </div>
  );
}