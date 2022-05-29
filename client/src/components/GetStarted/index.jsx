import React from 'react';

// Styles
import './index.css';

// Pages
import Login from '../../pages/Login';

const GetStarted = () => {
  return (
    <>
    <div className='text-center text-2xl py-40'>
    <p className='landing-text text-6xl'>Save Your Plan-It and Organize Your Life</p>
    <div className='pt-3'>
      
      <a href="/login">
      <button className="login hover:bg-sky-700 pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all from-rich-500 rounded-full shadow-2xl lg:ml-5  focus:outline-none ring-4 to-wine-500 lg:ring-2 lg:font-medium">
        Login
        </button>
        </a>

        <a href="/signup">
      <button 
      className='get_started hover:bg-sky-700 pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all from-rich-500 rounded-full shadow-2xl lg:ml-5  focus:outline-none ring-4 to-wine-500 lg:ring-2 lg:font-medium'>
        Get Started
        </button>
        </a>
    </div>
    </div>
    </>
  )
}

export default GetStarted

