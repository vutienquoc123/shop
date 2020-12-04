import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const Logo = (props) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
                source={props.image}
                style={styles.image}
            />
        </View>
        </ScrollView>
    );
};

export default Logo;


const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    image:{
        width: 250,
        height: 80,
        resizeMode: "contain",
    }
})