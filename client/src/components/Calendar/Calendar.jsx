import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

const CalendarApp = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        <Calendar onChange={onChange} value={value} className={`place-items-center h-screen justify-center flex flex-col bg-gradient-to-b from-rich-500 to-bubblegum-500 text-rose-500`} />
    </div>
  );
}

export default CalendarApp






