const { Schema, model } = require('mongoose');
const reservationSchema = require('./Reservation');
const bcrypt = require('bcrypt');

const counselorSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true
        },
        scheduleDays: [{type: String}],
        scheduleTimes: [{type: String}],
        reservation: [reservationSchema]
    },
    {
        toJSON: {
          virtuals: true
        }
    }
);

counselorSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

counselorSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};
  
const Counselor = model('Counselor', counselorSchema);

module.exports = Counselor;