import React from 'react'
import "./Calendar.css"

const Calendar = () => {
  return (
    <div id='container'>
      {/* Dynamic */}
      <div id='header'>
        <div id="monthDisplay"></div>
        <div>
          <button id='backButton'>Back</button>
          <button id='nextButton'>Next</button>
        </div>
      </div>
    
    {/* Hard Coded weekdays */}
      <div id="weekdays">
        <div>Sunday</div>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
      </div>

      <div id='calendar'></div>

    {/* Modal pop for user input */}
    <div id='newEventModal'>
      <h2>New Event</h2>

      <input id="eventTitleInput" placeholder='Event Title' />

      <button id='saveButton'>Save</button>
      <button id='cancelButton'>Cancel</button>
    </div>

    <div id='deleteEventModal'>
      <h2>Event</h2>

      <p id='eventText'></p>
      <button id='deleteButton'>Delete</button>
      <button id='closeButton'>Close</button>
    </div>

    <div id='modalBackDrop'></div>

    </div>

   
  )
}

export default Calendar