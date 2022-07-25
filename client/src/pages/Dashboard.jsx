import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import calAppt from '../utils/calAppt';
import Details from '../components/Details';
import {useQuery, useMutation} from '@apollo/client';
import {QUERY_ME, COUNSELORS} from '../utils/queries';
import Auth from '../utils/auth';
import UserAppt from '../components/UserAppt';

const Dashboard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [calData, setCalData] = useState(null);

  const [appointments] = useState([
    { name:'person 1', time: '3:00pm' },
    { name:'person 2', time: '4:00pm' },
    { name:'person 3', time: '5:00pm' },
  ]);
  const subjects = ['a', 'b'];
  const [currentTime, setCurrentTime] = useState(appointments[0]);
  // const {counselors} = useQuery(COUNSELORS);

  const {data} = useQuery(QUERY_ME);
  const user = data?.me || {};
  console.log(data);
  if(!Auth.loggedIn()){
    return (<Navigate replace to='/login'/>);
  } 
  // const text = calAppt();

  const showDetailsHandle = (dayStr) => {
    setCalData(dayStr);
    setShowDetails(true);
  };
  return (
    <div className='flex flex-wrap justify-center h-screen items-center bg-slate-300'>
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
      <UserAppt {...user}/>
    </div>
  )
}

export default Dashboard;