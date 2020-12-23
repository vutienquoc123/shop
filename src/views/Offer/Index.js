import React,{useState} from 'react';
import {View, Text,Image,Dimensions,StyleSheet,TouchableOpacity,ScrollView,Clipboard} from 'react-native';

export default function OfferComponent(data){
    console.log(data);
    
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [copy,setCopy]= useState('Copy')
    const copyToClipboard = () => {
      // Clipboard.setString('RAMADAN15')
      setCopy('copied')
    }
    setTimeout(()=>{
        setCopy('Copy')
    }, 5000)
    return(
    <ScrollView style = {styles.container}>
      {data.data.coupons.map((e,i)=>(
       <View key={i} style={[styles.items,{height:HEIGHT*0.4 }]}>
        <Image
         source={{
          uri:e.image
        }}
        style={{resizeMode: 'stretch',height: HEIGHT*0.32}}
        />
        <View style={styles.footItem}>
          <Text style={styles.Text}>{e.code}</Text>
          <TouchableOpacity onPress={() => copyToClipboard()}>
            <Text style={styles.Copy}>{copy}</Text>
          </TouchableOpacity>
        </View>
      </View>
     ))} 
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {flex: 1,},
    items:{margin:25,backgroundColor:'white',borderRadius:5},
    footItem:{flex: 1,flexDirection: 'row',justifyContent:'space-between',alignItems: 'center',marginHorizontal:15},
    Text:{fontSize:20},
    Copy:{color:'#009e7f',fontSize:15},
})