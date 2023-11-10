import { ProductsItem } from "../ProductsItem/ProductsItem";
import css from './ProductsList.module.css'


export const ProductsList = () => {
    return <ul className={css.List}>
            <ProductsItem/>
    </ul>
}