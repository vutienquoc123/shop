import React,{useState,useEffect} from 'react';
import { View, Text, TouchableOpacity,ScrollView} from 'react-native'
import EditUser from './components/editUser'
import { styles } from './styles/styles';
import Contact from './components/Contact'
import Address from './components/Address'
import Payment from './components/payment'
export default function ProfileComponent(profile) {
    const [data,setData] = useState(profile.data)
    return (
    <ScrollView style = {styles.container}>
        <Text style = {styles.title}>Your profile</Text>
        <EditUser data={data}/>
         <Contact data={data}/>
         <Address data={data}/>
         <Payment data={data}/>
      <View style={styles.end}>
            <Text style={styles.endText}>Go to</Text>
            <TouchableOpacity>
            <Text style={styles.endLink}> Pickbazar </Text>
            </TouchableOpacity>
      </View>
       </ScrollView>
    )
}