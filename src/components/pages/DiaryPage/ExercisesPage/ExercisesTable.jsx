import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ExercisesTable.module.scss';
import { Icon } from '../../../ui/Icon';
import { deleteExercise } from '../../../../storage/operations/diaryThunk';

const cn = classNames.bind(styles);

const ExercisesTable = () => {
    const IconButtonStyles = {
        marginLeft: 6,
    };

    const exercises = useSelector((state) => state.diary.data?.exercises || []);
    const selectedDate = useSelector((state) => state.diary.selectedDate);


    const dispatch = useDispatch();

    const handleDelete = (exerciseId) => {
        dispatch(deleteExercise({ id: exerciseId, date: selectedDate }));
    };

    return (
        <div className={cn('product__container')}>
            <div className={cn('container__header')}>
                <h2>Exercises</h2>
                <button className={cn('button')}>
                    <Link to="/exercises">Add exercise</Link>
                    <Icon iconId='icon-arrow-big' w={16} h={16} customStyles={IconButtonStyles} />
                </button>
            </div>

            <ul className={cn('container__list')}>
                {exercises.map(exercise => (
                    <li key={exercise._id}>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Body Part</h3>
                            <p className={cn('container__input', 'title')}>{exercise.bodyPart}</p>
                        </div>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Equipment</h3>
                            <p className={cn('container__input', 'category')}>{exercise.equipment}</p>
                        </div>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Name</h3>
                            <p className={cn('container__input', 'name')}>{exercise.name}</p>
                        </div>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Target</h3>
                            <p className={cn('container__input__small', 'target')}>{exercise.target}</p>
                        </div>
                        <div className={cn('big-gap')}>
                            <h3 className={cn('container__label')}>Burned Calories</h3>
                            <p className={cn('container__input__small', 'burned')}>{exercise.burnedCalories}</p>
                        </div>
                        <div className={cn('small-gap')}>
                            <h3 className={cn('container__label')}>Time</h3>
                            <p className={cn('container__input__small', 'time')}>{exercise.time}</p>
                        </div>

                        <span onClick={() => handleDelete(exercise._id)}>
                            <Icon iconId="icon-trash" w={20} h={20} customStyles={{}} />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { ExercisesTable };
