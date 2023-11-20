
import { Icon } from '../../../ui/Icon';
import styles from './ProductsItem.module.scss';
import classNames from 'classnames/bind';

import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../../../storage/operations/productsThunk.js'

import { useEffect } from 'react';
import { selectorProducts } from '../../../../storage/reducers/productsSlice.js';

const cn = classNames.bind(styles);

const ProductsItem = () => {
   
       const dispatch = useDispatch();
        const {items} = useSelector(selectorProducts);

         useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

     const IconStyles = {
        backgroundColor: ' #EFA082',
        width: 24,
        height: 24,
        borderRadius: 50,
         
   } 
  const IconButtonStyles = {
    marginLeft: 8,
 
  };
  console.log(items)

  
  return <>
    {!items || items.length === 0 ? <p>No products found.</p> : items.map(item => {
      return <li key={item.title} className={cn('item')}>
        <div className={cn('item_container')}>
            <p className={cn('diet')} >DIET</p>
            <div className={cn('button_container')}>
                   <p className={cn('text')}>Recommended</p>
            <button className={cn('button')}>
                Add
                <Icon iconId='icon-next' w={20}  h={20} customStyles={IconButtonStyles} />
               
            </button>
         </div>  
        </div >
        <div className={cn('title_container')} >
              <Icon
            iconId='icon-running-stick'
            w={12}
            h={14}
            customStyles={IconStyles}/>
        <h2 className={cn('title')} >{item.title}</h2>
      </div>
        <div className={cn('item_list_container')}>
        <p>Calories:{item.calories }</p>
        <p>Category:</p>
        <p>Weight:{item.weight}</p>
        </div>
    </li>
      
  })}
  </>
}

export { ProductsItem };
