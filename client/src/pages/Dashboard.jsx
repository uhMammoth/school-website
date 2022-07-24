import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';
import {useQuery, useMutation} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';
import Auth from '../utils/auth';
import UserAppt from '../components/UserAppt';

const Dashboard = () => {
  const {data} = useQuery(QUERY_ME);
  const user = data?.me || {};
  if(!Auth.loggedIn()){
    return (<Navigate replace to='/login'/>);
  } 
  return (
    <div className='flex flex-wrap justify-center h-screen items-center bg-slate-300'>
      <Link className="w-full text-center border" to="/appointment">Schedule a counseling appointment here!</Link>
      <UserAppt {...user} />
    </div>
  )
}

export default Dashboard;