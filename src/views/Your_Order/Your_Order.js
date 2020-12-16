import React,{useState} from 'react';
import {ScrollView,StyleSheet,View,Text,TouchableOpacity,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const DetailOrder= () => {
  const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

   return(
     <View style={{ backgroundColor:'white',marginTop:-20,marginHorizontal:20,borderColor:'#f7f7f7',borderWidth:1,marginBottom:20 }}> 
       <View style={{padding:20,borderBottomWidth:1,borderColor:'#f7f7f7',marginTop:10}}>
         <Text style={{fontSize:20,fontWeight:'bold'}}>Delivery Address</Text>
         <Text style={{ fontSize:20,opacity:0.7,marginTop:10 }}>1756  Roy Alley, GIRARDVILLE, Pennsylvania</Text>
       </View>
       <View style={{flex: 1,flexDirection:'column',}}>
         <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20 ,opacity:0.7 }}>Subtotal</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20 }}>$200</Text>
          </View>
         </View>
         <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20 ,opacity:0.7 }}>Discount</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20 }}>$0</Text>
          </View>
         </View>
         <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20 ,opacity:0.7 }}>Delivery Fee</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20 }}>$49.7</Text>
          </View>
         </View>
         <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',padding:20}}>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20 ,fontWeight: 'bold' }}>Total</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
              <Text style={{ fontSize:20,fontWeight: 'bold' }}>$249.7</Text>
          </View>
         </View>
       </View>
       <View style={{flex: 1,flexDirection:'column',borderColor:'#f1f1f1',borderTopWidth:1}}>
          <View style={{flex: 1,flexDirection:'row',marginHorizontal:20,marginTop:20}}>
          <Icon
            name="checkmark-circle"
            size={60}  
            style={{ color:'#009e7f' }}
            />
            <Text style={{fontSize:20,fontWeight: 'bold',marginTop:15,marginLeft:20}}>Order Received</Text>
          </View>
          <View style={{height:40,borderLeftWidth:4,borderColor:'#009e7f',marginHorizontal:46,marginTop:-10}}></View>
          <View style={{flex: 1,flexDirection:'row',marginHorizontal:20,marginTop:-10}}>
          <Icon
            name="checkmark-circle"
            size={60}  
            style={{ color:'#009e7f' }}
            />
            <Text style={{fontSize:20,fontWeight: 'bold',marginTop:15,marginLeft:20}}>Order On The Way</Text>
          </View>
          <View style={{height:20,borderLeftWidth:4,borderColor:'#009e7f',marginHorizontal:46,marginTop:-10}}></View>
          <View style={{height:20,borderLeftWidth:4,borderColor:'#D8D8D8',marginHorizontal:46}}></View>
          <View style={{flex: 1,flexDirection:'row',marginHorizontal:20,marginTop:-10,marginBottom:20}}>
          <View style={{height:50,width:50,borderRadius:25,borderWidth:1,borderColor:'#009e7f',marginTop:8,marginLeft:5,justifyContent: 'center'}}>
            <Text style={{ color:'#009e7f',fontSize:20,textAlign:'center' }}>3</Text>
          </View>
            <Text style={{fontSize:20,fontWeight: 'bold',marginTop:15,marginLeft:20}}>Order Delivered</Text>
          </View>
       </View>
       <ScrollView horizontal={true}>
         <View style={{ flex:1,flexDirection: 'column'}}>
          <View style={{ flexDirection: 'row',backgroundColor:'#f1f1f1',height:50,alignItems: 'center'}}>
              <View style={{width:WIDTH*0.3}}>
                <Text></Text>
              </View>
              <View style={{width:WIDTH*0.4}}>
                <Text style={{ fontSize:20}}>Items</Text>
              </View>
              <View style={{width:WIDTH*0.3}}>
                <Text style={{ fontSize:20,textAlign:'center'}}>Quantity</Text>
              </View>
              <View style={{width:WIDTH*0.2}}>
                <Text style={{ fontSize:20,textAlign:'center'}}>Frice</Text>
              </View>
          </View>
          <View style={{ flexDirection: 'row',height:80,alignItems: 'center',backgroundColor:'white',marginTop:20}}>
              <View style={{width:WIDTH*0.3}}>
                <Image
                  style={{height:70,width:80}}
                 source={{
                  uri: 'http://s3.amazonaws.com/redqteam.com/headless-image/banana.jpg',
                }}/>
              </View>
              <View style={{width:WIDTH*0.4}}>
                <Text style={{ fontSize:20,fontWeight: 'bold'}}>Banana</Text>
                <Text style={{ fontSize:18,opacity:0.6 }}>2lb</Text>
                <Text style={{ color:'#009e7f',fontSize:18 }}>$50</Text>
              </View>
              <View style={{width:WIDTH*0.3}}>
                <Text style={{ fontSize:20,textAlign:'center'}}>2</Text>
              </View>
              <View style={{width:WIDTH*0.2}}>
                <Text style={{ fontSize:20,textAlign:'center'}}>$100</Text>
              </View>
          </View>
          <View style={{ flex:1,flexDirection: 'row',height:80,alignItems: 'center',marginTop:20}}>
              <View style={{width:WIDTH*0.3}}>
                <Image
                 style={{height:70,width:80}}
                 source={{
                  uri: 'http://s3.amazonaws.com/redqteam.com/headless-image/onions.jpg',
                }}/>
              </View>
              <View style={{width:WIDTH*0.4}}>
                <Text style={{ fontSize:20,fontWeight: 'bold'}}>Onions</Text>
                <Text style={{ fontSize:18,opacity:0.6 }}>2lb</Text>
                <Text style={{ color:'#009e7f',fontSize:18 }}>$100</Text>
              </View>
              <View style={{width:WIDTH*0.3}}>
                <Text style={{ fontSize:20,textAlign:'center'}}>2</Text>
              </View>
              <View style={{width:WIDTH*0.2}}>
                <Text style={{ fontSize:20,textAlign:'center'}}>$100</Text>
              </View>
          </View>
          </View>
       </ScrollView>
     </View>
   ) 
}
export default function Your_Order({ navigation }) {
  const [numberOrder,SetNumberOrder] = useState(1);
  const [colorOrder,setColorOrder] = useState('#f7f7f7')
  function handleOrder(){
    SetNumberOrder(prevCount => prevCount + 1)
    if(numberOrder % 2 == 0){
      setColorOrder('#f7f7f7')
    }else{
      setColorOrder('white')
    }
  }
  return (
    <ScrollView style = {styles.container}>
        <TouchableOpacity style={[styles.orderView,{backgroundColor:colorOrder}]} onPress={handleOrder}>
          <View style={styles.headerView}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Order #1</Text>
          </View>
          <View style={styles.orderOnTheWay}>
            <Text style={styles.TextOrderWay}>Order On The Way</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Order Date:</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>7thApril 2020</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Delivery Time</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>13th April</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Total Price</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameOrder}>$ 249.7</Text>
          </View>
          </View>
        </TouchableOpacity>
        {numberOrder % 2 == 0 ? <DetailOrder/> : null}
        <TouchableOpacity style={styles.orderView}>
          <View style={styles.headerView}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Order #2</Text>
          </View>
          <View style={styles.orderOnTheWay}>
            <Text style={styles.TextOrderWay}>Order Received</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Order Date:</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>7thApril 2020</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Delivery Time</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>20th April</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Total Price</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameOrder}>$ 339</Text>
          </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.orderView}>
          <View style={styles.headerView}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Order #3</Text>
          </View>
          <View style={styles.orderOnTheWay}>
            <Text style={styles.TextOrderWay}>Order Delivered</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Order Date:</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>12thApril 2020</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameDetailOrder}>Delivery Time</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameDetailOrder}>17th April</Text>
          </View>
          </View>
          <View style={styles.contentOrder}>
           <View style={styles.ViewNameOrder}>
            <Text style={styles.NameOrder}>Total Price</Text>
          </View>
          <View style={styles.DetailOrder}>
            <Text style={styles.NameOrder}>$ 318</Text>
          </View>
          </View>
        </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white'
  },
  orderView:{
    flex: 1,
    margin:20,
    borderWidth:1,
    borderColor:'#f7f7f7',
    flexDirection:'column',
  },
  headerView: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    borderColor:'#f1f1f1',
  },
  orderOnTheWay:{
    height:50,
    backgroundColor:'#E3E9F7',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
    borderRadius:10
  },
  NameOrder: {
    fontSize:20,
    fontWeight:'bold',
  },
  TextOrderWay:{
    fontSize:18,
    color:'#2E70FA',
    padding:10
  },
  ViewNameOrder: {
    justifyContent: 'center',
    padding:20,
  },
  contentOrder: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  NameDetailOrder:{
    fontSize:20,
  },
  DetailOrder: {
    justifyContent: 'center',
    padding:20,
  }
})
