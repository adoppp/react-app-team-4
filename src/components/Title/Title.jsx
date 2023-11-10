import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cn = classNames.bind(styles);

const Title = ({title, customContainerStyles}) => {
    return (
        <h2
            className={cn('title')}
            style={customContainerStyles ? customContainerStyles : {}}
        >
            {title}
        </h2>
    );
};

export { Title };