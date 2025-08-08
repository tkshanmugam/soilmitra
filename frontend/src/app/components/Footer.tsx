export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-lg flex items-center justify-center">
              <span className="text-sm">🌱</span>
            </div>
            <span className="font-bold text-xl">SoilMitra</span>
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Your AI-powered organic farming and fertilizer schedule assistant.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              © 2024 SoilMitra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}