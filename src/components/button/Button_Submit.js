import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { lightBlue100 } from 'react-native-paper/lib/typescript/src/styles/colors';

const handleClick = () => {
    // props.onpress();
    console.log('presss')
};

const Button_Submit = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.button,{backgroundColor: props.backgroundColor}]}
                onPress={handleClick}
                >
                    {
                    props.image ? (
                        <Image source ={props.image} style={styles.image} />
                        ) : null
                    }
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button_Submit;

const WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container :{
        alignItems: "center",
        marginTop: 10
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