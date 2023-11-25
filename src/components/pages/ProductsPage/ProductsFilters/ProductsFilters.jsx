import { Field, Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import styles from './ProductsFilters.module.scss';
import classNames from 'classnames/bind';
import { Select } from '../../../ui/Select/Select';
import { useState } from 'react';
import { Icon } from '../../../ui/Icon';

import { useDispatch, useSelector } from 'react-redux';
import {
    getProducts,
    getProductsCategories,
} from '../../../../storage/operations/productsThunk.js';
import { useEffect } from 'react';
import { selectorCategories } from '../../../../storage/selectors/productsSelector.js';

const cn = classNames.bind(styles);

const ProductsFilters = () => {
    const [inputValue, setInputValue] = useState('');
    const isTabletScreen = useMediaQuery({ minWidth: 768 });
    const dispatch = useDispatch();
    const { list } = useSelector(selectorCategories);

    const [category, setCategory] = useState('');
    const [isRecommended, setIsRecommended] = useState(null);

    const hendleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };
    const handleClearInput = () => {
        setInputValue('');
    };

    const handleCategoryChange = (selectedValue) => {
        setCategory(selectedValue);

        dispatch(getProducts({ inputValue, category, isRecommended }));
    };

    const handleCategoryBlodChange = (selectedValue) => {
        if (selectedValue == 'Recommended') {
            setIsRecommended(true);
        } else if (selectedValue == 'Not recommended') {
            setIsRecommended(false);
        } else {
            setIsRecommended(null);
        }
        dispatch(getProducts({ inputValue, category, isRecommended }));
    };
    const handleFormSubmit = () => {
        dispatch(getProducts({ inputValue, category, isRecommended }));
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

    useEffect(() => {
        handleFormSubmit();
    }, [category, isRecommended]);

    useEffect(() => {
        dispatch(getProductsCategories());
    }, [dispatch]);

    const selectList = ['All', 'Recommended', 'Not recommended'];

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
