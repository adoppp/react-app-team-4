import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

const NotFound = () => {
    return <div>
        <h1>404</h1>
        <p>Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.</p>
         <Link to='/welcome' >
            <span>Go Home</span>
        </Link>
    </div>;
};

export default NotFound;