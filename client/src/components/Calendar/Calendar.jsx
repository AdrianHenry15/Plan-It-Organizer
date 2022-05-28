import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Draggable from 'react-draggable'

const CalendarApp = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Draggable>
      <div><Calendar onChange={onChange} value={value} className={`react-calendar flex flex-col bg-gradient-to-b from-rich-500 to-bubblegum-500 text-rose-500`} /></div>
      </Draggable>
    </div>
  );
}

export default CalendarApp


