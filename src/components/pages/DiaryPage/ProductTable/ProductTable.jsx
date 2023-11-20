import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './ProductTable.module.scss';
import { Icon } from '../../../ui/Icon';
import { deleteProduct } from '../../../../storage/operations/diaryThunk';
import { userSelector } from '../../../../storage/selectors/authSelectors';



const cn = classNames.bind(styles);

const ProductTable = () => {

    const products = useSelector((state) => state.diary.data?.products || []);
    const selectedDate = useSelector((state) => state.diary.selectedDate);
    const userData = useSelector(userSelector);


    const dispatch = useDispatch();

      const handleDelete = (productId) => {
        dispatch(deleteProduct({ id: productId, date: selectedDate }));
      };
    
        const bloodType = userData.blood

const IconButtonStyles = {
             marginLeft: 6,
    } 
    
     return (
        <div className={cn('product__container')}>
            <div className={cn('container__header')}>
                <h2>Products</h2>
                <button className={cn('button')}>
                    <Link to="/products">Add product</Link>
                    <Icon iconId='icon-arrow-big' w={16} h={16} customStyles={IconButtonStyles} />
                </button>
            </div>

            <ul className={cn('container__list')}>
                {products.map(product => {
                    const isNotAllowedForBloodType = product.groupBloodNotAllowed[bloodType];

                    return (
                        <li key={product._id}>
                             <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Title</h3>
                            <p className={cn('container__input', 'title')}>{product.title}</p>
                        </div>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Category</h3>
                            <p className={cn('container__input', 'category')}>{product.category}</p>
                        </div>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Calories</h3>
                            <p className={cn('container__input__small')}>{product.calories}</p>
                        </div>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Weight</h3>
                            <p className={cn('container__input__small')}>{product.weight}</p>
                        </div>
                        <div className={cn('small-gap')}>
                            <h3 className={cn('container__label')}>Recommend</h3>
                            <p className={cn('container__input__small', { 'red': isNotAllowedForBloodType, 'green': !isNotAllowedForBloodType })}>
                                {isNotAllowedForBloodType ? 'No' : 'Yes'}
                            </p>
                        </div>
                            <span onClick={() => handleDelete(product._id)}>
                                <Icon iconId="icon-trash" w={20} h={20} customStyles={{}} />
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export { ProductTable };
    
