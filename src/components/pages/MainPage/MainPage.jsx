import classNames from 'classnames/bind';
import React from 'react';

import styles from './MainPage.module.scss';

const cn = classNames.bind(styles);

const MainPage = ({children}) => {
    return <div>
        {children}
        <div>
            <p>350+ <span>Video tutorial</span></p>
        </div>
        <div>
            <p>500 <span>cal</span></p>
        </div>
    </div>;
};

export default MainPage;