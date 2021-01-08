import React,{useState,useEffect} from 'react';
import {ScrollView,StyleSheet,View,Text,TouchableOpacity,Dimensions,Image} from 'react-native';
import OrderItems from './orderItems'
export default function OrderComponent(props) {
  // setTimeout( ()=>{
    const [order,setOrder] = useState("")
    console.log(order)
  // }, 5000);
    useEffect(() => {
      props.data &&
      setOrder(props.data);
  }, [props.data]);
    return (
    <ScrollView style = {styles.container}>
      {order?
      <View>
        {order.orders.map((e,i)=>( 
          <OrderItems e={e} i={i} key={i}/>
        ))}
      </View>:
      <Text>loading</Text>
      }
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white'
    },
})