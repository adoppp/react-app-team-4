import { createGlobalStyle, styled } from 'styled-components';

export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #ef8964;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
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
    width: 215px;
    height: 236px;
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
    color: #EFEDE8;
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
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 4px;
    height: 8px;
  }
  .react-datepicker__navigation--next {
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
    // gap: 11px;
    flex-shrink: 0;
    margin: 0;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28;
    text-align: center;
    width: 24px;
    height: 24px;
  }
  .react-datepicker__month {
    display: flex;
    // gap: 11px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color:#EFEDE8;
    font-size: 14px;
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
//   .react-datepicker__day--weekend {
//     opacity: 50%;
//   }

//  .react-datepicker__day--weekend {
//     opacity: 50%;
//   }

.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;

export const TitleWrapper = styled.button`
  width: 195px;
  color: #ffffff;
  background: #ef8964;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;

// export const TitleWrapper = styled.button`
//   width: 195px;
//   color: #ffffff;
//   background: #ef8964;
//   border-radius: 8px;
//   font-weight: 700;
//   line-height: 18px;
//   text-align: center;
//   text-transform: uppercase;
//   padding: 8px 12px;
//   font-size: 16px;
//   justify-content: space-around;
//   align-items: center;
// `;
