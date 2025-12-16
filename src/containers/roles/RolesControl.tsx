"use client";

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styles from './RolesSection.module.css';

interface Role {
  id: string;
  label: string;
  headline: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
}

interface RolesControlProps {
  roles: Role[];
  selectedRole: string;
  currentRole: Role;
  userInput: string;
  onRoleChange: (id: string) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  headline: string;
}

export const RolesControl = ({
  roles,
  selectedRole,
  currentRole,
  userInput,
  onRoleChange,
  onInputChange,
  headline
}: RolesControlProps) => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <div className={styles['roles-section__content-left']}>
      <h2 className={styles['roles-section__main-headline']}>
        {headline}
      </h2>

      <div className={styles['roles-section__switcher']}>
        {roles.map((role) => (
          <button
            key={role.id}
            className={`
              ${styles['roles-section__switcher-btn']}
              ${selectedRole === role.id ? styles['roles-section__switcher-btn--active'] : ''}
            `}
            onClick={() => onRoleChange(role.id)}
          >
            {role.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRole.id}
          className={styles['roles-section__role-content']}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3 className={styles['roles-section__headline']}>
            {currentRole.headline}
          </h3>
          <p className={styles['roles-section__description']}>
            {currentRole.description}
          </p>

          <div className={styles['roles-section__input-group']}>
            <label htmlFor="role-input" className={styles['roles-section__input-label']}>
              {currentRole.inputLabel}
            </label>
            <input
              type="text"
              id="role-input"
              className={styles['roles-section__input-field']}
              placeholder={currentRole.inputPlaceholder}
              value={userInput}
              onChange={onInputChange}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};