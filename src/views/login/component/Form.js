import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions,TextInput} from 'react-native';
import { useLazyQuery } from '@apollo/client';
import {GET_LOGGED_IN_CUSTOMER} from '../../../graphql/query/customer'
import Button_Submit from '../../../components/button/Button_Submit';
import UserInput from '../../../components/text_input/UserInput';
import fb from "../../../assets/icon/facebook.png";
import gg from '../../../assets/icon/google.png'
import { useDispatch } from 'react-redux';
import { getUser } from '../../../reducer/login/actions/userActions';
// import ButtomLogin from './ButtomLogin'
const WIDTH = Dimensions.get("screen").width;
const Form = (props) => {
    const [LoginUser,{loading,error,data}] = useLazyQuery(GET_LOGGED_IN_CUSTOMER);
    console.log(data,loading,error);
    const dispatch = useDispatch();
    const [showPass, setshowpass ] = useState(true);
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    // const [inputEmail,setInputEmail] = useState('')
    // const [inputPassword,setInputPassword] = useState('')
    const getPassword = ()=>{
        console.log('get pass')
    }
    // let input = JSON.stringify({ email, password })
    // console.log(input)
    const Login = (email,password) =>{
        console.log(email,password,"aaaaaa")
        LoginUser({variables: { userInput: JSON.stringify({email, password}) }})
        // console.log(data,loading)
    }
    // console.log(data,error)
    // const Login = (email, password) => {
    //     updateUser({variables: { meInput: JSON.stringify({ name, email }) }})
    //     alert('Name: ' + email + ' Email: ' + password)
    //  }
    return (
        <View>
            {/* form input */}
            <TextInput style = {{                    
                                 height: 60,
                                 borderRadius:8,
                                 backgroundColor:'#f7f7f7',marginHorizontal:20 }}
             underlineColorAndroid = "transparent"
             placeholder = " Email..."
             autoCapitalize = "none"
            //  value={email}
             onChangeText={text => onChangeEmail(text)}/>
            <TextInput style = {{                    
                                 height: 60,
                                 borderRadius:8,
                                 backgroundColor:'#f7f7f7',marginTop:10,marginBottom:10,marginHorizontal:20 }}
             underlineColorAndroid = "transparent"
             secureTextEntry = {showPass}
             placeholder = " Password..."
             autoCapitalize = "none"
            //  value={password}
             onChangeText={text => onChangePassword(text)}/>

            <View style={styles.container}>
                {data && !loading && email == data.me.email && password == data.me.password? 
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    onPress={()=>{Login(email, password);props.navigation.navigate('home');dispatch(getUser(data))}}
                >        
                <Text style={styles.text}>Login</Text>
                </TouchableOpacity>:
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    
                    onPress={()=>{Login(email, password)}}
                >        
                <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                }
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
                <TouchableOpacity  onPress={()=>{props.navigation.navigate('home')}}>
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
        fontSize : 22,
        color: '#fff'
        // alignItems: "center",
    }
})