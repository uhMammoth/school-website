const userSeeds = require('./userSeed.json');
const reservationSeeds = require('./reservationSeed.json');
const db = require('../config/connection');
const { Reservation, User } = require('../models');

db.once('open', async () => {
  try {
    await Reservation.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

  //   for (let i = 0; i < reservationSeeds.length; i++) {
  //     const { id, student, counselor } = await Reservation.create(reservationSeeds[i]);
  //     const user = await User.findOneAndUpdate(
  //       { id: student.id },
  //       {
  //         $addToSet: {
  //           reservations: id,
  //         },
  //       }
  //     );
  //   }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});