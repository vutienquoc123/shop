import React,{useState} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import ProductOrder from './productOrder'

export default function OrderItems(data) {
    const [numberOrder,SetNumberOrder] = useState(1);
    const [colorOrder,setColorOrder] = useState('#f7f7f7')
    // console.log(data)
    const [order,setOrder] = useState(data.e)
    function handleOrder(){
    SetNumberOrder(prevCount => prevCount + 1)
    if(numberOrder % 2 == 0){
      setColorOrder('#f7f7f7')
    }else{
      setColorOrder('white')
    }
    }
    return (
        <View style={{ flex:1 }}>
        <TouchableOpacity style={[styles.orderView,{backgroundColor:colorOrder}]} onPress={handleOrder}>
          <View style={styles.headerView}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Order#{data.i+1}</Text>
          </View>
          <View style={styles.orderOnTheWay}>
            <Text style={styles.TextOrderWay}>Order On The Way</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Order Date:</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>{order.date}</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Delivery Time</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>{order.deliveryTime}</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Total Price</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameOrder}>$ {order.amount}</Text>
          </View>
          </View>
            </TouchableOpacity>
            {numberOrder % 2 == 0 ? <ProductOrder order={order}/> : null}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'white'
    },
    orderView:{
      flex: 1,
      margin:20,
      borderWidth:1,
      borderColor:'#f7f7f7',
      flexDirection:'column',
    },
    headerView: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-between',
      borderBottomWidth:1,
      borderColor:'#f1f1f1',
    },
    orderOnTheWay:{
      height:50,
      backgroundColor:'#E3E9F7',
      alignItems: 'center',
      justifyContent: 'center',
      margin:20,
      borderRadius:10
    },
    NameOrder: {
      fontSize:20,
      fontWeight:'bold',
    },
    TextOrderWay:{
      fontSize:18,
      color:'#2E70FA',
      padding:10
    },
    ViewNameOrder: {
      justifyContent: 'center',
      padding:20,
    },
    contentOrder: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    NameDetailOrder:{
      fontSize:20,
    },
    DetailOrder: {
      justifyContent: 'center',
      padding:20,
    }
  })
  