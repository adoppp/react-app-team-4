import classNames from 'classnames/bind';

import styles from './ProductsContainer.module.scss';
import { Header } from '../../global/Header';

const cn = classNames.bind(styles);

const ProductsContainer = ({ children }) => {
    return (
        <section className={cn('background')}>
            <Header />
            <div className={cn('container')}>{children}</div>
        </section>
    );
};

export default ProductsContainer;
