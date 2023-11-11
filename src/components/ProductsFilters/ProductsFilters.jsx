import styles from './ProductsFilters.module.scss'
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

 const ProductsFilters = () => {

    return <>
    <form className={cn('form_container')}>
    <input className={cn('input')}
      type="text"
      name="name"
      autoComplete="off"
      autoFocus
      placeholder="Search"
    />
    {/* <button type="submit">
    </button> */}
            
    <select className={cn('categories')} id="size" name="size">
    <option value="xs">Categories</option>
    </select>
    <select className={cn('select')}  id="size" name="size">
    <option value="all">All</option>
    <option value="rec">Recommended</option>
    <option value="notrec">Not recommended</option>
    </select>

  </form>
    </>
  

}

export {ProductsFilters}