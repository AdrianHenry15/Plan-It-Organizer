import React, { useEffect, useContext, useState } from 'react';
import "./Calendar.css";
import {getMonth} from "./calendarUtil"
import CalendarHeader from './CalendarComponents/CalendarHeader';
import Sidebar from "./CalendarComponents/Sidebar";
import Month from "./CalendarComponents/Month";
import GlobalContext from "./CalendarContext/GlobalContext";
import EventModal from "./CalendarComponents/EventModal";

const Calendar = () => {

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const {monthIndex, showEventModal} = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className='h-screen flex flex-col'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Calendar;
