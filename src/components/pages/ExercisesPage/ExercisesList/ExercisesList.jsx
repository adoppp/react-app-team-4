import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ExercisesList.module.scss';
import './ExercisesList.scss';
import { useParams } from 'react-router-dom';
import { Icon } from '../../../ui/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExercises } from '../../../../storage/operations/exercisesThunk';
import { AddExerciseForm } from '../AddExerciseForm';
import { Modal } from '../../../ui/Modal';

const cn = classNames.bind(styles);

const ExercisesList = () => {
    const dispatch = useDispatch();
    const { workout } = useParams();

    const [currentExercisesList, setCurrentExercisesList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentWorkout, setCurrentWorkout] = useState(null);

    const allExercises = useSelector((state) => state.exercises.data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(getAllExercises());
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    function upperCaseName(el) {
        setCurrentExercisesList(
            el.map((item) => ({
                ...item,
                name: item.name[0].toUpperCase() + item.name.slice(1),
                bodyPart:
                    item.bodyPart[0].toUpperCase() + item.bodyPart.slice(1),
                target: item.target[0].toUpperCase() + item.target.slice(1),
            })),
        );
    }

    useEffect(() => {
        if (allExercises) {
            const filtered = allExercises.filter(
                (element) =>
                    element.bodyPart === workout ||
                    element.equipment === workout ||
                    element.target === workout,
            );

            upperCaseName(filtered);
        }
    }, [allExercises, workout]);

    useEffect(() => {
        if (currentWorkout) {
            setShowModal(true);
        }
    }, [currentWorkout]);

    const handleOpen = (e) => {
        setCurrentWorkout(e);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className={cn('exercises__container')}>
            <ul className={cn('exercises_ul_collections')}>
                {currentExercisesList.map((exercise) => (
                    <li className={cn('exercises__item')} key={exercise._id}>
                        <p className={cn('exercises__item_head')}>WORKOUT</p>
                        <button
                            type="button"
                            onClick={() => {
                                handleOpen(exercise);
                            }}
                            className={cn('button__start')}
                        >
                            Start
                            <Icon iconId="icon-arrow-big" w={16} h={16} />
                        </button>
                        <h3>
                            <Icon iconId="icon-run" w={24} h={24} />
                            {exercise.name}
                        </h3>
                        <div className={cn('exercises_info')}>
                            <p>
                                Burned calories:&nbsp;
                                <span>{exercise.burnedCalories}</span>
                            </p>
                            <p>
                                Body part:&nbsp;{' '}
                                <span>{exercise.bodyPart}</span>
                            </p>
                            <p>
                                Target:&nbsp;<span>{exercise.target}</span>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            {showModal && (
                <Modal customClose={handleClose}>
                    <AddExerciseForm
                        data={currentWorkout}
                        customClose={handleClose}
                    />
                </Modal>
            )}
        </div>
    );
};

export { ExercisesList };
