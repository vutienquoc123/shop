import React from 'react';
import { useQuery} from '@apollo/client';
import {GET_ORDERS} from '../../graphql/query/order';
import OrderComponent from './OrderComponent';
import {ScrollView,View,Text,Dimensions,Image} from 'react-native';
export default function Your_Order({ navigation }) {
  const { data, error, loading } = useQuery(GET_ORDERS, {
    variables: {
      limit: 7,
      user: 12,
      text: null,
    },
  });
  
  if (loading) return null;
   if (error) return `Error! ${error}`;
  return (
    <OrderComponent data={data}/>
  )
}