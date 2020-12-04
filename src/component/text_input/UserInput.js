import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const UserInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text}
                placeholder ={props.placeholder}
                secureTextEntry = {props.secureTextEntry}
                value= {props.value}
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
        marginTop: 20,

    },
    text:{
        backgroundColor : 'whitesmoke',
        height : 60,
        borderRadius : 5,
        fontSize : 18 ,
        width : Width-40,
    }
})
