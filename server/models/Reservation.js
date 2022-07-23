const { Schema, model } = require('mongoose');
const { User } = require('./');
const dateFormat = require('../utils/dateFormat');

const reservationSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;
