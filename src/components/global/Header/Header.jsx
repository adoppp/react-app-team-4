import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { Icon } from "../../ui/Icon";

const cn = classNames.bind(styles);

const Header = () => {
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
            </div>
        </header>
    );
};

export { Header };