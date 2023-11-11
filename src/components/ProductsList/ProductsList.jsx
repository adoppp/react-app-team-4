import { ProductsItem } from "../ProductsItem/ProductsItem";
import styles from './ProductsList.module.scss';

import classNames from 'classnames/bind';

const cn = classNames.bind(styles);


 const ProductsList = () => {
    return <ul className={cn('List')}>
            <ProductsItem/>
    </ul>
}

export {ProductsList}