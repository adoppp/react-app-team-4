import classNames from 'classnames/bind';

import styles from './PrivateContainer.module.scss';
import { Header } from '../../global/Header';

const cn = classNames.bind(styles);

const PrivateContainer = ({children}) => {
    return (
        <section>
            <Header />
            <div className={cn('container')}>
                {children}
            </div>
        </section>
    );
}

export default PrivateContainer;