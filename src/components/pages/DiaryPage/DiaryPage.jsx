import classNames from 'classnames/bind';
import { useMediaQuery } from 'react-responsive';

import styles from './DiaryPage.module.scss';
import { Calendar } from '../../ui/Calendar';
import { Title } from '../../global/Title';

const cn = classNames.bind(styles);

const DiaryPage = () => {
    const isMobileScreen = useMediaQuery({ maxWidth: 768 });

    const mobileScreen = (
        <div className={cn('calendar__container-mobile')}>
            <Title title="Diary" />
            <div className={cn('calendar__component_wrapper')}>
                <Calendar />
            </div>
        </div>
    );

    const tabletAndDekstopScreen = (
        <div className={cn('calendar__container')}>
            <div className={cn('calendar__component_wrapper')}>
                <Calendar />
            </div>
            <Title title="Diary" />
        </div>
    );

    return (
        <section>
            {isMobileScreen ? mobileScreen : tabletAndDekstopScreen}
        </section>
    );
};

export default DiaryPage;
