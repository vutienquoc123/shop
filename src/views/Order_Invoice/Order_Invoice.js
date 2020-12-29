import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
export default function Order_Invoice({ navigation }) {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.order}>
        <View style={styles.button}>
          <TouchableOpacity style={[styles.ButtonBack,{width:WIDTH*0.35}]} onPress={() => navigation.navigate('home', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}>
            <Text style={styles.textButton}>Back to Home</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.OrderReceived}>
            <Text style={styles.Title}>Order Received</Text>
            <Text style={styles.ContentTitle}>Thank you. Your order has been received</Text>
            <Text style={styles.titleContent}>Order Nmuber</Text>
            <Text style={styles.textContent}>1444</Text>
            <Text style={styles.titleContent}>Date</Text>
            <Text style={styles.textContent}>March 14,2019</Text>
            <Text style={styles.titleContent}>Total</Text>
            <Text style={styles.textContent}>$10,944,00</Text>
            <Text style={styles.titleContent}>Payment Method</Text>
            <Text style={styles.textContent}>Cash on delivery</Text>
          </View>
          <View style={styles.OrderDetail}>
            <Text style={styles.Title}>Order Details</Text>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Total Item </Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>6 Items</Text>
              </View>
            </View>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Order Time </Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>1.00pm 10/12/19</Text>
              </View>
            </View>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Delivery Time</Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>90 Minute Express Delivery</Text>
              </View>
            </View>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Delivery Location</Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>1st Floor,House 149,Road-22,Mohakhali DOHS,Dhaka-North</Text>
              </View>
            </View>
          </View>
          <View style={[styles.OrderDetail,{marginBottom:50}]}>
            <Text style={styles.Title}>Total Amount</Text>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Sub Total</Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>$10,864.00</Text>
              </View>
            </View>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Payment Method</Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>Cash On Delivery</Text>
              </View>
            </View>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Cash on delivery</Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>10</Text>
              </View>
            </View>
            <View style={styles.orderDetailsItems}>
              <View style={[styles.totalItem,{ width:WIDTH*0.35 }]}>
                <View>
                  <Text style={styles.titleOrderDetails}>Total</Text>
                </View>
                <View>
                  <Text style={styles.titleOrderDetails}>:</Text>
                </View>
              </View>
              <View style={{ width:WIDTH*0.5 }}>
                <Text style={styles.textContent}>$10,874.00</Text>
              </View>
            </View>
          </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  order:{flex: 1,backgroundColor:'white',margin:20},
  ButtonBack:{height:50,justifyContent: 'center',borderWidth:1,borderRadius:10,borderColor:'#f1f1f1',marginRight:20,marginTop:15},
  button:{flexDirection:'row-reverse'},
  textButton:{fontSize:18,opacity:0.5,textAlign:'center'},
  OrderReceived:{marginHorizontal:20},
  Title:{fontSize:24,fontWeight:'bold',marginBottom:10},
  ContentTitle:{fontSize:20,marginBottom:10},
  titleContent:{fontSize:20,fontWeight:'bold',marginTop:10},
  textContent:{fontSize:20,opacity:0.7,marginHorizontal:20},
  OrderDetail:{flex:1,flexDirection:'column',marginTop:50,marginHorizontal:20},
  orderDetailsItems:{flex:1,flexDirection:'row',marginTop:15},
  titleOrderDetails:{fontSize:20,fontWeight:'bold',opacity:0.7},
  totalItem:{flexDirection: 'row',justifyContent:'space-between'}
})
