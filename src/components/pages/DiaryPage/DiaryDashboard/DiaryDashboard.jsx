import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './DiaryDashboard.module.scss';
import { Icon } from '../../../ui/Icon';
import { getUser } from '../../../../storage/operations/diaryThunk';


const cn = classNames.bind(styles);

const DiaryDashboard = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.diary.user);
    
    useEffect(() => {
        dispatch(getUser);
    }, [dispatch]);



    const iconStyles = {
        fill: '#EF8964',
        marginRight: '6px',
    };

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
                    <p className={cn('dashboard__item__number')}>{ userData.dailyCalories }</p>
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
                    <p className={cn('dashboard__item__number')}>{ userData.dailyExerciseTime }</p>
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
                    <p className={cn('dashboard__item__number')}>2200</p>
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
                    <p className={cn('dashboard__item__number')}>2200</p>
                </li>
                <li>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-bubble"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Calories remaining
                    </p>
                    <p className={cn('dashboard__item__number')}>2200</p>
                </li>
                <li>
                    <p className={cn('dashboard__item__desc')}>
                        <Icon
                            iconId="icon-running"
                            w={18}
                            h={18}
                            customStyles={iconStyles}
                        />
                        Sports remaining
                    </p>
                    <p className={cn('dashboard__item__number')}>2200</p>
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
