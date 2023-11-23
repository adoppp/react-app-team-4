import classNames from 'classnames/bind';
import styles from './DiaryDashboard.module.scss';
import { Icon } from '../../../ui/Icon';
import { useSelector } from 'react-redux';
import { userInfoSelector } from '../../../../storage/selectors/authSelectors';

const cn = classNames.bind(styles);

const DiaryDashboard = () => {
    const userInfo = useSelector(userInfoSelector);
    const products = useSelector((state) => state.diary.products);
    const exercises = useSelector((state) => state.diary.exercises);
    
    const totalExerciseTime = exercises.reduce((total, exercise) => {
        return total + exercise.time; 
    }, 0);
    
    const totalCaloriesConsumed = products.reduce((total, product) => {
        return total + product.consumedCalories; 
    }, 0);
    
    const totalCaloriesBurned = exercises.reduce((total, exercise) => {
        return total + Math.floor(exercise.burnedCalories); 
       }, 0);
    
    const dailyCalorieIntake = Object.keys(userInfo).includes('BMR')
    ? Math.round(userInfo.BMR)
    : 0;

const dailyPhysicalActivity = Object.keys(userInfo).includes('dailyExerciseTime')
    ? userInfo.dailyExerciseTime
    : 0;

const sportsRemaining = Object.keys(userInfo).includes('BMR')
    ? (dailyPhysicalActivity - Math.floor(totalExerciseTime))
    : 0;

const caloriesRemaining = Object.keys(userInfo).includes('dailyExerciseTime')
    ? (dailyCalorieIntake - totalCaloriesConsumed)
    : 0;


    const iconStyles = {
        fill: '#EF8964',
        marginRight: '6px',
    };
    
    
    const isCaloriesExceeded = dailyCalorieIntake < totalCaloriesConsumed;
    const isExerciseRemaining = dailyPhysicalActivity < totalExerciseTime;

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
                    <p className={cn('dashboard__item__number')}>{Math.round(dailyCalorieIntake)}</p>
                </li>
                <li>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-apple"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Calories consumed
                    </p>
                    <p className={cn('dashboard__item__number')}>{Math.round(totalCaloriesConsumed)}</p>
                </li>
                <li className={cn({ 'redHighlight': isCaloriesExceeded })}>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-bubble"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Calories remaining
                    </p>
                    <p className={cn('dashboard__item__number')}>{Math.round(caloriesRemaining)}</p>
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
                        {dailyPhysicalActivity} min
                    </p>
                </li>
                <li>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-calories"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Calories burned
                    </p>
                    <p className={cn('dashboard__item__number')}>{Math.round(totalCaloriesBurned)}</p>
                </li>
                <li className={cn( { 'greenHighlight': isExerciseRemaining})}>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-running"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Sports remaining
                    </p>
                    <p className={cn('dashboard__item__number')}>{ sportsRemaining } min</p>
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
