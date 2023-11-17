import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { logout } from '../../../storage/operations/authThunk';

const cn = classNames.bind(styles);

const BurgerMenuContent = ({ onClose }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className={cn('burgerMenu__container')}>
            <button onClick={onClose} className={cn('burger__button')}>
                <Icon iconId="icon-close" w={24} h={24} />
            </button>
            <ul className={cn('menuItems__list')}>
                <li>
                    <Link to="/diary">
                        <Button label="Diary" buttonStyles="orange" />
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        <Button label="Products" buttonStyles="orange" />
                    </Link>
                </li>
                <li>
                    <Link to="/exercises">
                        <Button label="Exercises" buttonStyles="orange" />
                    </Link>
                </li>
            </ul>
            <button className={cn('logout__button')} onClick={handleLogout}>
                Logout
                <Icon
                    iconId="icon-log-out"
                    w={24}
                    h={24}
                    customStyles={{ marginLeft: 8 }}
                />
            </button>
        </div>
    );
};

export { BurgerMenuContent };
