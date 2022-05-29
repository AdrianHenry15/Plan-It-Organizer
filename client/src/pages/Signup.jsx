import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      
      Auth.login(data.addUser.token);
    } catch (e) {
      // console.error(e);
    }
  };

  return (
    <main className=''>
      <div className='flex h-screen justify-center items-center'>
        <div className='bg-gradient-to-b from-bubblegum-500 to-wine-400 rounded-lg mx-28 w-80 py-2'>
        <a className='mx-auto' href="/login">
              <button className=' mb-4 hover:bg-wine-400 transition-all duration-300 mx-auto p-2 mx-2 rounded-md' type='submit'>
                Login
              </button>
              </a>
          <h4 className='text-center my-6 text-xl'>Sign Up</h4>
          <div className=''>
            <form className='text-slate-900 flex flex-col' onSubmit={handleFormSubmit}>
              <input
                className='w-50 my-1 mx-auto align-middle px-1'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='w-50 mx-auto my-1 px-1'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='w-50 mx-auto my-1 px-1'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='text-sky-50 my-6 bg-rose-300 hover:bg-wine-300 transition-all duration-300 mx-auto p-2 rounded-md' type='submit'>
                Submit
              </button>
             
              {error && <div className='mx-auto'>Sign up failed</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
