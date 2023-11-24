import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './NotFoundContainer.module.scss';

const cn = classNames.bind(styles);

const NotFoundContainer = ({ children }) => {
    const isTabletScreen = useMediaQuery({ minWidth: 768 });

    return <div className={cn('main__container')}>{children}</div>;
};

export default NotFoundContainer;
