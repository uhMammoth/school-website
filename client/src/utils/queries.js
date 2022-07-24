import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
      _id
      name
      email
      imageUrl
      scheduleDays
      scheduleTimes
      appointments {
        _id
      }
    }
  }
`;

export const GET_RESERVATION = gql`
  query counselors {
    counselors {
      _id
      name
      email
      imageUrl
      scheduleDays
      scheduleTimes
      appointments {
        _id
      }
    }
  }
`;