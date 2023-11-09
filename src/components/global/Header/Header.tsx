import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import { Icon } from "../../ui/Icon";

const cn = classNames.bind(styles);

const Header = () => {
    return (
        <header>
            <div className={cn('header__container')}>
                <Icon
                    iconId='icon-Vector'
                    w={36}
                    h={13}
                    customStyles={{ marginRight: 8 }} />
                <span>PowerPulse</span>
            </div>
        </header>
    );
};

export { Header };