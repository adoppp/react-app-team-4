import { Button } from '../../../ui/Button';
import { useEffect, useState } from 'react';
import styles from './AddExerciseForm.module.scss';
import classNames from 'classnames/bind';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Icon } from '../../../ui/Icon';
import { useMediaQuery } from 'react-responsive';
import { AddExerciseSuccess } from '../AddExerciseSuccess/AddExerciseSuccess';
import { addExercise } from '../../../../storage/operations/diaryThunk';
import { useDispatch, useSelector } from 'react-redux';

const cn = classNames.bind(styles);

const AddExerciseForm = ({ data, customClose }) => {
    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.diary.selectedDate);
    const [burnedCalories, setBurnedCalories] = useState(0);
    const [pause, setPause] = useState(true);
    const [time, setTime] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const isLargeScreen = useMediaQuery({ minWidth: 768 });

    const buttonStylesAdd = {
        fontSize: 16,
        width: 151,
        height: isLargeScreen ? 52 : 42,
        padding: '12px 32px',
        color: 'rgba(239, 237, 232, 1)',
    };

    
    useEffect(() => {
        if (data && data.burnedCalories) {
            let x = ((time / 60) * (data.burnedCalories/60) * 3) / 3;

            setBurnedCalories(Math.floor(x));
        }
    }, [data, time]);

    let timerId

    const renderTime = ({ elapsedTime }) => {
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = Math.floor(elapsedTime % 60);
        const formattedTime = `${minutes}:${seconds}`;

        setTimeout(() => setTime(Math.floor(elapsedTime)), 0);
        return formattedTime;
    };


    
    const handleClickPause = () => {
        setPause(prevPause => !prevPause);
        clearTimeout(timerId);
    };


    const handleClick = () => {
        const ExercisesData = {
            exercise:data._id,
            date:selectedDate,
            time: time,
            calories: burnedCalories
        };
        
         dispatch(addExercise({
            id:data._id,
            date:selectedDate,
            time: time,
        }))

        
        if(time >= 60 && burnedCalories >= 1) {
            console.log(ExercisesData);

        } ;
        // =====це перемістити на 73 рядок, щоб спрацьовувало за умови=====
        setShowModal(true);//==============================================
        // ================================================================
    };

    return (
        <>
    {!showModal 
    ? 
    <div className={cn('modalExercises')}>
        <div className={cn('modalExercises__timer_container')}>
            <div>
                {data.gifUrl && <img src={data.gifUrl} alt={data.name} />}
            </div>
                <div className={cn('modalExercises__timer')}>
                    <p className={cn('modalExercises__timer_title')}>Time</p>
                    <div className={cn('modalExercises__timer_circle')}>
                        <CountdownCircleTimer
                            size={124}
                            isGrowing={true}
                            isPlaying={pause}
                            strokeWidth={4}
                            duration={600}
                            rotation={'counterclockwise'}
                            colors={["#E6533C"]}
                            onComplete={() => ({totalElapsedTime: 170, shouldRepeat: true, delay: 0 })}
                            >
                        {renderTime}
                        </CountdownCircleTimer>
                    </div>
                    <button onClick={()=>handleClickPause(pause)}>
                        {pause && <Icon iconId="icon-pause-square" w={24} h={24}/>}
                        {!pause && <Icon iconId="icon-play" w={24} h={24}/>}
                    </button>
                    <p className={cn('modalExercises__timer_calories')}>
                        Burned calories:&nbsp;
                        <span>
                            {Math.floor(burnedCalories)}
                        </span>
                    </p>
                </div>
        </div>
        <div className={cn('modalExercises__tablet_element')}>
            <ul className={cn('modalExercises__info')}>
                <li>
                    <p>Name</p>
                    <span>{data.name}</span>
                </li>
                <li>
                    <p>Target</p>
                    <span>{data.target}</span>
                </li>
                <li>
                    <p>Body part</p>
                    <span>{data.bodyPart}</span>
                </li>
                <li>
                    <p>Equipment</p>
                    <span>{data.equipment}</span>
                </li>                    
            </ul>
            <Button 
                type= {"submit"} 
                label={'Add to diary'}
                action={()=>handleClick()}
                customContainerStyles={buttonStylesAdd}
                />
        </div>
    </div> 
    :
    <AddExerciseSuccess closeModal={customClose} data={{time,burnedCalories}}/>}
</>
    );
};

export { AddExerciseForm };