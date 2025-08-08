"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  scale?: boolean;
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hover = true,
  scale = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={
        hover
          ? {
              y: -8,
              scale: scale ? 1.02 : 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}
