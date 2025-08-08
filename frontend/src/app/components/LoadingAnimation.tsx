"use client";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  text?: string;
}

export default function LoadingAnimation({ 
  size = "md", 
  color = "emerald", 
  text = "Loading..." 
}: LoadingAnimationProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const colorClasses = {
    emerald: "border-emerald-500 border-t-transparent",
    green: "border-green-500 border-t-transparent",
    blue: "border-blue-500 border-t-transparent",
    purple: "border-purple-500 border-t-transparent",
    orange: "border-orange-500 border-t-transparent",
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className={`${sizeClasses[size]} border-4 ${colorClasses[color as keyof typeof colorClasses]} rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {text && (
        <motion.p
          className={`text-gray-600 ${textSizes[size]} font-medium`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
