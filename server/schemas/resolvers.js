const { AuthenticationError } = require('apollo-server-express');
const { User, Appointment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //individual user query for student or counselor dashboard
    me: async (parent, args, context) => {
      if (context.user.counselor) {
        const UserData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('appointments');
        return UserData;
      }else if (!context.user.counselor){
        const UserData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('appointments');
        return UserData;
      }
      throw new AuthenticationError('Not logged in');
    },
    //query to get all counselors data
    counselors: async (parent, context) => {
      if(context.user) {
        const UserData = await User.find()
          .where('counselor').equals(true)
          .select('-__v -password')
          .populate('appointments');
        return UserData;
      } else {
        const UserData = await User.find()
          .where('counselor').equals(true)
          .select('-__v -password')
          .populate('appointments')
        return UserData;
      }
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    updateSched: async (parent, {scheduleDays, scheduleTimes}, context) => {
      if(context.user.counselor) {
        const updateSched = await User.findOneAndUpdate(
          { _id: context.user._id},
          {
            scheduleDays: scheduleDays,
            scheduleTimes: scheduleTimes
          },
          { new: true}
          )
        return updateSched;
      }
    },
    //students can make a reservation which saves to botht the student and counselors userData
    addAppt: async (parent, input, context) => {
      if (context.user) {
        const appt = await Appointment.create({
          apptSubject: input.subject,
          student: context.user._id,
          counselor: input.counselor,
          date: input.date
        });
        //add new appt to student
        const studentAppt = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { appointments: appt} },
          { new: true, runValidators: true }
        )
        //add new appt to counselor
        await User.findOneAndUpdate(
          { _id: input.counselor },
          { $addToSet: { appointments: appt} },
          { new: true, runValidators: true }
        );
        return studentAppt;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //student can cancel an appointment they made
    delAppt: async (parent, apptId, context) => {
      if (context.user) {
        await Appointment.deleteOne({_id: apptId});

        const studentAppt = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { appointments: {_id: apptId} } },
          { new: true}
        )
        await User.findOneAndUpdate(
          { _id: appt.counselor._id },
          { $pull: { appointments: {_id: apptId} } },
          { new: true}
        )
        return studentAppt;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};
module.exports = resolvers;
