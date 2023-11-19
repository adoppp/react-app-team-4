import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './DiaryPage.module.scss';
import { Calendar } from '../../ui/Calendar';
import { Title } from '../../global/Title';
import { DiaryDashboard } from './DiaryDashboard/DiaryDashboard';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    const isMobileScreen = useMediaQuery({ maxWidth: 767 });

    const mobileScreen = (
        <div className={cn('diary-container')}>
            <div className={cn('calendar__container')}>
                <Title title="Diary" />
                <div className={cn('calendar__component_wrapper')}>
                    <Calendar />
                </div>
            </div>
            <DiaryDashboard />
        </div>
    );

    const tabletAndDekstopScreen = (
        <div className={cn('diary-container')}>
            <div className={cn('calendar__container')}>
            <div className={cn('calendar__component_wrapper')}>
                <Calendar />
            </div>
                <Title customContainerStyles={{marginTop: '20px'}} title="Diary" />
            </div>
            <DiaryDashboard />
        </div>
    );

    return (
        <section>
            {isMobileScreen ? mobileScreen : tabletAndDekstopScreen}
        </section>
    );
};

export default DiaryPage;
