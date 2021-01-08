import React,{useState,useEffect} from 'react';
import { useQuery} from '@apollo/client';
import {GET_ORDERS} from '../../graphql/query/order';
import OrderComponent from './OrderComponent';
import {ScrollView,View,Text,Dimensions,Image} from 'react-native';
export default function Your_Order({ navigation }) {
  const { data, error, loading } = useQuery(GET_ORDERS, {
    variables: {
      limit: 7,
      user: 12,
    },
  });
  console.log(data, error, loading);
  // const [order, setOrder] = useState(data);
  // // setTimeout( ()=>{
  // //     setOrder(data);
    
  // // },3000);
  
  return (
        <OrderComponent data={data}/>
//  <View>
//   <Text>as</Text>
//   </View> 
    
  )
}