import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar/dist/entry.nostyle';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

const CalendarApp = () => {
  const [value, onChange] = useState(new Date());
  const [setModal] = useState([])

  return (
    <div className={`m-auto`}>
        <Calendar 
        onChange={onChange} 
        formatLongDate={setModal}
        
        value={value} 
        className={`bg-gradient-to-b from-rich-500 to-bubblegum-500 text-rose-500`}  
        />
    </div>
  );
}

export default CalendarApp






