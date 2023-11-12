import classNames from 'classnames/bind';
import styles from './DiaryPage.module.scss';

import Diary from './Diary/Diary';
import Products from './Products/Products';
import Execrcises from './Execrcises/Execrcises';
import DatePickerCalendar from '../../ui/DatePicker/DatePicker';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    return (
        <main className={cn('main')}>
            <Diary/>
            <Products/>
            <Execrcises/>
            <DatePickerCalendar />
        </main>
    );
}

export default DiaryPage;