import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const NotFound = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 320 });
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const buttonStyles = {
        fontSize: isSmallScreen ? '12px' : isLargeScreen ? '20px' : '16px',
        width: isLargeScreen ? '208px' : '155px',
        padding: isLargeScreen ? '16px 60px' : '12px 40px',
    };

    return (
        <div className={cn('notfound__container')}>
            <div className={cn('info__container')}>
                <Link to="/welcome">
                    <Icon
                        iconId="icon-Vector"
                        w={36}
                        h={13}
                        customStyles={{ marginRight: 8 }}
                    />
                    <span className={cn('info__logo_text')}>PowerPulse</span>
                </Link>
                <h1>404</h1>
                <p>
                    Sorry, you have reached a page that we could not find. It
                    seems that you are lost among the numbers and letters of our
                    virtual space. Perhaps this page went on vacation or decided
                    to disappear into another dimension. We apologize for this
                    inconvenience.
                </p>
                <Link to="/welcome">
                    <Button
                        label="Go Home"
                        buttonStyles="orange"
                        customContainerStyles={buttonStyles}
                    />
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
