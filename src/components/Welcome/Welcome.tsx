import classNames from 'classnames/bind';

import styles from './Welcome.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

const cn = classNames.bind(styles);

const Welcome = () => {
    return <div>
        <h1>Transforming your body shape with Power Pulse</h1>
        <Link to='/signin' >
        <Button
        label='test'
        action={() => { console.log('click') }}
        customContainerStyles={{marginRight: '12px'}}/>
        </Link>
        <Link to='/signup' >

        </Link>
    </div>;
};

export { Welcome };