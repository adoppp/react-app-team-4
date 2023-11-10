import css from './ProductsItem.module.css'

export const ProductsItem = () => {
    return <li className={css.Item}>
        <div className={css.FirstContainer}>
            <p>DIET</p>
        <p>Recommended</p>
        <button>Add</button>
        </div >
        <h2>Bread Hercules grain</h2>
        <div className={css.SecondContainer}>
            <p>Calories:</p>
        <p>Category:</p>
        <p>Weight:</p>
        </div>
    </li>
}