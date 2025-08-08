"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "diagonal";
  distance?: number;
}

export default function FloatingElement({
  children,
  className = "",
  duration = 3,
  delay = 0,
  direction = "up",
  distance = 10,
}: FloatingElementProps) {
  const getAnimation = () => {
    switch (direction) {
      case "up":
        return {
          y: [0, -distance, 0],
        };
      case "down":
        return {
          y: [0, distance, 0],
        };
      case "left":
        return {
          x: [0, -distance, 0],
        };
      case "right":
        return {
          x: [0, distance, 0],
        };
      case "diagonal":
        return {
          x: [0, distance, 0],
          y: [0, -distance, 0],
        };
      default:
        return {
          y: [0, -distance, 0],
        };
    }
  };

  return (
    <motion.div
      className={className}
      animate={getAnimation()}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
