import React,{useState} from 'react';
import { styles } from '../styles/styles';
import {View,Text,Dimensions,TouchableOpacity,Modal,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {UPDATE_ADDRESS,DELETE_ADDRESS} from '../../../graphql/mutation/address'
import { useMutation } from '@apollo/client';
import Textarea from 'react-native-textarea';

export default function Address(profile) {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;  
const [data,setData] = useState(profile.data)
const [updateAddress] = useMutation(UPDATE_ADDRESS);
const [deleteAddressMutation] = useMutation(DELETE_ADDRESS) 
const [addressItems,setAddressItems] = useState(data.me.address)
const [idAddress,setIdAddress] = useState(data.me.address[0].id)
const [titleAddress,setTitleAddress] = useState('')
const [infoAddress,setInfoAddress] = useState('')
const [iAddress,setIAddress]= useState('')
const [primaryAddress,setPrimaryAddress] = useState({
   borderColor: '#009e7f',
   backgroundColor:'white',
})
const [secondaryAddress,setSecondaryAddress] = useState({
   borderColor: 'white',
   backgroundColor:'#f7f7f7', 
})
const [visibleAddress,setVisibleAddress]= useState({show:false})
const [visibleAddressEdit,setVisibleAddressEdit]= useState({show:false})
const [editTitleAddress,setEditTitleAddress]= useState('')
const [editInfoAddress,setEditInfoAddress]= useState('')
const addAddress = (name, info) => {
    const type = 'secondary'
    updateAddress({variables: { addressInput: JSON.stringify({type,name,info}) }})
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
const handleAddress1 = (e) => {
    setIdAddress(e.id)
}
const trainValueAddress = (e,i) =>{
 setEditTitleAddress(e.name)
 setEditInfoAddress(e.info)   
 setIAddress(i)
 }
 const deleteAddress = (e,i) => {
    console.log(e)
    deleteAddressMutation({variables: { addressId: JSON.stringify(e.id) }})
    const items = [...addressItems]
    items.splice(i,1)
    setAddressItems(items)
 }
    return (
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
          <TouchableOpacity style={{ justifyContent:'center',marginRight:-10 }} onPress={()=>{setVisibleAddress({show:true})}}>
            <Text style={styles.add}>+Add Address</Text>
          </TouchableOpacity>
        </View>
        {addressItems.map((e,i)=>(
        <TouchableOpacity onPress={()=>handleAddress1(e)} key={i}>
        {e.id == idAddress ?
        <View style={[styles.address,{backgroundColor:primaryAddress.backgroundColor,borderColor:primaryAddress.borderColor}]}>
        <View style={[styles.edit_delete,{top:0}]}>
          <TouchableOpacity onPress={()=>{setVisibleAddressEdit({show:true});trainValueAddress(e,i);handleAddress1(e)}}>
           <View style={styles.edit}>
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
           <Text style={styles.nameAddress}>{e.name}</Text>
           <Text style={styles.contentAddress}>{e.info}</Text>
        </View>:
        <View style={[styles.address,{backgroundColor:secondaryAddress.backgroundColor,borderColor:secondaryAddress.borderColor}]}>
        <View style={[styles.edit_delete,{top:0}]}>
          <TouchableOpacity onPress={()=>{setVisibleAddressEdit({show:true});trainValueAddress(e,i);handleAddress1(e)}}>
           <View style={styles.edit}>
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
           <Text style={styles.nameAddress}>{e.name}</Text>
           <Text style={styles.contentAddress}>{e.info}</Text>
        </View>}
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
    </View>
    )
}
