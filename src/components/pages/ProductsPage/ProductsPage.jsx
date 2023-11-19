import { ProductsFilters } from "../../ProductsFilters/ProductsFilters";
import { ProductsList } from "../../ProductsList/ProductsList";
import { Title } from "../../global/Title/Title";

const ProductsPage = () => {
    return <div>
        
      <Title title='Products'/>
        <ProductsFilters />
        <ProductsList/>
    </div>;
};

export default ProductsPage;
