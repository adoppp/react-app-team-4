import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NotExercises.modules.scss';
import { Icon } from '../../../ui/Icon';

const cn = classNames.bind(styles);

const NotExercises = () => {
    return (
        <div className={cn('NotExercises')}>
            <div className={cn('NotExercises_item')}>
                <p className={cn('NotExercises_text')}>Exercises</p>
                <div className={cn('NotExercises_list')}>
                    <a className={cn('NotExercises_link')} href="#">Add product</a>
                    <Link to='/diary'>
                        <Icon
                            iconId='icon-arrow'
                            w={16}
                            h={16}
                        />
                    </Link>
                </div>
            </div>
            <p className={cn('NotExercises__text')}>Not found Exercises</p>
        </div>
    );
}

export default NotExercises;
