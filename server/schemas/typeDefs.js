const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type CounselorUser {
    id: ID
    email: String
    scheduleDays: [String]
    scheduleTimes: [String]
    reservations: [Reservation]    
  }
  type StudentUser {
    id: ID
    email: String
    reservations: [Reservation]   
  }
  type Reservation {
    reservId: String
    counselor: counselorId
    student: studentId
    subject: String
    date: Date
  }
  input ReservationInput {
    counselor: counselorId
    student: studentId
    subject: String
    date: Date
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
    reservations(id: ID!): CounselorUser
  }
  type Mutation {
    counselorLogin(email: String!, password: String!): CounselorAuth
    studentLogin(email: String!, password: String!): StudentAuth
    schedule(): user
    addReserv(input: ReservationInput): StudentUser
    removeReserv(reservId: String!): StudentUser 
  }

`;

module.exports = typeDefs;