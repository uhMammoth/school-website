import { gql } from '@apollo/client';

export const GET_USER = gql`
  query User($id: ID!) {
    user(_id: $id) {
      _id
      name
      email
      imageUrl
      scheduleDays
      scheduleTimes
      counselor
      reservations {
        _id
      }
    }
  }
`;

export const GET_RESERVATION = gql`
  query Reservations($user: String!) {
    reservations(user: $user) {
      _id
      name
      email
      scheduleDays
      scheduleTimes
      reservations {
        reservId
        date
        subject
        user {
          _id
          name
        }
      }
    }
  }
`;