import { ProductsFilters } from './ProductsFilters';
import { ProductsList } from './ProductsList';
import { Title } from '../../global/Title/Title';

const ProductsPage = () => {
    return <div>
        
      <Title title='Products'/>
        <ProductsFilters />
        <ProductsList/>
    </div>;
};

export default ProductsPage;
