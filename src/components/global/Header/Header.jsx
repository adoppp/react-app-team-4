import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { BurgerMenu } from '../../BurgerMenu/BurgerMenu';
import styles from './Header.module.scss';
import { Icon } from '../../ui/Icon';
import React, { useState } from 'react';

const cn = classNames.bind(styles);

const Header = () => {
    return (
        <header>
            <div className={cn('header__container')}>
                <Link to="/welcome">
                    <Icon
                        iconId="icon-Vector"
                        w={36}
                        h={13}
                        customStyles={iconStyles}
                    />
                    <span>PowerPulse</span>
                </Link>
                     <button className={cn('header__burgerMenu')}  onClick={openMenu}> 
                  <Icon
                        iconId='icon-menu-02'
                        w={24}
                        h={24}
                    />
                </button>
            </div>
             {isMenuOpen && <BurgerMenu onClose={closeMenu} />}
        </header>
    );
};

export { Header };