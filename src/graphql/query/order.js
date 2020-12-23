import { gql } from '@apollo/client';
export const GET_ORDERS = gql`
  query getAllOrders($text: String, $user: Int!, $limit: Int) {
    orders(text: $text, limit: $limit, user: $user) {
      id
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
        total
        image
        weight
        quantity
        id
      }
    }
  }
`;