import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './VerifyPage.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';

const cn = classNames.bind(styles);

const VerifyPage = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 320 });
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const buttonStyles = {
        fontSize: isSmallScreen ? '12px' : isLargeScreen ? '20px' : '16px',
        width: isLargeScreen ? '208px' : '155px',
        padding: isLargeScreen ? '16px 60px' : '12px 40px',
    };

    const iconStyles = {
        marginRight: 8,
        width: isLargeScreen ? '44px' : '36px',
        height: isLargeScreen ? '17px' : '13px',
    };

    return (
        <div className={cn('notfound__container')}>
            <div className={cn('info__container')}>
                <Link to="/welcome">
                    <Icon
                        iconId="icon-Vector"
                        w={36}
                        h={13}
                        customStyles={iconStyles}
                    />
                    <span className={cn('info__logo_text')}>PowerPulse</span>
                </Link>
                <h1>Please verify your email</h1>
                <p>
                    Just click on the link in that email to complete your signup.
                    If you don't see it, you may need to check your spam folder.
                    Stil can't find the email? No problem.
                </p>
                <Button
                    label="Resend Verification Email"
                    buttonStyles="orange"
                    customContainerStyles={buttonStyles}
                />
            </div>
        </div>
    );
}

export default VerifyPage;