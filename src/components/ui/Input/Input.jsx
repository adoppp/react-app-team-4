import classNames from 'classnames/bind';
import { useId } from 'react';

import styles from './Input.module.scss';

const cn = classNames.bind(styles);

const Input = ({
    label,
    name,
    idSuffix,
    type,
    action,
    placeHolder,
    customContainerLabelStyles,
    customContainerInputStyles,
    cnClassNameContainer,
}) => {
    const id = useId();

    return (
        <div className={cnClassNameContainer}>
            {label && (
                <label
                    htmlFor={`${id}-${idSuffix}`}
                    style={
                        customContainerLabelStyles
                            ? customContainerLabelStyles
                            : {}
                    }
                >
                    {label}
                </label>
            )}
            <input
                type={type ? `${type}` : 'text'}
                name={`${name}`}
                id={`${id}-${idSuffix}`}
                onChange={action}
                placeholder={placeHolder ? `${placeHolder}` : ''}
                className={cn('input')}
                style={
                    customContainerInputStyles ? customContainerInputStyles : {}
                }
            />
        </div>
    );
};

export { Input };
