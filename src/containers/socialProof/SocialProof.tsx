"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants, stagger } from 'framer-motion';
import { socialProofContent } from '@/content/socialProof';
import styles from './SocialProof.module.css';

export const SocialProof = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.2, { startDelay: 0.3 })
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.socialProof}>
      <div className={styles.socialProof__container}>

        <motion.div
          className={styles.socialProof__header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.socialProof__headline}>
            {socialProofContent.headline}
          </h2>
          <p className={styles.socialProof__body}>
            {socialProofContent.body}
          </p>
        </motion.div>

        <motion.div
          className={styles.socialProof__logoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {socialProofContent.logos.map((logo, index) => (
            <motion.div
              key={index}
              className={styles.socialProof__logoWrapper}
              variants={itemVariants}
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                fill
                sizes="(max-width: 768px) 140px, 160px"
                className={styles.socialProof__logoImage}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};