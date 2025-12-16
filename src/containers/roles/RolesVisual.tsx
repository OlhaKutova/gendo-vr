"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styles from './RolesSection.module.css';

interface Role {
  id: string;
  label: string;
  headline: string;
  imageSrc: string;
}

interface RolesVisualProps {
  currentRole: Role;
  debouncedInput: string;
}

export const RolesVisual = ({ currentRole, debouncedInput }: RolesVisualProps) => {
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: { duration: 0.5, ease: "easeIn" }
    }
  };

  return (
    <div className={styles['roles-section__content-right']}>
      <div className={styles['roles-section__image-wrapper']}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRole.id}
            className={styles['roles-section__image-container']}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image
              src={currentRole.imageSrc}
              alt={currentRole.headline}
              fill
              priority
              sizes="(max-width: 992px) 100vw, 600px"
              className={styles['roles-section__image']}
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          className={styles['roles-section__dynamic-overlay']}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className={styles['roles-section__overlay-label']}>
            {currentRole.label}&#39;s Project
          </span>
          <AnimatePresence mode="wait">
            <motion.p
              key={debouncedInput || 'placeholder'}
              className={`
                ${styles['roles-section__overlay-text']}
                ${!debouncedInput ? styles['roles-section__overlay-text--placeholder'] : ''}
              `}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {debouncedInput || "Name your project..."}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};