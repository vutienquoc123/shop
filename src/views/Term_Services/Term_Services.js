import React,{useState} from 'react';
import {View, Text,ScrollView,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

import Login from '../login/Login';
import client from '../../apollo/index';
import { GET_PRODUCTS } from '../../graphql/query/products';
export default function Term_Services({ navigation }) {
  const [x,setX] = useState(0)
  const onScroll = (e) =>{
    setX(e.nativeEvent.contentOffset.y)
    console.log(x)
  }

  function ListMenu() {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    console.log(HEIGHT,"aaa")
    return (  
      <View style={{ zIndex:1,position: 'absolute',backgroundColor:'white',width:WIDTH*0.98,height:HEIGHT*0.42}}>
        { x >HEIGHT*0.52 && x < HEIGHT *0.92? <Text style={{ fontSize:20,marginTop:20,marginHorizontal:10,color: '#009e7f' }}>PURPOSE</Text>:<Text style={{ fontSize:20,marginTop:20,marginHorizontal:10}}>PURPOSE</Text> }
        { x >HEIGHT*0.92 && x < HEIGHT *1.14? <Text style={{ fontSize:20,marginTop:20,marginHorizontal:10,color: '#009e7f' }}>WHAT IS PERSONAL</Text>:<Text style={{ fontSize:20,marginTop:20,marginHorizontal:10}}>WHAT IS PERSONAL</Text> }
        { x >HEIGHT*1.14 && x < HEIGHT *1.4? <Text style={{ fontSize:20,marginTop:20,marginHorizontal:10,color: '#009e7f' }}>PERSONAL DATA COLLECTED</Text>:<Text style={{ fontSize:20,marginTop:20,marginHorizontal:10}}>PERSONAL DATA COLLECTED</Text> }
        { x >HEIGHT*1.4 && x < HEIGHT *1.7? <Text style={{ fontSize:20,marginTop:20,marginHorizontal:10,color: '#009e7f' }}>ACCESSING YOUR PERSONAL DATA</Text>:<Text style={{ fontSize:20,marginTop:20,marginHorizontal:10}}>ACCESSING YOUR PERSONAL DATA</Text> }
        { x >HEIGHT*1.7 && x < HEIGHT *1.9? <Text style={{ fontSize:20,marginTop:20,marginHorizontal:10,color: '#009e7f' }}>COMPLAINTS</Text>:<Text style={{ fontSize:20,marginTop:20,marginHorizontal:10}}>COMPLAINTS</Text> }
        { x >HEIGHT*1.9 ? <Text style={{ fontSize:20,marginTop:20,marginHorizontal:10,color: '#009e7f' }}>OWNERS AND DATA CONTROLLER</Text>:<Text style={{ fontSize:20,marginTop:20,marginHorizontal:10}}>OWNERS AND DATA CONTROLLER</Text> }
      </View>
    );
  }
  return (
    <View style={{ flex:1 }}>
    {x >HEIGHT*0.19 ? <ListMenu/> : null}
    <ScrollView style = {styles.container} nestedScrollEnabled = {true} onScroll={onScroll}>
      <View style={styles.headerView}>
        <Text style={styles.title}>Term of Services</Text>
        <Text style={styles.update}>Last update:01/01/2020</Text>
        <View style={styles.listTitle}>
        {x < HEIGHT*0.19 ? <ListMenu/> : null}
        </View>
      </View>
      <View style={[styles.content,{marginTop:HEIGHT*0.4}]}>
        <Text style={styles.Purpose}></Text>
        <Text style={styles.Purpose}>Purpose</Text>
        <Text style={styles.textContent}>Little &amp; Big is committed to protecting your privacy because we are committed to valuing people. Our Privacy Policy below sets out how your personal information is collected, used and protected. The&nbsp;<TouchableOpacity><Text>Demo Country Privacy Principles</Text></TouchableOpacity></Text>
        <Text style={styles.textContent}>This Privacy Policy describes our policies and procedures on the collection, holding, use and disclosure of your personal information and should be read together with our&nbsp;Terms and Conditions. By providing your personal information you consent to our collection, use and disclosure of that information in accordance with this Privacy Policy.</Text>
        <Text style={styles.Purpose}>What is Personal Data</Text>
        <Text style={styles.textContent}>When used in this Policy, "personal information" has the meaning given in the Privacy Act. Generally, it means any information or an opinion that could be used to identify you.</Text>
        <Text style={styles.Purpose}>Personal Data Collected</Text>
        <Text style={styles.textContent}>Personal Data collected for the following purposes and using the following services:</Text>
        <Text style={styles.text}>Google Analytics: Cookies; Usage Data</Text>
        <Text style={styles.text}>Contact form: email address; first name; phone number</Text>
        <Text style={styles.text}>Mailing list or newsletter: email address; first name</Text>
        <Text style={styles.Purpose}>Accessing your Personal Data</Text>
        <Text style={styles.textContent}>You may request access to your personal information collected by us, and ask that we correct that personal information. You can ask for access or correction by contacting us and we will usually respond within 30 days. If we refuse to give you access to, or correct, your personal information, we will notify you in writing setting out the reasons.</Text>
        <Text style={styles.Purpose}>Compaints</Text>
        <Text style={styles.textContent}>If you believe your privacy has been breached or you have a complaint about how we have handled your personal information, please contact us in writing.  We will respond within a reasonable period (usually within 30 days).</Text>
        <Text style={styles.Purpose}>Owner and Data Controller</Text>
        <Text style={styles.textContent}>The Commons</Text>
        <Text style={styles.textContent}>20-40 demo St,</Text>
        <Text style={styles.textContent}>Jon doe NSW 2008</Text>
        <Text style={styles.textContent}>Country</Text>
        <Text style={styles.textContent}>Email: demo@demo.com</Text>
        <View style={styles.foot}></View>
      </View>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1,backgroundColor:'white'},
  headerView:{padding:10,marginTop:20},
  title:{fontSize:30,color:'#009e7f',fontWeight:'bold',marginTop:50},
  update:{fontSize:17,marginTop:20},
  listTitle:{marginTop:40},
  titleContent:{fontSize:20,marginTop:20},
  content:{flex:1,padding:10},
  Purpose:{fontSize:30,fontWeight:'bold',marginTop:30,marginBottom:20},
  textContent:{fontSize:18,marginTop:10,opacity:0.8},
  foot:{
    height:HEIGHT*0.3,
  },
  text:{fontSize:18,marginLeft:30},
})