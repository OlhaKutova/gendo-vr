"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  children,
  className,
  ...props }: ButtonProps) => {
  const buttonClass = `${styles.button} ${styles[`button--${variant}`]} ${className || ''}`;

  return (
    <motion.button
      className={buttonClass}
      {...props}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className={styles.content}>
        {children}
      </span>

      <motion.div
        className={styles.shine}
        initial={{ x: '-150%' }}
        whileHover={{ x: '150%' }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />
    </motion.button>
  );
};