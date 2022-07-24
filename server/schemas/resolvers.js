const { AuthenticationError } = require('apollo-server-express');
const { User, Reservation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //individual user query for student or counselor dashboard
    user: async (parent, args, context) => {
      console.log('is this working');
      if (context.counselor) {
        const UserData = await User.findOne({ _id: args._id })
          .select('-__v -password')
          .populate('reservations');
        return UserData;
      }else if (!context.counselor){
        const UserData = await User.findOne({ _id: args._id })
          .select('-__v -password')
          .populate('reservations');
        return UserData;
      }
      throw new AuthenticationError('Not logged in');
    },
    //query to get all counselors data
    counselors: async (parent, context) => {
      if(context) {
        const UserData = await User.find()
          .where('counselor').equals(true)
          .select('-__v -password')
          .populate('reservations');
        return UserData;
      }
      throw new AuthenticationError('Not logged in');
    },
    //queries a student or counselors reservation list
    reservations: async (parent, args, context) => {
      if(context) {
        const reserveData = await User.findOne({ _id: args.user._id })
        .select('-__v -password')
        .populate('reservations');
      return reserveData;
      }
    }   
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
    //students can make a reservation which saves to botht the student and counselors userData
    addReserv: async (parent, {input}, context) => {
      if (context) {
        const studentReserve = await User.findOneAndUpdate(
          { _id: context.student._id },
          { $addToSet: { reservation: input} },
          { new: true, runValidators: true }
        )
        //update counselor reservations with new reservation using student
        await User.findOneAndUpdate(
          { _id: input.counselorId },
          { $addToSet: { 
            reservation: {
              user: context.student._id,
              subject: input.subject,
              date: input.date
          }} },
          { new: true, runValidators: true }
        )
        return studentReserve;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    //student can cancel an appointment they made
    removeReserv: async (parent, {reservId}, context) => {
      if (context.student) {
        const studentReserve = await Student.findOneAndUpdate(
          { _id: context.student._id },
          { $pull: { reservation: {reservId: reservId}} },
          { new: true}
        )
        const counselorReserve = await Counselor.findOneAndUpdate(
          { _id: input.counselor._id },
          { $pull: { reservation: {reservId: reservId}} },
          { new: true}
        )
        return studentReserve, counselorReserve;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
