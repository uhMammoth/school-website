import React from 'react'
import { IoMdContact } from 'react-icons/io'; 
import side from '../assets/side.jpg'


const Contacts = () => {
  return (
  
    <section className="lg:grid lg:grid-cols-12 lg:gap-3">

    {/*  mobile  */ }
    <div className='lg:col-span-6' >


    <div className='w-auto h-auto mt-24 md:mx-40 lg:w-3/4 lg-mx-auto'>
      <form className='mx-4'>
        <IoMdContact className='text-9xl mx-auto mb-2 rblue' />
        <div className='text-2xl mb-24 rblue font-thin text-center'>Contact</div>
        <div className="relative z-0 mb-6 w-full group rblue">
          <input type="email" name="floating_email" id="floating_email" className=" rblue  block py-2.5 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_email" className="left-0 rblue font-thin peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 mb-16 w-full group">
          <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_name" className="left-0 rblue font-thin peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        </div>
        <div>
          <label for="large-input" class=" rblue block font-thin mb-2   text-gray-900 dark:text-gray-200 mt-8">Tell us</label>
          <textarea type="text" id="large-input" class="homebtn rblue h-44  block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div className="pt-2 pb-12">
          <button type="button" class="nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Submit.</button>                        
        </div>
      </form>
    </div>  


</div>

<div className='hidden lg:flex lg:col-span-5 lg:h-screen'>
<img src={side} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
</div></section>

  )
}

export default Contacts

