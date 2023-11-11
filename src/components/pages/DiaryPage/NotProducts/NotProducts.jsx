import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NotProducts.modules.scss';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const NotProducts = () => {
    return (
        <div className={cn('NotProducts')}>
            <div className={cn('NotProducts_item')}>
                <p className={cn('NotProducts_text')}>Products</p>
                <div className={cn('NotProducts_list')}>
                    <a className={cn('NotProducts_link')} href="#">Add product</a>
                    <Link to='/diary'>
                        <Icon
                            iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </Link>
                </div>
            </div>
            <p className={cn('NotProducts__text')}>Not found products</p>
        </div>
    );
}

export default NotProducts;
