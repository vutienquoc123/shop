import React,{useState} from 'react';
import {View, Text,StyleSheet,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
function Content(){
  return(
    <View style={{marginHorizontal:25,backgroundColor:'white' }}>
      <Text style={{padding:20,fontSize:18,opacity:0.6}}>Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.</Text>
    </View>
  )
}
export default function Need_Help({ navigation }) {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const [numberOrder,SetNumberOrder] = useState(1);
  const [content2,SetContent2] = useState(1)
  const [content3,SetContent3] = useState(1)
  const [content4,SetContent4] = useState(1)
  function handleOrder(){
    SetNumberOrder(prevCount => prevCount + 1)
  }
  function handleOrder1(){
    SetContent2(prevCount => prevCount + 1)
  }
  function handleOrder2(){
    SetContent3(prevCount => prevCount + 1)
  }
  function handleOrder3(){
    SetContent4(prevCount => prevCount + 1)
  }
  return (
    <ScrollView style = {styles.container} >
      <Text style={styles.title}>F.A.Q</Text>
      <TouchableOpacity style={styles.items} onPress={handleOrder}>
        <View style={{ height:100,width:WIDTH*0.7,justifyContent: 'center',marginLeft:20}}>
        <Text style={styles.text}>How to contact with Customer Services</Text>
        </View>
        {numberOrder %2 == 0 ? <View style={{ height:3,width:15,backgroundColor:'black',marginRight:20 }}></View>: <Text style={styles.add}>+</Text>}
      </TouchableOpacity>
      {numberOrder %2 ==0 ? <Content/> : null}
      <TouchableOpacity style={styles.items} onPress={handleOrder1}>
        <View style={{ height:100,width:WIDTH*0.7,justifyContent: 'center',marginLeft:20}}>
        <Text style={styles.text}>App installation failed, how to update system information?</Text>
        </View>
        {content2 %2 == 0 ? <View style={{ height:3,width:15,backgroundColor:'black',marginRight:20 }}></View>: <Text style={styles.add}>+</Text>}
      </TouchableOpacity>
      {content2 %2 ==0 ? <Content/> : null}
      <TouchableOpacity style={styles.items} onPress={handleOrder2}>
        <View style={{ height:100,width:WIDTH*0.7,justifyContent: 'center',marginLeft:20}}>
        <Text style={styles.text}>Website reponse taking time, how to improve?</Text>
        </View>
        {content3 %2 == 0 ? <View style={{ height:3,width:15,backgroundColor:'black',marginRight:20 }}></View>: <Text style={styles.add}>+</Text>}
      </TouchableOpacity>
      {content3 %2 ==0 ? <Content/> : null}
      <TouchableOpacity style={styles.items} onPress={handleOrder3}>
        <View style={{ height:100,width:WIDTH*0.7,justifyContent: 'center',marginLeft:20}}>
        <Text style={styles.text}>How do I create a account?</Text>
        </View>
        {content4 %2 == 0 ? <View style={{ height:3,width:15,backgroundColor:'black',marginRight:20 }}></View>: <Text style={styles.add}>+</Text>}
      </TouchableOpacity>
      {content4 %2 ==0 ? <Content/> : null}
      <View style={styles.end}>
            <Text style={styles.endText}>Go to</Text>
            <TouchableOpacity>
            <Text style={styles.endLink}> Pickbazar </Text>
            </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1,},
  title:{fontSize:30,fontWeight:'bold',textAlign:'center',marginTop:40,marginBottom:15},
  items:{flexDirection:'row',marginHorizontal:25,marginTop:15,justifyContent:'space-between',backgroundColor:'white',alignItems: 'center'},
  text:{fontSize:20,fontWeight:'bold'},
  add:{fontSize:30 ,marginRight:20},
  end:{
    flexDirection: 'row',
    flex: 1,
    marginTop:50,
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom:30
  },
  endText:{fontSize:15},
  endLink:{fontSize:15,
    color: '#009e7f',}
})