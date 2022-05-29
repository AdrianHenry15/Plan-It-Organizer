import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar/dist/entry.nostyle';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

const CalendarApp = ({formatLongDate}) => {
  const [value, onChange] = useState(new Date());
  const [modal, setModal] = useState([])

  return (
    <div>
        <Calendar 
        onChange={onChange} 
        formatDayLong={setModal}
        
        value={value} 
        className={`place-items-center h-screen justify-center flex flex-col bg-gradient-to-b from-rich-500 to-bubblegum-500 text-rose-500`}  
        />
    </div>
  );
}

export default CalendarApp






