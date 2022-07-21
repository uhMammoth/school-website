const { AuthenticationError } = require('apollo-server-express');
const { User, Reservation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.counselor) {
        const UserData = await User.findOne({ _id: context.User._id })
          .select('-__v -password')
          .populate('reservations')
          .populate('scheduleDays')
          .populate('scheduleTimes')
        return UserData;
      }else if (!context.counselor){
        const UserData = await User.findOne({ _id: context.User._id })
          .select('-__v -password -counselor')
          .populate('reservations')
        return UserData;
      }
      throw new AuthenticationError('Not logged in');
    },
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
    Login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      
      // if counselor=true include before sending out
      const token = signToken(user);
      return { token, user };
    },
    addReserv: async (parent, {input}, context) => {
      if (context.student) {
        const studentReserve = await Student.findOneAndUpdate(
          { _id: context.student._id },
          { $addToSet: { reservation: input} },
          { new: true, runValidators: true }
        )
        const counselorReserve = await Counselor.findOneAndUpdate(
          { _id: input.counselor._id },
          { $addToSet: { reservation: input} },
          { new: true, runValidators: true }
        )
        return studentReserve, counselorReserve;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
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
