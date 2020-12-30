import React from 'react';
// import {Provider} from 'react-redux';
// import AppContainer from './src/navigation/index';
import {HomeStackScreen} from './stack';
import { NavigationContainer } from '@react-navigation/native';
import {ProfileStackScreen} from './stack';
import {CheckoutStackScreen} from './stack'
import {CheckoutAlternativeStackScreen} from './stack'
import {OrderStackScreen} from './stack'
import {OrderInvoiceStackScreen} from './stack'
import {ServiceStackScreen} from './stack'
import {NeedHelpStackScreen} from  './stack'
import {OfferStackScreen} from './stack'
import {PolicyStackScreen} from './stack'
import {LoginStackScreen} from './stack'
import DrawerContent from '../Drawer/drawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
const AppContainer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer >
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Checkout" component={CheckoutStackScreen} />
      <Drawer.Screen name="Checkout_Alternative" component={CheckoutAlternativeStackScreen}/>
      <Drawer.Screen name="Your_Order" component={OrderStackScreen} />
      <Drawer.Screen name="Order_Invoice" component={OrderInvoiceStackScreen} />
      <Drawer.Screen name="Term_Services" component={ServiceStackScreen} />
      <Drawer.Screen name="Need_Help" component={NeedHelpStackScreen} />
      <Drawer.Screen name="Offer" component={OfferStackScreen} />
      <Drawer.Screen name="Privacy_Policy" component={PolicyStackScreen}/> 
      <Drawer.Screen name="Login" component={LoginStackScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default AppContainer;
