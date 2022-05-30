import React from 'react';

const SinglePlan = () => {

  return (
    <div className=''>
      <div className='flex h-screen justify-center items-center'>
        <div className='bg-gradient-to-b from-bubblegum-400 to-cream-400 rounded-lg w-3/5 py-2'>
          <h4 className='text-center text-black text-2xl my-6'>Create Aspiration</h4>
          <div className=''>
            <form className='text-slate-900 flex flex-col'>
              <input
                className='w-32 my-1 mx-auto align-middle rounded-sm px-1'
                placeholder='Title'
                name='title'
                type='title'
                id='title'
                
              />
              
              <textarea
              // change the size
                className='w-32 mx-auto my-1 rounded-sm px-1'
                placeholder='Add a description'
                name='add a description'
                type='add a description'
                id='add a description'
              />
              <input
              // npm package for the date
                className='w-32 mx-auto my-1 rounded-sm px-1'
                placeholder='Date'
                name='setting the date'
                type='setting-the-date'
                id='setting-the-date'
              />
              <select className='w-32 mx-auto my-1 rounded-sm px-1'>
              <option value="category">Category</option>
                <option value="productivity">Productivity</option>
                <option value="workouts">Workouts</option>
                <option value="movies/shows">Movies/shows</option>
                <option value="music">Music</option>
                <option value="games">Games</option>
                <option value="food">Food</option>
                <option value="design">Design</option>
                <option value="clothing">Clothing</option>
                <option value="other">Other</option>
              </select>
              <h3 className="text-center text-black text-xl text-white pt-1">Priority</h3>
              {/* figure out how to display a little sun and pluto on the sides of the slider bar */}
              <input type="range" min="1" max="9" className='w-32 text-rich-200 mx-auto my-1 rounded-sm px-1' />
                
              <input
              // change the size
                className='w-32 mx-auto my-1 rounded-sm px-1'
                placeholder='Genre'
                name='genre'
                type='genre'
                id='genre'
              />
              <select className='w-32 mx-auto my-1 rounded-sm px-1'>
              <option value="focalPoint">Focal point</option>
                <option value="endurance">Endurance</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
                <option value="balance">Balance</option>
                <option value="flexibility">Flexibility</option>
                <option value="other">Other</option>
              </select>
              <select className='w-32 mx-auto my-1 rounded-sm px-1'>
              <option value="diet">Diet</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="other">Other</option>
              </select>
              <select className='w-32 mx-auto my-1 rounded-sm px-1'>
              <option value="culture">Culture</option>
                <option value="mexican">Mexican</option>
                <option value="italian">Italian</option>
                <option value="greek">Greek</option>
                <option value="japanese">Japanese</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="korean">Korean</option>
                <option value="african">African</option>
                <option value="other">Other</option>
              </select>
              {/* fix the words */}
              <label for="img"className=' cursor-pointer bg-rich-300 hover:bg-rich-200 rounded-md p-1 ease-in-out duration-300 transition-all hover:text-cream-300 mx-auto my-1 rounded-sm px-1 text-white'>Choose an image</label>
              <input id="img" type="file" className='hidden' />
              <button className='text-sky-50 my-6 bg-rose-300 hover:bg-bubblegum-400 transition-all duration-300 mx-auto p-1 rounded-md' type='submit'>
                Submit
              </button>
              {/* {error && <div>Login failed</div>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePlan