import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,TextInput,Dimensions,Alert} from 'react-native';
import Button_Submit from '../../../components/button/Button_Submit';
import UserInput from '../../../components/text_input/UserInput';
import { useMutation } from '@apollo/client';
import {ADD_USER} from '../../../graphql/mutation/me'
import fb from "../../../assets/icon/facebook.png";
import Feather from 'react-native-vector-icons/Feather';
import gg from '../../../assets/icon/google.png'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
const WIDTH = Dimensions.get("screen").width;
const Form = (props) => {
    const [showPass, setshowpass ] = useState(true);
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const { colors } = useTheme();
    // const [email, onChangeEmail] = useState('')
    // const [password, onChangePassword] = useState('')
    const [signIn] = useMutation(ADD_USER);
    // const addUser = (email, password) => 
    //     signIn({variables: { userInput: JSON.stringify({ email, password }) }})
    //    { 
    //     Alert.alert('Invalid User!', 'Username or password is incorrect.', [
    //         {text: 'Okay' ,onPress: () => props.navigation.navigate('Login')  }
    //     ]);
       
    // }  
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    // const getPassword = ()=>{
    //     console.log('get pass')
    // }
    const addUser = (email, password) => {
        // if (data.isValidPassword = false && data.isValidUser == false  ) {
        //     Alert.alert('Wrong Input!', 'email or password field cannot be empty.', [
        //         {text: 'Okay'}
        //     ]);
        //     return;
        // }
        // if (data.isValidPassword = true && data.isValidUser == true ) {
            signIn({variables: { userInput: JSON.stringify({ email, password }) }})
            Alert.alert('Invalid User!', 'email or password is incorrect.', [
                {text: 'Okay',onPress: () => props.navigation.navigate('Login')}
            ]);
        //     return;
        // }

    }
    return (
        <View>
            {/* form input */}
            { data.isValidUser ? null : 
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
            // style = {{                    
            //                      height: 60,
            //                      borderRadius:8,
            //                      backgroundColor:'#f7f7f7' }}
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
             {data.check_textInputChange ? 
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
             { data.isValidPassword ? null : 
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
            // style = {{                    
            //                      height: 60,
            //                      borderRadius:8,
            //                      backgroundColor:'#f7f7f7',marginTop:10,marginBottom:10 }}
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, {
                    color: colors.text
                }]}
             underlineColorAndroid = "transparent"
            //  placeholderTextColor="#666666"
             secureTextEntry = {showPass}
             placeholder = " Password..."
             autoCapitalize = "none"
            //  value={password}
            //  onChangeText={text => onChangePassword(text)}
            onChangeText={(val) => handlePasswordChange(val)}/>
             <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
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
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    onPress={()=>{addUser(data.email,data.password)}}
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
    action: {
        flexDirection: 'row',
        // marginTop: 20,
        backgroundColor:'#f7f7f7',
        alignItems : "center",
        paddingBottom: 5,
        height: 60,
        borderRadius:8,
        marginBottom:15,
        paddingHorizontal:5,
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