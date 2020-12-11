import React from 'react';
// import {Provider} from 'react-redux';
// import AppContainer from './src/navigation/index';
import {HomeStackScreen} from './src/navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {ProfileStackScreen} from './src/navigation/stack';
import {CheckoutStackScreen} from './src/navigation/stack'
import {CheckoutAlternativeStackScreen} from './src/navigation/stack'
import DrawerContent from './src/Drawer/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer >
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Checkout" component={CheckoutStackScreen} />
      <Drawer.Screen name="Checkout_Alternative" component={CheckoutAlternativeStackScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default App;
