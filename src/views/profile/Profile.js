import React,{useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ScrollView,Image,Modal,Button} from 'react-native'
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GET_LOGGED_IN_CUSTOMER } from '../../graphql/query/customer';
import { UPDATE_ME } from '../../graphql/mutation/me'
import {UPDATE_CONTACT,DELETE_CONTACT} from '../../graphql/mutation/contact'
import {UPDATE_ADDRESS,DELETE_ADDRESS} from '../../graphql/mutation/address'
import { useQuery,gql,useMutation } from '@apollo/client';

import Textarea from 'react-native-textarea';
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
   const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
   const [updateUser, setUpdatesUser] = useMutation(UPDATE_ME);
   const [updateContact, setUpdatesContact] = useMutation(UPDATE_CONTACT);
   const [updateAddress, setUpdatesAddress] = useMutation(UPDATE_ADDRESS);
   const [deleteContactMutation] = useMutation(DELETE_CONTACT);
   const [deleteAddressMutation] = useMutation(DELETE_ADDRESS) 
   // console.log(data.me.contact[0],"aaa");
   if (loading) return null;
   if (error) return `Error! ${error}`;
   const [user,setUser] = useState(data.me)
   // const [user,setUser] = useState(data.me)
   // console.log(user.contact)
   const WIDTH = Dimensions.get('window').width;
   const HEIGHT = Dimensions.get('window').height;
 const [name, onChangeName] = useState(data.me.name);
 const [email, onChangeEmail] = useState(data.me.email);
 const [contactItems,setContactItems] = useState(data.me.contact)
 const [addressItems,setAddressItems] = useState(data.me.address)
 const [id,setId] = useState(data.me.contact[0].id)
const [idAddress,setIdAddress] = useState(data.me.address[0].id)
 const [contact,setContact] = useState('')
 const [titleAddress,setTitleAddress] = useState('')
 const [infoAddress,setInfoAddress] = useState('')
 const [color,setColor] = useState('white')
 const [colorPassword,setColorPassword] = useState('white')
 const [primary,setPrimary] = useState({
    borderColor: '#009e7f',
    backgroundColor:'white',
    type: 'primary',
 })
 const [secondary,setSecondary] = useState({
   borderColor: 'white',
   backgroundColor:'#f7f7f7', 
   type: 'secondary',
   })
   const [primaryAddress,setPrimaryAddress] = useState({
      borderColor: '#009e7f',
      backgroundColor:'white',
   })
   const [secondaryAddress,setSecondaryAddress] = useState({
      borderColor: 'white',
      backgroundColor:'#f7f7f7', 
   })
 const [colorCard,setColorCard] = useState('white')
const [visible,setVisible]= useState({show:false})
const [visibleEdit,setVisibleEdit]= useState({show:false})
const [visibleAddress,setVisibleAddress]= useState({show:false})
const [visibleAddressEdit,setVisibleAddressEdit]= useState({show:false})
const [editNumber,setEditNumber]= useState('')
const [editTitleAddress,setEditTitleAddress]= useState('')
const [editInfoAddress,setEditInfoAddress]= useState('')
const [iContact,setIContact]= useState('')
const [iAddress,setIAddress]= useState('')
const handleCard = () =>{
   if(colorCard=='white')
    {setColorCard('#009e7f') }
}

const trainValue = (e,i) =>{
   setEditNumber(e.number) 
   setIContact(i)
}
const saveContact =(number)=>{
   const type = 'secondary'
   updateContact({variables: { contactInput: JSON.stringify( {type,number}) }})
   const id = Math.random()
   const items = [...contactItems]
   const item = {id,type,number}
   items.push(item)
   setContactItems(items)
}
const updateContactItem =(number,id)=>{
   console.log(iContact)
   const type = 'secondary'
   updateContact({variables: { contactInput: JSON.stringify( {id,type,number}) }})
   const items = [...contactItems]
   const item = {id,type,number}
   items[iContact] = item
   setContactItems(items)
}
const addAddress = (name, info) => {
   const type = 'secondary'
   // updateAddress({variables: { addressInput: JSON.stringify({type,name,info}) }})
   const id = Math.random()
   const items = [...addressItems]
   const item = {id,type,name,info}
   items.push(item)
   setAddressItems(items)
}
const editAddress = (id,name,info) =>{
   console.log(iAddress)
   const type = 'secondary'
   updateAddress({variables: { addressInput: JSON.stringify({id,type,name,info}) }})
   const items = [...addressItems]
   const item = {id,type,name,info}
   items[iAddress] = item
   setAddressItems(items)
}

const dishandledCard = () =>{
   if(colorCard=='#009e7f')
    {setColorCard('white')}
}
 const handle = ()=>{
    if(color=='white')
    {setColor('#009e7f')}
 }
 const password = ()=>{
   if(color=='white')
   {setColorPassword('#009e7f')}
}
const burPassword = () => {
   setColorPassword('white')
}
 const bur = () => {
    setColor('white')
 }
 const submitUser = (name, email) => {
    updateUser({variables: { meInput: JSON.stringify({ name, email }) }})
    alert('Name: ' + name + ' Email: ' + email)
 }
 const handleContact = (e) => {
    setId(e.id)
}
   const handleAddress1 = (e) => {
      setIdAddress(e.id)
  }
  const trainValueAddress = (e,i) =>{
   setEditTitleAddress(e.name)
   setEditInfoAddress(e.info)   
   setIAddress(i)
   }
   const deleteContact = (e,i)=>{
      deleteContactMutation({variables: { contactId: JSON.stringify(e.id)}})
      const items = [...contactItems]
      items.splice(i,1)
      setContactItems(items)
   }
   const deleteAddress = (e,i) => {
      console.log(e)
      deleteAddressMutation({variables: { addressId: JSON.stringify(e.id) }})
      const items = [...addressItems]
      items.splice(i,1)
      setAddressItems(items)
   }
    return (
      <ScrollView style = {styles.container}>
        <Text style = {styles.title}>Your profile</Text>
       <View style = {styles.form}>
            <Text style={styles.titleInput}>Name</Text> 
          <TextInput style = {{  borderWidth:1,
                                 borderColor:color,
                                 margin: 15,
                                 height: 60,
                                 borderRadius:8,
                                 backgroundColor:'#f7f7f7' }}
             underlineColorAndroid = "transparent"
             placeholder = "Name"
             onFocus = {handle}
             onEndEditing = {bur}
             autoCapitalize = "none"
             value={name}
             onChangeText={text => onChangeName(text)}/>
           <Text style={styles.titleInput}>Email</Text>  
          <TextInput style = {{  borderWidth:1,
                                 borderColor:colorPassword,
                                 margin: 15,
                                 height: 60,
                                 borderRadius:8,
                                 backgroundColor:'#f7f7f7' }}
             underlineColorAndroid = "transparent"
             placeholder = "Email"
             value={email}
             onFocus = {password}
             onEndEditing = {burPassword}
             autoCapitalize = "none"
             onChangeText={text => onChangeEmail(text)}/>
          
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => submitUser(name, email,)
             }>
             <Text style = {styles.submitButtonText}> Save </Text>
          </TouchableOpacity>
       </View>

   {/* Contact */}
      
       <View  style = {styles.contactNumber}>
         <Text style = {styles.titleContact}>Contact Number</Text>
         {contactItems.map((e,i)=>(
         <TouchableOpacity onPress={()=>handleContact(e)}> 
         <View style={styles.edit_delete}>
            <TouchableOpacity onPress={()=>{setVisibleEdit({show:true});trainValue(e,i),handleContact(e)}}>
             <View style={styles.edit}>
                  <Icon
                  name="edit" 
                  color='white'
                  size={20}
                  />
             </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{deleteContact(e,i)}}>
               <View style={styles.delete} >
                  <Icon
                  name="close" 
                  color='white'
                  size={20}
                  />
               </View>
            </TouchableOpacity>
         </View>
         {e.id == id ?
          <View style={{ backgroundColor:primary.backgroundColor,
                        marginTop:10,
                        height:100,
                        justifyContent: 'center',
                        borderRadius:8,
                        borderWidth:1,
                        borderColor:primary.borderColor,
                         }}>
             <Text style={styles.textContact}>{primary.type}</Text>
             <Text style={styles.number}>{e.number}</Text>
         </View>:<View style={{ backgroundColor:secondary.backgroundColor,
                        marginTop:10,
                        height:100,
                        justifyContent: 'center',
                        borderRadius:8,
                        borderWidth:1,
                        borderColor:secondary.borderColor,
                         }}>
             <Text style={styles.textContact}>{secondary.type}</Text>
             <Text style={styles.number}>{e.number}</Text>
         </View>
         }
         </TouchableOpacity>
         ))}
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
             onChangeText = {text=>setContact(text)}/>
                  <TouchableOpacity onPress={()=>{setVisible({show:false});saveContact(contact)}} style={{ backgroundColor:'#009e7f',alignItems: 'center',marginTop:10}}>
                     <Text style={{ fontSize:25,color:'white',fontWeight:'bold',height:50,marginTop:10}}>Save Contact</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
         <Modal transparent={true}
               visible={visibleEdit.show}
               animationType="fade"> 
            <View style={{ backgroundColor:'#000000aa',flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <TouchableOpacity style={{ height:40,width:40,borderRadius:20 ,backgroundColor:'white',justifyContent: 'center',alignItems: 'center',position: 'absolute',right:10,top:15}}
            onPress={()=>{setVisibleEdit({show:false})}}>
               <Icon  name="close" 
                  color='black'
                  size={30}/>
            </TouchableOpacity>  
               <View style={{backgroundColor:'#f7f8f9',margin:50,width:WIDTH*0.85,height:HEIGHT*0.4,padding:25,justifyContent: 'center'}}>
                  <Text style={{ fontSize:30,fontWeight:'bold'}}>Edit Contact</Text>
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
             value = {editNumber}
             onChangeText = {(text)=>setEditNumber(text)}/>
                  <TouchableOpacity onPress={()=>{setVisibleEdit({show:false});updateContactItem(editNumber,id)}} style={{ backgroundColor:'#009e7f',alignItems: 'center',marginTop:10}}>
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

   {/* EndContact   */}
   
    {/* Address    */}
   
       <View style={styles.contactNumber}>
       <Text style = {styles.titleContact}>Delivery Address</Text>
       {addressItems.map((e,i)=>(
         <TouchableOpacity onPress={()=>handleAddress1(e)}> 
         {e.id == idAddress ?
         <View style={[styles.address,{backgroundColor:primaryAddress.backgroundColor,borderColor:primaryAddress.borderColor}]}>
          <View style={[styles.edit_delete,{top:0}]}>
            <TouchableOpacity onPress={()=>{setVisibleAddressEdit({show:true});trainValueAddress(e,i);handleAddress1(e)}}>
             <View style={styles.edit} >
                  <Icon
                  name="edit" 
                  color='white'
                  size={20}
                  />
             </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{deleteAddress(e,i)}}>
               <View style={styles.delete}>
                  <Icon
                  name="close" 
                  color='white'
                  size={20}
                  />
               </View>
            </TouchableOpacity>
         </View>
             <Text style={styles.textContact}>{e.name}</Text>
             <Text style={styles.number}>{e.info}</Text>
         </View>:
         <View style={[styles.address,{backgroundColor:secondaryAddress.backgroundColor,borderColor:secondaryAddress.borderColor}]}>
         <View style={[styles.edit_delete,{top:0}]}>
           <TouchableOpacity onPress={()=>{setVisibleAddressEdit({show:true});trainValueAddress(e,i);handleAddress1(e)}}>
            <View style={styles.edit} >
                 <Icon
                 name="edit" 
                 color='white'
                 size={20}
                 />
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{deleteAddress(e,i)}}>
              <View style={styles.delete}>
                 <Icon
                 name="close" 
                 color='white'
                 size={20}
                 />
              </View>
           </TouchableOpacity>
        </View>
            <Text style={styles.textContact}>{e.name}</Text>
            <Text style={styles.number}>{e.info}</Text>
        </View>
         }
         </TouchableOpacity>
      ))}
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
             onChangeText = {text=>setTitleAddress(text)}/>
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
             onChangeText = {text=>setInfoAddress(text)}/>
                  <TouchableOpacity onPress={()=>{setVisibleAddress({show:false});addAddress(titleAddress, infoAddress)}} style={{ backgroundColor:'#009e7f',alignItems: 'center',marginTop:10}}>
                     <Text style={{ fontSize:25,color:'white',fontWeight:'bold',height:50,marginTop:10}}>Save Address</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
         <Modal transparent={true}
               visible={visibleAddressEdit.show}> 
            <View style={{ backgroundColor:'#000000aa',flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <TouchableOpacity style={{ height:40,width:40,borderRadius:20 ,backgroundColor:'white',justifyContent: 'center',alignItems: 'center',position: 'absolute',right:10,top:15,zIndex:10}}
            onPress={()=>{setVisibleAddressEdit({show:false})}}>
               <Icon  name="close" 
                  color='black'
                  size={30}/>
            </TouchableOpacity>  
               <View style={{backgroundColor:'#f7f8f9',margin:50,width:WIDTH*0.85,height:HEIGHT*0.7,padding:25,justifyContent: 'center'}}>
                  <Text style={{ fontSize:30,fontWeight:'bold'}}>Edit Address</Text>
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
             value = {editTitleAddress}
             onChangeText = {text=>setEditTitleAddress(text)}/>
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
            value = {editInfoAddress}
            containerStyle={{ height:180 }}
            placeholder = "Enter Address"
             autoCapitalize = "none"
             onChangeText ={text=>setEditInfoAddress(text)}/>
                  <TouchableOpacity onPress={()=>{setVisibleAddressEdit({show:false});editAddress(idAddress,editTitleAddress, editInfoAddress)}} style={{ backgroundColor:'#009e7f',alignItems: 'center',marginTop:10}}>
                     <Text style={{ fontSize:25,color:'white',fontWeight:'bold',height:50,marginTop:10}}>Save Address</Text>
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

      {/* End Address */}

      {/* payment */}

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
            <Text style={styles.endText}>Go to</Text>
            <TouchableOpacity>
            <Text style={styles.endLink}> Pickbazar </Text>
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
   marginTop:10,
   height:120,
   justifyContent: 'center',
   borderWidth:1,
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
   flexDirection: 'row',
   flex: 1,
   marginTop:50,
   textAlign: 'center',
   justifyContent: 'center',
 },
 endText:{
    fontSize:15,
 },
 endLink:{
   fontSize:15,
   color: '#009e7f',
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

 }
})

