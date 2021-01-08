import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions,TextInput,Alert} from 'react-native';
import { useLazyQuery } from '@apollo/client';
import {GET_LOGGED_IN_CUSTOMER} from '../../../graphql/query/customer'
import Button_Submit from '../../../components/button/Button_Submit';
import UserInput from '../../../components/text_input/UserInput';
import fb from "../../../assets/icon/facebook.png";
import gg from '../../../assets/icon/google.png'
import { useDispatch } from 'react-redux';
import { getUser } from '../../../reducer/login/actions/userActions';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
// import ButtomLogin from './ButtomLogin'
const WIDTH = Dimensions.get("screen").width;
const Form = (props) => {
    const [LoginUser,{loading,error,data}] = useLazyQuery(GET_LOGGED_IN_CUSTOMER);
    console.log(data,loading,error);
    const [Login,setLogin] = useState("")
    // useEffect(() => {
    //     data &&
    //     setLogin(data.me);
    // }, [data]);
    // console.log(Login,"aaa")
    const dispatch = useDispatch();
    const { colors } = useTheme();
    const [dataLogin, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const getPassword = ()=>{
        console.log('get pass')
    }
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...dataLogin,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...dataLogin,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...dataLogin,
                isValidUser: true
            });
        } else {
            setData({
                ...dataLogin,
                isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...dataLogin,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...dataLogin,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...dataLogin,
            secureTextEntry: !dataLogin.secureTextEntry
        });
    }
    // const SignUpUser = (email,password) =>{
    //     LoginUser({variables: { userInput: JSON.stringify({email, password}) }})

    // }
    const signIn = (email,password) =>{
        LoginUser({variables: { userInput: JSON.stringify({email, password}) }})
        // // console.log(email,password)
        // // LoginUser({variables: { userInput: JSON.stringify({email, password}) }})
        // // setTimeout(()=>{
        //         // console.log(Login,"Login laf tao")
        //         if(email == data.me.email && password == data.me.password){
        //         Alert.alert('success', 'email or password exactly.', [
        //             {text: 'Okay',onPress: () => props.navigation.navigate('home')}
        //         ]);
        //         }
        //         else{
        //             Alert.alert('fail', 'email or password incorrect.', [
        //                 {text: 'Okay'}
        //             ]);
        //         }
        // // }, 5000)
        //     // }
    }
    
    return (
        <View>
            { dataLogin.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
            <TextInput 
            placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
             underlineColorAndroid = "transparent"
             placeholder = " Email..."
             autoCapitalize = "none"
            //  onChangeText={text => onChangeEmail(text)}
             onChangeText={(val) => textInputChange(val)}
             onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
             />
             {dataLogin.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            { dataLogin.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
            <TextInput 
            placeholderTextColor="#666666"
            secureTextEntry={dataLogin.secureTextEntry ? true : false}
            style={[styles.textInput, {
                    color: colors.text
                }]}
             underlineColorAndroid = "transparent"
            //  placeholderTextColor="#666666"
             placeholder = " Password..."
             autoCapitalize = "none"
            //  value={password}
            //  onChangeText={text => onChangePassword(text)}
            onChangeText={(val) => handlePasswordChange(val)}/>
             <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {dataLogin.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                {data && !loading && dataLogin.email == data.me.email && dataLogin.password == data.me.password? 
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    onPress={()=>{ signIn(dataLogin.email, dataLogin.password);props.navigation.navigate('home');dispatch(getUser(data))}
                    }
                >        
                <Text style={styles.text}>Login</Text>
                </TouchableOpacity>:
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    
                    onPress={()=>{signIn(dataLogin.email, dataLogin.password,)}}
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
    },
    action: {
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor:'#f7f7f7',
        alignItems : "center",
        paddingBottom: 5,
        height: 60,
        borderRadius:8,
        marginBottom:15,
        paddingHorizontal:5,
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        marginTop:5,
        // marginBottom:20,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
})