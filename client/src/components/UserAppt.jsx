import React from 'react';

export default function UserAppt (user){
    
    return (        
        <section className="border bg-white rounded-lg px-12 pt-4 text-center border-orange-500">            
            Upcoming Appointments: <br/>
            ____________________________________
            {!user.appointments || user.appointments.length < 1 ? (
                <div>No Appointments!</div>
            ) : (
                user.appointments.map(appointment => (
                    <div className="border">

                    </div>
                )) 
            )}
        </section>
    );
};