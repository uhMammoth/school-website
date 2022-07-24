import React from 'react'
import home from '../assets/home.jpg'
import homebottom from '../assets/homebottom.jpg'

const Home = () => {
  return (
  
  /*  mobile  */  
  <><img src={home} alt='students chilling with a dog' className=' iimage w-full mt-12 sm:h-40 md:mt-14 md:h-80 shadow-lg'/>
    <div class=" h-auto w-auto  sm:pb-4 md:mx-16">
      <div className='text-2xl py-3 rblue'>We're here for you!</div>
      <div class="text-left mb-2 px-5 text-lg rblue">Make an Appointment Today.</div>
      <div class="mb-2 px-5 text-sm text-left indent-6 rblue">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
      <div class="mb-2 px-5 text-sm text-left indent-6 rblue">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
      <div class="text-left mb-2 px-5 text-lg rblue">Services for you.</div>
      <div class="my-2 text-left px-5 indent-6 text-sm text-blue-900">Lorem ipsum dolor sit amet consectetur adipisici sit amet consectetur  A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing eum soluta</div>
      <div class="mb-2 px-5 text-sm text-left indent-6 rblue">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
    </div>
    <div class="nav h-auto w-auto md:px-16 p-3 mx-auto covid">
      <div class="text-left mb-2 text-lg px-5 text-red-500">Please note: Covid-19 restrictions</div>
      <div class="mb-2 text-left indent-6 px-5 text-sm text-red-500">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia Lorem ipsum dolor sit amet csicing elit.sit amesit amet consectetur adipit consectetur adipisic.</div>
    </div>
    <img src={homebottom} alt='students hugging staring at the sun' className='  bottom-0 mb-1 w-full home shadow-lg md:h-80	sm:h-40'/>
    <div className=" w-full sm:8 mb-12 bottom-0 flex justify-around h-auto">  
      <button type="button" class=" nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Know the team</button>
      <button type="button" class="  nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Schedule here</button>
    </div></>
  )
}

export default Home 