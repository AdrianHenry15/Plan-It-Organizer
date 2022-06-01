import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ASPIRATION } from '../utils/mutations';

const CreateAspiration = ({ folderId }) => {
  const [formState, setFormState] = useState({ 
    title: '',
    description: '',
    date: '',
    category: '',
    priority: '',
    genre: '',
    focalPoint: '',
    diet: '',
    culture: ''
   });

   // eslint-disable-next-line no-unused-vars
   const [addAspiration, { error }] = useMutation(ADD_ASPIRATION);

   const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
        await addAspiration({
            variables: { ...formState, folderId: folderId }
        });
    } catch (e) {
        console.error(e);
    }
}

  return (
    <div className=''>
      <div className='flex h-screen justify-center items-center'>
        <div className='bg-gradient-to-b from-bubblegum-400 to-cream-400 rounded-lg w-3/5 py-2'>
          <h4 className='text-center text-black text-2xl my-6'>Create Aspiration</h4>
          <div className=''>
            <form onChange={handleChange} onSubmit={handleFormSubmit} className='text-slate-900 flex flex-col'>
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
                name='description'
                type='description'
                id='description'
              />
              <input
              // npm package for the date
                className='w-32 mx-auto my-1 rounded-sm px-1'
                placeholder='Date'
                name='date'
                type='date'
                id='date'
              />
              <select id="category" name="category" className='w-32 mx-auto my-1 rounded-sm px-1'>
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
              <input name="priority" id="priority" type="range" min="1" max="9" className='w-32 text-rich-200 mx-auto my-1 rounded-sm px-1' />
                
              <input
              // change the size
                className='w-32 mx-auto my-1 rounded-sm px-1'
                placeholder='Genre'
                name='genre'
                type='text'
                id='genre'
              />
              <select id="focalPoint" name="focalPoint" className='w-32 mx-auto my-1 rounded-sm px-1'>
              <option value="focalPoint">Focal point</option>
                <option value="endurance">Endurance</option>
                <option value="cardio">Cardio</option>
                <option value="strength">Strength</option>
                <option value="balance">Balance</option>
                <option value="flexibility">Flexibility</option>
                <option value="other">Other</option>
              </select>
              <select id="diet" name="diet" className='w-32 mx-auto my-1 rounded-sm px-1'>
              <option value="diet">Diet</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="other">Other</option>
              </select>
              <select id="culture" name="culture" className='w-32 mx-auto my-1 rounded-sm px-1'>
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
              <label htmlFor="img" className='cursor-pointer bg-rich-300 hover:bg-rich-200 rounded-md p-1 ease-in-out duration-300 transition-all hover:text-cream-300 mx-auto my-1 rounded-sm px-1 text-white'>Choose an image</label>
              <input id="img" name="img" type="file" className='hidden' />
              <button type="submit" className="text-sky-50 my-6 bg-rose-300 hover:bg-bubblegum-400 transition-all duration-300 mx-auto p-1 rounded-md">
                Submit
              </button>
              {/* {error && <div>Login failed</div>} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAspiration;
