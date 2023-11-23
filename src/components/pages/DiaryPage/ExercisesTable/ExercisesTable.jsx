import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ExercisesTable.module.scss';
import { Icon } from '../../../ui/Icon';
import { deleteExercise, getDiaryInfo } from '../../../../storage/operations/diaryThunk';
import { dateExerciseSelector, diaryExercisesSelector } from '../../../../storage/selectors/diarySelectors';

const cn = classNames.bind(styles);

const ExercisesTable = () => {

    const selectedDate = useSelector(dateExerciseSelector);
    const exercises = useSelector(diaryExercisesSelector);
    const dispatch = useDispatch();

    const handleDelete = (exerciseId) => {
    dispatch(deleteExercise({ id: exerciseId, date: selectedDate }))
        .then(() => {
            dispatch(getDiaryInfo(selectedDate));
        });
};


    const IconButtonStyles = {
        marginLeft: 6,
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
            {(!exercises || exercises.length === 0) ? (
                <p className={cn('notFound')}>Not found exercises</p>
            ) : ( <ul className={cn('container__list')}>
                    {exercises.map(exercise => {
                        const { _id, bodyPart,equipment,name, target, burnedCalories, time} = exercise.exercise;
                
                        return (
                        <li key={_id}>
                            <div className={cn('big-gap')}>
                                <h3 className={cn('container__label')}>Body Part</h3>
                                <p className={cn('container__input', 'title')}>{bodyPart}</p>
                            </div>
                            <div className={cn('big-gap')}>
                                <h3 className={cn('container__label')}>Equipment</h3>
                                <p className={cn('container__input', 'category')}>{equipment}</p>
                            </div>
                            <div className={cn('big-gap')}>
                                <h3 className={cn('container__label')}>Name</h3>
                                <p className={cn('container__input', 'name')}>{name}</p>
                            </div>
                            <div className={cn('big-gap')}>
                                <h3 className={cn('container__label')}>Target</h3>
                                <p className={cn('container__input__small', 'target')}>{target}</p>
                            </div>
                            <div className={cn('big-gap')}>
                                <h3 className={cn('container__label')}>Burned Calories</h3>
                                <p className={cn('container__input__small', 'burned')}>{burnedCalories}</p>
                            </div>
                            <div className={cn('small-gap')}>
                                <h3 className={cn('container__label')}>Time</h3>
                                <p className={cn('container__input__small', 'time')}>{time}</p>
                            </div>

                            <span onClick={() => handleDelete(_id)} className={cn('button__delete')}>
                                <Icon iconId="icon-trash" w={20} h={20} customStyles={{}} />
                            </span>
                        </li>
                            )
                    })}
            </ul>)}
        </div>
    );
}

export { ExercisesTable };
