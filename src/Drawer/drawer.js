import React,{useEffect, useState} from 'react';
import { View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
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
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { deleteUser } from '../reducer/login/actions/userActions';
export default function DrawerContent({navigation},props) {
    const data = useSelector(state=>state.UserReducer.user)
    const dispatch = useDispatch();
    console.log(data,"data")  
    const [login,setLogin]= useState(data)
    useEffect(()=>{
        data && setLogin(data)
    },[data])

    console.log(login,"login")
    const handleSignOut =()=>{
        setLogin(null);
    }
    const [img, setImg] = useState({
        uri: 'https://img4.thuthuatphanmem.vn/uploads/2020/05/13/hinh-anh-anime-nu-ngau-dep-nhat_020159971.jpg'
      });
      const imageHandler = () => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImg({ profileImg: reader.result });
          }
        };
        // reader.readAsDataURL(e.target.files[0]);
        console.log("a", img);
      };
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <TouchableOpacity
                        onPress={() => navigation.closeDrawer()}
                        style={{ width: 50,textAlign:'center',marginTop:10}}>
                        <Icon
                            name="close"
                            size={40}  
                            style={{ color:'gray' }}
                        />
                        </TouchableOpacity>
                        {login !=null?
                        <View style={{flexDirection:'row',backgroundColor: '#f7f7f7',height:120,marginTop:10}}>
                            <TouchableOpacity onPress={imageHandler}>
                            <Image 
                                source={img}
                                style={{width: 80, height: 80, borderRadius: 40,marginLeft:20,marginTop:20}}
                            />
                            </TouchableOpacity>
                            <View style={{marginLeft:15, flexDirection:'column',marginTop:30}}>
                                <Title style={styles.title}>{data.me.name}</Title>
                                <Caption style={styles.caption}>{data.me.email}</Caption>
                            </View>
                        </View>:
                        <View style={{flexDirection:'row',backgroundColor: '#f7f7f7',height:120,marginTop:10,justifyContent: 'center',alignItems: 'center'}}>
                            <TouchableOpacity style={{ height:60,borderRadius:10,width:150,backgroundColor: "#009e7f",justifyContent: 'center',alignItems: 'center'}} onPress={() => {navigation.navigate('Login')}}>
                                <Text style={{ fontSize:20,fontWeight:'bold',color:'white' }}>Join in</Text>
                            </TouchableOpacity>
                        </View>
                        }
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate('home')}}
                        />
                        {login !=null?
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"                        
                                onPress={() => {navigation.navigate('Profile')}}            
                        />:
                        <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Profile"                        
                            onPress={() => {navigation.navigate('Login')}}            
                        />
                        }
                        {login !=null?
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="cart-arrow-down" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Checkout"
                            onPress={() => {navigation.navigate('Checkout')}}
                        />:<DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="cart-arrow-down" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Checkout"
                        onPress={() => {navigation.navigate('Login')}}
                    />}
                        {login !=null?
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="cart-plus" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Checkout Alternative"
                            onPress={() => {navigation.navigate('Checkout_Alternative')}}
                        />:<DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="cart-plus" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Checkout Alternative"
                        onPress={() => {navigation.navigate('Login')}}
                    />}
                    {login !=null?
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="order-bool-ascending-variant" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Your Order"
                            onPress={() => {navigation.navigate('Your_Order')}}
                        />:<DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="order-bool-ascending-variant" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Your Order"
                        onPress={() => {navigation.navigate('Login')}}
                    />}
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="order-bool-descending-variant" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Order Invoice"
                            onPress={() => {navigation.navigate('Order_Invoice')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icons 
                                name="customerservice" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Term and Services"
                            onPress={() => {navigation.navigate('Term_Services')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="police-badge" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Privacy Policy"
                            onPress={() => {navigation.navigate('Privacy_Policy');navigation.navigate('home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="help-circle-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Need Help"
                            onPress={() => {navigation.navigate('Need_Help')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="offer" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Offer"
                            onPress={() => {navigation.navigate('Offer')}}
                            style={{ height:80 ,borderBottomWidth: 1,
                                borderColor: '#e7e6e6',}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Your Accout Setting"
                            onPress={() => {navigation.navigate('Profile')}}
                            style={{ marginTop:30 }}
                        />
                         <DrawerItem 
                         icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                        )}
                        label="Sign Out"
                        onPress={()=>{handleSignOut();navigation.closeDrawer();dispatch(deleteUser(data))}}
                         />
          
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            {/* <Drawer.Section style={{ marginTop:20 }}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="Your Accout Setting" 
                        color={color}
                        size={size}
                        />
                    )}
                    // title="account-outline
                    label="Offer"
                    onPress={() => {navigation.navigate('Profile')}}
                        />
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section> */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 15,
      color: 'black'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });