import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
        height:250,
        justifyContent: 'center',
        marginTop:20
     },
     card:{
       flex: 1,
       margin:15,
       height:350,
     },
     end:{
       flexDirection: 'row',
       flex: 1,
       marginTop:50,
       textAlign: 'center',
       justifyContent: 'center',
       marginBottom:50
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
     },
     cardPayment: {
       backgroundColor: "#F5F5F5",
       marginTop: 20,
     },
     label: {
       color: "black",
       fontSize: 12,
     },
     inputCard: {
       fontSize: 16,
       color: "black",
     },
})