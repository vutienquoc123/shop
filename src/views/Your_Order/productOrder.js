import React,{useState} from 'react';
import {ScrollView,View,Text,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function ProductOrder (data){
    const [order,setOrder] = useState(data.order)
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    console.log(order)
     return(
       <View style={{ backgroundColor:'white',marginTop:-20,marginHorizontal:20,borderColor:'#f7f7f7',borderWidth:1,marginBottom:20 }}> 
         <View style={{padding:20,borderBottomWidth:1,borderColor:'#f7f7f7',marginTop:10}}>
           <Text style={{fontSize:20,fontWeight:'bold'}}>Delivery Address</Text>
           <Text style={{ fontSize:20,opacity:0.7,marginTop:10 }}>{order.deliveryAddress}</Text>
         </View>
         <View style={{flex: 1,flexDirection:'column',}}>
           <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20 ,opacity:0.7 }}>Subtotal</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20 }}>{order.subtotal}</Text>
            </View>
           </View>
           <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20 ,opacity:0.7 }}>Discount</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20 }}>{order.discount}</Text>
            </View>
           </View>
           <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20 ,opacity:0.7 }}>Delivery Fee</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20 }}>{order.deliveryFee}</Text>
            </View>
           </View>
           <View style={{flex: 1,flexDirection:'row',justifyContent:'space-between',padding:20}}>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20 ,fontWeight: 'bold' }}>Total</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{ fontSize:20,fontWeight: 'bold' }}>{order.amount}</Text>
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
            <View style={{height:20,borderLeftWidth:4,borderColor:'#009e7f',marginHorizontal:46,marginTop:-10}}></View>
            {order.status=="deliver"||order.status=="ontheway" ?
            <View style={{height:20,borderLeftWidth:4,borderColor:'#009e7f',marginHorizontal:46}}></View>:
            <View style={{height:20,borderLeftWidth:4,borderColor:'#D8D8D8',marginHorizontal:46}}></View>
            }
            <View style={{flex: 1,flexDirection:'row',marginHorizontal:20,marginTop:-10,marginBottom:20}}>
            {order.status=="deliver"||order.status=="ontheway" ?
            <Icon
            name="checkmark-circle"
            size={60}  
            style={{ color:'#009e7f',marginBottom:-10}}
            />:
              <View style={{height:50,width:50,borderRadius:25,borderWidth:1,borderColor:'#009e7f',marginTop:8,marginLeft:2,justifyContent: 'center'}}>
                <Text style={{ color:'#009e7f',fontSize:20,textAlign:'center' }}>2</Text>
              </View>
            }
                <Text style={{fontSize:20,fontWeight: 'bold',marginTop:15,marginLeft:20}}>Order On The Way</Text>
              </View>
            {order.status=="deliver"||order.status=="ontheway" ?
            <View style={{height:20,borderLeftWidth:4,borderColor:'#009e7f',marginHorizontal:46,marginTop:-20}}></View>:
            <View style={{height:20,borderLeftWidth:4,borderColor:'#D8D8D8',marginHorizontal:46,marginTop:-20}}></View>
            } 
            {order.status=="ontheway" ?
            <View style={{height:20,borderLeftWidth:4,borderColor:'#009e7f',marginHorizontal:46}}></View>:
            <View style={{height:20,borderLeftWidth:4,borderColor:'#D8D8D8',marginHorizontal:46}}></View>
            }
            <View style={{flex: 1,flexDirection:'row',marginHorizontal:20,marginTop:-10,marginBottom:20}}>
            {order.status=="ontheway" ?
            <Icon
            name="checkmark-circle"
            size={60}  
            style={{ color:'#009e7f',marginBottom:-10}}
            />:
            <View style={{height:50,width:50,borderRadius:25,borderWidth:1,borderColor:'#009e7f',marginTop:8,marginLeft:5,justifyContent: 'center'}}>
              <Text style={{ color:'#009e7f',fontSize:20,textAlign:'center' }}>3</Text>
            </View>
            }
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
            {order.products.map((e,i)=>(
            <View key={i} style={{ flexDirection: 'row',height:80,alignItems: 'center',backgroundColor:'white',marginTop:20}}>
                <View style={{width:WIDTH*0.3}}>
                  <Image
                    style={{height:70,width:80}}
                   source={{
                    uri: e.image,
                  }}/>
                </View>
                <View style={{width:WIDTH*0.4}}>
                  <Text style={{ fontSize:20,fontWeight: 'bold'}}>{e.title}</Text>
                  <Text style={{ fontSize:18,opacity:0.6 }}>2g</Text>
                  <Text style={{ color:'#009e7f',fontSize:18 }}>{e.price}</Text>
                </View>
                <View style={{width:WIDTH*0.3}}>
                  <Text style={{ fontSize:20,textAlign:'center'}}>{e.quantity}</Text>
                </View>
                <View style={{width:WIDTH*0.2}}>
                  <Text style={{ fontSize:20,textAlign:'center'}}>{e.total}</Text>
                </View>
            </View>
            ))}
            </View>
         </ScrollView>
       </View>
     ) 
  }