import React from 'react'

const SinglePlan = () => {

  const formSubmit = () => {
    console.log("success")
  };

  return (
    <div className=''>
      <div className='flex h-screen justify-center items-center'>
        <div className='bg-gradient-to-b from-rich-500 to-wine-500 rounded-lg mx-28 w-60 py-2'>
          <h4 className='text-center text-xl my-6'>Create Aspiration</h4>
          <div className=''>
            <form className='text-slate-900 flex flex-col'>
              <input
                className='w-32 my-1 mx-auto align-middle rounded-sm px-1'
                placeholder='Title'
                name='title'
                type='title'
                id='title'
                
              />
              
              <input
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
              <h3 className="text-center text-white pt-1">Priority</h3>
              {/* figure out how to display a little sun and pluto on the sides of the slider bar */}
              <input type="range" min="1" max="9" className='w-32 mx-auto my-1 rounded-sm px-1' />
                
              <input
              // change the size
                className='w-32 mx-auto my-1 rounded-sm px-1'
                placeholder='Genre'
                name='genre'
                type='genre'
                id='genre'
              />
              <select className='w-32 mx-auto my-1 rounded-sm px-1'>
              <option value="selectOne">Focal point</option>
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