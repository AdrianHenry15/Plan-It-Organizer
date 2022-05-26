import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'

const Calendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin ]}
        
      />
    </div>
  )
}

export default Calendar

