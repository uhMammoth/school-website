import React, { useState } from 'react'
import { RiLoginCircleFill } from 'react-icons/ri';
import side from '../assets/side.jpg'

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);
  
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
    
    <section className="lg:grid lg:grid-cols-12 lg:gap-3">

    {/*  mobile  */}
    <div className='lg:col-span-6' >
    {/*  login  */}
    <div className='w-auto h-auto mt-24 md:mx-40 lg:w-3/4 lg-mx-auto'>
      <form className='mx-4' onSubmit={handleFormSubmit}>
        <RiLoginCircleFill className='text-9xl mx-auto mb-2 rblue' />
        <div className='text-2xl mb-32 rblue font-thin text-center'>Log in</div>
        {/* email input */}
        <div className="relative z-0 mb-8 w-full group rblue">
          <input type="email" name="email" id="email" className=" rblue  block py-2.5 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required 
          value={formState.email}
          onChange={handleChange}/>
          <label htmlFor="email" className="left-0 rblue font-thin peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        {/* password input */}
        <div className="mb-1">
          <label htmlFor="password" className=" font-thin mb-2 left-0 rblue text-gray-900 dark:text-gray-300">Password</label>
          <input type="password" name="password" id="password" className="left-0 rblue shadow-sm bg-gray-50 border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required
          value={formState.password}
          onChange={handleChange}/>
        </div>
        <div className="pt-8">
          <button type="submit" className=" nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Submit.</button>                        
        </div>
      </form>
    </div>  

    </div>

<div className='hidden lg:flex lg:col-span-5 lg:h-screen'>
<img src={side} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
</div></section>
  )
}

export default Login;

