import { Icon } from '../../../ui/Icon';
import styles from './ProductsItem.module.scss';
import classNames from 'classnames/bind';

import { useSelector } from 'react-redux';
import { selectorProducts } from '../../../../storage/selectors/productsSelector.js';

const cn = classNames.bind(styles);

const ProductsItem = ({ open }) => {
    const { items } = useSelector(selectorProducts);

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
        <>
            {!items || items.length === 0 ? (
                <div className={cn('not_find_text')}>
                    <p>
                        Sorry, no results were found{' '}
                        <span>
                            for the product filters you selected. You may want
                            to consider other search options to find the product
                            you want. Our range is wide and you have the
                            opportunity to find more options that suit your
                            needs.
                        </span>
                    </p>
                    <p>Try changing the search parameters.</p>
                </div>
            ) : (
                items.map((item) => {
                    return (
                        <li key={item.title} className={cn('item')}>
                            <div className={cn('item_container')}>
                                <p className={cn('diet')}>DIET</p>
                                <div className={cn('button_container')}>
                                    <p className={cn('text')}>Recommended</p>
                                    <button
                                        className={cn('button')}
                                        onClick={() =>
                                            open(
                                                item.title,
                                                item.calories,
                                                item._id,
                                            )
                                        }
                                    >
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
                                    iconId="icon-run"
                                    w={12}
                                    h={14}
                                    customStyles={IconStyles}
                                />
                                <h2 className={cn('title')}>{item.title}</h2>
                            </div>
                            <div className={cn('item_list_container')}>
                                <p>
                                    Calories:
                                    <span className={cn('list_text')}>
                                        {item.calories}
                                    </span>
                                </p>
                                <p>
                                    Category:
                                    <span className={cn('list_text')}>
                                        {item.category}
                                    </span>
                                </p>
                                <p>
                                    Weight:
                                    <span className={cn('list_text')}>
                                        {item.weight}
                                    </span>
                                </p>
                            </div>
                        </li>
                    );
                })
            )}
        </>
    );
};

export { ProductsItem };
