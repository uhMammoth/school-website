const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
    imageUrl: String
    scheduleDays: [String]
    scheduleTimes: [String]
    reservations: [Reservation]
    counselor: Boolean    
  }
  type Reservation {
    id: ID
    user: User
    subject: String
    date: String
  }
  type UserAuth {
    token: ID!
    user: User  
  }
  type Query {
    counselors: [User]
    user(id: ID!): User
    reservations(user: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): UserAuth
    schedule(counselor: Boolean!, scheduleDays: [String]!, scheduleTimes: [String]!): User
    addReserv(counselorId: String!, subject: String!, date: String!): User
    removeReserv(reservId: String!): User 
  }
`;
module.exports = typeDefs;