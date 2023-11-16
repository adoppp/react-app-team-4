import styles from './Products.modules.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const Products = () => {
    return (
        <div className={cn('products')}>
            <Link to='/products' />
            <div className={cn('products_top')}>
                <h2 className={cn('products_title')}>Products</h2>
                <div className={cn('products_items')}>
                    <input className={cn('products_search')} type='text' placeholder='Search' />
                    <div className={cn('products_item')}>
                        <input className={cn('products_categories')} type='text' placeholder='Categories' />
                        <input className={cn('products_all')} type='text' placeholder='All' />
                    </div>
                </div>
            </div>
            <div className={cn('products_inner')}>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Rice semolina Garnets gluten-free</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>340</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Cereals</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Not recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Venison. stew Special</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>81</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Meat</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Bread Hercules grain</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>289</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Not recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Banana juice</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>48</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Soft drinks</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Not recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Spikachki</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>337</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Sausage</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Not recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Coffee drink</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>337</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Soft Drinks</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Not recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Red onion</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>42</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Vegetables and herbs</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
                <div className={cn('products_content')}>
                    <div className={cn('products_list')}>
                        <div className={cn('products-item')}>
                            <h3 className={cn('products__title')}>DIET</h3>
                        </div>
                        <p className={cn('products__text')}>Recommended</p>
                        <h4 className={cn('products-title')}>Add</h4>
                        <Link to='/products' />
                        <Icon iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </div>
                    <div className={cn('products_figure')}>
                        <Link to='/products' />
                        <Icon iconId='icon-figure'
                            w={24}
                            h={24}
                        />
                        <h5 className={cn('products_rice')}>Homemade noodles</h5>
                    </div>
                    <div className={cn('products_cereals')}>
                        <p>Calories:</p><span>322</span>
                        <p>Calories:</p>
                        <span className={cn('products_span')}>Flour</span>
                        <p>Calories:</p><span>100</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
