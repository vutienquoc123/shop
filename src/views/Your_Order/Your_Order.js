import React from 'react';
import { useQuery,gql,useMutation } from '@apollo/client';
import {GET_ORDERS} from '../../graphql/query/order';
import OrderComponent from './OrderComponent';
export default function Your_Order({ navigation }) {
  const { data, error, loading } = useQuery(GET_ORDERS, {
    variables: {
      limit: 7,
      user: 12,
    },
  });
  if (loading) return null;
   if (error) return `Error! ${error}`;
  // console.log(data,"aaaa")
  return (
    <OrderComponent data={data}/>
  )
}