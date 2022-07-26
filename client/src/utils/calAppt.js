export default function something(counselor){
    // console.log(counselor);
    const {scheduleDays, scheduleTimes, reservations} = counselor;
    const days = scheduleDays.split(' ');
    const times = scheduleTimes.split(' ');
    // console.log(days,times)

    return 'blah';
};

/*

blackout if a counselor day has appts for each time
blackout past dates

        scheduleDays: {
            type: String,
            default: ''
        },
        scheduleTimes: {
            type: String,
            default: ''
        },
        reservations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reservation'
            }
        ],
        
    reservationSubject: {
      type: String,
      required: true,
      default: 'Walk In'
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },
    counselor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false
    },  
    date: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
*/