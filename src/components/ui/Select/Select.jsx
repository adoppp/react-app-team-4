import classNames from 'classnames/bind';
import styles from './Select.module.scss';
import { useEffect, useState } from 'react';

const cn = classNames.bind(styles);

const Select = () => {
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [buttonText, setButtonText] = useState('Categories');
    
    const toggleClass = () => {
        setIsSelectOpen(!isSelectOpen);
    };

    const handleClick = (e) => {
        const value = e.target.textContent;
        setButtonText(value)
        setIsSelectOpen(!isSelectOpen);
    };

    const handleKeydown = (e) => {
        if (e.code === 'Escape'){  setIsSelectOpen(false);};
        
    };

  
      useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
      });

    return <div className={cn('form_group')}>
        <div className={cn('dropdown')}>
            <button onClick={toggleClass} className={cn('dropdown_button')}>{buttonText}</button>
        <ul  className={cn(isSelectOpen ? 'dropdown_list' : 'dropdown_list_visible')}>
            <li onClick={handleClick}  className={cn('dropdown_item')} data-value='all' >all</li>
            <li onClick={handleClick} className={cn('dropdown_item')} data-value='all'>categorie</li>
            <li onClick={handleClick} className={cn('dropdown_item')} data-value='all'>tkgh</li>
            <li onClick={handleClick} className={cn('dropdown_item')} data-value='all'>sdfds</li>
            <li onClick={handleClick} className={cn('dropdown_item')} data-value='all'>dsfdsfds</li>
            <li onClick={handleClick} className={cn('dropdown_item')} data-value='all'>fdsbsd</li>
            <li onClick={handleClick} className={cn('dropdown_item')} data-value='all'>fbsdbsbs</li>
         
            </ul>
            <input type="text" name='select-category' value='' className={cn('dropdown_input')} />
        </div>
       
    </div>
};

export { Select}