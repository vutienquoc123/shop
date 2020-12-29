import React,{useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet,ScrollView,Image,Modal,Button} from 'react-native'
import { styles } from '../styles/styles';
import { UPDATE_ME } from '../../../graphql/mutation/me'
import { useMutation } from '@apollo/client';
export default function EditUser (profile) {
    const [data,setData] = useState(profile.data)
    const [updateUser] = useMutation(UPDATE_ME);
    const [name, onChangeName] = useState(data.me.name);
    const [email, onChangeEmail] = useState(data.me.email);
    const [color,setColor] = useState('white')
    const [colorPassword,setColorPassword] = useState('white')
    const submitUser = (name, email) => {
        updateUser({variables: { meInput: JSON.stringify({ name, email }) }})
        alert('Name: ' + name + ' Email: ' + email)
     }
     const handle = ()=>{
        if(color=='white')
        {setColor('#009e7f')}
     }
     const bur = () => {
        setColor('white')
     }
     const password = ()=>{
        if(color=='white')
        {setColorPassword('#009e7f')}
     }
     const burPassword = () => {
        setColorPassword('white')
     }
    return (
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
    );
}

