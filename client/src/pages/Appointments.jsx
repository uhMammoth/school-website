import React, { useState} from 'react';
import Calendar from '../components/Calendar';
import Details from '../components/Details';

const Appointments = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const [appointments] = useState([
    { name:'person 1', time: '3:00pm' },
    { name:'person 2', time: '4:00pm' },
    { name:'person 3', time: '5:00pm' },
  ]);

  const subjects = ['a', 'b'];

  const [currentTime, setCurrentTime] = useState(appointments[0]);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div className='flex h-screen justify-center items-center bg-slate-300 flex-wrap flex-col'>
      <form>
      <div className='w-full flex justify-center self-end'>
      <select className='mb-10'>
      {appointments.map((counselor) => (
              <option key={counselor.name}>
                {counselor.name}
              </option>))}
      </select>
      </div>
      <Calendar showDetailsHandle={showDetailsHandle} />
      <div className='bg-white '>
        <div className='flex justify-center items-center'>
            {appointments.map((time) => (
              <div className={`${currentTime.time === time.time ? 'is-active' : 'not-active'}`} key={time.time}>
                <span onClick={() => {setCurrentTime(time)}} >{time.time}</span>
              </div>))}
              <select className='mb-10 flex m-auto my-4'>
                <option value='subject' selected hidden>Subject</option>
                {subjects.map((subject) => (
              <option key={subject}>
                {subject}
              </option>))}
              </select>
              <button type='submit'>Submit</button>
          </div>
        {/* <span className='hover:text-blue-500 mx-10'>3:00PM</span>
        <span className='hover:text-blue-500 mx-10'>4:00PM</span>
        <span className='hover:text-blue-500 mx-10'>5:00PM</span> */}
        </div>
        </form>
        
      </div>
  )
}

export default Appointments