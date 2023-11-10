import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { Icon } from "../ui/Icon";
import classNames from 'classnames/bind';
import {Button} from '../ui/Button'

const cn = classNames.bind(styles);

export const BurgerMenu = ({ onClose }) => {
  const [menuVisible, setMenuVisible] = useState(false);
    
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

 

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
          />
        </Link>
        <Link>
          <Button
            label='Products'
          />
        </Link>
        <Link>
          <Button
            label='Exercises'
          />
        </Link>
      </div>
      <button className={cn('logoutButton')}>
    <Icon
      iconId='icon-logout'
      w={24}
      h={24}
    />
    Logout
  </button>
    </div>
  );
};
