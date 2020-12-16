import React,{useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/home/home'
import ProfileScreen from '../views/profile/Profile'
import CheckoutScreen from '../views/checkout/Checkout'
import CheckoutAlternativeScreen from '../views/Checkout_Alternative/Checkout_Alternative'
import orderScreen from '../views/Your_Order/Your_Order'
import orderInvoiceScreen from '../views/Order_Invoice/Order_Invoice'
import serviceScreen from '../views/Term_Services/Term_Services'
import needHelpScreen from '../views/Need_Help/Need_Help'
import policyScreen from '../views/Privacy_Policy/Privacy_Policy'
import offerScreen from '../views/Offer/Offer'
import {View, Image, StyleSheet, Dimensions,TouchableOpacity,Modal,Text} from 'react-native';
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
  function DropDown()  { 
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
  const [visible,setVisible]= useState({show:false})
  const [state,setState] = useState({
        img:require('../assets/img/viet_nam.png')
      })
  function MY() {
      return (  
          <Image
          style={{
            resizeMode: 'stretch',
            width: 50,
            height: 34,
          }}
          source={require('../assets/img/my.png')}
          />
      );
    }
    function VN() {
      return (  
          <Image
          style={{
            resizeMode: 'stretch',
            width: 50,
            height: 34,
          }}
          source={require('../assets/img/viet_nam.png')}
          />
      );
    }
  return (
      <View>
      <Modal transparent={true}
      visible={visible.show}> 
            <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={()=>{setVisible({show:false})}}>
               <View style={{backgroundColor:'white',width:WIDTH*0.4,height:HEIGHT*0.15,justifyContent: 'center',alignItems: 'center',position:'absolute',right:5,top:60,borderWidth:1,borderColor:'#eae9e9'}}>
                  <TouchableOpacity style={{ flex:1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center' ,borderBottomWidth:1,width:160,borderColor:'#f7f7f7'}} onPress={()=>{setVisible({show:false});setState({ img:require('../assets/img/viet_nam.png')})}}>
                    <VN/>
                    <Text style={{fontSize:20,marginLeft:5}}>Việt Nam</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex:1,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',width:160}} onPress={()=>{setVisible({show:false});setState({ img:require('../assets/img/my.png')})}}>
                    <MY/>
                    <Text style={{fontSize:20,marginLeft:5}}> America </Text>
                  </TouchableOpacity>
               </View>
            </TouchableOpacity>
         </Modal>
      <TouchableOpacity  onPress={()=>{setVisible({show:true})}} style={{ marginRight:10 }} >
        <Image
        style={{
          resizeMode: 'stretch',
          width: 50,
          height: 34,
        }}
        source={state.img}
        />
        </TouchableOpacity>
      </View>
  );
  }
 
export const HomeStackScreen = ({navigation}) => {
    // console.log(navigation)
    return (
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
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
                headerTitle :() => <Logo/>,
                headerRight :() => <DropDown/>

             }}
            />
        </Stack.Navigator>
    );
}
export const ProfileStackScreen = ({navigation}) => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            height: 80,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerTitleAlign: 'center',
        }}>
            <Stack.Screen name="Profile" component={ProfileScreen} 
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
                headerTitle :() => <Logo/>,
                headerRight :() => <DropDown/>
             }}
             />
        </Stack.Navigator>
    );
}
export const CheckoutStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Checkout" component={CheckoutScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}
export const CheckoutAlternativeStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Checkout_Alternative" component={CheckoutAlternativeScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}
export const OrderStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Your_Order" component={orderScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}
export const OrderInvoiceStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Order_Invoice" component={orderInvoiceScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}
export const ServiceStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Term_Services" component={serviceScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}
export const NeedHelpStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Need_Help" component={needHelpScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}
export const OfferStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Offer" component={offerScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}
export const PolicyStackScreen = ({navigation}) => {
  return (
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          height: 80,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerTitleAlign: 'center',
      }}>
          <Stack.Screen name="Privacy_Policy" component={policyScreen} 
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
              headerTitle :() => <Logo/>,
              headerRight :() => <DropDown/>
           }}
           />
      </Stack.Navigator>
  );
}