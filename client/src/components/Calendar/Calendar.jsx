// packages
import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar/dist/entry.nostyle';
import Calendar from 'react-calendar';

// Local Dev
import React, { useState } from 'react';
import './Calendar.css';

const CalendarApp = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className={`m-auto`}>
        <Calendar 
        onChange={onChange} 
        
        value={value} 
        className={`bg-gradient-to-b from-rich-500 to-bubblegum-500 text-rose-500`}  
        />
    </div>
  );
}

export default CalendarApp






