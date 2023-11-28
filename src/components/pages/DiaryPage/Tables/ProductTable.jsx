import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './ExercisesTable.module.scss';
import { Icon } from '../../../ui/Icon';
import {
    deleteProduct,
    getDiaryInfo,
} from '../../../../storage/operations/diaryThunk';
import { userInfoSelector } from '../../../../storage/selectors/authSelectors';
import {
    dateExerciseSelector,
    diaryProductsSelector,
} from '../../../../storage/selectors/diarySelectors';

const cn = classNames.bind(styles);

const ProductTable = () => {
    const selectedDate = useSelector(dateExerciseSelector);
    const products = useSelector(diaryProductsSelector);

    const userData = useSelector(userInfoSelector);
    const bloodType = userData.blood;

    const dispatch = useDispatch();

    const handleDelete = (productId) => {
        dispatch(deleteProduct({ id: productId, date: selectedDate })).then(
            () => {
                dispatch(getDiaryInfo(selectedDate));
            },
        );
    };

    const IconButtonStyles = {
        marginLeft: 6,
    };

    return (
        <div className={cn('product__container')}>
            <div className={cn('container__header')}>
                <h2>Products</h2>
                <button className={cn('button')}>
                    <Link to="/products">Add product</Link>
                    <Icon
                        iconId="icon-arrow-big"
                        w={16}
                        h={16}
                        customStyles={IconButtonStyles}
                    />
                </button>
            </div>
            {!products || products.length === 0 ? (
                <p className={cn('notFound')}>Not found products</p>
            ) : (
                <ul className={cn('container__list')}>
                    {products.map((product) => {
                        const { _id, title, category, groupBloodNotAllowed } =
                            product.product;
                        const { weight, consumedCalories } = product;
                        const isNotAllowedForBloodType =
                            groupBloodNotAllowed[bloodType];
                        return (
                            <li key={_id}>
                                <div className={cn('big-gap')}>
                                    <h3 className={cn('container__label')}>
                                        Title
                                    </h3>
                                    <p
                                        className={cn(
                                            'container__input',
                                            'title__product',
                                        )}
                                    >
                                        {title}
                                    </p>
                                </div>
                                <div className={cn('big-gap')}>
                                    <h3 className={cn('container__label')}>
                                        Category
                                    </h3>
                                    <p
                                        className={cn(
                                            'container__input',
                                            'category__product',
                                        )}
                                    >
                                        {category}
                                    </p>
                                </div>
                                <div className={cn('big-gap')}>
                                    <h3 className={cn('container__label')}>
                                        Calories
                                    </h3>
                                    <p
                                        className={cn(
                                            'container__input_small_Product',
                                        )}
                                    >
                                        {Math.round(consumedCalories)}
                                    </p>
                                </div>
                                <div className={cn('big-gap')}>
                                    <h3 className={cn('container__label')}>
                                        Weight
                                    </h3>
                                    <p
                                        className={cn(
                                            'container__input_small_Product',
                                        )}
                                    >
                                        {weight}
                                    </p>
                                </div>
                                <div className={cn('small-gap__product')}>
                                    <h3 className={cn('container__label')}>
                                        Recommend
                                    </h3>
                                    <p
                                        className={cn(
                                            'container__input_small_Product',
                                            {
                                                red: !isNotAllowedForBloodType,
                                                green: isNotAllowedForBloodType,
                                            },
                                        )}
                                    >
                                        {isNotAllowedForBloodType
                                            ? 'Yes'
                                            : 'No'}
                                    </p>
                                </div>
                                <span
                                    onClick={() => handleDelete(_id)}
                                    className={cn('button__delete')}
                                >
                                    <Icon iconId="icon-trash" w={20} h={20} />
                                </span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export { ProductTable };
