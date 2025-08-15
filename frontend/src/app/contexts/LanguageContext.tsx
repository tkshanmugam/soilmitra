"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.product': 'Product',
    'nav.chat': 'Chat',
    'nav.contact': 'Contact',
    'nav.community': 'Community',
    'navigation.home': 'Home',
    'navigation.about': 'About',
    'navigation.product': 'Product',
    'navigation.chat': 'Chat',
    'navigation.contact': 'Contact',
    'navigation.community': 'Community',
    
    // Home page
    'home.welcome': 'Welcome to',
    'home.hero.subtitle': 'Your AI-powered organic farming and fertilizer schedule assistant.',
    'home.features.title': 'Why Choose SoilMitra?',
    'home.features.ai': 'AI-Powered',
    'home.features.ai.desc': 'Advanced machine learning algorithms provide personalized recommendations for your specific soil conditions and crop requirements.',
    'home.features.organic': 'Organic Focus',
    'home.features.organic.desc': 'Specialized in organic farming practices, helping you maintain soil health while maximizing crop yields naturally.',
    'home.features.scheduling': 'Smart Scheduling',
    'home.features.scheduling.desc': 'Intelligent fertilizer scheduling that adapts to weather conditions, crop growth stages, and soil nutrient levels.',
    'home.stats.farmers': 'Happy Farmers',
    'home.stats.crops': 'Crop Types',
    'home.stats.success': 'Success Rate',
    'home.stats.support': 'AI Support',
    'home.cta.title': 'Ready to Transform Your Farming?',
    'home.cta.subtitle': 'Join thousands of farmers who trust SoilMitra for their organic farming success.',
    'home.cta.button': 'Start Your Journey Today',
    
    // About page
    'about.title': 'About',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'We are committed to revolutionizing agriculture through sustainable, AI-driven solutions that empower farmers to achieve optimal crop yields while preserving our environment for future generations.',
    'about.mission.desc2': 'Our platform combines cutting-edge technology with traditional farming wisdom to create a comprehensive solution for modern agricultural challenges.',
    'about.vision.title': 'Vision 2030',
    'about.vision.desc': 'To become the leading AI-powered agricultural platform, helping 1 million+ farmers worldwide adopt sustainable farming practices.',
    'about.values.title': 'Our Core Values',
    'about.values.sustainability': 'Sustainability',
    'about.values.sustainability.desc': 'We believe in farming practices that protect our environment and ensure long-term agricultural viability.',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Continuously pushing the boundaries of technology to solve complex agricultural challenges.',
    'about.values.community': 'Community',
    'about.values.community.desc': 'Building a global community of farmers who share knowledge and support each other\'s success.',
    'about.journey.title': 'Our Journey',
    'about.journey.2020': 'Company Founded',
    'about.journey.2021': 'First 100 Farmers',
    'about.journey.2022': 'AI Platform Launch',
    'about.journey.2023': '500+ Active Users',
    
    // Product page
    'product.title': 'Organic Fertilizer',
    'product.subtitle': 'Comprehensive range of organic farming products for sustainable agriculture.',
    'product.categories.title': 'Organic Farming Products',
    'product.liquid.title': 'Liquid Products (Per Liter)',
    'product.bacterial.title': 'Bacterial Products (Per Liter)',
    'product.bulk.title': 'Bulk Products',
    'product.features.title': 'Product Features',
    'product.features.organic': '100% Organic',
    'product.features.organic.desc': 'All products are made from natural ingredients, ensuring safe and sustainable farming practices.',
    'product.features.easy': 'Easy Application',
    'product.features.easy.desc': 'Simple application methods with clear instructions for optimal results.',
    'product.features.proven': 'Proven Results',
    'product.features.proven.desc': 'Tested and proven effective by thousands of farmers across different soil types.',
    'product.features.ai': 'AI Recommendations',
    'product.features.ai.desc': 'Get personalized product recommendations based on your soil and crop requirements.',
    'product.features.support': 'Expert Support',
    'product.features.support.desc': 'Access to agricultural experts for guidance on product usage and farming practices.',
    'product.features.environment': 'Environment Friendly',
    'product.features.environment.desc': 'Eco-friendly products that protect soil health and promote sustainable agriculture.',
    'product.demo.title': 'See Our Products in Action',
    'product.demo.subtitle': 'Experience the power of organic farming with our comprehensive product range. See how our products can transform your agricultural practices and boost your crop yields naturally.',
    'product.demo.button': 'View Demo',
    'product.demo.contact': 'Contact Us',
    
    // Products page (matching the product page usage)
    'products.title': 'Organic Fertilizer',
    'products.description': 'Comprehensive range of organic farming products for sustainable agriculture.',
    'products.categories.liquidProducts': 'Liquid Products (Per Liter)',
    'products.categories.bacterialProducts': 'Bacterial Products (Per Liter)',
    'products.categories.bulkProducts': 'Bulk Products',
    'products.features.title': 'Product Features',
    'products.features.organic.title': '100% Organic',
    'products.features.organic.description': 'All products are made from natural ingredients, ensuring safe and sustainable farming practices.',
    'products.features.easyApplication.title': 'Easy Application',
    'products.features.easyApplication.description': 'Simple application methods with clear instructions for optimal results.',
    'products.features.provenResults.title': 'Proven Results',
    'products.features.provenResults.description': 'Tested and proven effective by thousands of farmers across different soil types.',
    'products.features.expertSupport.title': 'Expert Support',
    'products.features.expertSupport.description': 'Access to agricultural experts for guidance on product usage and farming practices.',
    'products.features.environmentFriendly.title': 'Environment Friendly',
    'products.features.environmentFriendly.description': 'Eco-friendly products that protect soil health and promote sustainable agriculture.',
    'products.demo.title': 'See Our Products in Action',
    'products.demo.description': 'Experience the power of organic farming with our comprehensive product range. See how our products can transform your agricultural practices and boost your crop yields naturally.',
    'products.demo.viewDemo': 'View Demo',
    'products.demo.contactUs': 'Contact Us',
    'products.demo.demoTitle': 'Product Demo',
    'products.demo.demoDescription': 'Watch how our organic fertilizers work in real farming scenarios.',
    
    // Chat page
    'chat.title': 'Chat with SoilMitra',
    'chat.subtitle': 'Your AI-powered farming assistant is here to help with crop planning, fertilizer schedules, and agricultural advice.',
    'chat.placeholder': 'Ask me about farming, crops, or fertilizer schedules...',
    'chat.send': 'Send',
    'chat.typing': 'SoilMitra is typing...',
    'chat.start': 'Start a conversation',
    'chat.start.desc': 'Ask me anything about farming, crop planning, or fertilizer schedules!',
    'chat.help.title': 'What can I help you with?',
    'chat.help.crop': 'Crop Planning',
    'chat.help.crop.desc': 'Get recommendations for the best crops to plant based on your soil and climate conditions.',
    'chat.help.fertilizer': 'Fertilizer Advice',
    'chat.help.fertilizer.desc': 'Learn about optimal fertilizer schedules and organic alternatives for your crops.',
    'chat.help.tips': 'Growing Tips',
    'chat.help.tips.desc': 'Get expert advice on soil health, pest management, and sustainable farming practices.',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for support or partnership inquiries.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send message. Please try again.',
    
    // Footer
    'footer.tagline': 'Your AI-powered organic farming and fertilizer schedule assistant.',
    
    // Admin
    'admin.login': 'Admin Login',
    'admin.username': 'Username',
    'admin.password': 'Password',
    
    // Common
    'common.language': 'Language',
    'admin.login.button': 'Login',
    'admin.logout': 'Logout',
    'admin.dashboard': 'Admin Dashboard',
    'admin.pages': 'Page Editor',
    'admin.audit': 'Audit Logs',
    'admin.chat': 'Chat Sessions',
    
    // Seeds page
    'seeds.title': '🌱 Premium Seeds Collection',
    'seeds.subtitle': 'Discover our comprehensive collection of high-quality seeds for every type of garden and farm',
    'seeds.categories.title': 'Explore Our Seed Categories',
    'seeds.categories.subtitle': 'From traditional vegetables to exotic varieties, we have the perfect seeds for your agricultural needs',
    'seeds.explore': 'Explore Seeds',
    'seeds.cta.title': 'Need Help Choosing the Right Seeds?',
    'seeds.cta.subtitle': 'Our AI farming assistant can help you select the perfect seeds for your climate and soil conditions',
    'seeds.cta.button': 'Chat with AI Assistant',
    
    // Seed categories
    'seeds.tomato': 'Tomato Varieties',
    'seeds.tomato.desc': 'Discover a wide range of tomato seeds for your garden',
    'seeds.brinjal': 'Brinjal Varieties',
    'seeds.brinjal.desc': 'Premium brinjal seeds for healthy harvests',
    'seeds.ladies-finger': 'Ladies Finger Varieties',
    'seeds.ladies-finger.desc': 'Fresh okra seeds for traditional and modern gardens',
    'seeds.chilli': 'Chilli Varieties',
    'seeds.chilli.desc': 'Spice up your garden with diverse chilli varieties',
    'seeds.climbers': 'Climbers Plants',
    'seeds.climbers.desc': 'Vertical gardening solutions with climbing plants',
    'seeds.tubers': 'Tubers',
    'seeds.tubers.desc': 'Root vegetables and tuber crops for your farm',
    'seeds.exotic': 'Exotic Vegetables',
    'seeds.exotic.desc': 'Unique and rare vegetable varieties',
    'seeds.herbs': 'Herbals',
    'seeds.herbs.desc': 'Medicinal and culinary herbs for your garden',
    'seeds.flowers': 'Flower Seeds',
    'seeds.flowers.desc': 'Beautiful flowers to enhance your garden aesthetics',
    'seeds.spinach': 'Spinach / Greens',
    'seeds.spinach.desc': 'Nutritious leafy greens for healthy living',
    'seeds.tree': 'Tree Seeds',
    'seeds.tree.desc': 'Fruit trees and ornamental trees for your landscape',
  },
  ta: {
    // Navigation
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களை பற்றி',
    'nav.product': 'பொருட்கள்',
    'nav.chat': 'அரட்டை',
    'nav.contact': 'தொடர்பு',
    'nav.community': 'சமூகம்',
    'navigation.home': 'முகப்பு',
    'navigation.about': 'எங்களை பற்றி',
    'navigation.product': 'பொருட்கள்',
    'navigation.chat': 'அரட்டை',
    'navigation.contact': 'தொடர்பு',
    'navigation.community': 'சமூகம்',
    
    // Home page
    'home.welcome': 'வரவேற்கிறோம்',
    'home.hero.subtitle': 'உங்கள் AI-ஆல் இயக்கப்படும் கரிம விவசாயம் மற்றும் உர அட்டவணை உதவியாளர்.',
    'home.features.title': 'ஏன் SoilMitra-ஐ தேர்வு செய்ய வேண்டும்?',
    'home.features.ai': 'AI-ஆல் இயக்கப்படும்',
    'home.features.ai.desc': 'மேம்பட்ட இயந்திர கற்றல் அல்காரிதம்கள் உங்கள் குறிப்பிட்ட மண் நிலைமைகள் மற்றும் பயிர் தேவைகளுக்கான தனிப்பட்ட பரிந்துரைகளை வழங்குகின்றன.',
    'home.features.organic': 'கரிம கவனம்',
    'home.features.organic.desc': 'கரிம விவசாய நடைமுறைகளில் நிபுணத்துவம் பெற்று, மண் ஆரோக்கியத்தை பராமரிக்க உதவுகிறது.',
    'home.features.scheduling': 'ஸ்மார்ட் அட்டவணை',
    'home.features.scheduling.desc': 'வானிலை நிலைமைகள், பயிர் வளர்ச்சி நிலைகள் மற்றும் மண் ஊட்டச்சத்து அளவுகளுக்கு ஏற்ப மாறும் உர அட்டவணை.',
    'home.stats.farmers': 'மகிழ்ச்சியான விவசாயிகள்',
    'home.stats.crops': 'பயிர் வகைகள்',
    'home.stats.success': 'வெற்றி விகிதம்',
    'home.stats.support': 'AI ஆதரவு',
    'home.cta.title': 'உங்கள் விவசாயத்தை மாற்ற தயாரா?',
    'home.cta.subtitle': 'கரிம விவசாய வெற்றிக்கு SoilMitra-ஐ நம்பும் ஆயிரக்கணக்கான விவசாயிகளுடன் சேரவும்.',
    'home.cta.button': 'இன்றே உங்கள் பயணத்தைத் தொடங்குங்கள்',
    
    // About page
    'about.title': 'எங்களை பற்றி',
    'about.mission.title': 'எங்கள் நோக்கம்',
    'about.mission.desc': 'விவசாயிகளுக்கு உகந்த பயிர் மகசூலை அடைய உதவும் நிலைக்கு உதவும் AI-ஆல் இயக்கப்படும் தீர்வுகள் மூலம் விவசாயத்தை புரட்சிகரமாக்க நாங்கள் உறுதியாக உள்ளோம்.',
    'about.mission.desc2': 'நவீன விவசாய சவால்களுக்கு ஒரு விரிவான தீர்வை உருவாக்க பாரம்பரிய விவசாய ஞானத்துடன் முன்னோடி தொழில்நுட்பத்தை இணைக்கிறது.',
    'about.vision.title': '2030 பார்வை',
    'about.vision.desc': 'முன்னணி AI-ஆல் இயக்கப்படும் விவசாய தளமாக மாற, உலகெங்கிலும் உள்ள 1 மில்லியன்+ விவசாயிகளுக்கு நிலைக்கு உதவ.',
    'about.values.title': 'எங்கள் முக்கிய மதிப்புகள்',
    'about.values.sustainability': 'நிலைத்தன்மை',
    'about.values.sustainability.desc': 'நமது சுற்றுச்சூழலைப் பாதுகாக்கும் விவசாய நடைமுறைகளை நாங்கள் நம்புகிறோம்.',
    'about.values.innovation': 'புதுமை',
    'about.values.innovation.desc': 'சிக்கலான விவசாய சவால்களைத் தீர்க்க தொழில்நுட்பத்தின் எல்லைகளை தொடர்ந்து தள்ளுகிறோம்.',
    'about.values.community': 'சமூகம்',
    'about.values.community.desc': 'அறிவை பகிர்ந்து ஒருவருக்கொருவர் ஆதரிக்கும் உலகளாவிய விவசாயிகளின் சமூகத்தை உருவாக்குகிறோம்.',
    'about.journey.title': 'எங்கள் பயணம்',
    'about.journey.2020': 'நிறுவனம் நிறுவப்பட்டது',
    'about.journey.2021': 'முதல் 100 விவசாயிகள்',
    'about.journey.2022': 'AI தளம் வெளியீடு',
    'about.journey.2023': '500+ செயலில் உள்ள பயனர்கள்',
    
    // Product page
    'product.title': 'கரிம உரம்',
    'product.subtitle': 'நிலைக்கு விவசாயத்திற்கான கரிம விவசாய பொருட்களின் விரிவான வரம்பு.',
    'product.categories.title': 'கரிம விவசாய பொருட்கள்',
    'product.liquid.title': 'திரவ பொருட்கள் (லிட்டருக்கு)',
    'product.bacterial.title': 'பாக்டீரியா பொருட்கள் (லிட்டருக்கு)',
    'product.bulk.title': 'மொத்த பொருட்கள்',
    'product.features.title': 'பொருள் அம்சங்கள்',
    'product.features.organic': '100% கரிம',
    'product.features.organic.desc': 'அனைத்து பொருட்களும் இயற்கை பொருட்களால் தயாரிக்கப்படுகின்றன.',
    'product.features.easy': 'எளிதான பயன்பாடு',
    'product.features.easy.desc': 'உகந்த முடிவுகளுக்கான தெளிவான வழிமுறைகளுடன் எளிய பயன்பாட்டு முறைகள்.',
    'product.features.proven': 'நிரூபிக்கப்பட்ட முடிவுகள்',
    'product.features.proven.desc': 'பல்வேறு மண் வகைகளில் ஆயிரக்கணக்கான விவசாயிகளால் சோதிக்கப்பட்டு நிரூபிக்கப்பட்டது.',
    'product.features.ai': 'AI பரிந்துரைகள்',
    'product.features.ai.desc': 'உங்கள் மண் மற்றும் பயிர் தேவைகளின் அடிப்படையில் தனிப்பட்ட பொருள் பரிந்துரைகளைப் பெறுங்கள்.',
    'product.features.support': 'நிபுணர் ஆதரவு',
    'product.features.support.desc': 'பொருள் பயன்பாடு மற்றும் விவசாய நடைமுறைகளில் வழிகாட்டுதலுக்கான விவசாய நிபுணர்களுக்கான அணுகல்.',
    'product.features.environment': 'சுற்றுச்சூழல் நட்பு',
    'product.features.environment.desc': 'மண் ஆரோக்கியத்தைப் பாதுகாக்கும் சுற்றுச்சூழல் நட்பு பொருட்கள்.',
    'product.demo.title': 'எங்கள் பொருட்களை செயலில் காண்க',
    'product.demo.subtitle': 'எங்கள் விரிவான பொருள் வரம்புடன் கரிம விவசாயத்தின் சக்தியை அனுபவிக்கவும்.',
    'product.demo.button': 'டெமோ பார்க்கவும்',
    'product.demo.contact': 'எங்களை தொடர்பு கொள்ளவும்',
    
    // Products page (matching the product page usage)
    'products.title': 'கரிம உரம்',
    'products.description': 'நிலைக்கு விவசாயத்திற்கான கரிம விவசாய பொருட்களின் விரிவான வரம்பு.',
    'products.categories.liquidProducts': 'திரவ பொருட்கள் (லிட்டருக்கு)',
    'products.categories.bacterialProducts': 'பாக்டீரியா பொருட்கள் (லிட்டருக்கு)',
    'products.categories.bulkProducts': 'மொத்த பொருட்கள்',
    'products.features.title': 'பொருள் அம்சங்கள்',
    'products.features.organic.title': '100% கரிம',
    'products.features.organic.description': 'அனைத்து பொருட்களும் இயற்கை பொருட்களால் தயாரிக்கப்படுகின்றன, பாதுகாப்பான மற்றும் நிலைக்கு விவசாய நடைமுறைகளை உறுதிசெய்கின்றன.',
    'products.features.easyApplication.title': 'எளிதான பயன்பாடு',
    'products.features.easyApplication.description': 'உகந்த முடிவுகளுக்கான தெளிவான வழிமுறைகளுடன் எளிய பயன்பாட்டு முறைகள்.',
    'products.features.provenResults.title': 'நிரூபிக்கப்பட்ட முடிவுகள்',
    'products.features.provenResults.description': 'பல்வேறு மண் வகைகளில் ஆயிரக்கணக்கான விவசாயிகளால் சோதிக்கப்பட்டு நிரூபிக்கப்பட்டது.',
    'products.features.expertSupport.title': 'நிபுணர் ஆதரவு',
    'products.features.expertSupport.description': 'பொருள் பயன்பாடு மற்றும் விவசாய நடைமுறைகளில் வழிகாட்டுதலுக்கான விவசாய நிபுணர்களுக்கான அணுகல்.',
    'products.features.environmentFriendly.title': 'சுற்றுச்சூழல் நட்பு',
    'products.features.environmentFriendly.description': 'மண் ஆரோக்கியத்தைப் பாதுகாக்கும் சுற்றுச்சூழல் நட்பு பொருட்கள் மற்றும் நிலைக்கு விவசாயத்தை ஊக்குவிக்கின்றன.',
    'products.demo.title': 'எங்கள் பொருட்களை செயலில் காண்க',
    'products.demo.description': 'எங்கள் விரிவான பொருள் வரம்புடன் கரிம விவசாயத்தின் சக்தியை அனுபவிக்கவும். எங்கள் பொருட்கள் உங்கள் விவசாய நடைமுறைகளை எப்படி மாற்ற முடியும் மற்றும் உங்கள் பயிர் மகசூலை இயற்கையாக அதிகரிக்க முடியும் என்பதைப் பாருங்கள்.',
    'products.demo.viewDemo': 'டெமோ பார்க்கவும்',
    'products.demo.contactUs': 'எங்களை தொடர்பு கொள்ளவும்',
    'products.demo.demoTitle': 'பொருள் டெமோ',
    'products.demo.demoDescription': 'எங்கள் கரிம உரங்கள் உண்மையான விவசாய சூழ்நிலைகளில் எப்படி வேலை செய்கின்றன என்பதைப் பாருங்கள்.',
    
    // Chat page
    'chat.title': 'SoilMitra உடன் அரட்டை',
    'chat.subtitle': 'உங்கள் AI-ஆல் இயக்கப்படும் விவசாய உதவியாளர் பயிர் திட்டமிடல், உர அட்டவணைகள் மற்றும் விவசாய ஆலோசனைகளில் உதவ இங்கே உள்ளார்.',
    'chat.placeholder': 'விவசாயம், பயிர்கள் அல்லது உர அட்டவணைகளைப் பற்றி கேள்விகளைக் கேள்வி...',
    'chat.send': 'அனுப்பு',
    'chat.typing': 'SoilMitra தட்டச்சு செய்கிறார்...',
    'chat.start': 'ஒரு உரையாடலைத் தொடங்குங்கள்',
    'chat.start.desc': 'விவசாயம், பயிர் திட்டமிடல் அல்லது உர அட்டவணைகளைப் பற்றி எதையும் கேள்வி!',
    'chat.help.title': 'நான் உங்களுக்கு எப்படி உதவ முடியும்?',
    'chat.help.crop': 'பயிர் திட்டமிடல்',
    'chat.help.crop.desc': 'உங்கள் மண் மற்றும் காலநிலை நிலைமைகளின் அடிப்படையில் நடவு செய்ய சிறந்த பயிர்களுக்கான பரிந்துரைகளைப் பெறுங்கள்.',
    'chat.help.fertilizer': 'உர ஆலோசனை',
    'chat.help.fertilizer.desc': 'உகந்த உர அட்டவணைகள் மற்றும் உங்கள் பயிர்களுக்கான கரிம மாற்றுகளைப் பற்றி அறிக.',
    'chat.help.tips': 'வளர்ச்சி குறிப்புகள்',
    'chat.help.tips.desc': 'மண் ஆரோக்கியம், பூச்சி மேலாண்மை மற்றும் நிலைக்கு விவசாய நடைமுறைகளில் நிபுணர் ஆலோசனையைப் பெறுங்கள்.',
    
    // Contact page
    'contact.title': 'எங்களை தொடர்பு கொள்ளவும்',
    'contact.subtitle': 'ஆதரவு அல்லது கூட்டாண்மை விசாரணைகளுக்கு எங்களை தொடர்பு கொள்ளவும்.',
    'contact.form.name': 'பெயர்',
    'contact.form.email': 'மின்னஞ்சல்',
    'contact.form.message': 'செய்தி',
    'contact.form.submit': 'செய்தியை அனுப்பு',
    'contact.success': 'செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!',
    'contact.error': 'செய்தியை அனுப்ப முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    
    // Footer
    'footer.tagline': 'உங்கள் AI-ஆல் இயக்கப்படும் கரிம விவசாயம் மற்றும் உர அட்டவணை உதவியாளர்.',
    
    // Admin
    'admin.login': 'நிர்வாகி உள்நுழைவு',
    'admin.username': 'பயனர்பெயர்',
    'admin.password': 'கடவுச்சொல்',
    
    // Common
    'common.language': 'மொழி',
    'admin.login.button': 'உள்நுழைக',
    'admin.logout': 'வெளியேறு',
    'admin.dashboard': 'நிர்வாகி டாஷ்போர்டு',
    'admin.pages': 'பக்கம் திருத்தி',
    'admin.audit': 'தணிக்கை பதிவுகள்',
    'admin.chat': 'அரட்டை அமர்வுகள்',
    
    // Seeds page
    'seeds.title': '🌱 பிரீமியம் விதைகள் தொகுப்பு',
    'seeds.subtitle': 'ஒவ்வொரு வகையான தோட்டம் மற்றும் பண்ணைக்கும் உயர்தர விதைகளின் விரிவான தொகுப்பைக் கண்டறியுங்கள்',
    'seeds.categories.title': 'எங்கள் விதை வகைகளை ஆராயுங்கள்',
    'seeds.categories.subtitle': 'பாரம்பரிய காய்கறிகளிலிருந்து வெளிநாட்டு வகைகள் வரை, உங்கள் விவசாய தேவைகளுக்கு சரியான விதைகள் உள்ளன',
    'seeds.explore': 'விதைகளை ஆராயுங்கள்',
    'seeds.cta.title': 'சரியான விதைகளைத் தேர்வு செய்ய உதவி தேவையா?',
    'seeds.cta.subtitle': 'எங்கள் AI விவசாய உதவியாளர் உங்கள் காலநிலை மற்றும் மண் நிலைமைகளுக்கு சரியான விதைகளைத் தேர்வு செய்ய உதவ முடியும்',
    'seeds.cta.button': 'AI உதவியாளருடன் அரட்டை',
    
    // Seed categories
    'seeds.tomato': 'தக்காளி வகைகள்',
    'seeds.tomato.desc': 'உங்கள் தோட்டத்திற்கான பரந்த அளவிலான தக்காளி விதைகளைக் கண்டறியுங்கள்',
    'seeds.brinjal': 'கத்தரிக்காய் வகைகள்',
    'seeds.brinjal.desc': 'ஆரோக்கியமான அறுவடைக்கான பிரீமியம் கத்தரிக்காய் விதைகள்',
    'seeds.ladies-finger': 'வெண்டைக்காய் வகைகள்',
    'seeds.ladies-finger.desc': 'பாரம்பரிய மற்றும் நவீன தோட்டங்களுக்கான புதிய வெண்டைக்காய் விதைகள்',
    'seeds.chilli': 'மிளகாய் வகைகள்',
    'seeds.chilli.desc': 'பல்வேறு மிளகாய் வகைகளுடன் உங்கள் தோட்டத்தை காரமாக்குங்கள்',
    'seeds.climbers': 'ஏறும் செடிகள்',
    'seeds.climbers.desc': 'ஏறும் செடிகளுடன் செங்குத்து தோட்டக்கலை தீர்வுகள்',
    'seeds.tubers': 'கிழங்குகள்',
    'seeds.tubers.desc': 'உங்கள் பண்ணைக்கான வேர் காய்கறிகள் மற்றும் கிழங்கு பயிர்கள்',
    'seeds.exotic': 'வெளிநாட்டு காய்கறிகள்',
    'seeds.exotic.desc': 'தனித்துவமான மற்றும் அரிய காய்கறி வகைகள்',
    'seeds.herbs': 'மூலிகைகள்',
    'seeds.herbs.desc': 'உங்கள் தோட்டத்திற்கான மருத்துவ மற்றும் சமையல் மூலிகைகள்',
    'seeds.flowers': 'மலர் விதைகள்',
    'seeds.flowers.desc': 'உங்கள் தோட்ட அழகியலை மேம்படுத்தும் அழகான மலர்கள்',
    'seeds.spinach': 'கீரை / பச்சைக்காய்கள்',
    'seeds.spinach.desc': 'ஆரோக்கியமான வாழ்க்கைக்கான ஊட்டச்சத்து நிறைந்த இலை காய்கறிகள்',
    'seeds.tree': 'மர விதைகள்',
    'seeds.tree.desc': 'உங்கள் நிலப்பரப்பிற்கான பழ மரங்கள் மற்றும் அலங்கார மரங்கள்',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 