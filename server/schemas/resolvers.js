const { AuthenticationError } = require('apollo-server-express');
const { Counselor, Reservation, Student } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    counselor: async (parent, args, context) => {
      if (context.counselor) {
        const counselorUserData = await CounselorUser.findOne({ _id: context.counselor._id })
          .select('-__v -password')
        return counselorUserData;
      }
      throw new AuthenticationError('Not logged in');
    },
    student: async (parent, args, context) => {
      if (context.user) {
        const studentUserData = await StudentUser.findOne({ _id: context.student._id })
          .select('-__v -password')
        return studentUserData;
      }
      throw new AuthenticationError('Not logged in');
    }    
  },

  Mutation: {
    counselorLogin: async (parent, { email, password }) => {
      const user = await CounselorUser.findOne({ email });

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
    studentLogin: async (parent, { email, password }) => {
      const user = await StudentUser.findOne({ email });

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
        const reserved = await StudentUser.findOneAndUpdate(
          { _id: context.student._id },
          { $addToSet: { reservation: input} },
          { new: true, runValidators: true }
        )
        return reserved;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeReserv: async (parent, {reservId}, context) => {
      if (context.student) {
        const reserved = await StudentUser.findOneAndUpdate(
          { _id: context.student._id },
          { $pull: { reservation: {reservId: reservId}} },
          { new: true}
        )
        return reserved;
      }
      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
