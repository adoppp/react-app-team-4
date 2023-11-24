import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './VerifyPage.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button';
import { Icon } from '../../ui/Icon';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyByVerificationCode } from '../../../storage/operations/authThunk';
import { verificationCodeSelector } from '../../../storage/selectors/authSelectors';

const cn = classNames.bind(styles);

const VerifyPage = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 320 });
    const isLargeScreen = useMediaQuery({ minWidth: 768 });
    const dispatch = useDispatch();
    const verificationCode = useSelector(verificationCodeSelector);

    const buttonStyles = {
        fontSize: isSmallScreen ? '12px' : isLargeScreen ? '18px' : '16px',

        padding: isLargeScreen ? '16px 8px' : '12px 12px',
    };

    const iconStyles = {
        marginRight: 8,
        width: isLargeScreen ? '44px' : '36px',
        height: isLargeScreen ? '17px' : '13px',
    };

    useEffect(() => {
        dispatch(verifyByVerificationCode(verificationCode));
    }, [dispatch, verificationCode]);

    // const handleVerification = () => {
    //     waiting for zahar to send email
    // }

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
                <h1>Email verification failed</h1>
                <p>Try to resend email. Just click down.</p>
                <Button
                    label="Resend Verification Email"
                    buttonStyles="orange"
                    customContainerStyles={buttonStyles}
                    // action={handleVerification}
                />
            </div>
        </div>
    );
};

export default VerifyPage;
