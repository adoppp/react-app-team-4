import { Button } from '../../../ui/Button';
import { Icon } from '../../../ui/Icon';
import styles from './ProductsItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const ProductsItem = () => {
    const ButtonStyles = {
        backgroundColor: ' transparent',
    };
    const IconStyles = {
        backgroundColor: ' #EFA082',
        width: 24,
        height: 24,
        borderRadius: 50,
    };
    const IconButtonStyles = {
        marginLeft: 8,
    };

    return (
        <li className={cn('item')}>
            <div className={cn('item_container')}>
                <p className={cn('diet')}>DIET</p>
                <div className={cn('button_container')}>
                    <p className={cn('text')}>Recommended</p>
                    <button className={cn('button')}>
                        Add
                        <Icon
                            iconId="icon-next"
                            w={20}
                            h={20}
                            customStyles={IconButtonStyles}
                        />
                    </button>
                </div>
            </div>
            <div className={cn('title_container')}>
                <Icon
                    iconId="icon-running-stick"
                    w={12}
                    h={14}
                    customStyles={IconStyles}
                />
                <h2 className={cn('title')}>Bread Hercules grain</h2>
            </div>
            <div className={cn('item_list_container')}>
                <p>Calories:</p>
                <p>Category:</p>
                <p>Weight:</p>
            </div>
        </li>
    );
};

export { ProductsItem };
