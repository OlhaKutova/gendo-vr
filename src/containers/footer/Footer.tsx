"use client";

import React from 'react';
import Link from 'next/link';
import { footerContent } from '@/content/footer';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <span className={styles.footer__logo}>{footerContent.brand.name}</span>
            <p className={styles.footer__tagline}>{footerContent.brand.tagline}</p>
          </div>

          {footerContent.columns.map((column, index) => (
            <div key={index} className={styles.footer__column}>
              <h4 className={styles.footer__columnTitle}>{column.title}</h4>
              <ul className={styles.footer__linkList}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className={styles.footer__link}
                      scroll={false}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__copyright}>
            {footerContent.copyright}
          </div>

          <div className={styles.footer__legal}>
            {footerContent.legal.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={styles.footer__legalLink}
                scroll={false}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};