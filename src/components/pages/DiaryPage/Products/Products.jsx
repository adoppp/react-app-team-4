import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Products.modules.scss';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const Products = () => {
    return (
        <div>
            <section className={cn('section', 'scroll')}>
                <div className={cn('products_item')}>
                    <p className={cn('products_text')}>Products</p>
                    <div className={cn('products_list')}>
                        <a className={cn('products_link')}>Add product</a>
                        <Link to='/diary'>
                            <Icon
                                iconId='icon-arrow'
                                w={16}
                                h={16}
                            />
                        </Link>
                    </div>
                </div>
                <form className={cn('products')}>
                    <p className={cn('products__text')}>Title</p>
                    <input className={cn('products_input')} type="text" placeholder='Bread Hercules grain' />
                    <p className={cn('products__text')}>Category</p>
                    <input className={cn('products_input')} type="text" placeholder='Flour' />
                </form>
                <div className={cn('products_items')}>
                    <div>
                        <p className={cn('products__text')}>Calories</p>
                        <input className={cn('products_inputs')} type="text" placeholder='289' />
                    </div>
                    <div>
                        <p className={cn('products__text')}>Weight</p>
                        <input className={cn('products_inputs')} type="text" placeholder='100' />
                    </div>
                    <div>
                        <p className={cn('products__text')}>Recommend</p>
                        <input className={cn('products_inputs')} type="text" placeholder='Yes' />
                    </div>
                    <Link className={cn('products_trash')} to='/diary'>
                        <Icon
                            iconId='icon-trash'
                            w={20}
                            h={20}
                        />
                    </Link>
                </div>
                <form className={cn('products')}>
                    <p className={cn('products__text')}>Title</p>
                    <input className={cn('products_input')} type="text" placeholder='Rice semolina Garnets gluten-free' />
                    <p className={cn('products__text')}>Category</p>
                    <input className={cn('products_input')} type="text" placeholder='Cereals' />
                </form>
                <div className={cn('products_items')}>
                    <div>
                        <p className={cn('products__text')}>Calories</p>
                        <input className={cn('products_inputs')} type="text" placeholder='340' />
                    </div>
                    <div>
                        <p className={cn('products__text')}>Weight</p>
                        <input className={cn('products_inputs')} type="text" placeholder='100' />
                    </div>
                    <div>
                        <p className={cn('products__text')}>Recommend</p>
                        <input className={cn('products_inputs')} type="text" placeholder='Yes' />
                    </div>
                    <Link className={cn('products_trash')} to='/diary'>
                        <Icon
                            iconId='icon-trash'
                            w={20}
                            h={20}
                        />
                    </Link>
                </div>
                <form className={cn('products')}>
                    <p className={cn('products__text')}>Title</p>
                    <input className={cn('products_input')} type="text" placeholder='Venison stew Specia' />
                    <p className={cn('products__text')}>Category</p>
                    <input className={cn('products_input')} type="text" placeholder='Meat' />
                </form>
                <div className={cn('products_items')}>
                    <div>
                        <p className={cn('products__text')}>Calories</p>
                        <input className={cn('products_inputs')} type="text" placeholder='81' />
                    </div>
                    <div>
                        <p className={cn('products__text')}>Weight</p>
                        <input className={cn('products_inputs')} type="text" placeholder='100' />
                    </div>
                    <div>
                        <p className={cn('products__text')}>Recommend</p>
                        <input className={cn('products_inputs')} type="text" placeholder='No' />
                    </div>
                    <Link className={cn('products_trash')} to='/diary'>
                        <Icon
                            iconId='icon-trash'
                            w={20}
                            h={20}
                        />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Products;
