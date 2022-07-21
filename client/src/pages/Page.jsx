import React, { useState} from 'react';
import Calendar from '../components/Calendar';
import Details from '../components/Details';

const Page = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <div className='flex justify-center h-screen items-center bg-slate-300'>
      <Calendar showDetailsHandle={showDetailsHandle} />
    </div>
  )
}

export default Page