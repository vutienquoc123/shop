import React from 'react'
import { useQuery,gql,useMutation } from '@apollo/client';
import { GET_LOGGED_IN_CUSTOMER } from '../../graphql/query/customer';
import {View} from 'react-native';
import { styles } from './styles/styles';
import Address from './components/Address'
import Payment from './components/Payments'
import TimeDelivery from './components/TimeDelivery'
import ContactNumber from './components/ContactNumber'
import Submit from './components/submit'
export default function userCheckout() {
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
        <Submit/>
        </View>
      </View>
    )
}

