import React from 'react';
import sprite from '../../../assets/sprites.svg';


const Icon = ({ iconId, w, h, customStyles}) => {
    return (
        <svg
            width={w}
            height={h}
            style={customStyles ? customStyles : {}}
        >
            <use href={`${sprite}#${iconId}`}></use>
        </svg>
    );
};

export { Icon };