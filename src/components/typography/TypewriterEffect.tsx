"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './TypewriterEffect.module.css';

interface TypewriterProps {
  text: string;
  className?: string;
  delay?: number;
  showCursor?: boolean;
}

export const TypewriterEffect = ({ text, className, delay = 0, showCursor = false }: TypewriterProps) => {
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };

  const child = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" }
  };

  return (
    <motion.span
      className={`${styles.wrapper} ${className || ''}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span variants={child} key={index}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}

      {showCursor && (
        <motion.span
          className={styles.cursor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};