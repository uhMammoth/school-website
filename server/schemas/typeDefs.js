const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    email: String
    scheduleDays: [String]
    scheduleTimes: [String]
    reservations: [Reservation]
    counselor: Boolean    
  }
  type Reservation {
    reservId: String
    User: UserId
    subject: String
    date: Date
  }
  input ReservationInput {
    User: UserId
    subject: String
    date: Date
  }
  type UserAuth {
    token: ID!
    user: User  
  }
  type Query {
    User: User
    reservations(id: ID!): User
  }
  type Mutation {
    UserLogin(email: String!, password: String!): UserAuth
    schedule(counselor: Boolean!, scheduleDays: [String]!, scheduleTimes: [String]!): User
    addReserv(input: ReservationInput): User
    removeReserv(reservId: String!): User 
  }

`;

module.exports = typeDefs;