import React,{useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions,Modal} from 'react-native'
import { styles } from '../styles/styles';
import { useMutation } from '@apollo/client';
import {UPDATE_CONTACT,DELETE_CONTACT} from '../../../graphql/mutation/contact'
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Contact(profile) {
    const [data,setData] = useState(profile.data)
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [updateContact] = useMutation(UPDATE_CONTACT);
    const [deleteContactMutation] = useMutation(DELETE_CONTACT);
    const [contactItems,setContactItems] = useState(data.me.contact)
    const [id,setId] = useState(data.me.contact[0].id)
    const [contact,setContact] = useState('')
    const [visible,setVisible]= useState({show:false})
    const [visibleEdit,setVisibleEdit]= useState({show:false})
    const [editNumber,setEditNumber]= useState('')
    const [iContact,setIContact]= useState('')
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
    const handleContact = (e) => {
        setId(e.id)
    }
    const deleteContact = (e,i)=>{
        deleteContactMutation({variables: { contactId: JSON.stringify(e.id)}})
        const items = [...contactItems]
        items.splice(i,1)
        setContactItems(items)
     }
    return (
        <View style = {styles.contactNumber}>
        <Text style = {styles.titleContact}>Contact Number</Text>
        {contactItems.map((e,i)=>(
        <TouchableOpacity onPress={()=>handleContact(e)} key={i}> 
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
    )
}
