import React, { useState} from 'react';
import Calendar from '../components/Calendar';
import Details from '../components/Details';
import calAppt from '../utils/calAppt';

const Page = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  
  const date = new Date;
  const counselor = {
    scheduleDays: "Mon Tues Wed Thur Fri",
    scheduleTimes: "3:00PM 3:30PM",
    reservations: [
      { 
        date: date
      }
    ]
  };
  const text = calAppt(counselor);
  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div className='flex justify-center h-screen items-center bg-slate-300'>
      {text}
      <Calendar showDetailsHandle={showDetailsHandle} />
    </div>
  )
}

export default Page