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
  mutation updateSched($scheduleDays: String!, $scheduleTimes: String!) {
    updateSched(scheduleDays: $scheduleDays, scheduleTimes: $scheduleTimes) {
      _id
      scheduleDays
      scheduleTimes
    }
  }
`;

export const ADD_APPT = gql`
  mutation addAppt($subject: String!, $student: String!, $counselor: String!, $date: String!) {
    addAppt(subject: $subject, student: $student, counselor: $counselor, date: $date) {
      appointments {
        counselor {
          name
          _id
        }
        student {
          name
          _id
        }
        subject
        date
        _id
      }
    }
  }
`;

export const DEL_APPT = gql`
  mutation delAppt($id: ID!) {
    delAppt(_id: $id) {
      _id
      appointments {
        _id
      }
    }
  }
`;