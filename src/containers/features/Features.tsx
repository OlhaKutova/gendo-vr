"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { featuresContent } from '@/content/features';
import { Button } from "@/components/buttons/Button";
import styles from './Features.module.css';


const ACCENT_COLORS = [
  'var(--color-orange)',
  'var(--color-blue)',
  'var(--color-pink)'
];

const springTransition = { type: "spring", stiffness: 300, damping: 30 } as const;

export const Features = () => {
  const [items, setItems] = useState(featuresContent.items);

  const handleNext = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      if (firstItem) newItems.push(firstItem);
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      if (lastItem) newItems.unshift(lastItem);
      return newItems;
    });
  };

  const visibleItems = items.slice(0, 3);

  const stackVariants: Variants = {
    visible: (i: number) => ({
      x: i * 40,
      y: i * -30,
      scale: 1 - i * 0.05,
      opacity: i === 0 ? 1 : 1 - (i * 0.2),
      zIndex: 3 - i,
      rotateX: i * 5,
      transition: springTransition
    }),
    exit: {
      x: -100,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className={styles.features}>
      <div className={styles.features__container}>
        <div className={styles.features__header}>
          <h2 className={styles.features__headline}>
            {featuresContent.headline}
          </h2>
        </div>

        <div className={styles.features__carouselStage} onClick={handleNext}>
          <AnimatePresence initial={false} mode='popLayout'>
            {visibleItems.map((item, index) => {
              const colorIndex = featuresContent.items.findIndex(i => i.id === item.id);
              const accentColor = ACCENT_COLORS[colorIndex % ACCENT_COLORS.length];
              const isStacked = index > 0;

              return (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  custom={index}
                  className={`
                    ${styles.features__card}
                    ${isStacked ? styles['features__card--stacked'] : ''}
                  `}
                  variants={stackVariants}
                  initial="visible"
                  animate="visible"
                  exit="exit"
                >
                  <div
                    className={styles.features__cardAccent}
                    style={{ backgroundColor: accentColor }}
                  />

                  <div className={styles.features__cardContent}>
                    <span className={styles.features__cardNumber}>
                        0{colorIndex + 1}
                    </span>
                    <h3 className={styles.features__cardTitle}>
                      {item.title}
                    </h3>
                    <p className={styles.features__cardBody}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className={styles.features__controls}>
          <button onClick={handlePrev} aria-label={featuresContent.prevFeature} className={styles.features__controlBtn}>
            ←
          </button>
          <button onClick={handleNext} aria-label={featuresContent.nextFeature} className={styles.features__controlBtn}>
            →
          </button>
        </div>

      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className={styles.features__actions}>
          <Button variant="secondary">
            {featuresContent.ctaText}
          </Button>
        </div>
      </motion.div>
    </section>
  );
};