import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import styles from './Header.module.scss';
import { BurgerMenu } from '../../BurgerMenu/BurgerMenu';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const iconStyles = {
        marginRight: 8,
        width: isLargeScreen ? '44px' : '36px',
        height: isLargeScreen ? '17px' : '13px',
    };

    const openMenu = () => {
        setIsMenuOpen(true);
    };

     const closeMenu = () => {
        setIsMenuOpen(false);
    };

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