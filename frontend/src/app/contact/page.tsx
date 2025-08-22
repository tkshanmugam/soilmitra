"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus(null);
    try {
      // For now, just simulate success since we removed the API call
      setFormStatus({ type: "success", msg: "Message sent! (Demo mode)" });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFormStatus({ type: "error", msg: "Failed to send message" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 overflow-x-hidden">
      {/* Hero Section - Modern & Elegant with Animations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-100 to-green-50 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-green-100 to-emerald-50 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-emerald-50 to-green-100 rounded-full blur-2xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Animated icon with elegant effects */}
          <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 via-emerald-400 to-green-400 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <span className="text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300 animate-bounce" style={{animationDelay: '0.5s'}}>📧</span>
              {/* Floating particles around icon */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60" style={{animationDelay: '0.3s'}}></div>
            </div>
          </div>
          
          {/* Animated title with modern typography */}
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight animate-fade-in">
              Contact Us
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mx-auto animate-pulse"></div>
          </div>
          
          {/* Animated subtitle with decorative elements */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-300 animate-pulse"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in" style={{animationDelay: '0.3s'}}>
              We're here to help! Reach out with any questions about our products, farming advice, or services.
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-300 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          {/* Animated accent elements */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 h-0.5 bg-emerald-300 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            <div className="w-6 h-0.5 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-10 left-10 w-4 h-4 border border-emerald-300 rounded-full animate-spin opacity-40" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-green-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Custom CSS for fade-in animation */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Contact Information Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Phone & Email */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📞 Get in Touch
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Phone (WhatsApp):</p>
                    <p className="text-lg font-semibold text-emerald-600">+91 8072897988</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Email:</p>
                    <p className="text-lg font-semibold text-emerald-600">soilmitra2025@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  🌿 Online Business Hours
                </h3>
                <p className="text-gray-600 mb-6">
                  We're available online to assist you during the following hours:
                </p>
                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Monday – Saturday</span>
                      <span className="text-emerald-600">🕘</span>
                    </div>
                    <p className="text-lg font-semibold text-emerald-600">9:00 AM to 6:00 PM</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">Sunday</span>
                      <span className="text-emerald-600">🌱</span>
                    </div>
                    <p className="text-gray-600 italic">Taking a break to recharge – we'll be back fresh on Monday!</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-6 text-sm">
                  Our team is ready to help with product guidance, expert advice, and order support.
                </p>
              </div>

              {/* Location */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📍 Our Location
                </h3>
                <p className="text-gray-600 mb-4">
                  We are Erode based and serve farmers across India with fast, reliable shipping.
                </p>
                <div>
                  <p className="text-gray-600 text-sm mb-1">Office Address:</p>
                  <p className="font-semibold text-gray-900">
                    Sree Marudhan Agro Care<br />
                    11, School Street, Kollukattuvalasu,<br />
                    Vengambur (P.O), Unjalur (Via),<br />
                    Erode Dist, Tamil Nadu - 638152
                  </p>
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  💬 Quick Support
                </h3>
                <p className="text-gray-600">
                  Message us directly via WhatsApp or email for fast assistance with products and orders.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-8 relative overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-2 right-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
                </div>
                
                {/* Main decorative background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-200 via-green-100 to-emerald-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                  <div className="absolute w-20 h-20 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full blur-xl opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Floating icon with advanced effects */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 rounded-full blur-md opacity-40 animate-pulse"></div>
                  
                  {/* Main icon container with 3D effect */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 via-emerald-400 to-green-400 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 group">
                    {/* Inner shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-2xl"></div>
                    
                    {/* 3D depth effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-600 rounded-2xl transform translate-y-1 opacity-20"></div>
                    
                    {/* Icon with shadow */}
                    <div className="relative z-10">
                      <span className="text-3xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">✉️</span>
                    </div>
                    
                    {/* Floating particles around icon */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
                
                {/* Advanced title with multiple effects */}
                <div className="relative mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 bg-clip-text text-transparent drop-shadow-sm">
                    Send us a Message
                  </h3>
                  {/* Title underline with animation */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mx-auto mt-2 animate-pulse group-hover:w-24 transition-all duration-700"></div>
                </div>
                
                {/* Sophisticated subtitle with animated elements */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-300 to-emerald-400 animate-pulse"></div>
                  <div className="relative">
                    <p className="text-gray-600 text-sm font-medium relative z-10">We'd love to hear from you!</p>
                    {/* Text glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 blur-sm opacity-20"></div>
                  </div>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent via-emerald-300 to-emerald-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Animated accent elements */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                  <div className="w-6 h-0.5 bg-gradient-to-l from-emerald-400 to-green-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                </div>
                
                {/* Floating geometric shapes */}
                <div className="absolute top-2 left-4 w-3 h-3 border border-emerald-300 rounded-full animate-spin opacity-40" style={{animationDuration: '8s'}}></div>
                <div className="absolute bottom-4 right-6 w-2 h-2 bg-green-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="group">
                  <label className="block font-semibold text-gray-700 mb-1.5 text-sm uppercase tracking-wide">
                    Name
                  </label>
                  <div className="relative">
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 focus:border-emerald-500 focus:outline-none transition-all duration-300 bg-white/50 hover:bg-white/80 group-hover:border-emerald-300" 
                      placeholder="Enter your full name"
                      required 
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-400 text-sm">👤</span>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block font-semibold text-gray-700 mb-1.5 text-sm uppercase tracking-wide">
                    Email
                  </label>
                  <div className="relative">
                    <input 
                      name="email" 
                      type="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 focus:border-emerald-500 focus:outline-none transition-all duration-300 bg-white/50 hover:bg-white/80 group-hover:border-emerald-300" 
                      placeholder="Enter your email address"
                      required 
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <span className="text-gray-400 text-sm">📧</span>
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block font-semibold text-gray-700 mb-1.5 text-sm uppercase tracking-wide">
                    Message
                  </label>
                  <div className="relative">
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      className="w-full border-2 border-gray-200 rounded-lg px-3 py-2.5 focus:border-emerald-500 focus:outline-none transition-all duration-300 resize-none bg-white/50 hover:bg-white/80 group-hover:border-emerald-300" 
                      placeholder="Tell us how we can help you..."
                      required 
                      rows={3} 
                    />
                    <div className="absolute top-2.5 right-3">
                      <span className="text-gray-400 text-sm">💬</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]" 
                  disabled={submitting}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>🚀</span>
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </button>
                
                {formStatus && (
                  <div className={`mt-3 p-2.5 rounded-lg text-center font-semibold border-2 transition-all duration-300 text-sm ${
                    formStatus.type === "success" 
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 shadow-lg" 
                      : "bg-red-50 text-red-700 border-red-200 shadow-lg"
                  }`}>
                    <div className="flex items-center justify-center space-x-2">
                      <span>{formStatus.type === "success" ? "✅" : "❌"}</span>
                      <span>{formStatus.msg}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 