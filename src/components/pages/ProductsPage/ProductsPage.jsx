import { ProductsFilters } from './ProductsFilters';
import { ProductsList } from './ProductsList';
import { Title } from '../../global/Title/Title';
import styles from './ProductsPage.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const ProductsPage = () => {
  const titleProduts = {
  }


    return <div>
        
      <div className={cn('products_page_container')}>
        <Title title='Products' customContainerStyles={titleProduts} />
        <ProductsFilters />
      </div>
        <ProductsList/>
    </div>;
};

export default ProductsPage;
