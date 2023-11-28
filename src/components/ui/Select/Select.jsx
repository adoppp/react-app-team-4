import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);

const Select = ({
    value,
    customSelectStyle,
    customListSelectStyle,
    handleCategoryChange,
}) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Categories');

    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const buttonCapitalize = capitalizeFirstLetter(buttonText);

    const toggleClass = () => {
        setIsSelectOpen(!isSelectOpen);
    };

    const handleClick = (e) => {
        const selectedValue = e.target.getAttribute('data-value');
        setButtonText(selectedValue);
        setIsSelectOpen(!isSelectOpen);
        handleCategoryChange(selectedValue);
    };

    const handleKeydown = (e) => {
        if (e.code === 'Escape') {
            setIsSelectOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    return (
        <div className={cn('form_group')}>
            <div className={cn('dropdown')}>
                <button
                    type="button"
                    style={customSelectStyle ? customSelectStyle : {}}
                    onClick={toggleClass}
                    className={cn('dropdown_button')}
                >
                    {buttonCapitalize}
                </button>
                <ul
                    style={customListSelectStyle ? customListSelectStyle : {}}
                    className={cn(
                        isSelectOpen
                            ? 'dropdown_list'
                            : 'dropdown_list_visible',
                    )}
                >
                    {value &&
                        value.map((item) => {
                            return (
                                <li
                                    key={item}
                                    onClick={handleClick}
                                    className={cn('dropdown_item')}
                                    data-value={item}
                                >
                                    {item}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export { Select };
