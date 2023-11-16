import classNames from 'classnames/bind';
import styles from './ExercisesPage.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon/Icon';

import ExercisesList from './ExercisesList/ExercisesList';

const cn = classNames.bind(styles);

const ExercisesPage = () => {
    return (
        <div className={cn('container')}>
            <div className={cn('container_item')}>
                <Link to="/exercises" />
                {/* <h2>ExercisesPage</h2> */}
                <div className={cn('container_block')}>
                    <div>
                        <div className={cn('container_icon')}>
                            <Icon iconId='icon-arrow'
                                w={16}
                                h={16}
                            />
                            <p>Back</p>
                        </div>
                        <h2 className={cn('container_title')}>Waist</h2>
                    </div>
                    <div className={cn('container_box')}>
                        <p>Body parts</p>
                        <p>Muscles</p>
                        <p>Equipment</p>
                    </div>
                </div>
                <ExercisesList />
            </div>
        </div>
    );
};

export default ExercisesPage;
