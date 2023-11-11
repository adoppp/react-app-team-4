import classNames from "classnames/bind";

import styles from './Input.module.scss';

const cn = classNames.bind(styles);

const Input = ({
    label,
    name,
    type,
    action,
    placeHolder,
    customContainerLabelStyles,
    customContainerInputStyles,
    containerName,
}) => {
    return (
        <div className={cn(`${containerName}`)}>
            {
                label &&
                <label
                    htmlFor={`${name}`}
                    style={
                        customContainerLabelStyles ?
                        customContainerLabelStyles : 
                        {}
                    }
                >
                {label}
                </label>
            }
            <input
                type={`${type}`}
                name={`${name}`}
                onChange={action}
                placeholder={`${placeHolder}`}
                className={cn('input')}
                style={
                    customContainerInputStyles ?
                    customContainerInputStyles : 
                    {}
                }
            />
        </div>
    );
};

export { Input };