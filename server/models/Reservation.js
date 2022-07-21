const { Schema } = require('mongoose');
const { User } = require('./');
const dateFormat = require('../utils/dateFormat');

const reservationSchema = new Schema(
  {
    reservationSubject: {
      type: String,
      required: true,
      default: 'Walk In'
    },
    user: {
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

module.exports = reservationSchema;
