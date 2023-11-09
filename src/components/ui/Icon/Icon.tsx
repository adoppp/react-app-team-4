import sprite from '../../../assets/sprites.svg';
import { iconTypes, iconSize } from '../../../types/icon.types';


const Icon = <T, B extends iconSize>({ iconId, w, h, customStyles}: iconTypes<T, B>) => {
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