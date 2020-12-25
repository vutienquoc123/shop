import React from 'react'
import { useQuery,gql,useMutation } from '@apollo/client';
import { GET_LOGGED_IN_CUSTOMER } from '../../graphql/query/customer';
import {View,Text,Image,Dimensions,TouchableOpacity,TextInput,Modal} from 'react-native';
import { styles } from './styles/styles';
import Address from './components/Address'
import Payment from './components/Payments'
import TimeDelivery from './components/TimeDelivery'
import ContactNumber from './components/ContactNumber'
export default function userCheckout() {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
    if (loading) return null;
    if (error) return `Error! ${error}`;
    return (
      <View>
        <Address data={data}/>
        <TimeDelivery/>
        <ContactNumber data={data}/>
        <View style={styles.DeliverySchedule}>
        <Payment data={data}/>
        <View style={styles.end}>
           <View style={styles.voucher}>
           <TextInput style = {{ width:WIDTH*0.4,
                                 height: 60,
                                 borderWidth:1,
                                 borderColor:'#afaeae',
                                 marginBottom:10,
                                 borderRadius:5,
                                 backgroundColor:'#f7f7f7' }}
             underlineColorAndroid = "transparent"
             placeholder = "Enter Voucher"
             autoCapitalize = "none"
            //  onChangeText = {handleTitleAddress}
             />
                <TouchableOpacity style={[styles.buttonApply,{width:WIDTH*0.3}]}>
                    <Text style={styles.TextButton}>Apply</Text>
                </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={[styles.buttonApply,{marginTop:30}]}>
                <Text style={styles.TextButton}>Proceed to Checkout</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

