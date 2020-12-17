import { useQuery } from '@apollo/client';
import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button_Submit from '../../component/button/Button_Submit';
import { GET_CATEGORIES } from '../../graphql/query/category';
import Form from '../login/component/Form';
import Login from '../login/Login';
import Search from './component/Search';
import SlideImg from './component/SlideImg';
// import Login from '../login/Login';

export default function Home({ navigation }) {

  const typepage ='Thucpham'
  // const {loading,error,data} = useQuery(GET_CATEGORIES,{
  //   variables:{typepage}
  // });
  // console.log(data);
  const handleClick= ()=>{
    console.log('press');
    // console.log(data);
  }
  // if(!data) return null;
  return (
    <View>
      <TouchableOpacity onpress={()=>{console.log("press")}} style={{backgroundColor:'red',height: 80}}>
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}
