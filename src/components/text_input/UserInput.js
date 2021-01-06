import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IC_Ionicons from "react-native-vector-icons/Ionicons";

const UserInput = (props) => {
    const handleChange =(e) =>{
        props.onchange(e);
    }
    return (
        
        <View style={styles.container}>
            {/* inputComponent */}
            {
                props.image ? (
                    <IC_Ionicons name={props.image} size={30} style={styles.image} />
                    ) : null
                }
            <TextInput
                style={styles.text}
                placeholder ={props.placeholder}
                secureTextEntry = {props.secureTextEntry}
                value= {props.value}
                ChangeText={(value)=> {
                    props.ChangeText(props.name,value)
                }}
                placeholderTextColor = 'gray'
                underlineColorAndroid = 'transparent'
            />
        </View>
    );
};

export default UserInput;

const Width = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        marginTop:10,
        flexDirection :"row",
        justifyContent : "center",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor : 'whitesmoke',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    image:{
        zIndex: 1,
        // marginRight:10,
        backgroundColor : 'whitesmoke',
    },
    text:{
        backgroundColor : 'whitesmoke',
        height : 60,
        borderRadius : 5,
        fontSize : 18 ,
        width : '85%',
    }
})
