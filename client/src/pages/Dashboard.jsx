import React, { useState} from 'react';
import Bottom from '../assets/calenderbottom.jpg';
import sidebar from '../assets/sidebar.jpg'
import Calendar from '../components/Calendar';
import UserAppt from '../components/UserAppt';
import {useQuery} from '@apollo/client';
import {COUNSELORS} from '../utils/queries';
import { daysInWeek } from 'date-fns';

/*  dropdown bar  */
export default function Dashboard() {

    const {data} = useQuery(COUNSELORS);
    const counselors = data?.counselors || {};

    const [showDetails, setShowDetails] = useState(false);
    const [changeCounselor, setCounselor] = useState(false);
    const [currentTime, setCurrentTime] = useState(false);
    const [daySelected, setDaySelected] = useState({
      date: '',
      times: [],
      message: ''
    }); //{day: , times:}
    const [setData] = useState(null);

    if (!Array.isArray(counselors) || counselors.length <= 0) {
      return null;
  }
    const apptHandler = ({date, times, message}) => {
      setDaySelected({
        date: date,
        times: times,
        message: message
      });
    };
    
    const handleSelect = (e) => {
      const selectedCounselor = (counselors.find(counselor => (counselor._id === e.target.value)));
      setCounselor(selectedCounselor);
      }

return (
<section className="lg:grid lg:grid-cols-12 lg:gap-3">
  <div className='hidden lg:flex lg:col-span-4 lg:h-screen'>
    <img src={sidebar} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
  </div>
  <div className='lg:col-span-8 lg:w-[1200px]'>
    <img src={Bottom} alt='students using laptop together' className='mt-10 md:mt-14 top-0 w-full h-40 md:h-96' /> 
    <div className='nav '>

      <form className='nav rblue h-60 lg:h-5/6 bg-slate-300'>
        <select className='pb-4 w-full flex justify-center items-center bg-blue-500 text-center text-white' name='counselor'  onChange={handleSelect}>
          <option value='Counselor' selected hidden>Choose Counselor</option>
          {counselors.map((counselor) => (
          <option className='bg-white text-black' key={counselor._id} value={counselor._id}>
            {counselor.name}
          </option>))}
        </select>
        <div className='flex justify-between mx-22'>
          <Calendar apptHandler={apptHandler} counselor={changeCounselor}/>
          <div className='bg-slate-300 h-full w-full'>
            <div className='flex flex-wrap justify-center pb-2 bg-white m-auto border-2 border-orange-500'>
              {daySelected.message !== '' ? (
                <div className='flex px-1 pt-2 bg-transparent' >
                <span className='cursor-pointer border-2 border-black w-fit rounded-md'>{daySelected.message}</span>
                </div>
              ) : (
                daySelected.times.map((time) => (
                  <div className={`flex px-1 pt-2 bg-transparent ${currentTime === time ? 'is-active' : 'not-active'}`} key={time}>
                  <span className='cursor-pointer border-2 border-black w-fit rounded-md' onClick={() => {setCurrentTime(time);}} >{time}</span>
                  </div>
                  ))
              )}
            </div>
            <div className='flex justify-around items-center pt-10'>
              <select className='py-1 text-center rounded-md bg-blue-500 text-white'>
                <option value='subject' selected hidden>Subject</option>
                <option value='Schedule'>Schedule Classes</option>
                <option value='Mental Health'>Mental Health</option>
                <option value='Chat'>Just Chat</option>
                <option value='Other'>Other</option>
              </select>
              <button type='submit' className='bg-orange-500 w-fit rounded-lg px-10 py-1'>Submit</button>
            </div>
          </div>
        </div>
      </form>
      <div className='nav rblue h-32 lg:h-72'><UserAppt /></div>  

    </div>
  </div>
</section>
  );
};

