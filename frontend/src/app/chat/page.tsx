"use client";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

interface Message {
  from: "user" | "bot";
  text: string;
}

function getSessionId() {
  let id = typeof window !== "undefined" ? localStorage.getItem("chat_session_id") : null;
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("chat_session_id", id);
  }
  return id;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ta'>('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, locale, setLocale } = useLanguage();

  // Fallback language state in case context fails
  useEffect(() => {
    if (locale) {
      setCurrentLanguage(locale);
    }
  }, [locale]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const id = getSessionId();
    setSessionId(id);
    fetch(`http://localhost:8000/api/chat/history?session_id=${id}`)
      .then(res => res.json())
      .then((data) => {
        setMessages(
          data.map((m: any) => ({ from: m.sender, text: m.message }))
        );
      })
      .catch(() => setMessages([]));
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return;
    
    // Always send English text to backend for RAG processing
    let messageToSend = input;
    if (currentLanguage === 'ta') {
      // For now, we'll send the Tamil text as-is, but you can add translation here later
      // messageToSend = await translateToEnglish(input);
      messageToSend = input; // Keep Tamil text for now, backend will handle it
    }
    
    const userMsg = { from: "user" as const, text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: messageToSend, 
          session_id: sessionId,
          language: currentLanguage 
        }),
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { from: "bot", text: data.reply }]);
    } catch {
      setMessages(msgs => [...msgs, { from: "bot", text: t("chat.error") }]);
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageSwitch = () => {
    const newLocale = currentLanguage === 'en' ? 'ta' : 'en';
    console.log('Switching language from', currentLanguage, 'to', newLocale);
    setCurrentLanguage(newLocale);
    try {
      setLocale(newLocale);
    } catch (error) {
      console.error('Error setting locale in context:', error);
    }
  };

  // Debug logging
  useEffect(() => {
    console.log('Current locale:', locale);
    console.log('Current language state:', currentLanguage);
  }, [locale, currentLanguage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-[#E8F5E8] font-sans">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2E7D32] rounded-full mb-6 shadow-lg">
            <span className="text-3xl">🌱</span>
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 ${
            currentLanguage === 'ta' ? 'font-tamil' : ''
          }`}>
            {t("chat.title")}
          </h1>
          <p className={`text-lg text-[#6D4C41] max-w-2xl mx-auto ${
            currentLanguage === 'ta' ? 'font-tamil' : ''
          }`}>
            {t("chat.placeholder")}
          </p>
        </div>
      </section>

      {/* AI Disclaimer Section */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⚠️</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold text-amber-800 mb-2 ${
                  currentLanguage === 'ta' ? 'font-tamil' : ''
                }`}>
                  {currentLanguage === 'en' ? 'AI-Powered Farming Assistant – Important Note' : 'செயற்கை நுண்ணறிவு விவசாய உதவியாளர் – முக்கிய குறிப்பு'}
                </h3>
                <div className={`text-amber-700 text-sm leading-relaxed space-y-2 ${
                  currentLanguage === 'ta' ? 'font-tamil' : ''
                }`}>
                  <p>
                    {currentLanguage === 'en' 
                      ? 'This assistant uses artificial intelligence to provide general guidance about farming, fertilizers, and crop care. We work hard to give useful and accurate information, but please remember:'
                      : 'இந்த உதவியாளர் விவசாயம், உரங்கள் மற்றும் பயிர் பராமரிப்பு பற்றிய பொதுவான வழிகாட்டுதலை வழங்க செயற்கை நுண்ணறிவைப் பயன்படுத்துகிறது. பயனுள்ள மற்றும் துல்லியமான தகவல்களை வழங்க நாங்கள் கடுமையாக உழைக்கிறோம், ஆனால் நினைவில் கொள்ளவும்:'
                    }
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      {currentLanguage === 'en' 
                        ? 'AI answers may sometimes have small mistakes or missing details.'
                        : 'செயற்கை நுண்ணறிவு பதில்களில் சில நேரங்களில் சிறிய பிழைகள் அல்லது விடுபட்ட விவரங்கள் இருக்கலாம்.'
                      }
                    </li>
                    <li>
                      {currentLanguage === 'en' 
                        ? 'Always verify recommendations with our agriculture consultants before taking action.'
                        : 'நடவடிக்கை எடுப்பதற்கு முன் எப்போதும் எங்கள் விவசாய ஆலோசகர்களுடன் பரிந்துரைகளை சரிபார்க்கவும்.'
                      }
                    </li>
                    <li>
                      {currentLanguage === 'en' 
                        ? 'Farming results depend on your soil, weather, and farming methods.'
                        : 'விவசாய முடிவுகள் உங்கள் மண், வானிலை மற்றும் விவசாய முறைகளைப் பொறுத்தது.'
                      }
                    </li>
                    <li>
                      {currentLanguage === 'en' 
                        ? 'This tool is meant for support and learning, not to replace professional advice.'
                        : 'இந்த கருவி ஆதரவு மற்றும் கற்றலுக்காக, தொழில்முறை ஆலோசனையை மாற்றுவதற்காக அல்ல.'
                      }
                    </li>
                  </ul>
                  <p className="font-medium mt-2">
                    {currentLanguage === 'en' 
                      ? 'We value your trust — this website is safe and built to help farmers like you.'
                      : 'உங்கள் நம்பிக்கையை நாங்கள் மதிக்கிறோம் — இந்த வலைத்தளம் பாதுகாப்பானது மற்றும் உங்களைப் போன்ற விவசாயிகளுக்கு உதவ கட்டப்பட்டுள்ளது.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#66BB6A]/20">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-[#2E7D32] text-lg">🌱</span>
                  </div>
                  <div>
                    <h3 className={`text-white font-semibold text-base ${
                      currentLanguage === 'ta' ? 'font-tamil' : ''
                    }`}>{t("chat.aiName")}</h3>
                    <p className={`text-white/80 text-xs ${
                      currentLanguage === 'ta' ? 'font-tamil' : ''
                    }`}>{t("chat.status")}</p>
                  </div>
                </div>
                
                {/* Language Toggle */}
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm font-medium">🌐</span>
                  <button
                    onClick={handleLanguageSwitch}
                    className={`bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      currentLanguage === 'en' ? 'font-tamil' : ''
                    }`}
                  >
                    {currentLanguage === 'en' ? 'தமிழ்' : 'English'}
                  </button>
                  <span className="text-white text-xs opacity-75">({currentLanguage})</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-[500px] overflow-y-auto p-6 bg-[#FAF3E0]/50">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#66BB6A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className={`text-base font-semibold text-[#2B2B2B] mb-2 ${
                    currentLanguage === 'ta' ? 'font-tamil' : ''
                  }`}>{t("chat.startConversation")}</h3>
                  <p className={`text-[#6D4C41] text-sm ${
                    currentLanguage === 'ta' ? 'font-tamil' : ''
                  }`}>{t("chat.placeholder")}</p>
                </div>
              )}
              
              {messages.map((msg, i) => (
                <div key={i} className={`mb-4 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-sm lg:max-w-lg xl:max-w-xl ${msg.from === "user" ? "order-2" : "order-1"}`}>
                    <div className={`px-4 py-3 rounded-2xl ${
                      msg.from === "user" 
                        ? "bg-[#2E7D32] text-white shadow-md" 
                        : "bg-white text-[#2B2B2B] shadow-md border border-[#66BB6A]/20"
                    }`}>
                      <div className={`text-lg leading-normal whitespace-pre-wrap chat-message ${
                        currentLanguage === 'ta' ? 'font-tamil' : ''
                      }`}>{msg.text}</div>
                    </div>
                    <div className={`text-xs text-[#6D4C41] mt-1 ${
                      msg.from === "user" ? "text-right" : "text-left"
                    }`}>
                      <span className={currentLanguage === 'ta' ? 'font-tamil' : ''}>
                        {msg.from === "user" ? t("chat.you") : t("chat.aiName")}
                      </span> • {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                  {msg.from === "bot" && (
                    <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center ml-3 order-1 shadow-md">
                      <span className="text-white text-sm">🌱</span>
                    </div>
                  )}
                </div>
              ))}
              
              {loading && (
                <div className="mb-4 flex justify-start">
                  <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center mr-3 shadow-md">
                    <span className="text-white text-sm">🌱</span>
                  </div>
                  <div className="max-w-sm lg:max-w-lg xl:max-w-xl">
                    <div className="bg-white text-[#2B2B2B] shadow-md px-4 py-3 rounded-2xl border border-[#66BB6A]/20">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                    <div className={`text-xs text-[#6D4C41] mt-1 ${
                      currentLanguage === 'ta' ? 'font-tamil' : ''
                    }`}>{t("chat.thinking")}</div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-[#66BB6A]/20">
              <form onSubmit={sendMessage} className="flex space-x-4">
                <div className="flex-1 relative">
                  <input
                    className={`w-full border-2 border-[#66BB6A]/30 rounded-2xl px-4 py-3 focus:border-[#2E7D32] focus:outline-none transition-colors bg-[#FAF3E0]/30 ${
                      currentLanguage === 'ta' ? 'font-tamil' : ''
                    }`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={t("chat.placeholder")}
                    disabled={loading}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6D4C41]">
                    <span className={`text-xs ${
                      currentLanguage === 'ta' ? 'font-tamil' : ''
                    }`}>{t("chat.pressEnter")}</span>
                  </div>
                </div>
                                                  <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className={`bg-[#2E7D32] hover:bg-[#1B5E20] disabled:bg-[#6D4C41] text-white px-6 py-3 rounded-2xl font-medium transition-colors disabled:cursor-not-allowed shadow-md ${
                    currentLanguage === 'ta' ? 'font-tamil' : ''
                  }`}
                >
                  {t("chat.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
                     <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
             {t("chat.features.title")}
           </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
                             <h3 className="text-lg font-bold text-gray-900 mb-2">{t("chat.features.cropPlanning.title")}</h3>
               <p className="text-gray-600 text-sm">
                {t("chat.features.cropPlanning.description")}
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💧</span>
              </div>
                             <h3 className="text-lg font-bold text-gray-900 mb-2">{t("chat.features.fertilizerAdvice.title")}</h3>
               <p className="text-gray-600 text-sm">
                {t("chat.features.fertilizerAdvice.description")}
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
                             <h3 className="text-lg font-bold text-gray-900 mb-2">{t("chat.features.growingTips.title")}</h3>
               <p className="text-gray-600 text-sm">
                {t("chat.features.growingTips.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 