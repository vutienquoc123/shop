import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button_Submit from '../../../component/button/Button_Submit';
import UserInput from '../../../component/text_input/UserInput';

import fb from "../../../assets/icon/facebook.png";
import gg from '../../../assets/icon/google.png'


const Form = (props) => {
    const [showPass, setshowpass ] = useState(true);
    const goRegister = ()=>{
        console.log('create account')
    }

    const getPassword = ()=>{
        console.log('get pass')
    }
    return (
        <View>
            <UserInput
                placeholder ='Username ...'
                // secureTextEntry ='false'
            />
            <UserInput
                placeholder = 'Password ...'
                secureTextEntry = {showPass}
            />

            <Button_Submit
                text ='Login'
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
                <Text style={{fontSize : 18}}>Don's have any account?   </Text>
                <Text style={styles.link}
                    onPress={goRegister}
                >Sign up</Text>
            </View>
            
            <View style ={{flexDirection : "row", fontSize : 18, alignItems : "center", justifyContent: "center", marginTop : 20}}> 
                <Text style={{fontSize : 18}}>Forgot your's password?  </Text>
                <Text style={styles.link}
                    onPress ={getPassword}
                >Got it</Text>
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