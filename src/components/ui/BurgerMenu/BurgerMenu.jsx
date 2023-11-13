import React from 'react';
import { createPortal } from 'react-dom';
import { BurgerMenuContent } from './BurgerMenuContent';

const BurgerMenu = ({ onClose }) => {
    const portalRoot = document.getElementById('portal');
    return createPortal(<BurgerMenuContent onClose={onClose} />, portalRoot);
};

export { BurgerMenu };
