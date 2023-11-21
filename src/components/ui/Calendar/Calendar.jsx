import { useState, forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import DatePicker from 'react-datepicker';

import { Icon } from '../Icon';
import './Calendar.scss';

const Calendar = ({
    initialDate,
    containerClass,
    buttonClass,
    showNavigationButtons = true,
    onChange,
    calendarIconSize = { width: 18, height: 18 },
}) => {
    console.log({ initialDate });
    const [selectedDate, setSelectedDate] = useState(initialDate);
    const isTabletScreen = useMediaQuery({ minWidth: 768 });
    const iconCalendarHeight = isTabletScreen ? 24 : 20;
    const iconCalendarWidth = isTabletScreen ? 24 : 20;

    console.log({ selectedDate });

    const BtnInput = forwardRef(({ value, onClick }, ref) => (
        <div className={`button-wrapper ${buttonClass}`}>
            <button
                type="button"
                className={`button-calendar ${buttonClass}`}
                onClick={() => onClick()}
                ref={ref}
            >
                {value ? value : '00.00.0000'}
                <Icon
                    iconId="icon-calendar"
                    w={calendarIconSize.width || iconCalendarHeight}
                    h={calendarIconSize.height || iconCalendarWidth}
                />
            </button>
            {showNavigationButtons && (
                <>
                    <button
                        className={'icon-previous-btn-icon'}
                        onClick={handlePrevDay}
                    >
                        <Icon iconId="calendar-arrow-left" w={16} h={16} />
                    </button>
                    <button
                        className={'icon-next-btn-icon'}
                        onClick={handleNextDay}
                    >
                        <Icon iconId="calendar-arrow-right" w={16} h={16} />
                    </button>
                </>
            )}
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
        <div className={`calendar-container ${containerClass}`}>
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
                            type="button"
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
                            type="button"
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
                onChange={(date) => {
                    setSelectedDate(date);
                    onChange(date);
                }}
                onMonthChange={(date) => {
                    setSelectedDate(date);
                    onChange(date);
                }}
                dateFormat={'dd/MM/yyyy'}
                calendarStartDay={1}
                customInput={<BtnInput />}
            />
        </div>
    );
};

export { Calendar };
