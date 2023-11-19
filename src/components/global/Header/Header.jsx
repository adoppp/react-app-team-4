import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import { BurgerMenu } from '../../ui/BurgerMenu';
import { Icon } from '../../ui/Icon';
import { autheticatedSelector, avatarSelector } from '../../../storage/selectors/authSelectors';
import { StyledLink } from './Header.styled';
import { logout } from '../../../storage/operations/authThunk';

const cn = classNames.bind(styles);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();

    const autheticated = useSelector(autheticatedSelector);
    const avatar = useSelector(avatarSelector);

    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const iconStyles = {
        marginRight: 8,
        width: isLargeScreen ? '44px' : '36px',
        height: isLargeScreen ? '17px' : '13px',
    };

    const settingsStyles = isLargeScreen ? 28 : 24;

    const userSvgStyles = isLargeScreen ? 16 : 14;

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const authHeaderStyles = autheticated
        ? { borderBottom: `1px solid #efede833` }
        : {};
    
    const isGravatar = avatar.includes('gravatar');

    const avatarPath = isGravatar ? `${avatar}` : `https://powerpulse-171j.onrender.com/${avatar}`;

    const authHeader = (
        <div className={cn('header__routing-container')}>
            <ul className={cn('header__links')}>
                <li>
                    <StyledLink to="/diary">Diary</StyledLink>
                </li>
                <li>
                    <StyledLink to="/products">Products</StyledLink>
                </li>
                <li>
                    <StyledLink to="/exercises">Exercises</StyledLink>
                </li>
            </ul>
            <div className={cn('header__user-links')}>
                <ul className={cn('header__list')}>
                    <li className={cn('header__settings')}>
                        <Link to="/profile">
                            <Icon
                                iconId="icon-settings"
                                w={settingsStyles}
                                h={settingsStyles}
                            />
                        </Link>
                    </li>
                    <li className={cn('header__user', {avatarStyle: avatar})}>
                    {avatar ?    
                        <img src={avatar ? avatarPath : ''} alt='avatar' /> :    
                        (<Icon
                            iconId="icon-user"
                            w={userSvgStyles}
                            h={userSvgStyles}
                        />)
                    }
                    </li>
                    <li>
                        <button
                            className={cn('logout__button')}
                            onClick={handleLogout}
                        >
                            Logout
                            <Icon
                                iconId="icon-log-out"
                                w={24}
                                h={24}
                                customStyles={{ marginLeft: 8 }}
                            />
                        </button>
                    </li>
                </ul>
            </div>
            <button className={cn('header__burgerMenu')} onClick={openMenu}>
                <Icon iconId="icon-menu-02" w={24} h={24} />
            </button>
        </div>
    );

    return (
        <header style={authHeaderStyles}>
            <div className={cn('header__container')}>
                <div className={cn('header__logo')}>
                    <Link to="/welcome">
                        <Icon
                            iconId="icon-Vector"
                            w={36}
                            h={13}
                            customStyles={iconStyles}
                        />
                        <span>PowerPulse</span>
                    </Link>
                </div>
                {autheticated ? authHeader : null}
            </div>
            {isMenuOpen && <BurgerMenu onClose={closeMenu} />}
        </header>
    );
};

export { Header };
