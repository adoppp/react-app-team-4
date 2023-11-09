import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import React from 'react';

type HomeProps = {
  children?: React.ReactNode};

const cn = classNames.bind(styles);

const Home = ({children}: HomeProps) => {
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

export default Home;