import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_SCHED = gql`
  mutation Schedule($counselor: Boolean!, $scheduleDays: [String]!, $scheduleTimes: [String]!) {
    schedule(counselor: $counselor, scheduleDays: $scheduleDays, scheduleTimes: $scheduleTimes) {
      _id
      scheduleDays
      scheduleTimes
    }
  }
`;