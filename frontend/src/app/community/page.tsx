'use client';

import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  Shield, 
  Heart, 
  Star, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  UserCheck,
  DollarSign,
  Globe,
  Calendar,
  Users2,
  Leaf
} from 'lucide-react';

export default function CommunityPage() {
  const { language, t } = useLanguage();

  // Ensure language is properly initialized
  const currentLanguage = language || 'en';

  const content = {
    en: {
      title: "Organic Farming Community – Rules & Regulations",
      subtitle: "With Founder's Special Offer",
      vision: {
        title: "Vision",
        content: "To create a sustainable farming ecosystem that nurtures soil health, supports farmers, and provides safe food for future generations through organic practices."
      },
      mission: {
        title: "Mission",
        points: [
          "Promote chemical-free, eco-friendly farming.",
          "Support farmers with organic knowledge and resources.",
          "Build consumer trust for local organic produce.",
          "Improve rural livelihoods and preserve traditional methods."
        ]
      },
      objectives: {
        title: "Objectives",
        points: [
          "Educate on organic fertilizers, pest control, and soil health.",
          "Encourage local seeds and indigenous methods.",
          "Connect farmers with direct buyers.",
          "Organize training, workshops, and awareness programs."
        ]
      },
      membership: {
        title: "Membership",
        points: [
          "Only for customers of Sree Marudhan Agro Care.",
          "First 25 members get free membership.",
          "Provide correct details during registration.",
          "Membership can be ended voluntarily or for rule violations."
        ]
      },
      rules: {
        title: "Cardinal Rules",
        sections: {
          organic: {
            title: "A. Organic Commitment",
            points: [
              "Follow organic methods only (no synthetic chemicals or GM seeds).",
              "Promote environmental conservation.",
              "Share only genuine organic farming practices."
            ]
          },
          behavior: {
            title: "B. Behaviour & Conduct",
            points: [
              "Treat all members respectfully; no abuse or personal attacks.",
              "Use platforms only for farming-related discussions.",
              "No misinformation or unrelated promotions."
            ]
          },
          participation: {
            title: "C. Participation",
            points: [
              "Join training, events, and discussions actively.",
              "Share experiences to inspire others.",
              "Encourage others to join the organic movement."
            ]
          },
          disciplinary: {
            title: "D. Disciplinary",
            points: [
              "One warning for rule violations.",
              "Repeated offences → removal.",
              "Serious misconduct → immediate removal."
            ]
          },
          decision: {
            title: "E. Decision Making",
            points: [
              "Founder-led at present; advisory group planned for future."
            ]
          }
        }
      },
      
      growth: {
        title: "Growth Plan",
        points: [
          "Start locally, expand step-by-step.",
          "Regular awareness programs.",
          "Partner with NGOs and organic buyers.",
          "Build branding and online presence."
        ]
      }
    },
    ta: {
      title: "கரிம விவசாய சமூகம் – விதிகள் & விதிமுறைகள்",
      subtitle: "நிறுவனர் சிறப்பு சலுகையுடன்",
      vision: {
        title: "பார்வை",
        content: "மண் ஆரோக்கியத்தை வளர்க்கும், விவசாயிகளை ஆதரிக்கும் மற்றும் கரிம நடைமுறைகள் மூலம் எதிர்கால தலைமுறைகளுக்கு பாதுகாப்பான உணவை வழங்கும் நிலைத்த விவசாய சுற்றுச்சூழலை உருவாக்குவது."
      },
      mission: {
        title: "பணி",
        points: [
          "வேதியியல் இல்லாத, சுற்றுச்சூழல் நட்பு விவசாயத்தை ஊக்குவிக்கவும்.",
          "கரிம அறிவு மற்றும் வளங்களுடன் விவசாயிகளை ஆதரிக்கவும்.",
          "உள்ளூர் கரிம பொருட்களுக்கான நுகர்வோர் நம்பிக்கையை உருவாக்கவும்.",
          "கிராமப்புற வாழ்க்கையை மேம்படுத்தவும் மற்றும் பாரம்பரிய முறைகளை பாதுகாக்கவும்."
        ]
      },
      objectives: {
        title: "நோக்கங்கள்",
        points: [
          "கரிம உரங்கள், பூச்சி கட்டுப்பாடு மற்றும் மண் ஆரோக்கியம் பற்றி கல்வி அளிக்கவும்.",
          "உள்ளூர் விதைகள் மற்றும் பூர்வீக முறைகளை ஊக்குவிக்கவும்.",
          "விவசாயிகளை நேரடி வாங்குநர்களுடன் இணைக்கவும்.",
          "பயிற்சி, பட்டறைகள் மற்றும் விழிப்புணர்வு திட்டங்களை ஏற்பாடு செய்யவும்."
        ]
      },
      membership: {
        title: "உறுப்பினர்",
        points: [
          "ஸ்ரீ மருதன் அக்ரோ கேர் வாடிக்கையாளர்களுக்கு மட்டும்.",
          "முதல் 25 உறுப்பினர்களுக்கு இலவச உறுப்பினர்.",
          "பதிவு செய்யும் போது சரியான விவரங்களை வழங்கவும்.",
          "உறுப்பினர் தன்னார்வமாக அல்லது விதி மீறல்களுக்காக முடிக்கப்படலாம்."
        ]
      },
      rules: {
        title: "முக்கிய விதிகள்",
        sections: {
          organic: {
            title: "அ. கரிம உறுதிப்பாடு",
            points: [
              "கரிம முறைகளை மட்டும் பின்பற்றவும் (செயற்கை வேதியியல் அல்லது ஜிஎம் விதைகள் இல்லை).",
              "சுற்றுச்சூழல் பாதுகாப்பை ஊக்குவிக்கவும்.",
              "உண்மையான கரிம விவசாய நடைமுறைகளை மட்டும் பகிரவும்."
            ]
          },
          behavior: {
            title: "ஆ. நடத்தை & நடவடிக்கை",
            points: [
              "அனைத்து உறுப்பினர்களையும் மரியாதையுடன் நடத்தவும்; துஷ்பிரயோகம் அல்லது தனிப்பட்ட தாக்குதல்கள் இல்லை.",
              "விவசாய தொடர்பான விவாதங்களுக்கு மட்டும் தளங்களைப் பயன்படுத்தவும்.",
              "தவறான தகவல்கள் அல்லது தொடர்பில்லாத விளம்பரங்கள் இல்லை."
            ]
          },
          participation: {
            title: "இ. பங்கேற்பு",
            points: [
              "பயிற்சி, நிகழ்வுகள் மற்றும் விவாதங்களில் தீவிரமாக பங்கேற்கவும்.",
              "மற்றவர்களை ஊக்குவிக்க அனுபவங்களை பகிரவும்.",
              "மற்றவர்களை கரிம இயக்கத்தில் சேர ஊக்குவிக்கவும்."
            ]
          },
          disciplinary: {
            title: "ஈ. ஒழுங்கு",
            points: [
              "விதி மீறல்களுக்கு ஒரு எச்சரிக்கை.",
              "மீண்டும் மீண்டும் செய்யும் குற்றங்கள் → நீக்கம்.",
              "தீவிர தவறான நடத்தை → உடனடி நீக்கம்."
            ]
          },
          decision: {
            title: "உ. முடிவெடுத்தல்",
            points: [
              "தற்போது நிறுவனர் வழிநடத்தல்; எதிர்காலத்திற்கு ஆலோசனை குழு திட்டமிடப்பட்டுள்ளது."
            ]
          }
        }
      },
      
      growth: {
        title: "வளர்ச்சி திட்டம்",
        points: [
          "உள்ளூரில் தொடங்கி, படிப்படியாக விரிவுபடுத்தவும்.",
          "வழக்கமான விழிப்புணர்வு திட்டங்கள்.",
          "என்ஜிஓக்கள் மற்றும் கரிம வாங்குநர்களுடன் கூட்டு.",
          "பிராண்டிங் மற்றும் ஆன்லைன் இருப்பை உருவாக்கவும்."
        ]
      }
    }
  };

  const currentContent = content[currentLanguage as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-200/40 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-32 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
          <div className="absolute top-48 right-1/4 w-1 h-1 bg-green-500 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-emerald-600 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
              {currentContent.title}
            </h1>

            {/* Subtitle */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full text-lg font-semibold shadow-lg animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Star className="w-5 h-5" />
              {currentContent.subtitle}
            </div>
          </div>
        </div>
      </section>

             {/* Main Content */}
       <section className="relative py-8 md:py-12">
        <div className="container mx-auto px-4">
                     <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Vision Section */}
                         <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-6 md:p-10 animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentContent.vision.title}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{currentContent.vision.content}</p>
            </div>

            {/* Mission Section */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentContent.mission.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentContent.mission.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives Section */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentContent.objectives.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentContent.objectives.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership Section */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentContent.membership.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentContent.membership.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cardinal Rules Section */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentContent.rules.title}</h2>
              </div>
              
              <div className="space-y-8">
                {/* Organic Commitment */}
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    {currentContent.rules.sections.organic.title}
                  </h3>
                  <ul className="space-y-3">
                    {currentContent.rules.sections.organic.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Behaviour & Conduct */}
                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    {currentContent.rules.sections.behavior.title}
                  </h3>
                  <ul className="space-y-3">
                    {currentContent.rules.sections.behavior.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Participation */}
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users2 className="w-5 h-5 text-purple-600" />
                    {currentContent.rules.sections.participation.title}
                  </h3>
                  <ul className="space-y-3">
                    {currentContent.rules.sections.participation.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disciplinary */}
                <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    {currentContent.rules.sections.disciplinary.title}
                  </h3>
                  <ul className="space-y-3">
                    {currentContent.rules.sections.disciplinary.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decision Making */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-gray-600" />
                    {currentContent.rules.sections.decision.title}
                  </h3>
                  <ul className="space-y-3">
                    {currentContent.rules.sections.decision.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            

            {/* Growth Plan Section */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{currentContent.growth.title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {currentContent.growth.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl animate-fade-in" style={{animationDelay: '1.4s'}}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <Star className="w-8 h-8 animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-bold">Special Offer</h3>
                <Star className="w-8 h-8 animate-pulse" />
              </div>
                                            <p className="text-lg md:text-xl mb-6">
                  {currentLanguage === 'en' 
                    ? "First 25 members get FREE membership! Join our organic farming community today."
                    : "முதல் 25 உறுப்பினர்களுக்கு இலவச உறுப்பினர்! இன்றே எங்கள் கரிம விவசாய சமூகத்தில் சேரவும்."
                  }
                </p>
                <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  {currentLanguage === 'en' ? "Join Now" : "இப்போது சேரவும்"}
                </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
