import styles from './NotFound.modules.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Icon } from "../../../ui/Icon";

const cn = classNames.bind(styles);

const NotFound = () => {
    return (
        <div className={cn('found')}>
            <h2 className={cn('found_title')}>Products</h2>
            <div className={cn('found_items')}>
                <input className={cn('found_item')} type="text" placeholder='Barley'/>
                <Link className={cn('found_icon1')} to='/products'>
                    <Icon
                        iconId='icon-x'
                        w={18}
                        h={18}
                        customStyles={{ marginRight: 8 }}
                    />
                </Link>
                <Link className={cn('found_icon2')} to='/products'>
                    <Icon
                        iconId='icon-search'
                        w={18}
                        h={18}
                    />
                </Link>
            </div>
            <form className={cn('found_form')}>
                <input className={cn('found_input')} type="text" placeholder='Cereals'/>
                <Link className={cn('found_icon3')} to='/products'>
                    <Icon
                        iconId='icon-chevron-down'
                        w={18}
                        h={18}
                    />
                </Link>
                <input className={cn('found_inputs')} type="text" placeholder='Recommended'/>
                <Link className={cn('found_icon4')} to='/products'>
                    <Icon
                        iconId='icon-chevron-down'
                        w={18}
                        h={18}
                    />
                </Link>
            </form>
            <p className={cn('found_text')}>
                <span>Sorry, no results were found</span> for the product filters you selected. 
                You may want to consider other search options to find the product you want. 
                Our range is wide and you have the opportunity to find more options that suit your needs.
            </p>
            <p className={cn('found__text')}>Try changing the search parameters.</p>
        </div>
    );
}

export default NotFound;
