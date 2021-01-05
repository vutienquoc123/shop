import { gql } from '@apollo/client';
export const ADD_USER = gql`
  mutation($userInput: String!) {
    signIn(userInput: $userInput) {
      id
      name
      password
    }
  }
`;
export const UPDATE_ME = gql`
  mutation($meInput: String!) {
    updateMe(meInput: $meInput) {
      id
      name
      email
    }
  }
`;
