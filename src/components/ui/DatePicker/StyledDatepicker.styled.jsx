import { createGlobalStyle } from 'styled-components';

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: absolute;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    // width: 215px;
    // height: 236px;
    padding: 14px;
  background-color: rgba(239, 137, 100, 1);
    border-radius: 16px;
    margin-left: 60px;

  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #EF8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    align-items: center;
    padding-top: 14px;
    border-top: 1px solid rgba(239, 237, 232, 0.2);
    margin-top: 14px;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.17;
    text-align: center;
    color: rgba(239, 237, 232, 1);
  }
  .react-datepicker__day-name {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.17;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);

  }
  .react-datepicker__navigation {

    color: white;
  }
  .react-datepicker__navigation--previous {
    top: 16px;
    bottom: 0;
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    top: 16px;
    bottom: 0;
    right: 7px;
    width: 18px;
    height: 18px;

  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: rgba(239, 237, 232, 1);
    font-size: 14px;
    line-height: 1.28;
    text-align: center;
    width: 16px;
    height: 18px;
    gap: 8px;
  }
  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
    gap: 11px;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color:#EFEDE8;
    // font-size: 14px;
    height: 24px;
    width: 24px;
    border-radius: 50%;

  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: #040404;
    
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#EF8964;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#EF8964;
    width: 24px;
    height: 24px;
  }

.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0.4;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;
