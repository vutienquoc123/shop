import React from 'react';
// import {View, Text,Image,Dimensions,StyleSheet,TouchableOpacity,ScrollView,Clipboard} from 'react-native';
import { GET_COUPON } from '../../graphql/query/coupons';
import { useQuery,gql,useMutation } from '@apollo/client';
import OfferComponent from './Index';
export default function Offer({ navigation }) {
  const { data, error, loading } = useQuery(GET_COUPON);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  return (
    <OfferComponent data={data}/>
  );
}
