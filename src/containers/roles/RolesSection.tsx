"use client";

import React, { useState } from 'react';
import { rolesContent } from '@/content/roles';
import { useDebounce } from '@/hooks/useDebounce';
import { RolesControl } from './RolesControl';
import { RolesVisual } from './RolesVisual';
import styles from './RolesSection.module.css';

export const RolesSection = () => {
  const [selectedRole, setSelectedRole] = useState(rolesContent.roles[0].id);
  const [userInput, setUserInput] = useState('');

  const debouncedInput = useDebounce(userInput, 300);

  const currentRole = rolesContent.roles.find(role => role.id === selectedRole) || rolesContent.roles[0];

  const handleRoleChange = (roleId: string) => {
    if (roleId !== selectedRole) {
      setSelectedRole(roleId);
      setUserInput('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <section className={styles['roles-section']}>
      <div className={styles['roles-section__container']}>
        <RolesControl
          roles={rolesContent.roles}
          selectedRole={selectedRole}
          currentRole={currentRole}
          userInput={userInput}
          onRoleChange={handleRoleChange}
          onInputChange={handleInputChange}
          headline={rolesContent.headline}
        />

        <RolesVisual
          currentRole={currentRole}
          debouncedInput={debouncedInput}
        />
      </div>
    </section>
  );
};