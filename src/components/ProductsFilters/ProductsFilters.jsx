import css from './ProductsFilters.module.css'


export const ProductsFilters = () => {

    return <>
    <form className={css.Form}>
    <input className={css.Input}
      type="text"
      name="name"
      autoComplete="off"
      autoFocus
      placeholder="Search"
    />
    {/* <button type="submit">
    </button> */}
            
    <select className={css.Categories} id="size" name="size">
    <option value="xs">Categories</option>
    </select>
    <select className={css.Select}  id="size" name="size">
    <option value="all">All</option>
    <option value="rec">Recommended</option>
    <option value="notrec">Not recommended</option>
    </select>

  </form>
    </>
  

}