import classNames from 'classnames/bind';

import styles from './ProductTable.module.scss';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const ProductTable = () => {
    const IconButtonStyles = {
        marginLeft: 6,
    };

    return (
        <div className={cn('product__container')}>
            <div className={cn('container__header')}>
                <h2>Products</h2>
                <button className={cn('button')}>
                    Add product
                    <Icon
                        iconId="icon-arrow-big"
                        w={16}
                        h={16}
                        customStyles={IconButtonStyles}
                    />
                </button>
            </div>

            <ul className={cn('container__list')}>
                <li>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Title</h3>
                        <p className={cn('container__input', 'title')}>
                            Bread Hercules grain
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Category</h3>
                        <p className={cn('container__input', 'category')}>
                            Flour
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Calories</h3>
                        <p className={cn('container__input__small')}>289</p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Weight</h3>
                        <p className={cn('container__input__small')}>100</p>
                    </div>
                    <div className={cn('small-gap')}>
                        <h3 className={cn('container__label')}>Recommend</h3>
                        <p className={cn('container__input__small', 'red')}>
                            No
                        </p>
                    </div>
                    <span>
                        <Icon
                            iconId="icon-trash"
                            w={20}
                            h={20}
                            customStyles={{}}
                        />
                    </span>
                </li>
                <li>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Title</h3>
                        <p className={cn('container__input', 'title')}>
                            Bread Hercules grain
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Category</h3>
                        <p className={cn('container__input', 'category')}>
                            Flour
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Calories</h3>
                        <p className={cn('container__input__small')}>289</p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Weight</h3>
                        <p className={cn('container__input__small')}>100</p>
                    </div>
                    <div className={cn('small-gap')}>
                        <h3 className={cn('container__label')}>Recommend</h3>
                        <p className={cn('container__input__small', 'red')}>
                            No
                        </p>
                    </div>
                    <span>
                        <Icon
                            iconId="icon-trash"
                            w={20}
                            h={20}
                            customStyles={{}}
                        />
                    </span>
                </li>
                <li>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Title</h3>
                        <p className={cn('container__input', 'title')}>
                            Bread Hercules grain
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Category</h3>
                        <p className={cn('container__input', 'category')}>
                            Flour
                        </p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Calories</h3>
                        <p className={cn('container__input__small')}>289</p>
                    </div>
                    <div className={cn('big-gap')}>
                        <h3 className={cn('container__label')}>Weight</h3>
                        <p className={cn('container__input__small')}>100</p>
                    </div>
                    <div className={cn('small-gap')}>
                        <h3 className={cn('container__label')}>Recommend</h3>
                        <p className={cn('container__input__small', 'green')}>
                            Yes
                        </p>
                    </div>
                    <span>
                        <Icon
                            iconId="icon-trash"
                            w={20}
                            h={20}
                            customStyles={{}}
                        />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export { ProductTable };
