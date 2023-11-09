import classNames from 'classnames/bind';
import React from 'react';

import styles from './Home.module.scss';

type HomeProps = {
  children?: React.ReactNode};

const cn = classNames.bind(styles);

const MainPage = ({children}: HomeProps) => {
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