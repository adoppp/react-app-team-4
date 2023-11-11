import { Button } from '../ui/Button/Button';
import styles from './ProductsItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

 const ProductsItem = () => {
    return <li className={cn('Item')}>
        <div className={cn('FirstContainer')}>
            <p className={cn('diet')} >DIET</p>
        <p>Recommended</p>
        <Button/>
        </div >
        <h2>Bread Hercules grain</h2>
        <div className={cn('SecondContainer')}>
            <p>Calories:</p>
        <p>Category:</p>
        <p>Weight:</p>
        </div>
    </li>
}

export {ProductsItem }
