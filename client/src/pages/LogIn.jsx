import React, { useState } from 'react'
import image from '../assets/iimage.jpg'
import { Link } from 'react-router-dom'
import { RiLoginCircleFill } from 'react-icons/ri'; 
import { MdCreate } from 'react-icons/md';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LogIn = () => {
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
        const { data } = await login({
          variables: { ...formState },
        });
        console.log(data.login.token);
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    return (
        <div className='bg-white'>
            {/* Desktop */}
            <div className='hidden lg:flex justify-end h-10 '>
                    <img src={image} alt='people smiling' className='object-cover object-right h-screen'></img>
            </div>    
            <div className='hidden lg:flex justify-center pt-60 bg-gray-200'>
            <div className='flex w-4/12 items-center'> 
            <form className='mx-12 w-full bg-white p-10 rounded-lg border border-orange-500 shadow-lg shadow-slate-400' onSubmit={handleFormSubmit}>                
                <div className='flex text-5xl mb-10 text-gray-800 items-center text-center'><RiLoginCircleFill className='text-7xl text-blue-800' />Sign In</div>
                
                <div class="relative z-0 mb-6 w-full group flex">
                    <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                    value={formState.email}
                    onChange={handleChange}/>
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                
                <div class="relative z-0 mb-6 w-full group flex">
                    <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
                    value={formState.password}
                    onChange={handleChange}/>
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6 items-center">
                    <button type="submit" class=" text-white bg-blue-800 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center  ">Submit</button>
                    <div class="relative z-0 w-full group flex text-center">
                    
                </div>
                </div>
                {error && <div>Login failed</div>}
            </form>
            
            </div>
            </div> 
            {/* Mobile */}
            <div className='lg:hidden'>
            <form className='mx-12' onSubmit={handleFormSubmit}>
                
                <RiLoginCircleFill className='text-8xl ml-[100px] mb-2 text-blue-800' />
                <div className='text-3xl mb-14 text-gray-800 text-center'>Sign In</div>
                
                <div class="relative z-0 mb-6 w-full group">
                    <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formState.email}
                    onChange={handleChange}/>
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                
                <div class="relative z-0 mb-6 w-full group">
                    <input type="password" name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={formState.password}
                    onChange={handleChange}/>
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                
                <div class="grid md:grid-cols-2 md:gap-6">
                    <button type="submit" class="mt-20 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center  ">Submit</button>
                </div>
                </form>
                {error && <div>Login failed</div>}
            </div>;
            </div>)};

export default LogIn;