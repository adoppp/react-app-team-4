import { useDispatch, useSelector } from 'react-redux';
import { ProductsItem } from '../ProductsItem';
import styles from './ProductsList.module.scss';
import classNames from 'classnames/bind';
import { selectorParam, selectorProducts } from '../../../../storage/selectors/productsSelector';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { getProducts } from '../../../../storage/operations/productsThunk';

const cn = classNames.bind(styles);

const ProductsList = ({ open }) => {
    const dispatch = useDispatch();
    
    const parameters = useSelector(selectorParam);
    const { items } = useSelector(selectorProducts);
    const isScroll = items && items.length === 0 ? { overflowY: 'auto' } : {};
    
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [goFetch, setGoFetch]=useState(true);
    const [nextPage, setNextPage] = useState(2);
    const [category, setCategory] = useState('');
    const [recommend, setRecommend] = useState('');

    useEffect(() => {
        setGoFetch(true);
        setQuery(parameters.query);
        setCategory(parameters.category);
        setRecommend(parameters.recommend);

        if(category !== parameters.category || recommend !== parameters.recommend || query !== parameters.query ){
            setNextPage(2)
            setData(items)
            const container = document.getElementById('scrollableDiv');
            container.scrollTo({
                top: 0,
            });
        };

        if(data.length === 0){
            setData(items)
        };
    }, [category, data.length, items, nextPage, parameters.category, parameters.query, parameters.recommend, query, recommend]);

const fetchData = async() => {
    const response = await dispatch(getProducts({...parameters, page: nextPage}));
    await setData((prevData) => [...prevData, ...response.payload.products]);
    setNextPage(prevPage => prevPage + 1)
        if (data.length === 0 || data.length < 20) {
            await setGoFetch(false);
        };
    };

    return (
    <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={goFetch}
        scrollableTarget="scrollableDiv"
        scrollThreshold={'200px'}
    >
        <ul id="scrollableDiv" className={cn('list')} style={isScroll}>
            <ProductsItem open={open} items={data}/>
        </ul>
    </InfiniteScroll>
    );
};

export { ProductsList };

