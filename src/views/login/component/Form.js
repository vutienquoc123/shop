import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions} from 'react-native';
import Button_Submit from '../../../components/button/Button_Submit';
import UserInput from '../../../components/text_input/UserInput';

import fb from "../../../assets/icon/facebook.png";
import gg from '../../../assets/icon/google.png'

const WIDTH = Dimensions.get("screen").width;
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

            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    onPress={()=>props.navigation.navigate('home')}
                >        
                    <Text style={styles.text}>Login</Text>
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
            <View style ={{flexDirection : "row", fontSize : 18, alignItems : "center", justifyContent: "center", marginTop : 20}}> 
                <Text style={{fontSize : 18}}>Don's have any account?   </Text>
                <TouchableOpacity  onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={styles.link}
                >Sign up</Text>
                </TouchableOpacity>
            </View>
            
            <View style ={{flexDirection : "row", fontSize : 18, alignItems : "center", justifyContent: "center", marginTop : 20}}> 
                <Text style={{fontSize : 18}}>Forgot your's password?  </Text>
                <Text style={styles.link}
                    onPress ={getPassword}
                >Got it</Text>
            </View>
            <View style ={{flexDirection : "row", fontSize : 18, alignItems : "center", justifyContent: "center", marginTop : 20}}> 
                <Text style={{fontSize : 18}}>back to   </Text>
                <TouchableOpacity  onPress={() => props.navigation.navigate('home')}>
                <Text style={styles.link}
                >Home</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );


    
};

export default Form;

const styles = StyleSheet.create({
    container:{
        alignItems : "center",
        // justifyContent: "center"
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
    },
    button:{
        flexDirection : "row",
        alignItems : "center",
        justifyContent: "center",
        height : 60,
        width : WIDTH-40,
        borderRadius : 5,
    },
    image:{
        height : 35,
        width: 35,
        resizeMode: "cover",
        zIndex: 1,
        marginRight:10
    },
    text: {
        fontFamily : '',
        fontSize : 22,
        color: '#fff'
        // alignItems: "center",
    }

})