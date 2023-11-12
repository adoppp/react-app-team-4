import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import styles from './ProductsItem.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const ProductsItem = () => {
     const ButtonStyles = {
    backgroundColor:' transparent',
    
  } 
     const IconStyles = {
    backgroundColor:' #EFA082',
    
  } 
    
    return <li className={cn('item')}>
        <div className={cn('item_container')}>
            <p className={cn('diet')} >DIET</p>
            <p>Recommended</p>
            <Button
            type={'submit'}
        customContainerStyles={ButtonStyles}
            >
            <span>
            </span>
          
            </Button>
            <button>
                Add
                <Icon iconId='icon-next' w={20}  h={20} customStyles={{ marginRight: 8 }} />
            </button>
              
           
        </div >
        <div>
              <Icon
            iconId='icon-running-stick'
            w={36}
            h={13}
            customStyles={IconStyles}/>
        <h2>Bread Hercules grain</h2>
      </div>
        <div className={cn('item_list_container')}>
            <p>Calories:</p>
        <p>Category:</p>
        <p>Weight:</p>
        </div>
    </li>
}

export { ProductsItem };
