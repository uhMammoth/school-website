const { AuthenticationError } = require('apollo-server-express');
const { Counselor, Reservation, Student } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    counselor: async (parent, args, context) => {
      if (context.counselor) {
        const counselorUserData = await Counselor.findOne({ _id: context.counselor._id })
          .select('-__v -password')
        return counselorUserData;
      }
      throw new AuthenticationError('Not logged in');
    },
    student: async (parent, args, context) => {
      if (context.user) {
        const studentUserData = await Student.findOne({ _id: context.student._id })
          .select('-__v -password')
        return studentUserData;
      }
      throw new AuthenticationError('Not logged in');
    },
    reservations: async (parent, args, context) => {
      if(context) {
        const reserveData = await Counselor.findOne({ _id: args.counselor._id })
        .select('-__v -password')
        .populate('reservations');
      return reserveData;
      }
    }   
  },

  Mutation: {
    counselorLogin: async (parent, { email, password }) => {
      const user = await Counselor.findOne({ email });

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
    studentLogin: async (parent, { email, password }) => {
      const user = await Student.findOne({ email });

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
