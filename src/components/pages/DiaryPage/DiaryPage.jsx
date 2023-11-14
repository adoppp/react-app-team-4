import DatePickerCalendar from '../../ui/DatePicker/DatePicker';
import classNames from 'classnames/bind';

import styles from './DiaryPage.module.scss';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    return (
        <section className={cn('diaryPage_container')}>
            <div className={cn('diaryPage_calendarHeader')}>
                <h2 className={cn('diaryPage_header')}>Diary</h2>
                <DatePickerCalendar />
            </div>
        </section>
    );
};

export default DiaryPage;
