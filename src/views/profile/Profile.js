import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity,ScrollView} from 'react-native'
import ProfileComponent from './ProfileComponent';
export default function Profile({ navigation}) {

   // const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER,{
   //    variables: {
   //    id:"13"
   //  },});
   //  console.log(data,loading,error);
   // if (loading) return null;
   // if (error) return `Error! ${error}`;
   let data = useSelector(state=>state.UserReducer.user)
   console.log(data)
   return (
      // <View>
      //    <Text>azaa</Text>
      // </View>
      <ProfileComponent data={data}/>
   ) 
}
