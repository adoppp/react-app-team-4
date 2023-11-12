import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import styles from './ProductsFilters.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);


const ProductsFilters = () => {

  const ButtonStyles = {
    position: 'absolute',
    right: 0,
    backgroundColor:' transparent',
    
  }
  const IconStyles = {
    backgroundColor: '#EFEDE8',

  }

  return <>
    <form className={cn('form_container')}>
      <input className={cn('input')}
        type="text"
        name="name"
        autoComplete="off"
        autoFocus
        placeholder="Search"
      />
      <Button
         type={'submit'}
        customContainerStyles={ButtonStyles}
      >
         <Icon
            iconId='icon-eye-off'
            w={36}
            h={13}
            customStyles={IconStyles}/>
        </Button>
            
      <select className={cn('categories')} id="size" name="size">
        <option value="xs">Categories</option>
      </select>
      <select className={cn('select')} id="size" name="size">
        <option value="all">All</option>
        <option value="rec">Recommended</option>
        <option value="notrec">Not recommended</option>
      </select>

    </form>
  </>
  

};

export { ProductsFilters };