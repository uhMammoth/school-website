const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reservationSchema = new Schema(
  {
    reservationSubject: {
      type: String,
      required: true
    },
    student: {
      type: String,
      required: true
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

module.exports = reservationSchema;
