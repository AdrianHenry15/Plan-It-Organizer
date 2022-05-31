import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {Link} from "react-router-dom";
const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const {data}  = await login({
        variables: { ...formState }
      });
      
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className=''>
      <div className='flex h-screen justify-center items-center'>
        <div className='bg-gradient-to-b from-bubblegum-400 to-cream-400 rounded-lg mx-28  w-80 py-2'>
          <h4 className='text-center text-black text-2xl my-6'>Login</h4>
          <div className=''>
            <form className='text-slate-900 flex flex-col' onSubmit={handleFormSubmit}>
              <input
                className='w-10/16 my-1 mx-auto align-middle rounded-sm px-1'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='w-10/16 mx-auto my-1 rounded-sm px-1'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <Link className='mx-auto text-center text-purple-700 hover:text-purple-400 transition-all duration-300 mx-auto p-2 mx-2 rounded-md' to="/signup">
                Don't have an account?
              
              </Link>
              <button className='text-sky-50  mb-2 mt-1 bg-rose-300 hover:bg-bubblegum-400 transition-all duration-300 mx-auto p-1 rounded-md' type='submit'>
                Submit
              </button>
              {error && <div>Login failed</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
