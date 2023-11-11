import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { Icon } from "../ui/Icon";
import classNames from 'classnames/bind';
import {Button} from '../ui/Button'

const cn = classNames.bind(styles);

export const BurgerMenu = ({ onClose }) => {
  

  return (
    <div className={cn('burgerMenu')}>
      <button onClick={onClose} className={cn('burgerButton')}>
        <Icon
          iconId='icon-close'
          w={24}
          h={24}
        />
      </button>
      <div className={cn('menuItems')}>
        <Link>
          <Button
            label='Diary'
            buttonStyles='orange'
          />
        </Link>
        <Link>
          <Button
            label='Products'
            buttonStyles='orange'
          />
        </Link>
        <Link>
          <Button
            label='Exercises'
            buttonStyles='orange'
          />
        </Link>
           
      </div>
      <button className={cn('logoutButton')}>
        Logout
         <Icon
          iconId='icon-log-out'
          w={24}
          h={24}
          customStyles={{ marginLeft: 8 }}
        />
    
  </button>
    </div>
  );
};
