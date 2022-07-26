import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
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

export const COUNSELORS = gql`
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