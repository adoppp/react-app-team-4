import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    
     const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className={styles.burgerMenu}>
      <button onClick={toggleMenu} className="burger-button">
      </button>
     
        <div className="menu-items">
                 
                      <Link>
                      <button>dskjngsdnglsg</button>
                      </Link>
                      <Link>
                      <button></button>
                      </Link>
                       <Link>
                      <button></button>
                      </Link>
        </div>
    </div>
  );
}
