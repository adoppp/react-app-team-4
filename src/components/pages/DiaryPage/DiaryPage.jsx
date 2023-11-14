import DatePickerCalendar from '../../ui/DatePicker/DatePicker';
import classNames from 'classnames/bind';

import styles from './DiaryPage.module.scss';
import { Title } from '../../Title';
import { useMediaQuery } from 'react-responsive';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    const isMobileScreen = useMediaQuery({ maxWidth: 768 });

    const mobileScreen =
    <div className={cn('calendar__container-mobile')}>
            <Title title='Diary' />
            <div className={cn('calendar__component_wrapper')}>
                <DatePickerCalendar />
            </div>
        </div>;
    
    const tabletAndDekstopScreen =
        <div className={cn('calendar__container')}>
            <div className={cn('calendar__component_wrapper')}>
                <DatePickerCalendar />
            </div>
            <Title title='Diary' />
        </div>;

    return (
        <section>
            {isMobileScreen ? mobileScreen : tabletAndDekstopScreen}
        </section>
    );
};

export default DiaryPage;
