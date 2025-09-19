"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  type?: "word" | "character";
}

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const characterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  type = "word",
}: AnimatedTextProps) {
  if (type === "character" && typeof children === "string") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay }}
      >
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={characterVariants}
            transition={{ delay: delay + index * stagger }}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (type === "word" && typeof children === "string") {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay }}
      >
        {children.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            transition={{ delay: delay + index * stagger }}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Fallback for non-string children
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
