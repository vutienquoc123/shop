import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/home/home'
import ProfileScreen from '../views/profile/Profile'
import {View, Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Button
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();
function Logo() {
    return (  
        <Image
        style={{
          resizeMode: 'stretch',
          width: 160,
          height: 50,
        }}
        source={require('../assets/img/Logo.png')}
        />
    );
  }
function HeaderRight(){
    
}  
export const HomeStackScreen = ({navigation}) => {
    // console.log(navigation)
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
              height: 60,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            // headerTitleAlign: 'center',
          }}>
            <Stack.Screen 
            name="home" 
            component={HomeScreen} 
            options={{ 
                headerLeft: ()=> (
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{ width: 50,textAlign:'center'}}>
                        <Image
                             style={{
                                height:50,width:50
                             }}
                            source={require('../assets/img/menu1.png')}
                        />
                    </TouchableOpacity>
                ),
                headerTitle :() => <Logo/>

             }}
            />
        </Stack.Navigator>
    );
}
export const ProfileStackScreen = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

// export const ProfileStackScreen = ({navigtion})=>{
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="profile" component={ProfileScreen} />
//         </Stack.Navigator>
//     );
// }