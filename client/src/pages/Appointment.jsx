import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import calAppt from '../utils/calAppt';
import {useQuery, useMutation} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';
import Auth from '../utils/auth';

const Appointment = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  const {user} = useQuery(QUERY_ME);
  console.log(user);
  if(!Auth.loggedIn()){
    return (<Navigate replace to='/login'/>);
  }
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

export default Appointment;