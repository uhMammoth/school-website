import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import calAppt from '../utils/calAppt';
import {useQuery, useMutation} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';
import Auth from '../utils/auth';
import UserAppt from '../components/UserAppt';

const Dashboard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);
  const {query} = useQuery(QUERY_ME);
  const user = query?.me || {};
  if(!Auth.loggedIn()){
    return (<Navigate replace to='/login'/>);
  } 
  // const text = calAppt();
  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };
  return (
    <div className='flex flex-wrap justify-center h-screen items-center bg-slate-300'>
      <Calendar showDetailsHandle={showDetailsHandle} />
      <UserAppt {...user} />
    </div>
  )
}

export default Dashboard;