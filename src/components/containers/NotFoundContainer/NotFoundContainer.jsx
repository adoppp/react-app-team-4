import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './NotFoundContainer.module.scss';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const NotFoundContainer = ({ children }) => {
    const isTabletScreen = useMediaQuery({ minWidth: 768 });

    const iconVideoStyle = {
        marginLeft: '1px',
        marginBottom: '2px',
        width: isTabletScreen ? 20 : 12,
        height: isTabletScreen ? 20 : 12,
    };

    const iconRunStyle = {
        width: isTabletScreen ? 16 : 12,
        height: isTabletScreen ? 16 : 12,
    };

    return (
        <div className={cn('main__container')}>
            {children}
        </div>
    );
};

export default NotFoundContainer;
