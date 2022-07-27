const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    imageUrl: String
    scheduleDays: String
    scheduleTimes: String
    appointments: [Appointment]
    counselor: Boolean    
  }
  type Appointment {
    _id: ID
    subject: String
    student: User
    counselor: User
    date: String
  }
  type Auth {
    token: ID!
    user: User  
  }
  type Query {
    counselors: [User]
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    updateSched(scheduleDays: String!, scheduleTimes: String!): User
    addAppt(counselor: String!, date: String!, subject: String!): User
    delAppt(_id: ID!): User 
  }
`;
module.exports = typeDefs;