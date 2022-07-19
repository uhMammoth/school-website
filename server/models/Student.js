const { Schema, model } = require('mongoose');
const reservationSchema = require('./Reservation');
const bcrypt = require('bcrypt');

const studentSchema = new Schema(
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
        reservation: [reservationSchema]
    },
    {
        toJSON: {
          virtuals: true
        }
    }
);

studentSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

studentSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};
  
const Student = model('Student', studentSchema);

module.exports = Student;