import { FC, ReactElement, CSSProperties } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss'

const cn = classNames.bind(styles);

type ButtonProps  = {
    label: string;
    isGray?: boolean;
    action: (event: React.MouseEvent<HTMLButtonElement>) => void;
    customContainerStyles?: CSSProperties;
};

const Button: FC<ButtonProps> = ({
    label,
    isGray,
    action,
    customContainerStyles
}): ReactElement  => {
    return (
        <button
            className={cn('button', { gray: isGray })}
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