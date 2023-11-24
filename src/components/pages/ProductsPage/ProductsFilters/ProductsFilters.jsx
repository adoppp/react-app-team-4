import { Field, Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import styles from './ProductsFilters.module.scss';
import classNames from 'classnames/bind';
import { Select } from '../../../ui/Select/Select';
import { useState } from 'react';
import { Icon } from '../../../ui/Icon';

import { useDispatch, useSelector } from 'react-redux';
import {
    getProductsCategories,
    getProducts,
    getProductsOfBlood,
    getProductsOfBloodNotRecommended,

} from '../../../../storage/operations/productsThunk.js';
import { useEffect } from 'react';
import { selectorCategories, selectorProducts } from '../../../../storage/selectors/productsSelector.js';
import { setCategoryFilter } from '../../../../storage/reducers/productsSlice.js';

const cn = classNames.bind(styles);

const ProductsFilters = () => {
  const [inputValue, setInputValue] = useState('');
    const isTabletScreen = useMediaQuery({ minWidth: 768 });
    const dispatch = useDispatch();
  const { list } = useSelector(selectorCategories);
    const { filterCategory} = useSelector(selectorProducts);

    const hendleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };
    const handleClearInput = () => {
        setInputValue('');
  };
  



  const handleCategoryChange = (selectedValue) => {
    const filterProducts = filterCategory && filterCategory.filter(product => product.category == selectedValue);
    dispatch(setCategoryFilter(filterProducts))
  };

  const handleCategoryBlodChange = (selectedValue) => {
   const blood = 2;
  switch (selectedValue) {
    case 'Recommended':
       dispatch(getProductsOfBlood(blood));
      break;
    case 'Not recommended':
     dispatch(getProductsOfBloodNotRecommended(blood));
      break;
    default:
      dispatch(getProducts(''));
  }
};

    const handleFormSubmit = () => {
        dispatch(getProducts(inputValue));
    };

    const IconStylesSearch = {
        stroke: '#EFEDE8',
    };
    const IconStylesClose = {
        stroke: '#E6533C',
        strokeWidth: 4,
    };
    const widthSelect = isTabletScreen ? 204 : 173;

    const customSelectStyle = {
        width: widthSelect,
    };
 


    const listSelectStyle = {
        height: 112,
        overflow: 'visible',
    };

    const selectList = ['All', 'Recommended', 'Not recommended'];

    useEffect(() => {
        dispatch(getProductsCategories());
    }, [dispatch]);

    return (
        <>
            <Formik
                initialValues={{
                    search: '',
                }}
                onSubmit={handleFormSubmit}
            >
                <Form className={cn('form_container')}>
                    <div className={cn('form_container_input')}>
                        <Field
                            className={cn('input')}
                            type="text"
                            name="search"
                            value={inputValue}
                            autoComplete="off"
                            autoFocus
                            placeholder="Search"
                            onChange={hendleInputChange}
                        />
                        {inputValue && (
                            <button
                                type="button"
                                className={cn('button_close')}
                                onClick={handleClearInput}
                            >
                                <Icon
                                    iconId="icon-close"
                                    w={15}
                                    h={17}
                                    customStyles={IconStylesClose}
                                />
                            </button>
                        )}

                        <button className={cn('button_form')} type="submit">
                            <Icon
                                iconId="icon-search"
                                w={18}
                                h={18}
                                customStyles={IconStylesSearch}
                            />
                        </button>
                    </div>

                    <Select
                        value={list}
                        handleCategoryChange={handleCategoryChange}
                    />
                    <Select
                        value={selectList}
                        customSelectStyle={customSelectStyle}
                        customListSelectStyle={listSelectStyle}
                        handleCategoryChange={handleCategoryBlodChange}

                    />
                </Form>
            </Formik>
        </>
    );
};

export { ProductsFilters };
