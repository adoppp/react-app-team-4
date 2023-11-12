import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './Welcome.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

const cn = classNames.bind(styles);

const Welcome = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 320 });
    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const buttonStyles = {
        fontSize: isSmallScreen ? '12px' : isLargeScreen ? '20px' : '16px',
        width: isLargeScreen ? '195px' : '139px',
        padding: isLargeScreen ? '16px 60px' : '12px 40px',
    };

    const iconStyles = isLargeScreen
        ? {
              position: 'absolute',
              top: '1px',
              left: '-25px',
              width: '194px',
              height: '75px',
              zIndex: '-1',
          }
        : { position: 'absolute', top: '2', left: '-12px', zIndex: '-1' };

    return (
        <div className={cn('welcome__container')}>
            <h1>
                Transforming your{' '}
                <span>
                    body
                    <Icon
                        iconId="icon-Line"
                        w={102}
                        h={38}
                        customStyles={iconStyles}
                    />
                </span>{' '}
                shape with Power Pulse
            </h1>

            <div>
                <Link to="/signup">
                    <Button
                        label="Sign Up"
                        action={() => {
                            console.log('click');
                        }}
                        customContainerStyles={buttonStyles}
                    />
                </Link>

                <Link to="/signin">
                    <Button
                        label="Sign In"
                        buttonStyles="gray"
                        action={() => {
                            console.log('click');
                        }}
                        customContainerStyles={buttonStyles}
                    />
                </Link>
            </div>
        </div>
    );
};

export { Welcome };
