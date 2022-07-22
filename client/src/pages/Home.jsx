import React from 'react'
import { Link } from 'react-router-dom'
import { BsCalendarWeekFill, BsPersonCircle } from 'react-icons/bs';
import home from '../assets/home.jpg'
import homebottom from '../assets/homebottom.jpg'


import { IoPersonAddSharp } from 'react-icons/io';


const Home = () => {
  return (
    <div>
      <div className='hidden lg:flex'>

      </div>
    <div className="flex justify-between pt-1 h-10 w-full ">  
      <BsCalendarWeekFill className="opacity-30 sticky top-0 text-3xl mx-3 text-blue-800"/> 
      <BsPersonCircle className="opacity-30 sticky top-0 text-3xl mx-3 text-blue-800"/>
    </div>
    
    <img src={home} alt='' className='iimage w-full home shadow-lg'/>

 
    <div class=" h-auto w-full bg-sky-100 pb-4">
      <div className='text-4xl pb-4 text-blue-900 text-center underline underline-offset-3	'>We're here for you!</div>
      <div class="my-1 px-4 text-lg text-blue-900">Make an Appointment Today.</div>
      <div class="my-1 px-4 text-sm text-blue-900">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
      <div class="my-1 px-4 text-lg text-blue-900">Services for you.</div>
      <div class="my-1 px-4 text-sm text-blue-900">Lorem ipsum dolor sit amet consectetur adipisici sit amet consectetur  A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing eum soluta</div>
      

    </div>

    <div class="border-2 border-red-800 h-auto w-full bg-amber-100 p-2 mx-auto">
      <div class="my-1 text-lg text-red-800">Please note: Covid-19 restrictions</div>
      <div class="my-1 text-sm text-red-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amesit amet consectetur adipit consectetur adipisic</div>
    </div>


    <img src={homebottom} alt='' className=' fixed bottom-0 mb-20 w-full home shadow-lg	'/>


    <div className=" fixed w-full mb-12 bottom-0 flex justify-around">  
    <button type="button" class="w-[200px] border-2 border-blue-200 text-white bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm py-3 text-center">Know the team.</button>
    <button type="button" class="w-[200px] border-2 border-blue-200 text-white bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm text-center">Schedule here.</button>

    </div>


    </div>
  )
}

export default Home 