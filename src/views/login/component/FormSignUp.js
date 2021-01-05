import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,TextInput,Dimensions} from 'react-native';
import Button_Submit from '../../../components/button/Button_Submit';
import UserInput from '../../../components/text_input/UserInput';
import { useMutation } from '@apollo/client';
import {ADD_USER} from '../../../graphql/mutation/me'
import fb from "../../../assets/icon/facebook.png";
import gg from '../../../assets/icon/google.png'

const WIDTH = Dimensions.get("screen").width;
const Form = (props) => {
    const [showPass, setshowpass ] = useState(true);
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [signIn] = useMutation(ADD_USER);
    const addUser = (email, password) => {
        signIn({variables: { userInput: JSON.stringify({ email, password }) }})
        alert('Name: ' + email + ' Email: ' + password)
    }

    // const getPassword = ()=>{
    //     console.log('get pass')
    // }
    return (
        <View>
            {/* form input */}
            <TextInput style = {{                    
                                 height: 60,
                                 borderRadius:8,
                                 backgroundColor:'#f7f7f7' }}
             underlineColorAndroid = "transparent"
             placeholder = " Email..."
             autoCapitalize = "none"
             value={email}
             onChangeText={text => onChangeEmail(text)}/>
            <TextInput style = {{                    
                                 height: 60,
                                 borderRadius:8,
                                 backgroundColor:'#f7f7f7',marginTop:10,marginBottom:10 }}
             underlineColorAndroid = "transparent"
             secureTextEntry = {showPass}
             placeholder = " Password..."
             autoCapitalize = "none"
             value={password}
             onChangeText={text => onChangePassword(text)}/>

            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    onPress={()=>{addUser(email,password);props.navigation.navigate('Login')}}
                >        
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
             </View>
            
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
    button:{
        flexDirection : "row",
        alignItems : "center",
        justifyContent: "center",
        height : 60,
        width : WIDTH-40,
        borderRadius : 5,
    },
    link:{
        color : "#009E7F",
        fontSize : 18
    },
    text: {
        fontSize : 22,
        color: '#fff',
        fontWeight : 'bold'
        // alignItems: "center",
    }
})