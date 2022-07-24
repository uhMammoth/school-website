import React from 'react';

export default function UserAppt (user){
    
    return (        
        <section className="border">            
            Upcoming Appointments: <br/>
            ____________________________________
            {!user.appointments || user.apptCount < 1 ? (
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