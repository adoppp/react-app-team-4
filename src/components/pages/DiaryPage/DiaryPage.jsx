import classNames from 'classnames/bind';
import styles from './DiaryPage.module.scss';

import Diary from './Diary/Diary';
import Products from './Products/Products';
import Execrcises from './Execrcises/Execrcises';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    return (
        <main className={cn('main')}>
            <Diary/>
            <Products/>
            <Execrcises/>
        </main>
    );
}

export default DiaryPage;