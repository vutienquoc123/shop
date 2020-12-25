import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
        borderWidth:1
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