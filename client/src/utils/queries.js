import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    _id
    appointments {
      _id
      subject
      date
      student {
        name
      }
      counselor {
        name
      }
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