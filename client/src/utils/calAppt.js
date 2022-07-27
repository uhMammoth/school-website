function compareDates(counselor, cellDate){
  const object = {
    date: cellDate,
    times: [],
    message: ''
  }
  const dayOfWeekName = cellDate.toLocaleDateString('PDT', { weekday: 'short' });// Mon
  if(!counselor ){
    object.message = 'Please select a counselor!'
  } else if(!counselor.scheduleDays.includes(dayOfWeekName)) {
    object.message = 'There are no times available, please select another day!';
  } else {
    const times = counselor.scheduleTimes.split(' ');//13:00
    const dayISO = cellDate.toISOString().split('T');
    const dateTimes = times.map(time => new Date(`${dayISO[0]}T${time}:00`));
    if (counselor.appointments > 0){
      object.times = dateTimes.filter(time => counselor.appointments.includes(time));
    } else {
      object.times = times;
    }
  }
  return object;
};


module.exports = {compareDates}