import classNames from 'classnames/bind';
import { Suspense, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getDiaryInfo } from '../../../storage/operations/diaryThunk';
import styles from './DiaryPage.module.scss';
import { Calendar } from '../../ui/Calendar';
import { Title } from '../../global/Title';
import { DiaryDashboard } from './DiaryDashboard';
import { ProductTable } from './ProductTable';
import { ExercisesTable } from './ExercisesTable';
import { Loader } from '../../ui/Loader/Loader';

const cn = classNames.bind(styles);

const DiaryPage = () => {


    const dispatch = useDispatch();
    const selectedDate = useSelector((state) => state.diary.selectedDate);

    useEffect(() => {
        dispatch(getDiaryInfo(selectedDate));
    }, [dispatch, selectedDate]);


    const isMobileScreen = useMediaQuery({ maxWidth: 767 });

    const mobileScreen = (
        <div className={cn('diary-container')}>
            <div className={cn('calendar__container-mobile')}>
                <Title title="Diary" />
                <div className={cn('calendar__component_wrapper')}>
                    <Calendar />
                </div>
            </div>
            <div className={cn('mobile__wrapper')}>
                <Suspense fallback={<Loader/>}>
                <DiaryDashboard />
                <ProductTable />
                <ExercisesTable />
                </Suspense>
            </div>
        </div>
    );

    const tabletAndDekstopScreen = (
        <div className={cn('diary-container')}>
            <div className={cn('calendar__container')}>
                <div className={cn('calendar__component_wrapper')}>
                    <Calendar />
                </div>
                <Title
                    customContainerStyles={{ marginTop: '20px' }}
                    title="Diary"
                />
            </div>
    <div className={cn('wrapper')}>
        <div className={cn('tables-container')}>
                    <ProductTable />
            <ExercisesTable />
        </div>
                <DiaryDashboard />
            </div>
        </div>
    );

    return (
        <section>
            {isMobileScreen ? mobileScreen : tabletAndDekstopScreen}
        </section>
    );
};

export default DiaryPage;
