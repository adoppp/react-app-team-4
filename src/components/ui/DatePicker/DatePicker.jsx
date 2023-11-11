import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';

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
    </>
  );
};

export default DatePickerCalendar;
