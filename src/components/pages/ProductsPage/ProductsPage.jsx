import { ProductsFilters } from "../../ProductsFilters/ProductsFilters";
import { ProductsList } from "../../ProductsList/ProductsList";

const ProductsPage = () => {
    return <div>
        <h2>Products</h2>
        <ProductsFilters />
        <ProductsList/>
    </div>;
};

export default ProductsPage;