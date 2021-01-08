import { gql } from '@apollo/client';
export const ADD_USER = gql`
  mutation($userInput: String!) {
    signUp(userInput: $userInput) {
      id
      email
      password
    }
  }
`;