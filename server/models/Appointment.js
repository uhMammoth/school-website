const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const apptSchema = new Schema(
  {
    apptSubject: {
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

const Appointment = model('Appointment', apptSchema);

module.exports = Appointment;
