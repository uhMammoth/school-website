import { gql } from '@apollo/client';

export const GET_USER = gql`
  {
    user {
      _id
      email
      reservations {
        reservId
        user
        subject
        date
        time
      }
    }
  }
`;

export const GET_RESERVATION = gql`
  query getReservations {
    reservations {
      reservId
        user
        subject
        date
    }
  }
`;