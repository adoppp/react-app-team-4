import classNames from 'classnames/bind';
import styles from './DiaryDashboard.module.scss';
import { Icon } from '../../../ui/Icon';
import { useSelector } from 'react-redux';
import { userInfoSelector } from '../../../../storage/selectors/authSelectors';

const cn = classNames.bind(styles);

const DiaryDashboard = () => {
    const userData = useSelector(userInfoSelector);
    const products = useSelector((state) => state.diary.products);
    const exercises = useSelector((state) => state.diary.exercises);
    
    const totalExerciseTime = exercises.reduce((total, exercise) => {
        return total + exercise.exercise.time; 
    }, 0);
    
    const totalCaloruesConsumed = products.reduce((total, product) => {
        return total + product.product.calories; 
    }, 0);
       const totalCaloruesBurned = exercises.reduce((total, exercise) => {
        return total + exercise.exercise.burnedCalories; 
    }, 0);


    const iconStyles = {
        fill: '#EF8964',
        marginRight: '6px',
    };

    const calories = userData
        ? Math.round(userData.BMR)
        : 0;

    
    const isCaloriesExceeded = calories < totalCaloruesConsumed;
    const isExerciseRemaining = userData.dailyExerciseTime > totalExerciseTime;


    return (
        <div>
            <ul className={cn('dashboard__container')}>
                <li className={cn('red')}>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-food"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Daily calorie intake
                    </p>
                    <p className={cn('dashboard__item__number')}>{calories}</p>
                </li>
                <li className={cn('red')}>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-dumbbell"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Daily physical activity
                    </p>
                    <p className={cn('dashboard__item__number')}>
                        {userData.dailyExerciseTime} min
                    </p>
                </li>
                <li>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-apple"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Сalories consumed
                    </p>
                    <p className={cn('dashboard__item__number')}>{ totalCaloruesConsumed }</p>
                </li>
                <li>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-calories"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Сalories burned
                    </p>
                    <p className={cn('dashboard__item__number')}>{ totalCaloruesBurned }</p>
                </li>
                <li className={cn('dashboard__item', { 'green': isExerciseRemaining, 'red': !isExerciseRemaining })}>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-bubble"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Calories remaining
                    </p>
                    <p className={cn('dashboard__item__number')}>{calories - totalCaloruesConsumed }</p>
                </li>
                <li className={cn('dashboard__item',{ 'green': isExerciseRemaining, 'red': !isExerciseRemaining })}>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-running"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Sports remaining
                    </p>
                    <p className={cn('dashboard__item__number')}>{ userData.dailyExerciseTime - totalExerciseTime } min</p>
                </li>
            </ul>
            <p className={cn('dashboard__desc')}>
                <span className={cn('dashboard__icon')}>
                    <Icon
                        iconId="icon-exclamation-mark"
                        w={24}
                        h={24}
                        customStyles={{ bacground: '#EFA082' }}
                    />
                </span>
                Record all your meals in the calorie diary every day. This will
                help you be aware of your nutrition and make informed choices.
            </p>
        </div>
    );
};

export { DiaryDashboard };
