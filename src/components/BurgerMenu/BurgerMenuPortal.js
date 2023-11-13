import React from 'react';
import { createPortal } from 'react-dom';
import { BurgerMenu } from './BurgerMenu';

export const BurgerMenuPortal = ({ onClose }) => {
  const portalRoot = document.getElementById('root'); 
  return createPortal(
    <BurgerMenu onClose={onClose} />,
    portalRoot
  );
};


