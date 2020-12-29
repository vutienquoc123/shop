import React,{useEffect} from 'react'
import {View,Text,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../styles/styles';
export default function submit() {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const contactSelect = useSelector(state=>state.ContactReducer)
    console.log(contactSelect)
    return (
        <View>
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
    )
}
