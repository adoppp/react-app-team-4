import Products from './Products/Products';
import NotFound from './NotFound/NotFound';

const ProductsPage = () => {
    return <div>
        <h2>ProductsPage</h2>
        <NotFound />
        <Products />
    </div>;
};

export default ProductsPage;