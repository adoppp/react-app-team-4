import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);

const Select = ({ list, customSelectStyle, customListSelectStyle }) => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Categories');

    const toggleClass = () => {
        setIsSelectOpen(!isSelectOpen);
    };

    const handleClick = (e) => {
        const value = e.target.textContent;
        setButtonText(value);
        setIsSelectOpen(!isSelectOpen);
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
                    {buttonText}
                </button>
                <ul
                    style={customListSelectStyle ? customListSelectStyle : {}}
                    className={cn(
                        isSelectOpen
                            ? 'dropdown_list'
                            : 'dropdown_list_visible',
                    )}
                >
                    <li
                        onClick={handleClick}
                        className={cn('dropdown_item')}
                        data-value="all"
                    >
                        all
                    </li>
                    <li
                        onClick={handleClick}
                        className={cn('dropdown_item')}
                        data-value="all"
                    >
                        all
                    </li>
                    <li
                        onClick={handleClick}
                        className={cn('dropdown_item')}
                        data-value="all"
                    >
                        all
                    </li>
                </ul>
            </div>
        </div>
    );
};

export { Select };
