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
      console.error(e);
    }
  };

  return (
    <main className=''>
      <div className=''>
        <div className=''>
          <h4 className='flex justify-center my-6'>Sign Up</h4>
          <div className='flex justify-center'>
            <form className='text-slate-900 flex flex-col' onSubmit={handleFormSubmit}>
              <input
                className='w-32 my-1 align-middle'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='w-32 my-1'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='w-32 my-1'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='text-sky-50 my-6' type='submit'>
                Submit
              </button>
              {error && <div>Sign up failed</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
