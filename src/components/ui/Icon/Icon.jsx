import sprite from '../../../assets/sprites.svg';

const Icon = ({ iconId, w, h, customStyles, stylesName, action }) => {
    return (
        <svg
            width={w}
            height={h}
            style={customStyles ? customStyles : {}}
            className={stylesName}
            onClick={action}
        >
            <use href={`${sprite}#${iconId}`}></use>
        </svg>
    );
};

export { Icon };
