import React from 'react'
import { Link } from 'react-router-dom'
import { BsCalendarWeekFill, BsPersonCircle } from 'react-icons/bs';
import home from '../assets/home.jpg'
import homebottom from '../assets/homebottom.jpg'


import { IoPersonAddSharp } from 'react-icons/io';


const Home = () => {
  return (
    <div className="">

    <img src={home} alt='' className='iimage w-full h-40 home shadow-lg'/>

 
    <div class=" h-auto w-full  pb-4">
      <div className='text-2xl py-3 rblue'>We're here for you!</div>
      <div class="text-left mb-2 px-5 text-lg rblue">Make an Appointment Today.</div>
      <div class="mb-2 px-5 text-sm text-left indent-6 rblue">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
      <div class="text-left mb-2 px-5 text-lg rblue">Services for you.</div>
      <div class="my-2 text-left px-5 indent-6 text-sm text-blue-900">Lorem ipsum dolor sit amet consectetur adipisici sit amet consectetur  A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing eum soluta</div>
      

    </div>

    <div class="nav h-auto w-full  p-3 mx-auto covid">
      <div class="text-left mb-2 text-lg px-5 text-red-500">Please note: Covid-19 restrictions</div>
      <div class="mb-2 text-left indent-6 px-5 text-sm text-red-500">Lorem ipsum dolor sit amet csicing elit.sit amesit amet consectetur adipit consectetur adipisic.</div>
    </div>


    <img src={homebottom} alt='' className=' fixed bottom-0 mb-16 w-full home shadow-lg	h-30'/>


    <div className=" fixed w-full mb-9 bottom-0 flex justify-around h-auto">  
    <button type="button" class=" nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Know the team</button>
    <button type="button" class="  nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Schedule here</button>

    </div>


    </div>
  )
}

export default Home 