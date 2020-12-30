import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
  mutation($orderInput: String!) {
    addOrder(orderInput: $orderInput) {
      status
      deliveryAddress
      amount
      date
      subtotal
      deliveryFee
      discount
      deliveryTime
      products {
        title
        price
        # total
        image
        weight
        quantity
        id
      }
    }
  }
`;

export const GET_PAYMENT = gql`
  mutation($paymentInput: String!) {
    charge(paymentInput: $paymentInput) {
      status
    }
  }
`;
