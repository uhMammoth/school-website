import { gql } from '@apollo/client';

export const GET_COUNSELOR = gql`
  {
    counselor {
      _id
      email
      reservations {
        reservId
        counselor
        student
        subject
        date
        time
      }
    }
  }
`;

export const GET_STUDENT = gql`
  {
    student {
      _id
      email
      reservations {
        reservId
        counselor
        student
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
        counselor
        student
        subject
        date
        time
    }
  }
`