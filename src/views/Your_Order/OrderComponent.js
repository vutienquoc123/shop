import React,{useState} from 'react';
import {ScrollView,StyleSheet,View,Text,TouchableOpacity,Dimensions,Image} from 'react-native';
import OrderItems from './orderItems'
export default function OrderComponent(data) {
    const [order,setOrder] = useState(data.data.orders)
    console.log(order)
    return (
    <ScrollView style = {styles.container}>
        {order.map((e,i)=>( 
        <OrderItems e={e} i={i} key={i}/>
    ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white'
    },
})