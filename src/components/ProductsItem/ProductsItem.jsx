import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import styles from './ProductsItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

 const ProductsItem = () => {
    return <li className={cn('item_products')}>
        <div className={cn('item_container')}>
            <p className={cn('diet')} >DIET</p>
        <p>Recommended</p>
        <Button/>
        </div >
        <Icon
                        iconId='icon-checkbox-circle'
                        w={36}
                        h={13}
                        customStyles={{ marginRight: 8 }}
                    />
        <h2>Bread Hercules grain</h2>
        <div className={cn('item_list_container')}>
            <p>Calories:</p>
        <p>Category:</p>
        <p>Weight:</p>
        </div>
    </li>
}

export { ProductsItem };
