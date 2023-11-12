import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePicker.module.scss';

import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import { Icon } from '../Icon';

const DatePickerCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div>
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
                            onClick={decreaseMonth}
                        >
                            <span
                                className={
                                    'react-datepicker__navigation-icon react-datepicker__navigation-icon--previous'
                                }
                            >
                                {'<'}
                            </span>
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
                            // style={
                            //     customHeaderCount === 0
                            //         ? { visibility: 'hidden' }
                            //         : null
                            // }
                            onClick={increaseMonth}
                        >
                            <span
                                className={
                                    'react-datepicker__navigation-icon react-datepicker__navigation-icon--next'
                                }
                            >
                                <Icon
                                    iconId="icon-Arrow-next"
                                    w={20}
                                    h={20}
                                    className={styles.icon}
                                />
                            </span>
                        </button>
                    </div>
                )}
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                }}
                dateFormat={'dd/MM/yyyy'}
                calendarStartDay={1}
            />
            <CalendarGlobalStyles />
        </div>
    );
};

export default DatePickerCalendar;
