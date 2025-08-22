"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImprovedHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundGradient?: string;
  height?: string;
  showFloatingElements?: boolean;
  showBackgroundPattern?: boolean;
}

export default function ImprovedHero({
  title,
  subtitle,
  children,
  backgroundGradient = "from-green-600 via-emerald-600 to-teal-600",
  height = "min-h-[85vh]",
  showFloatingElements = true,
  showBackgroundPattern = true
}: ImprovedHeroProps) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden bg-gradient-to-br ${backgroundGradient}`}>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-400/20 to-green-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      {showBackgroundPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      )}

      {/* Floating Nature Elements */}
      {showFloatingElements && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-20 text-3xl opacity-70"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            🌿
          </motion.div>
          <motion.div 
            className="absolute top-1/3 right-24 text-2xl opacity-60"
            animate={{ 
              y: [0, -15, 0],
              x: [0, -12, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
          >
            🍃
          </motion.div>
          <motion.div 
            className="absolute bottom-32 left-1/3 text-xl opacity-50"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 8, 0],
              rotate: [0, 90, 180]
            }}
            transition={{ 
              duration: 14, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          >
            🌱
          </motion.div>
          <motion.div 
            className="absolute top-1/2 left-16 text-lg opacity-40"
            animate={{ 
              y: [0, -8, 0],
              x: [0, 5, 0],
              rotate: [0, -90, -180]
            }}
            transition={{ 
              duration: 16, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 3
            }}
          >
            🌾
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Elegant Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
            <span className="text-sm font-medium text-white/90">
              AI Farming Assistant
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Custom Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
