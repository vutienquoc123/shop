import React from 'react';
import { StyleSheet, View ,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Form from './component/Form';
import Logo from './component/Logo';

import logo from '../../assets/img/Logo.png'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Logo image={logo}/>
            <Form navigation={navigation}/>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        // alignItems : "center",
        // justifyContent: "center",
        backgroundColor:'white',
        flex: 1,
    }
})