import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.scss';

import DatePickerCalendar from '../src/components/ui/DatePicker/DatePicker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-app-team-4">
      <App />
      <DatePickerCalendar />
    </BrowserRouter>
  </React.StrictMode>,
);
