import React,{useState} from 'react';
import {View,Text,ScrollView,StyleSheet,Image,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/MaterialIcons';
function Next() {
  return (  
     <View style={{ height:50,width:50,marginRight:-10}}>
        <View style={{height:50,width:50,backgroundColor: 'white',borderRadius:25,borderWidth:1,borderColor:'#dddbdb',alignItems: 'center',justifyContent: 'center'}}>
        <Icon
        name="keyboard-arrow-right" 
        color= '#009e7f'
        size={40}
        />
        </View>
     </View>
  );
}
function Prev() {
  return (  
     <View style={{ height:50,width:50,marginLeft:-10}}>
        <View style={{height:50,width:50,backgroundColor: 'white',borderRadius:25,borderWidth:1,borderColor:'#dddbdb',alignItems: 'center',justifyContent: 'center'}}>
        <Icon
        name="keyboard-arrow-left" 
        color= '#009e7f'
        size={40}
        />
        </View>
     </View>
      
  );
}
export default function Checkout({ navigation }) {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const [colorCard,setColorCard] = useState('white')
  const handleCard = () =>{
    if(colorCard=='white')
     {setColorCard('#009e7f') }
 }
 const dishandledCard = () =>{
  if(colorCard=='#009e7f')
   {setColorCard('white')}
}
  return (
    <ScrollView  style = {styles.container}>
      <View style = {styles.yourOrder}>
        <Text style = {styles.TitleView}>Your Order</Text>
        <View style={styles.order}>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>Lemon |<Text style={styles.unit}> 12pc(s) </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>Lime |<Text style={styles.unit}> 12pc(s) </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>Cherry |<Text style={styles.unit}> 0.5 lb </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>Celery Stick |<Text style={styles.unit}> 1 lb </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
        </View>
        <View style = {styles.totalContent}>
          <View style = {styles.itemTotal}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameItem}>Sub Total</Text>
            </View>
           <View>
            <Text style={styles.nameItem}>$8.20</Text>
          </View>
          </View>
          <View style = {styles.itemTotal}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameItem}>Delivery Fee</Text>
            </View>
           <View>
            <Text style={styles.nameItem}>$0.00</Text>
          </View>
          </View>
          <View style = {styles.itemTotal}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameItem}>Discount</Text>
            </View>
           <View>
            <Text style={styles.nameItem}>$0.00</Text>
          </View>
          </View>
          <View style = {styles.Total}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameTotal}>Total(lncl.VAT)</Text>
            </View>
           <View>
            <Text style={styles.nameTotal}>$8.20</Text>
          </View>
          </View>
        </View>
      </View>
      <View style={styles.DeliveryAddress}>
          <View style={styles.HeaderAddress}>
            <View style={styles.leftHeader}>
            <View style={styles.numberBackground}>
               <Text style={styles.number}>1</Text>
            </View>
            <View style={styles.AddressTitle}>
            <Text style={styles.TitleAddress}> Delivery Address</Text>
            </View>
            </View>
            <TouchableOpacity style={{ justifyContent:'center',marginRight:-10 }}>
              <Text style={styles.add}>+Add Address</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.address}>
       <View style={[styles.edit_delete,{top:0}]}>
            <TouchableOpacity>
             <View style={styles.edit}>
                  <Icon
                  name="edit" 
                  color='white'
                  size={20}
                  />
             </View>
            </TouchableOpacity>
            <TouchableOpacity>
               <View style={styles.delete}>
                  <Icon
                  name="close" 
                  color='white'
                  size={20}
                  />
               </View>
            </TouchableOpacity>
         </View>
             <Text style={styles.nameAddress}>Home</Text>
             <Text style={styles.contentAddress}>27 Street, 2569 Heritage Road Visalia, CA 93291</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.address}>
       <View style={[styles.edit_delete,{top:0}]}>
            <TouchableOpacity>
             <View style={styles.edit}>
                  <Icon
                  name="edit" 
                  color='white'
                  size={20}
                  />
             </View>
            </TouchableOpacity>
            <TouchableOpacity>
               <View style={styles.delete}>
                  <Icon
                  name="close" 
                  color='white'
                  size={20}
                  />
               </View>
            </TouchableOpacity>
         </View>
             <Text style={styles.nameAddress}>Office</Text>
             <Text style={styles.contentAddress}>33 Baker Street, Crescent Road, CA 65746</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.DeliverySchedule}>
          <View style={styles.HeaderAddress}>
            <View style={styles.leftHeader}>
            <View style={styles.numberBackground}>
               <Text style={styles.number}>2</Text>
            </View>
            <View style={styles.AddressTitle}>
            <Text style={styles.TitleAddress}> Delivery Chedule</Text>
            </View>
            </View>
          </View>
          <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>Expess-Delivery</Text>
             <Text style={styles.timeContent}>90 min express delivery</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>8.00am-11.00am</Text>
             <Text style={styles.timeContent}>8.00 AM - 11.00 AM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>11.00am - 2.00pm</Text>
             <Text style={styles.timeContent}>11.00 AM - 2.00 PM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>2.00Pm-5.00pm</Text>
             <Text style={styles.timeContent}>2.00 AM - 5.00 pM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>5.00pm-8.00pm</Text>
             <Text style={styles.timeContent}>5.00 PM - 8.00 PM</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
             <Text style={styles.timeTitle}>Next Day</Text>
             <Text style={styles.timeContent}>Next Day</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.DeliverySchedule}>
          <View style={styles.HeaderAddress}>
            <View style={styles.leftHeader}>
            <View style={styles.numberBackground}>
               <Text style={styles.number}>3</Text>
            </View>
            <View style={styles.AddressTitle}>
            <Text style={styles.TitleAddress}> Contact Number</Text>
            </View>
            </View>
            <TouchableOpacity style={{ justifyContent:'center',marginRight:-10 }}>
              <Text style={styles.add}>+Add Contact</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.timeDelivery}>
          <View style={[styles.edit_delete,{top:0}]}>
            <TouchableOpacity>
             <View style={styles.edit}>
                  <Icon
                  name="edit" 
                  color='white'
                  size={20}
                  />
             </View>
            </TouchableOpacity>
            <TouchableOpacity>
               <View style={styles.delete}>
                  <Icon
                  name="close" 
                  color='white'
                  size={20}
                  />
               </View>
            </TouchableOpacity>
          </View>
             <Text style={styles.timeTitle}>Primary</Text>
             <Text style={styles.timeContent}>202-555-0191</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.timeDelivery}>
         <View style={[styles.edit_delete,{top:0}]}>
            <TouchableOpacity>
             <View style={styles.edit}>
                  <Icon
                  name="edit" 
                  color='white'
                  size={20}
                  />
             </View>
            </TouchableOpacity>
            <TouchableOpacity>
               <View style={styles.delete}>
                  <Icon
                  name="close" 
                  color='white'
                  size={20}
                  />
               </View>
            </TouchableOpacity>
         </View>
             <Text style={styles.timeTitle}>Secondary</Text>
             <Text style={styles.timeContent}>202-555-0701</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.DeliverySchedule}>
          <View style={styles.HeaderAddress}>
            <View style={styles.leftHeader}>
            <View style={styles.numberBackground}>
               <Text style={styles.number}>4</Text>
            </View>
            <View style={styles.AddressTitle}>
            <Text style={styles.TitleAddress}> Payment Option</Text>
            </View>
            </View>
            <TouchableOpacity style={{ justifyContent:'center',marginRight:-10 }}>
              <Text style={styles.add}>+Add Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.payment}>
          <Swiper style={styles.wrapper} 
            showsButtons={true} 
            showsPagination={false}
            nextButton={<Next/>}
            prevButton={<Prev/>}
            onMomentumScrollEnd={dishandledCard}>  
        <TouchableOpacity  style={styles.card} onPress={handleCard}>
        <Image
          style={{
            resizeMode: 'stretch',height:180,width:WIDTH*0.75,borderColor:colorCard,borderWidth:1}}
          source={require('../../assets/img/card-front.png')}
          />
         <Image
          style={{
            resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
          source={require('../../assets/img/visa.png')}
          />
          <View style={styles.contentCard}>
             <TouchableOpacity  style={{position:'absolute',top:2,right:0,backgroundColor:'red',borderRadius:15,height:30,width:30,justifyContent:'center',alignItems:'center'}}>
                  <Icon
                  name="close" 
                  color='white'
                  size={25}
                  />
               </TouchableOpacity >
             <Text style={styles.cardNumber}>Card Number</Text>
             <View style={{  flexDirection: 'row',justifyContent: 'space-between',width:WIDTH*0.75,left:20,marginTop:15 }}>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>1234</Text>
             </View>
             <Text  style={styles.nameUserCard}>VU TIEN QUOC</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleCard}>
        <Image
          style={{
            resizeMode: 'stretch',height:180,width:WIDTH*0.75,borderColor:colorCard,borderWidth:1}}
          source={require('../../assets/img/card-front.png')}
          />
          <Image
          style={{
            resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
          source={require('../../assets/img/master.png')}
          />
          <View style={styles.contentCard}>
          <TouchableOpacity style={{position:'absolute',top:2,right:0,backgroundColor:'red',borderRadius:15,height:30,width:30,justifyContent:'center',alignItems:'center'}}>
                  <Icon
                  name="close" 
                  color='white'
                  size={25}
                  />
               </TouchableOpacity>
             <Text style={styles.cardNumber}>Card Number</Text>
             <View style={{  flexDirection: 'row',justifyContent: 'space-between',width:WIDTH*0.75,left:20,marginTop:15 }}>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>1234</Text>
             </View>
             <Text  style={styles.nameUserCard}>VU TIEN QUOC</Text>
          </View>
        </TouchableOpacity >
        <TouchableOpacity style={styles.card} onPress={handleCard}>
        <Image
          style={{
            resizeMode: 'stretch',height:180,width:WIDTH*0.75,borderColor:colorCard,borderWidth:1}}
          source={require('../../assets/img/card-front.png')}
          />
           <Image
          style={{
            resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
          source={require('../../assets/img/paypal.png')}
          />
          <View style={styles.contentCard}>
            <TouchableOpacity  style={{position:'absolute',top:2,right:0,backgroundColor:'red',borderRadius:15,height:30,width:30,justifyContent:'center',alignItems:'center'}}>
                  <Icon
                  name="close" 
                  color='white'
                  size={25}
                  />
            </TouchableOpacity >
             <Text style={styles.cardNumber}>Card Number</Text>
             <View style={{  flexDirection: 'row',justifyContent: 'space-between',width:WIDTH*0.75,left:20,marginTop:15 }}>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>1234</Text>
             </View>
             <Text  style={styles.nameUserCard}>VU TIEN QUOC</Text>
          </View>
        </TouchableOpacity>
      </Swiper>
      </View>
      <View style={styles.end}>
           <View style={styles.voucher}>
           <TextInput style = {{ width:WIDTH*0.4,
                                 height: 60,
                                 borderWidth:1,
                                 borderColor:'#afaeae',
                                 marginBottom:10,
                                 borderRadius:5,
                                 backgroundColor:'#f7f7f7' }}
             underlineColorAndroid = "transparent"
             placeholder = "Enter Voucher"
             autoCapitalize = "none"
            //  onChangeText = {handleTitleAddress}
             />
             <TouchableOpacity style={[styles.buttonApply,{width:WIDTH*0.3}]}>
               <Text style={styles.TextButton}>Apply</Text>
             </TouchableOpacity>
           </View>
      </View>
           <TouchableOpacity style={[styles.buttonApply,{marginTop:30}]}>
               <Text style={styles.TextButton}>Proceed to Checkout</Text>
             </TouchableOpacity>
      </View>
      <View style={{ height:50 }}>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white'
  },
  yourOrder:{
    flex: 1,
    justifyContent: 'center',
    marginTop:10,
    padding:20,
  },
  TitleView: {
    fontSize:25,
    fontWeight: "bold",
    textAlign: 'center',
  },
  order: {
    marginTop:10,
    borderBottomWidth:1,
    borderColor:'#bdbcbc'
  },
  item: {
    marginTop:20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20,
  },
  quantity: {
    fontWeight: 'bold',
    fontSize:20
  },
  nameItem: {
    fontSize:20,
    opacity:0.5
  },
  ContentItem: {
    flexDirection: 'row',
  },
  imageItem: {
    marginTop:-35,
    height:100,
    width:100, 
    resizeMode:'stretch',
  },
  totalContent: {
    flex:1,
    marginTop:35,
  },
  itemTotal: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:20,
  },
  Total:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
  },
  nameTotal: {
    fontSize:20,
    fontWeight:"bold",
  },
  DeliveryAddress:{
    padding:20,
    marginHorizontal:15,
    flex: 1,
    borderWidth:0.1,
    backgroundColor:'white',
    marginTop:30,
    shadowColor: "#000",
  shadowOffset: {
	width: 0,
	height: 1,
  },
  shadowOpacity: 0.5,
  shadowRadius: 2.22,

elevation: 3,
  },
  HeaderAddress: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
  },
  numberBackground:{
    height:40,
    width:40,
    borderRadius:20,
    backgroundColor:'#009e7f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftHeader: {
    flexDirection: 'row',
  },
  AddressTitle:{
    justifyContent: 'center',
  },
  TitleAddress:{
    fontSize:25,
    fontWeight:'bold',
  },
  number: {
    color:'white',
    fontSize: 25,
  },
  add: {
    fontSize:18,
    color:'#009e7f',
  },
  address:{
    backgroundColor:'#f7f7f7',
    marginTop:20,
    height:120,
    justifyContent: 'center',
    borderRadius:10,
  },
  edit_delete:{
    position:'absolute',
    right:10,
    flex: 1, 
    flexDirection: 'row',
    zIndex:100,
 },
  edit:{
    height:30,
    width:30,
    borderRadius:15,
    backgroundColor:'#009e7f',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop:15,
  },
  delete:{
   height:30,
   width:30,
   borderRadius:15,
   backgroundColor:'red',
   marginTop:15,
   marginLeft:10,
   justifyContent: 'center',
   alignItems: 'center',
 },
  nameAddress: {
    fontSize: 20,
    marginLeft:15,
    fontWeight: "bold",
  },
  contentAddress:{
    marginLeft:15,
    marginTop:5,
    fontSize: 18,
  },
  DeliverySchedule:{
    padding:20,
    marginHorizontal:15,
    flex: 1,
    borderWidth:0.1,
    backgroundColor:'white',
    marginTop:50,
    shadowColor: "#000",
    shadowOffset: {
  	width: 0,
	  height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

elevation: 3,
  },
  timeDelivery:{
    backgroundColor:'#f7f7f7',
    marginTop:20,
    height:80,
    justifyContent: 'center',
    borderRadius:10,
  },
  timeTitle:{
    fontSize:17,
    marginLeft:10,
    fontWeight:'bold',
  },
  timeContent:{
    fontSize:20,
    marginLeft:10,
    opacity:0.8
  },

  card:{
    flex: 1,
    margin:15,
    borderRadius:10,
    height:200,
  },
  payment:{
    height:200,
    justifyContent: 'center',
    marginTop:10
 },
  contentCard:{
    position:'absolute',
 },
 numberCard:{
  fontSize:17,
  color: 'white'
},
cardNumber:{
  fontSize:15,
  marginTop:80,
  marginLeft:30 ,
  color:'white'
},
nameUserCard:{
   fontSize:20,
   marginLeft:20,
   color:'white'
},
end:{
  flexDirection: 'row',
  flex: 1,
  marginTop:0,
},
voucher:{
  flex:1,
  marginTop:15,
  padding:20,
  flexDirection: 'row',
},
buttonApply:{
  marginLeft:20,
  height:60,
  backgroundColor:'#009e7f',
  justifyContent: 'center',
  borderRadius:5
},
TextButton:{
  color:'white',
  fontSize:23,
  fontWeight:'bold',
  textAlign:'center'
}
})

