import React from 'react'
import image from '../assets/iimage.jpg'
import { Link } from 'react-router-dom'
import { RiLoginCircleFill } from 'react-icons/ri'; 

const LogIn = () => {
    return (
        <div className='bg-white'>
            <div className='hidden lg:flex justify-end pr-80 mr-40'>
                <div className=''>
                    <img src={image} alt='people smiling' className='object-cover object-right h-screen'></img>
                </div>
            <div className='flex mt-40 ml-2 w-6/12'> 
            <form className='mx-12 w-full'>
                
                <div className='flex text-5xl mb-10 text-gray-800 items-center text-center'><RiLoginCircleFill className='text-7xl text-blue-800' />Sign In</div>
                
                <div class="relative z-0 mb-6 w-full group flex">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                
                <div class="relative z-0 mb-6 w-full group flex">
                    <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                
                <div class="grid md:grid-cols-2 md:gap-6 items-center">
                    <button type="submit" class=" text-white bg-blue-800 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center  ">Submit</button>
                    <div class="relative z-0 w-full group flex text-center">
                    <Link className='text-md text-gray-800 ml-4 underline font-semibold'  to='/Signup'>create account</Link>
                </div>
                </div>
                
            </form>
            </div>
            </div>
            <div className='lg:hidden'>
            <form className='mx-12'>
                
                <RiLoginCircleFill className='text-8xl ml-[100px] mb-2 text-blue-800' />
                <div className='text-3xl mb-14 text-gray-800 text-center'>Sign In</div>
                
                <div class="relative z-0 mb-6 w-full group">
                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                
                <div class="relative z-0 mb-6 w-full group">
                    <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                
                <div class="grid md:grid-cols-2 md:gap-6">
                    <button type="submit" class="mt-20 text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full px-5 py-2.5 text-center  ">Submit</button>
                </div>
                
                <div class="relative z-0 mt-6 w-full group">
                    <Link className='text-md text-gray-800 ml-24 mt-8 underline font-semibold'  to='/Signup'>create account</Link>
                </div>
                

            </form>
        </div>
        </div>
    )
}

export default LogIn