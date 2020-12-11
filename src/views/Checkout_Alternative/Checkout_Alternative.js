import React,{useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ScrollView,Image,Modal,Button} from 'react-native'
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Textarea from 'react-native-textarea';
import Header from '../../layouts/header'
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
export default function Profile({ navigation}) {
   const WIDTH = Dimensions.get('window').width;
   const HEIGHT = Dimensions.get('window').height;
  const [state,setState] = useState({
    email: '',
    password: ''
 })
 const [stateContact,setStateContact] = useState({
    contact:'',
 })
 const [address,setAddress] = useState({
    title:'',
    address:'',
 })
 const [color,setColor] = useState('white')
 const [colorPassword,setColorPassword] = useState('white')
 const [primary,setPrimary] = useState({
    borderColor: '#009e7f',
    backgroundColor:'white',
    type: 'primary',
 })
 const [colorCard,setColorCard] = useState('white')
 const [secondary,setSecondary] = useState({
   borderColor: 'white',
   backgroundColor:'#f7f7f7', 
   type: 'secondary',
})
const [visible,setVisible]= useState({show:false})
const [visibleAddress,setVisibleAddress]= useState({show:false})
const handleCard = () =>{
   if(colorCard=='white')
    {setColorCard('#009e7f') }
}
const submitContact= (text)=>{
   setStateContact({contact: text})
}
const handleTitleAddress = (text) => {
   setAddress({ title: text })
}
const handleContentAddress = (text) => {
   setAddress({ add: text })
}
const dishandledCard = () =>{
   if(colorCard=='#009e7f')
    {setColorCard('white')}
}
 const handleAddress1 = () => {
   if(primary.borderColor=='#009e7f'&&secondary.borderColor=='white')
     { setPrimary({borderColor:'#009e7f',backgroundColor:'white',type:'primary'})
      setSecondary({borderColor:'white',backgroundColor:'#f7f7f7',type:'secondary'})}
   else if(primary.borderColor=='white'&&secondary.borderColor=='#009e7f'){
      setPrimary({borderColor:'#009e7f',backgroundColor:'white',type:'primary'})
      setSecondary({borderColor:'white',backgroundColor:'#f7f7f7',type:'secondary'})
   }
   }
   const handleAddress2 =() =>{
      if(secondary.borderColor=='#009e7f'&&primary.borderColor=='white')
     { setSecondary({borderColor:'#009e7f',backgroundColor:'white',type:'primary'})
      setPrimary({borderColor:'white',backgroundColor:'#f7f7f7',type:'secondary'})}
       else if(secondary.borderColor=='white'&&primary.borderColor=='#009e7f'){
      setSecondary({borderColor:'#009e7f',backgroundColor:'white',type:'primary'})
      setPrimary({borderColor:'white',backgroundColor:'#f7f7f7',type:'secondary'})
   }
   }
    return (
      <ScrollView style = {styles.container}>
        <View style = {styles.orderContainer}>
            <View style = {[styles.orderContent,{marginTop:30}]}>
              <View>
                <Text style = {styles.orderText}>Sub Total <Text>(5 items)</Text></Text>
              </View>
              <View>
              <Text style = {styles.price}>$8.20</Text>
              </View>
            </View>
            <View style = {styles.orderContent}>
              <View>
                <Text style = {styles.orderText}>Shipping Fee</Text>
              </View>
              <View>
              <Text style = {styles.price}>$0.00</Text>
              </View>
            </View>
            <View style = {styles.Voucher}>
              <View>
                <Text style = {styles.orderText}>Voucher</Text>
              </View>
              <View style={styles.buttonVoucher}>
              <TextInput style = {{
                                  width:WIDTH*0.3,
                                 height: 50,
                                 borderRadius:5,
                                 backgroundColor:'white' }}
             underlineColorAndroid = "transparent"
             placeholder = "Enter Voucher"
             autoCapitalize = "none"
            //  onChangeText = {handleTitleAddress}
             />
             <TouchableOpacity style={[styles.buttonAP,{width:WIDTH*0.3}]}>
               <Text style={styles.apply}>Apply</Text>
             </TouchableOpacity>
              </View>
            </View>
            <View style = {[styles.orderContent,{marginBottom:30}]}>
              <View>
                <Text style = {styles.orderText}>Total</Text>
              </View>
              <View>
              <Text style = {styles.price}>$8.20</Text>
              </View>
            </View>
        </View>
        <View  style = {styles.contactNumber}>
         <Text style = {styles.titleContact}>Delivery Chedule</Text>
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
       <View style={styles.contactNumber}>
       <Text style = {styles.titleContact}>Delivery Address</Text>
       <View style={styles.address}>
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
             <Text style={styles.textContact}>Home</Text>
             <Text style={styles.number}>27 Street, 2569 Heritage Road Visalia, CA 93291</Text>
         </View>
         <View style={styles.address}>
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
             <Text style={styles.textContact}>Office</Text>
             <Text style={styles.number}>33 Baker Street, Crescent Road, CA 65746</Text>
         </View>
         <Modal transparent={true}
               visible={visibleAddress.show}> 
            <View style={{ backgroundColor:'#000000aa',flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <TouchableOpacity style={{ height:40,width:40,borderRadius:20 ,backgroundColor:'white',justifyContent: 'center',alignItems: 'center',position: 'absolute',right:10,top:15,zIndex:10}}
            onPress={()=>{setVisibleAddress({show:false})}}>
               <Icon  name="close" 
                  color='black'
                  size={30}/>
            </TouchableOpacity>  
               <View style={{backgroundColor:'#f7f8f9',margin:50,width:WIDTH*0.85,height:HEIGHT*0.7,padding:25,justifyContent: 'center'}}>
                  <Text style={{ fontSize:30,fontWeight:'bold'}}>Add New Address</Text>
                  <TextInput style = {{ 
                                 height: 60,
                                 borderWidth:1,
                                 borderColor:'#afaeae',
                                 marginTop:15,
                                 marginBottom:10,
                                 borderRadius:5,
                                 backgroundColor:'white' }}
             underlineColorAndroid = "transparent"
             placeholder = "Enter title"
             autoCapitalize = "none"
             onChangeText = {handleTitleAddress}/>
             <Textarea style = {{ 
                                 height: 170,
                                 borderWidth:1,
                                 textAlignVertical: 'top',
                                 borderColor:'#afaeae',
                                 marginTop:15,
                                 marginBottom:10,
                                 borderRadius:5,
                                 backgroundColor:'white' }}  
            underlineColorAndroid = "transparent"                                      
            maxLength={120}
            containerStyle={{ height:180 }}
            placeholder = "Enter Address"
             autoCapitalize = "none"
             onChangeText = {handleContentAddress}/>
                  <TouchableOpacity onPress={()=>{setVisibleAddress({show:false})}} style={{ backgroundColor:'#009e7f',alignItems: 'center',marginTop:10}}>
                     <Text style={{ fontSize:25,color:'white',fontWeight:'bold',height:50,marginTop:10}}>Save Contact</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
         <TouchableOpacity onPress={()=>{setVisibleAddress({show:true})}}>
            <View style={styles.addAddress}>
               <Text style={styles.TextAdd}>Add Address</Text>
            </View>
         </TouchableOpacity>
       </View>
       <View  style = {styles.contactNumber}>
         <Text style = {styles.titleContact}>Contact Number</Text>
         <TouchableOpacity onPress={handleAddress1}> 
         <View style={styles.edit_delete}>
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
         <View style={{ backgroundColor:primary.backgroundColor,
                        marginTop:10,
                        height:100,
                        justifyContent: 'center',
                        borderRadius:8,
                        borderWidth:1,
                        borderColor:primary.borderColor,
                         }}>
             <Text style={styles.textContact}>{primary.type}</Text>
             <Text style={styles.number}>123-456-789</Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={handleAddress2}>
         <View style={styles.edit_delete}>
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
            <View style={{ backgroundColor:secondary.backgroundColor,
                        borderWidth:1,
                        borderColor:secondary.borderColor,
                        marginTop:10,
                        height:100,
                        justifyContent: 'center',
                        borderRadius:8, }}>
             <Text style={styles.textContact}>{secondary.type}</Text>
             <Text style={styles.number}>450-787-545</Text>
         </View>
         </TouchableOpacity>
         <Modal transparent={true}
               visible={visible.show}> 
            <View style={{ backgroundColor:'#000000aa',flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <TouchableOpacity style={{ height:40,width:40,borderRadius:20 ,backgroundColor:'white',justifyContent: 'center',alignItems: 'center',position: 'absolute',right:10,top:15}}
            onPress={()=>{setVisible({show:false})}}>
               <Icon  name="close" 
                  color='black'
                  size={30}/>
            </TouchableOpacity>  
               <View style={{backgroundColor:'#f7f8f9',margin:50,width:WIDTH*0.85,height:HEIGHT*0.4,padding:25,justifyContent: 'center'}}>
                  <Text style={{ fontSize:30,fontWeight:'bold'}}>Add New Contact</Text>
                  <TextInput style = {{ 
                                 height: 60,
                                 borderWidth:1,
                                 borderColor:'#afaeae',
                                 marginTop:15,
                                 marginBottom:10,
                                 borderRadius:5,
                                 backgroundColor:'white' }}
             underlineColorAndroid = "transparent"
             placeholder = "Enter a phone number"
             autoCapitalize = "none"
             onChangeText = {submitContact}/>
                  <TouchableOpacity onPress={()=>{setVisible({show:false})}} style={{ backgroundColor:'#009e7f',alignItems: 'center',marginTop:10}}>
                     <Text style={{ fontSize:25,color:'white',fontWeight:'bold',height:50,marginTop:10}}>Save Contact</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
         <TouchableOpacity onPress={()=>{setVisible({show:true})}}>
            <View style={styles.addContact}>
               <Text style={styles.TextAdd}>Add Contact</Text>
            </View>
         </TouchableOpacity>
       </View>
       <View style={styles.paymentOption}>
         <Text style = {styles.titleContact}>Payment Option</Text>
         <View style={styles.titleCard}>
            <Text style = {styles.textAddCard}>Saved Cards</Text>
            <TouchableOpacity>
            <Text style = {styles.textAddCard}>+Add Card</Text> 
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
            resizeMode: 'stretch',height:180,width:WIDTH*0.85,borderColor:colorCard,borderWidth:1}}
          source={require('../../assets/img/card-front.png')}
          />
         <Image
          style={{
            resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
          source={require('../../assets/img/visa.png')}
          />
          <View style={styles.contentCard}>
             <TouchableOpacity  style={{position:'absolute',top:2,right:-40,backgroundColor:'red',borderRadius:15,height:30,width:30,justifyContent:'center',alignItems:'center'}}>
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
            resizeMode: 'stretch',height:180,width:WIDTH*0.85,borderColor:colorCard,borderWidth:1}}
          source={require('../../assets/img/card-front.png')}
          />
          <Image
          style={{
            resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
          source={require('../../assets/img/master.png')}
          />
          <View style={styles.contentCard}>
          <TouchableOpacity style={{position:'absolute',top:2,right:-40,backgroundColor:'red',borderRadius:15,height:30,width:30,justifyContent:'center',alignItems:'center'}}>
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
            resizeMode: 'stretch',height:180,width:WIDTH*0.85,borderColor:colorCard,borderWidth:1}}
          source={require('../../assets/img/card-front.png')}
          />
           <Image
          style={{
            resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
          source={require('../../assets/img/paypal.png')}
          />
          <View style={styles.contentCard}>
            <TouchableOpacity  style={{position:'absolute',top:2,right:-40,backgroundColor:'red',borderRadius:15,height:30,width:30,justifyContent:'center',alignItems:'center'}}>
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
      </View>
      <View style={styles.end}>
      <TouchableOpacity style={[styles.buttonApply,{marginTop:30}]}>
               <Text style={styles.TextButton}>Proceed to Checkout</Text>
             </TouchableOpacity>
      </View>
       </ScrollView>
    )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white'
  },
  title:{
    fontWeight: "bold",
    fontSize:30,
    marginTop:20,
    marginLeft:10,
  },
  titleInput:{
      fontWeight: "bold",
      fontSize: 20,
      marginLeft:15
  },
 form: {
  paddingTop: 23
 },
 input: {
    margin: 15,
    height: 60,
    borderRadius:8,
    backgroundColor:'#f7f7f7'
 },
 submitButton: { 
    padding: 10,
    margin: 15,
    height: 60,
    backgroundColor:'#009e7f',
    justifyContent: 'center',
    borderRadius:8,
 },
 submitButtonText:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
 },
 contactNumber:{
    padding:10,
    marginTop:10
 },
 titleContact:{
   fontSize: 25,
   fontWeight: "bold",
 },

 textContact:{
   fontSize: 20,
   marginLeft:15,
   fontWeight: "bold",
 },
 number:{
   marginLeft:15,
   marginTop:5,
   fontSize: 18,
 },
 addContact:{
    marginTop:10,
    height:100,
    borderStyle:'dashed', 
    borderWidth:1, 
    borderColor:'#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
 },
 TextAdd:{
   fontSize:20,
   color:'#009e7f',
   fontWeight: "bold"
 },
 address:{
   backgroundColor:'#f7f7f7',
   marginTop:10,
   height:120,
   justifyContent: 'center',
   borderRadius:8,
 },
 addAddress:{
   marginTop:10,
   height:120,
   borderStyle:'dashed', 
   borderWidth:1, 
   borderColor:'#f7f7f7',
   justifyContent: 'center',
   alignItems: 'center',
},
 paymentOption: {
   padding:10,
   marginTop:10
 },
 titleCard:{
   flex: 1, 
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop:10
 },
 textAddCard:{
    fontSize: 18,
    color: '#009e7f'
 },
 payment:{
    height:200,
    justifyContent: 'center',
    marginTop:10
 },
 card:{
   flex: 1,
   margin:15,
   borderRadius:10,
   height:200,
 },
 end:{
   flex: 1,
   marginTop:20,
   marginBottom:40,
   padding:20,
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
 buttonApply:{
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
orderContainer:{
  flex:1,
  margin:20,
  borderRadius:5,
  backgroundColor:'#f7f7f7'
},
orderContent:{
    flex:1,
    marginHorizontal:20,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
orderText: {
  fontSize:20,
},
price:{
  fontSize:20,
  fontWeight: 'bold',
},
Voucher:{
  marginTop:20,
  flex:1,
  marginHorizontal:20,
  padding:10,
},
buttonVoucher:{
  flexDirection: 'row',
  height:60,
  marginTop:10,
  borderRadius:5,
  marginHorizontal:5,
  alignItems: 'center',
  backgroundColor:'white',
  justifyContent: 'center',
},
buttonAP:{
  height:50,
  backgroundColor:'#009e7f',
  borderRadius:5,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft:20,
  marginRight:-20,
},
apply:{
  fontSize:20,
  color:'white',fontWeight:'bold'
},
})

