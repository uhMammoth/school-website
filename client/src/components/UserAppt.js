import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';

export default function UserAppt (){
    const {data} = useQuery(QUERY_ME);
    const userAppt = data?.me.appointments;
    return (        
        <section className="bg-white rounded-lg px-12 pt-4 text-center">            
            Your Upcoming Appointments <br/>
            ____________________________________
            {!userAppt || userAppt.length < 1 ? (
                <div>No Appointments!</div>
            ) : (
                userAppt.map(appointment => (
                    <div key={appointment._id}>
                        <span>{appointment.date}</span>
                    </div>
                )) 
            )}
        </section>
    );
};