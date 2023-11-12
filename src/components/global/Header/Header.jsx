import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import styles from './Header.module.scss';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const Header = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const iconStyles = {
        marginRight: 8,
        width: isLargeScreen ? '44px' : '36px',
        height: isLargeScreen ? '17px' : '13px',
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
            </div>
        </header>
    );
};

export { Header };
