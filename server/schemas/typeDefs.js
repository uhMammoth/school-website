const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type CounselorUser {
    _id: ID
    email: String
    reservations: [Reservation]    
  }
  type StudentUser {
    _id: ID
    email: String
    reservations: [Reservation]   
  }
  type Reservation {
    reservId: String
    counselor: CounselorUser
    student: StudentUser
    subject: String
    date: String
    time: String
  }
  input ReservationInput {
    counselor: CounselorUser
    student: StudentUser
    subject: String
    date: String
    time: String
  }
  type CounselorAuth {
    token: ID!
    user: CounselorUser  
  }
  type StudentAuth {
    token: ID!
    user: StudentUser  
  }
  type Query {
    counselor: CounselorUser
    student: StudentUser
  }
  type Mutation {
    counselorLogin(email: String!, password: String!): CounselorAuth
    studentLogin(email: String!, password: String!): StudentAuth
    addReserv(input: ReservationInput): StudentUser
    removeReserv(reservId: String!): StudentUser 
  }

`;

module.exports = typeDefs;