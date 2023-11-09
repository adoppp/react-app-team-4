import classNames from 'classnames/bind';

import styles from './Button.module.scss'

const cn = classNames.bind(styles);


const Button = ({
    label,
    buttonStyles,
    action,
    customContainerStyles
}) => {
    return (
        <button
            className={cn('button', { [`${buttonStyles}`]: buttonStyles })}
            onClick={action}
            style={customContainerStyles ? customContainerStyles : {}}
        >
            <span>
                {label}
            </span>
        </button>
    );
};

export { Button };