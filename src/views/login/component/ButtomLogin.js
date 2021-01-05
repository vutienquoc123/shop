import React,{ useState } from 'react'
import {StyleSheet,Text, View,TouchableOpacity, Dimensions} from 'react-native';
import { useLazyQuery } from '@apollo/client';
import {GET_LOGGED_IN_CUSTOMER} from '../../../graphql/query/customer'
const WIDTH = Dimensions.get("screen").width;
export default function ButtomLogin(props) {
    const [email ,setEmail] = useState(props.email)
    const [password,setPassword] = useState(props.password)
    // const Login =(email, password) =>{
    //     setEmail(email)
    //     setPassword(password)
    //     // if (loading) return null;
    //     // if (error) return `Error! ${error}`;    
    // }
    const [Login,{loading,error,data}] = useLazyQuery(GET_LOGGED_IN_CUSTOMER, { variables:{userInput: JSON.stringify({ })}});
    console.log(data)
    return (
        <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.button,{backgroundColor: "#009E7F"}]}
                    onPress={()=>{Login()}}
                >        
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems : "center",
        // justifyContent: "center"
    },
    button:{
        flexDirection : "row",
        alignItems : "center",
        justifyContent: "center",
        height : 60,
        width : WIDTH-40,
        borderRadius : 5,
    },
    text: {
        fontSize : 22,
        color: '#fff'
        // alignItems: "center",
    }
})
