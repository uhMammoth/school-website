import React, { useState} from 'react';
import Bottom from '../assets/calenderbottom.jpg';
import { createPopper } from "@popperjs/core";
import Grad from '../assets/grad.jpg'
import sidebar from '../assets/sidebar.jpg'
import Calendar from '../components/Calendar';
import UserAppt from '../components/UserAppt';
import {useQuery} from '@apollo/client';
import {COUNSELORS} from '../utils/queries';

/*  dropdown bar  */
export default function Dashboard() {

    const {data} = useQuery(COUNSELORS);
    const counselors = data?.counselors || {};
    console.log(counselors);

    const [showDetails, setShowDetails] = useState(false);
    const [setData] = useState(null);
  
    // const [currentTime, setCurrentTime] = useState(counselors.scheduleTimes);
  
    if (!Array.isArray(counselors) || counselors.length <= 0) {
      return null;
  }

    const showDetailsHandle = (dayStr) => {
      setData(dayStr);
      setShowDetails(true);
    };


  return (
  
  
    <section className="lg:grid lg:grid-cols-12 lg:gap-3">
    
    <div className='hidden lg:flex lg:col-span-4 lg:h-screen'>
    <img src={sidebar} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
    </div>

    <div className='lg:col-span-8 lg:w-[1200px]'>
    <img src={Bottom} alt='students using laptop together' className='mt-10 md:mt-14 top-0 w-full h-40 md:h-96' /> 
    <div className='nav '>
      <div className='nav rblue h-60 lg:h-5/6'>
        
      <div className='bg-slate-300'>
      <form>
    <select className='pb-4 w-full flex justify-center self-end bg-blue-500 text-center text-white'>
      {counselors.map((counselor) => (
              <option className='bg-white text-black' key={counselor.name}>
                {counselor.name}
              </option>))}
      </select>
      <div className='flex justify-between mx-20'>
      <Calendar showDetailsHandle={showDetailsHandle} />
      <UserAppt />
      </div>
        </form>
      </div>
      
      </div>
      <div className='nav rblue h-32 lg:h-72'>
      <div className='bg-slate-300 h-full'>
        <div className=''>
            {/* {counselors.map((counselor) => (
              <div className={`lex-wrap flex flex-col px-40 pt-2 ${currentTime.time === counselor.time ? 'is-active' : 'not-active'}`} key={counselor.time}>
                <span className='cursor-pointer border-2 border-black w-fit rounded-md' onClick={() => {setCurrentTime(counselor); console.log(counselor)}} >{counselor.time}</span>
              </div>))} */}
              <select className='mb-10 my-4'>
                <option value='subject' selected hidden>Subject</option>
                <option value='1' selected hidden>1</option>
                <option value='2' selected hidden>2</option>
                <option value='3' selected hidden>3</option>
                <option value='4' selected hidden>4</option>
              </select>
              <button type='submit'>Submit</button>
          </div>
        </div>
      </div>
      <div className="text-left my-3 px-5 text-lg rblue lg:text-4xl">1.. 2.. 3.. That's it!</div>
      <div className="mb-3 px-5 text-sm text-left indent-6 rblue lg:text-xl">Lorem ipsum dolor sit amet consectet sit amet consectetur adipisicin sit amet consectetur adipisicinur adipisicing elitsit amet consectetur adipisicing elit. A odit voluptatum impedit. Debitis, voluptates.</div>
      <img src={Grad} alt='graduates throwing graduation caps' className=' bottom-0 w-full h-40 md:h-96 mb-10 md:mb-13' />
    </div></div></section>
  );
};

