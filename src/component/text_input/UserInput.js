import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const UserInput = (props) => {
    const handleChange =(e) =>{
        props.onchange(e);
    }
    return (
        
        <View style={styles.container}>
            {/* inputComponent */}
            {
                props.image ? (
                    <Image source ={props.image} style={styles.image} />
                    ) : null
                }
            <TextInput
                style={styles.text}
                placeholder ={props.placeholder}
                secureTextEntry = {props.secureTextEntry}
                value= {props.value}
                onChangeText={(value)=> {
                    props.onChangeText(props.name,value)
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
        flexDirection :"row",
        justifyContent : "center",
        alignItems: "center",
        marginTop: 20,

    },
    image:{
        height : 35,
        width: 35,
        resizeMode: "cover",
        zIndex: 1,
        marginRight:10
    },
    text:{
        backgroundColor : 'whitesmoke',
        height : 60,
        borderRadius : 5,
        fontSize : 18 ,
        width : '90%',
    }
})
