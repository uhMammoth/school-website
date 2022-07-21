import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User {
    user {
      id
      name
      email
      scheduleDays
      scheduleTimes
      reservations {
        reservId
        user {
          id
          name
        }
        subject
        date
      }
    }
  }
`;

export const GET_RESERVATION = gql`
  query Reservations($user: String!) {
    reservations(user: $user) {
      id
      name
      email
      scheduleDays
      scheduleTimes
      reservations {
        reservId
        date
        subject
        user {
          id
          name
        }
      }
    }
  }
`;