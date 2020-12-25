import React from 'react'
import { styles } from '../styles/styles';
import {View,Text,ScrollView,StyleSheet,Image,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function TimeDelivery() {
    return (
        <View style={styles.DeliverySchedule}>
          <View style={styles.HeaderAddress}>
            <View style={styles.leftHeader}>
            <View style={styles.numberBackground}>
               <Text style={styles.number}>2</Text>
            </View>
            <View style={styles.AddressTitle}>
            <Text style={styles.TitleAddress}> Delivery Chedule</Text>
            </View>
            </View>
          </View>
          <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>Expess-Delivery</Text>
             <Text style={styles.timeContent}>90 min express delivery</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>8.00am-11.00am</Text>
             <Text style={styles.timeContent}>8.00 AM - 11.00 AM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>11.00am - 2.00pm</Text>
             <Text style={styles.timeContent}>11.00 AM - 2.00 PM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>2.00Pm-5.00pm</Text>
             <Text style={styles.timeContent}>2.00 AM - 5.00 pM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>5.00pm-8.00pm</Text>
             <Text style={styles.timeContent}>5.00 PM - 8.00 PM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>Next Day</Text>
             <Text style={styles.timeContent}>Next Day</Text>
         </TouchableOpacity>
      </View>
    )
}
