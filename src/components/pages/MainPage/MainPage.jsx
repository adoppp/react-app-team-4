import classNames from 'classnames/bind';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './MainPage.module.scss';
import { Icon } from '../../ui/Icon';
import { Header } from '../../global/Header';

const cn = classNames.bind(styles);

const MainPage = ({ children }) => {
const isTabletScreen = useMediaQuery({ minWidth: 768 });

    const iconVideoStyle = {
        marginLeft: '1px',
        marginBottom: '2px',
        width: isTabletScreen ? 20 : 12,
        height: isTabletScreen ? 20 : 12,
    };
const iconRunStyle = {
        width: isTabletScreen ? 16 : 12,
        height: isTabletScreen ? 16 : 12,
  };



    return <div className={cn('main__container')}>
              <Header />
        {children}
            <div className={cn('video__box')}>
            <div className={cn('icon__container')}>
                <Icon
                    iconId='icon-Polygon'
                    w={12}
                    h={12}
                    customStyles={iconVideoStyle} />
            </div>
                <p className={cn('descriprion__container')}>
                350+
                <span>Video tutorial</span>
                </p>
                </div>


                <div className={cn('cal__box')}>
                <div className={cn('icon__container')}><Icon
                    iconId='icon-running-stick'
                    w={12}
                    h={12}
                        customStyles={iconRunStyle} /></div>
                <p className={cn('descriprion__container')}>
                500
                <span>cal</span>
                </p>
            </div>

    </div>;
};

export default MainPage;