// import { useState, forwardRef } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import DatePicker from 'react-datepicker';
// import { useDispatch, useSelector } from 'react-redux';

// import { Icon } from '../Icon';
// import './Calendar.scss';
// import { updateSelectedDate } from '../../../storage/reducers/diarySlice';
// import { formatDate } from '../../../storage/reducers/diarySlice';
// import { userSelector } from '../../../storage/selectors/authSelectors';

// const Calendar = () => {
//     const dispatch = useDispatch();
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const userData = useSelector(userSelector);
//     let registrationDate;
//     if (userData) {
//         registrationDate = new Date(userData.createdAt);
//     }

//     const firstDayOfRegistrationMonth = userData
//         ? new Date(userData.createdAt)
//         : new Date();
//     firstDayOfRegistrationMonth.setDate(1);

//     const isTabletScreen = useMediaQuery({ minWidth: 768 });
//     const iconCalendarHeight = isTabletScreen ? 24 : 20;
//     const iconCalendarWidth = isTabletScreen ? 24 : 20;

//     const BtnInput = forwardRef(({ value, onClick }, ref) => (
//         <div className={'button-wrapper'}>
//             <button
//                 className={'button-calendar'}
//                 onClick={() => onClick()}
//                 ref={ref}
//             >
//                 {value}
//                 <Icon
//                     iconId="icon-calendar"
//                     w={iconCalendarHeight}
//                     h={iconCalendarWidth}
//                 />
//             </button>

//             <button
//                 className={'icon-previous-btn-icon'}
//                 onClick={handlePrevDay}
//             >
//                 <Icon iconId="calendar-arrow-left" w={16} h={16} />
//             </button>
//             <button className={'icon-next-btn-icon'} onClick={handleNextDay}>
//                 <Icon iconId="calendar-arrow-right" w={16} h={16} />
//             </button>
//         </div>
//     ));

//     const handlePrevDay = () => {
//         const previousDay = new Date(selectedDate);
//         previousDay.setDate(previousDay.getDate() - 1);

//         if (userData && previousDay < new Date(userData.createdAt)) {
//             return;
//         }
//         setSelectedDate(previousDay);
//         dispatch(updateSelectedDate(formatDate(previousDay)));
//     };

//     const handleNextDay = () => {
//         const nextDay = new Date(selectedDate);
//         nextDay.setDate(nextDay.getDate() + 1);
//         setSelectedDate(nextDay);
//         dispatch(updateSelectedDate(formatDate(nextDay)));
//     };

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//         dispatch(updateSelectedDate(formatDate(date)));
//     };

//     return (
//         <div className="calendar-container">
//             <DatePicker
//                 renderCustomHeader={({
//                     monthDate,
//                     customHeaderCount,
//                     decreaseMonth,
//                     increaseMonth,
//                 }) => (
//                     <div className={'header-calendar'}>
//                         <button
//                             aria-label="Previous Month"
//                             disabled={
//                                 monthDate.getMonth() ===
//                                     firstDayOfRegistrationMonth.getMonth() &&
//                                 monthDate.getFullYear() ===
//                                     firstDayOfRegistrationMonth.getFullYear()
//                             }
//                             className={
//                                 'react-datepicker__navigation react-datepicker__navigation--previous'
//                             }
//                             style={
//                                 customHeaderCount === 1
//                                     ? { visibility: 'hidden' }
//                                     : null
//                             }
//                             onClick={() => {
//                                 decreaseMonth();
//                             }}
//                         >
//                             <Icon
//                                 iconId="icon-Arrow-next"
//                                 w={8}
//                                 h={12}
//                                 className={
//                                     'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
//                                 }
//                             />
//                         </button>
//                         <span className="react-datepicker__current-month">
//                             {monthDate.toLocaleString('en-US', {
//                                 month: 'long',
//                                 year: 'numeric',
//                             })}
//                         </span>
//                         <button
//                             aria-label="Next Month"
//                             className={
//                                 'react-datepicker__navigation react-datepicker__navigation--next'
//                             }
//                             onClick={() => {
//                                 increaseMonth();
//                             }}
//                         >
//                             <Icon
//                                 iconId="icon-Arrow-previous"
//                                 w={8}
//                                 h={12}
//                                 className={
//                                     'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
//                                 }
//                             />
//                         </button>
//                     </div>
//                 )}
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 onMonthChange={(date) => {
//                     setSelectedDate(date);
//                 }}
//                 dateFormat={'dd/MM/yyyy'}
//                 minDate={registrationDate}
//                 calendarStartDay={1}
//                 customInput={<BtnInput />}
//             />
//         </div>
//     );
// };

// export { Calendar };

import { useState, forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from '../Icon';
import './Calendar.scss';
import { updateSelectedDate } from '../../../storage/reducers/diarySlice';
import { formatDate } from '../../../storage/reducers/diarySlice';
import { userSelector } from '../../../storage/selectors/authSelectors';

const Calendar = () => {
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const userData = useSelector(userSelector);
    let registrationDate;
    if (userData) {
        registrationDate = new Date(userData.createdAt);
    }

    const firstDayOfRegistrationMonth = userData
        ? new Date(userData.createdAt)
        : new Date();
    firstDayOfRegistrationMonth.setDate(1);

    const isTabletScreen = useMediaQuery({ minWidth: 768 });
    const iconCalendarHeight = isTabletScreen ? 24 : 20;
    const iconCalendarWidth = isTabletScreen ? 24 : 20;

    const BtnInput = forwardRef(({ value, onClick }, ref) => (
        <div className={'button-wrapper'}>
            <button
                className={'button-calendar'}
                onClick={() => onClick()}
                ref={ref}
            >
                {value}
                <Icon
                    iconId="icon-calendar"
                    w={iconCalendarHeight}
                    h={iconCalendarWidth}
                />
            </button>

            <button
                role='button'
                aria-label='Previous Day'
                className={'icon-previous-btn-icon'}
                onClick={handlePrevDay}
            >
                <Icon iconId="calendar-arrow-left" w={16} h={16} />
            </button>
            <button 
            role='button'
            aria-label='Next Day'
            className={'icon-next-btn-icon'} 
            onClick={handleNextDay}>
                <Icon iconId="calendar-arrow-right" w={16} h={16} />
            </button>
        </div>
    ));

    BtnInput.displayName = 'BtnInput';

    const handlePrevDay = () => {
        const previousDay = new Date(selectedDate);
        previousDay.setDate(previousDay.getDate() - 1);

        if (userData && previousDay < new Date(userData.createdAt)) {
            return;
        }
        setSelectedDate(previousDay);
        dispatch(updateSelectedDate(formatDate(previousDay)));
    };

    const handleNextDay = () => {
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setSelectedDate(nextDay);
        dispatch(updateSelectedDate(formatDate(nextDay)));
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        dispatch(updateSelectedDate(formatDate(date)));
    };

    return (
        <div className="calendar-container">
            <DatePicker
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div className={'header-calendar'}>
                        <button
                            aria-label="Previous Month"
                            disabled={
                                monthDate.getMonth() ===
                                    firstDayOfRegistrationMonth.getMonth() &&
                                monthDate.getFullYear() ===
                                    firstDayOfRegistrationMonth.getFullYear()
                            }
                            className={
                                'react-datepicker__navigation react-datepicker__navigation--previous'
                            }
                            style={
                                customHeaderCount === 1
                                    ? { visibility: 'hidden' }
                                    : null
                            }
                            onClick={() => {
                                decreaseMonth();
                            }}
                        >
                            <Icon
                                iconId="icon-Arrow-next"
                                w={8}
                                h={12}
                                className={
                                    'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
                                }
                            />
                        </button>
                        <span className="react-datepicker__current-month">
                            {monthDate.toLocaleString('en-US', {
                                month: 'long',
                                year: 'numeric',
                            })}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={
                                'react-datepicker__navigation react-datepicker__navigation--next'
                            }
                            onClick={() => {
                                increaseMonth();
                            }}
                        >
                            <Icon
                                iconId="icon-Arrow-previous"
                                w={8}
                                h={12}
                                className={
                                    'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
                                }
                            />
                        </button>
                    </div>
                )}
                selected={selectedDate}
                onChange={handleDateChange}
                onMonthChange={(date) => {
                    setSelectedDate(date);
                }}
                dateFormat={'dd/MM/yyyy'}
                minDate={registrationDate}
                filterDate={(date) => date >= registrationDate}
                calendarStartDay={1}
                customInput={<BtnInput />}
            />
        </div>
    );
};

export { Calendar };
