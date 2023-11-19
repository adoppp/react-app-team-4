import { ProductsItem } from '../ProductsItem';
import styles from './ProductsList.module.scss';

import classNames from 'classnames/bind';

const cn = classNames.bind(styles);


const ProductsList = () => {
        return <ul className={cn('list')}>
                <ProductsItem />
        </ul>
       
        
};

export { ProductsList };