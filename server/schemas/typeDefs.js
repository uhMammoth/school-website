const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    imageUrl: String
    scheduleDays: [String]
    scheduleTimes: [String]
    reservations: [Reservation]
    counselor: Boolean    
  }
  type Reservation {
    _id: ID
    user: User
    subject: String
    date: String
  }
  type Auth {
    token: ID!
    user: User  
  }
  type Query {
    counselors: [User]
    user(_id: ID!): User
    reservations(user: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    schedule(counselor: Boolean!, scheduleDays: [String]!, scheduleTimes: [String]!): User
    addReserv(counselorId: String!, subject: String!, date: String!): User
    removeReserv(reservId: String!): User 
  }
`;
module.exports = typeDefs;