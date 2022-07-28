import React from 'react'
import home from '../assets/home.jpg'
import homebottom from '../assets/homebottom.jpg'
import sidebar from '../assets/sidebar.jpg'

const Home = () => {
  return (
  

    <section className="lg:grid lg:grid-cols-12 lg:gap-3">
    
    <div className='hidden lg:flex lg:col-span-4 lg:h-screen'>
    <img src={sidebar} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
    </div>
  {/*  mobile  */}  
  <div className='lg:col-span-8 lg:w-[1200px]' >
  <img src={home} alt='students chilling with a dog' className=' iimage w-full mt-12 sm:h-40 md:mt-14 md:h-80 lg:h-96 shadow-lg'/>
    <div className=" h-auto w-auto  sm:pb-4 md:mx-16">
      <div className='text-2xl py-3 rblue lg:text-4xl'>We're here for you!</div>
      <div className="text-left mb-2 px-5 text-lg rblue lg:text-3xl">Make an Appointment Today.</div>
      <div className="mb-2 px-5 text-sm text-left indent-6 rblue lg:text-xl">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
      <div className="mb-2 px-5 text-sm text-left indent-6 rblue lg:text-xl">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
      <div className="text-left mb-2 px-5 text-lg rblue lg:text-3xl">Services for you.</div>
      <div className="my-2 text-left px-5 indent-6 text-sm text-blue-900 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisici sit amet consectetur  A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing elitsit amet consectetur adipisicing eum soluta</div>
      <div className="mb-2 px-5 text-sm text-left indent-6 rblue lg:text-xl">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia</div>
    </div>
    <div className="nav h-auto w-auto md:px-16 p-3 mx-auto covid">
      <div className="text-left mb-2 text-lg px-5 text-red-500 lg:text-3xl">Please note: Covid-19 restrictions</div>
      <div className="mb-2 text-left indent-6 px-5 text-sm text-red-500 lg:text-xl">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates dignissimos, reiciendis maxime laborum soluta, voluptate dolorem dolore saepe iusto quam mollitia Lorem ipsum dolor sit amet csicing elit.sit amesit amet consectetur adipit consectetur adipisic.</div>
    </div>
    <img src={homebottom} alt='students hugging staring at the sun' className=' lg:h-96 bottom-0 mb-1 w-full home shadow-lg md:h-80	sm:h-40'/>
    <div className=" w-full sm:8 mb-12 bottom-0 flex justify-around h-auto">  
      <button type="button" className=" nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Know the team</button>
      <button type="button" className="  nav bgblue yellow w-full font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Schedule here</button>
    </div>
    
    </div>
    </section>
  )
}

export default Home 