import React from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button_Submit from '../../component/button/Button_Submit';
import Form from '../login/component/Form';
import Login from '../login/Login';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <Text>Home</Text>
      <Login/>
      
    </ScrollView>
  );
}
