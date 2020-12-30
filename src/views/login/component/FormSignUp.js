import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Button_Submit from '../../../components/button/Button_Submit';
import UserInput from '../../../components/text_input/UserInput';

import fb from "../../../assets/icon/facebook.png";
import gg from '../../../assets/icon/google.png'


const Form = (props) => {
    const [showPass, setshowpass ] = useState(true);
    const [account, setAccount] = useState({username:'', password :''});

    const handleChange=(name,value)=>{
        // console.log(name," ",value);
        if(name === 'username') 
        {
            setAccount(account.username = value)
        }
        else
        {
            setAccount(account.password = value)
        }
    }

    // const goRegister = ()=>{
    //     console.log('create account')
    // }

    const getPassword = ()=>{
        console.log('get pass')
    }
    return (
        <View>
            {/* form input */}
            <UserInput
                placeholder ='Username ...'
                ChangeText = {handleChange}
                value={account.username}
                name={'username'}
                // secureTextEntry ='false'
            />
            <UserInput
                placeholder = 'Password ...'
                secureTextEntry = {showPass}
                value={account.password}
                ChangeText = {handleChange}
                name={'password'}
            />

            <Button_Submit
                text ='SingUp'
                backgroundColor ="#009E7F"
            />
            
            <Text style={styles.or}>or</Text>

            <Button_Submit
                image={fb}
                backgroundColor ="#5677bd"
                text ="Continue with Facebook"
            />
            <Button_Submit
                image={gg}
                text ="Continue with Google"
                backgroundColor ="#4c8bf5"
            />
            <View style ={{flexDirection : "row", fontSize : 18, alignItems : "center", justifyContent: "center", marginTop : 40}}> 
                <Text style={{fontSize : 18}}>Already have an account?  </Text>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Text style={styles.link}
                >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    container:{
        alignItems : "center",
        justifyContent: "center"
    },
    or : {
        textAlign : "center",
        marginTop : 10 ,
        marginEnd : 10,
        fontSize : 18
    },
    link:{
        color : "#009E7F",
        fontSize : 18
    }
})