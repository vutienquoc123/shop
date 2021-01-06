import React from 'react'
import { useQuery,gql,useMutation } from '@apollo/client';
import { GET_LOGGED_IN_CUSTOMER } from '../../graphql/query/customer';
import { useDispatch, useSelector } from 'react-redux';
import {View} from 'react-native';
import { styles } from './styles/styles';
import Address from './components/Address'
import Payment from './components/Payments'
import TimeDelivery from './components/TimeDelivery'
import ContactNumber from './components/ContactNumber'
import Submit from './components/submit'
export default function userCheckout() {
    let data = useSelector(state=>state.UserReducer.user)
    console.log(data)
    return (
      <View>
        <Address data={data}/>
        <TimeDelivery/>
        <ContactNumber data={data}/>
        <View style={styles.DeliverySchedule}>
        <Payment data={data}/>
        <Submit/>
        </View>
      </View>
    )
}

