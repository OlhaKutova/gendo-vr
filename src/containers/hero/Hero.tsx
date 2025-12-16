"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/buttons/Button';
import { TypewriterEffect } from '@/components/typography/TypewriterEffect';
import { heroContent } from "@/content/hero";
import styles from './Hero.module.css';


const HERO_IMAGE_PATH = '/images/art-vr.jpg';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__headline}>
            <span className={styles.hero__headlineLine}>
              <TypewriterEffect
                text={heroContent.headline1}
                delay={0}
                showCursor={false}
              />
            </span>

            <span className={styles.hero__headlineLine}>
              <TypewriterEffect
                text={heroContent.headline2}
                delay={0.8}
                showCursor={false}
              />
            </span>

            <span className={styles.hero__headlineLine}>
              <TypewriterEffect
                text={heroContent.headline3}
                delay={1.6}
                showCursor={true}
              />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <p className={styles.hero__subheadline}>
              {heroContent.subheadline}
            </p>
            <div className={styles.hero__actions}>
              <Button variant="primary">
                {heroContent.ctaText}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={`${styles.hero__visualWrapper} ${styles.hero__visual3d}`}
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={HERO_IMAGE_PATH}
            alt={heroContent.altText}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.hero__image}
          />
        </motion.div>
      </div>
    </section>
  );
};