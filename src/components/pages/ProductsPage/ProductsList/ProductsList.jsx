import { useSelector } from 'react-redux';
import { ProductsItem } from '../ProductsItem';
import styles from './ProductsList.module.scss';
import classNames from 'classnames/bind';
import { selectorProducts } from '../../../../storage/selectors/productsSelector';

const cn = classNames.bind(styles);

const ProductsList = ({ open }) => {
    const { items } = useSelector(selectorProducts);

    const isScroll = items.length === 0 ? { overflowY: 'auto' } : {};

    return (
        <ul className={cn('list')} style={isScroll}>
            <ProductsItem open={open} />
        </ul>
    );
};

export { ProductsList };
