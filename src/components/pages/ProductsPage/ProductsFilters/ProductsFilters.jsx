import { Field, Form, Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import styles from './ProductsFilters.module.scss';
import classNames from 'classnames/bind';
import { Select } from '../../../ui/Select/Select';
import { Icon } from '../../../ui/Icon';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getProductsCategories } from '../../../../storage/operations/productsThunk.js';
import { selectorCategories, selectorParam } from '../../../../storage/selectors/productsSelector.js';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);

const ProductsFilters = () => {
    const dispatch = useDispatch();
    const isTabletScreen = useMediaQuery({ minWidth: 768 });

    const params = useSelector(selectorParam);
    const { list } = useSelector(selectorCategories);
        
    const [inputValue, setInputValue] = useState('');
    const [isRecommended, setIsRecommended] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('');

    const handleCategoryBloodChange = async(value) => {
        switch (value) {
            case 'Recommended':
                setIsRecommended(true);
            break;
            case 'Not recommended':
                setIsRecommended(false);
            break;
            default:
                setIsRecommended(null);
            break;
        };
    };

    useEffect(() => {
        if(params.category !== currentCategory || params.recommend !== isRecommended)
        dispatch(getProducts({
    ...params,
    category: currentCategory,
    recommend: isRecommended,
    query: inputValue,
    page: 1,
}));
    }, [currentCategory, dispatch, inputValue, isRecommended, params]);
    
    const handleFormSubmit = async() => {
        await dispatch(getProducts({
            ...params,
            query: inputValue,
            page: 1,
        }));
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
                            onChange={(e)=>setInputValue(e.target.value)}
                        />
                        {inputValue && (
                            <button
                                type="button"
                                className={cn('button_close')}
                                onClick={()=>setInputValue('')}
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
                        handleCategoryChange={(e)=> setCurrentCategory(e)}
                    />
                    <Select
                        value={selectList}
                        customSelectStyle={customSelectStyle}
                        customListSelectStyle={listSelectStyle}
                        handleCategoryChange={handleCategoryBloodChange}
                    />
                </Form>
            </Formik>
        </>
    );
};

export { ProductsFilters };
