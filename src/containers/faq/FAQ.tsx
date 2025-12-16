"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqContent } from '@/content/faq';
import styles from './Faq.module.css';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.faq__container}>
        <h2 className={styles.faq__headline}>
          {faqContent.headline}
        </h2>

        <div className={styles.faq__list}>
          {faqContent.items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className={styles.faq__item}>
                <button
                  className={styles.faq__question}
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.faq__questionText}>
                    {item.question}
                  </span>

                  <motion.span
                    className={styles.faq__toggleIcon}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className={styles.faq__answerWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <p className={styles.faq__answer}>
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};