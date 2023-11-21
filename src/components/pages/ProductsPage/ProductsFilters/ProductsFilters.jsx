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
} from '../../../../storage/operations/productsThunk.js';
import { useEffect } from 'react';
import { selectorCategories } from '../../../../storage/selectors/productsSelector.js';
// import { setCategoryFilter } from '../../../../storage/reducers/productsSlice.js';

const cn = classNames.bind(styles);

const ProductsFilters = () => {
    const [inputValue, setInputValue] = useState('');
    const isTabletScreen = useMediaQuery({ minWidth: 768 });
    const dispatch = useDispatch();
    const { list } = useSelector(selectorCategories);

    const hendleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };
    const handleClearInput = () => {
        setInputValue('');
    };

    // const handleCategoryChange = (selectedValue) => {
    //     setCategoryFilter(selectedValue)
    //    setSelectedCategory(selectedValue);
    // dispatch(getProducts(inputValue, selectedValue));
    // };

    const handleFormSubmit = () => {
        console.log(inputValue);
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
  const heightSelect = isTabletScreen ? 116 : 98;

  const listSelectStyle = {
    height: heightSelect,
    overflow: 'hidden',
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
                        // handleCategoryChange={handleCategoryChange}
                    />
                    <Select
                        value={selectList}
                        customSelectStyle={customSelectStyle}
                        customListSelectStyle={listSelectStyle}
                        // handleCategoryChange={handleCategoryChange}
                    />
                </Form>
            </Formik>
        </>
    );
};

export { ProductsFilters };
