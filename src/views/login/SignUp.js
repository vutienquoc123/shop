import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FormSignUp from './component/FormSignUp';
import Logo from './component/Logo';

import logo from '../../assets/img/Logo.png'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize:30,fontWeight:'bold',color:'#009e7f',textAlign:'center',marginTop:30,marginBottom:30 }}>Sign Up</Text>
            <FormSignUp navigation={navigation}/>
        </View>
    );
};
export default SignUp;

const styles = StyleSheet.create({
    container: {
        alignItems : "center",
        justifyContent: "center",
        backgroundColor:'white',
        flex:1
    }
})