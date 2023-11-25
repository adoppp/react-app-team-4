import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cn = classNames.bind(styles);

const Button = ({
    label,
    buttonStyles,
    action,
    customContainerStyles,
    type,
    isDisabled,
}) => {
    const disabletBtn = (
        <button
            button
            className={cn('button', { [`${buttonStyles}`]: buttonStyles })}
            onClick={action}
            style={
                customContainerStyles
                    ? { ...customContainerStyles, cursor: 'not-allowed' }
                    : { cursor: 'not-allowed' }
            }
            type={type ? `${type}` : 'button'}
            disabled={true}
        >
            <span>{label}</span>
        </button>
    );

    const btn = (
        <button
            button
            className={cn('button', { [`${buttonStyles}`]: buttonStyles })}
            onClick={action}
            style={customContainerStyles ? customContainerStyles : {}}
            type={type ? `${type}` : 'button'}
        >
            <span>{label}</span>
        </button>
    );

    return isDisabled ? disabletBtn : btn;
};

export { Button };
