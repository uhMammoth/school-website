const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        imageUrl: {
            type: String,
            default: ''
        },
        password: {
            type: String,
            required: true
        },
        scheduleDays: {
            type: String,
            default: ''
        },
        scheduleTimes: {
            type: String,
            default: ''
        },
        appointments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Appointment'
            }
        ],
        counselor: {
            type: Boolean,
            required: true
        }
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        }
    }
);

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('apptCount').get(function() {
    return this.appointments.length;
  });

const User = model('User', userSchema);

module.exports = User;