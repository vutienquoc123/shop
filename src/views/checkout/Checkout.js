import React from 'react';
import {View,ScrollView} from 'react-native';
import { styles } from './styles/styles';
import UserCheckout from './userCheckout'
import Cart from './cart'
export default function Checkout({ navigation }) {
  return (
    <ScrollView  style = {styles.container}>
      <Cart/>
      <UserCheckout/>
      <View style={{ height:50 }}>
      </View>
    </ScrollView>
  );
}


