import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '../Icon';
const DatePickerCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <CalendarGlobalStyles />

            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                calendarStartDay={1}
                formatWeekDay={(day) => day.substr(0, 1)}
            />
            <Icon
                iconId="icon-calendar"
                w={16}
                h={16}
                customStyles={{
                    marginRight: 4,
                    fill: '#D80027',
                }}
            />
        </>
    );
};

export default DatePickerCalendar;
