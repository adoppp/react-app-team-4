import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import {BurgerMenu} from '../../BurgerMenu/BurgerMenu'
import styles from './Header.module.scss';
import { Icon } from "../../ui/Icon";

const cn = classNames.bind(styles);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
     const openMenu = () => {
        setIsMenuOpen(true);
    };

    return (
        <header>
            <div className={cn('header__container')}>
                <Link to='/'>
                    <Icon
                        iconId='icon-Vector'
                        w={36}
                        h={13}
                        customStyles={{ marginRight: 8 }}
                    />
                    <span>PowerPulse</span>
                </Link>
                     <button onClick={openMenu}> 
                  <Icon
                        iconId='icon-menu-02'
                        w={24}
                        h={24}
                        customStyles={{ marginRight: 8 }}
                    />
                </button>
            </div>
             {isMenuOpen && <BurgerMenu />}
        </header>
    );
};

export { Header };