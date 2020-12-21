/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
// import {Provider} from 'react-redux';
// import AppContainer from './src/navigation/index';
import {HomeStackScreen} from './src/navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ProfileStackScreen} from './src/navigation/stack';
import DrawerContent from './src/Drawer/drawer';
import CheckoutScreen from './src/views/checkout/Checkout';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import store from './src/reducer/store';
//import apolloclient
import { ApolloProvider } from '@apollo/client';
import client from './src/apollo/index';
const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="Checkout" component={CheckoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    {/* </Provider> */}
    </ApolloProvider>
  );
};

export default App;
