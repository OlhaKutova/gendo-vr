"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { workflowContent } from '@/content/workflow';
import styles from './Workflow.module.css';

const BRAND_COLORS = [
  '--color-orange',
  '--color-blue',
  '--color-pink'
];

export const Workflow = () => {
  const rowVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.workflow}>
      <div className={styles.workflow__container}>

        <motion.div
          className={styles.workflow__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.workflow__headline}>
            {workflowContent.headline}
          </h2>
        </motion.div>

        <div className={styles.workflow__list}>
          {workflowContent.steps.map((step, index) => {
            const colorVar = BRAND_COLORS[index % BRAND_COLORS.length];

            return (
              <motion.div
                key={index}
                className={styles.workflow__row}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={rowVariants}
              >
                <div
                  className={styles.workflow__visualSquare}
                  style={{ backgroundColor: `var(${colorVar})` }}
                />

                <div className={styles.workflow__textContent}>
                  <h3 className={styles.workflow__stepTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.workflow__stepDescription}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};