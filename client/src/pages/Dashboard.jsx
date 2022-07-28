import React, { useState} from 'react';
import Bottom from '../assets/calenderbottom.jpg';
import sidebar from '../assets/sidebar.jpg'
import Calendar from '../components/Calendar';
import UserAppt from '../components/UserAppt';
import {useQuery, useMutation} from '@apollo/client';
import {COUNSELORS} from '../utils/queries';
import {ADD_APPT} from '../utils/mutations'

/*  dropdown bar  */
export default function Dashboard() {

    const {data} = useQuery(COUNSELORS);
    const counselors = data?.counselors || {};

    
    const [addAppt] = useMutation(ADD_APPT);

    const [counselor, setCounselor] = useState(false);
    const [currentTime, setCurrentTime] = useState(false);
    const [subject, setSubject] = useState(false);
    const [daySelected, setDaySelected] = useState({
      date: '',
      times: [],
      message: ''
    }); //{day: , times:}

    if (!Array.isArray(counselors) || counselors.length <= 0) {
      return null;
  }
    const apptHandler = ({date, times, message}) => {
      setDaySelected({
        date: date,
        times: times,
        message: message
      });
      setCurrentTime(false);
    };     
    
    const handleChange = (event) => {
      
      const { name, value } = event.target; 
      if(name === 'time'){    
        setCurrentTime(value);
      } else if(name ==='subject') {
        setSubject(value);
      } else if(name==='counselor'){
        const selectedCounselor = (counselors.find(counselor => (counselor._id === value)));
        setCounselor(selectedCounselor);
      }
      
    };
    // console.log(counselor._id)
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const sub = subject;
      console.log(sub)
      const counselorId = counselor._id;
      const dayISO = daySelected.date.toISOString().split('T');
      const date = new Date(`${dayISO[0]}T${currentTime}:00`);
      const appointment = {
        counselor: counselorId,
        date: date,        
        subject: sub
      };
      console.log(appointment);
      try {
        await addAppt({
          variables: { ...appointment },
        });
      } catch (e) {
        console.error(e);
      }
    };

    if (!Array.isArray(counselors) || counselors.length <= 0) {
      return null;
    }

return (
<section className="lg:grid lg:grid-cols-12 lg:gap-3">
  <div className='hidden lg:flex lg:col-span-4 lg:h-screen'>
    <img src={sidebar} alt='students hugging staring at the sun' className=' nav m-auto mb-1 lg:h-screen home shadow-lg md:h-80	sm:h-40'/>
  </div>
  <div className='lg:col-span-8 lg:w-[1200px]'>
    <img src={Bottom} alt='students using laptop together' className='mt-10 md:mt-14 top-0 w-full h-40 md:h-96' /> 
    <div className='user-appt nav'>
      <form className='nav rblue h-60 lg:h-5/6 bg-slate-300' onSubmit={handleFormSubmit}>
        <select className='pb-4 w-full flex justify-center items-center bg-blue-500 text-center text-white' name='counselor' onChange={handleChange}>
        <option value='Counselor' defaultValue={'Counselor'} hidden>Choose Counselor</option>
        {counselors.map((counselor) => (
        <option className='bg-white text-black' key={counselor._id} value={counselor._id}>
        {counselor.name}
        </option>))}
        </select>
        <div className='calendar-container flex justify-between mx-22'>
          <Calendar apptHandler={apptHandler} counselor={counselor}/>
          <div className='bg-slate-300 h-full w-full'>
            <div className='flex flex-wrap justify-center pb-2 bg-white m-auto border-2 border-orange-500'>
              {daySelected.message !== '' ? (
                <div className='flex px-1 pt-2 bg-transparent' >
                <span className='cursor-pointer border-2 border-black w-fit rounded-md'>{daySelected.message}</span>
                </div>
              ) : (
                daySelected.times.map((time) => (
                <div><input type='radio' id={time}className={`cursor-pointer border-2 border-black w-fit rounded-md  px-1 pt-2 bg-transparent ${currentTime === time ? 'is-active' : 'not-active'}`} key={time} name='time' value={time} onClick={handleChange}></input><label htmlFor={time}>{time}</label></div>
              )))}
            </div>
            <div className='flex justify-around items-center pt-10'>
            <select className='py-1 text-center rounded-md bg-blue-500 text-white' name='subject' onChange={handleChange}>
              <option value='subject' defaultValue={'Subject'} hidden>Subject</option>
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
    </div>
    <UserAppt />
  </div>
</section>
  );
};

