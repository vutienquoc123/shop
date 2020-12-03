import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../Drawer/drawerContent';
import {HomeStackScreen,MapStack} from './stack';

const AppContainer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer >
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
        {/* <Drawer.Screen name="Map" component={MapStack} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
