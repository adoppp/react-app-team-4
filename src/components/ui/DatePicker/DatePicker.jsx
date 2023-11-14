import { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Icon } from '../../ui/Icon';
import './DatePicker.scss';
import { useMediaQuery } from 'react-responsive';
const DatePickerCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

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
                className={'icon-previous-btn-icon'}
                onClick={handlePrevDay}
            >
                <Icon iconId="calendar-arrow-left" w={16} h={16} />
            </button>
            <button className={'icon-next-btn-icon'} onClick={handleNextDay}>
                <Icon iconId="calendar-arrow-right" w={16} h={16} />
            </button>
        </div>
    ));

    const handlePrevDay = () => {
        const previousDay = new Date(selectedDate);
        previousDay.setDate(previousDay.getDate() - 1);
        setSelectedDate(previousDay);
    };

    const handleNextDay = () => {
        const nextDay = new Date(selectedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setSelectedDate(nextDay);
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
                                w={4}
                                h={8}
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
                                w={4}
                                h={8}
                                className={
                                    'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
                                }
                            />
                        </button>
                    </div>
                )}
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                }}
                onMonthChange={(date) => {
                    setSelectedDate(date);
                }}
                dateFormat={'dd/MM/yyyy'}
                calendarStartDay={1}
                customInput={<BtnInput />}
            />
        </div>
    );
};

export default DatePickerCalendar;
