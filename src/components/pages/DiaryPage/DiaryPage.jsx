import DatePickerCalendar from '../../ui/DatePicker/DatePicker';
import classNames from 'classnames/bind';

import styles from './DiaryPage.module.scss';
import { Title } from '../../Title';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    return (
        <section>
            <div className={cn('diaryPage_container')}>
                <Title title='Diary' />
                <DatePickerCalendar />
            </div>
        </section>
    );
};

export default DiaryPage;
