const { Schema } = require('mongoose');
const { Counselor, Student } = require('./');
const dateFormat = require('../utils/dateFormat');

const reservationSchema = new Schema(
  {
    reservationSubject: {
      type: String,
      required: true
    },
    counselor: {
      type: String,
      require: true
    },
    student: {
      type: String,
      required: true
    },    
    date: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    time: [{type: String}]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = reservationSchema;
