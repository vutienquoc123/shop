import React, { useState } from 'react'
import { Dimensions, Modal, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'   
import IC_FontAwesome from 'react-native-vector-icons/FontAwesome';
import ic_cart from '../../../assets/icon/cart.png';
import { addTotal } from '../actions'
// import { ADD_TOTAL } from '../const'

export default function CardProduct(props) {

    const dispatch = useDispatch();
    const [viewDetail, setViewDetail] = useState(false);
    const [count, setCount] = useState(0);


    const addtotal =()=>{
        dispatch(addTotal());
    }
    const subtotal =()=>{
        
    }

    let data= props.data;
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>setViewDetail(!viewDetail)}>
                <Image 
                source={{uri:'https://lh3.googleusercontent.com/proxy/GLo3x5fxmQFNJOdzeM2lqFauZfu-qA4fFDFDNTc6OSyriQ9zovp2ggNfNjE7YRV3asysihgfZYUAHEDl4VAoRAI-JA2HrAhvurFihoKaJNmOmNV87jS5_eAfY4smAEUKOCTmy0H-8h7pmw'}}
                style={styles.image} />
                </TouchableOpacity>
            </View>
            <Text style={[styles.text,{fontWeight: 'bold',textAlign: 'center',width: '80%'}]} numberOfLines={1} ellipsizeMode='clip'>{data.title}</Text>
            <View style={{padding: 10}}>
                <Text style={styles.text}>{data.unit}</Text>
                <TouchableOpacity onPress={()=>
                    {
                        setCount(count+1);
                        addtotal()
                        // props.addI();
                    }
                    }>
                    <View style={styles.touchview}>
                        <Text style={styles.textview}>{data.price} vnd</Text>
                        <Image source={ic_cart} style={styles.icon}/>
                    </View>
                </TouchableOpacity>
                {
                        count > 0 ? 
                        <View style={{flexDirection : 'column',backgroundColor:'#009E7F', width : 40,alignItems:'center',borderRadius:20,position:'absolute',right:20,padding:10}}>
                            <TouchableOpacity onPress={()=>{
                                setCount(count+1)
                                // props.addI();
                            }}><Text style={{fontSize:20,color:'white'}}>+</Text></TouchableOpacity>
                            <Text style={{fontSize: 18, color:'white'}}>{count}</Text>
                            {
                                count > 0 ? <TouchableOpacity onPress={()=>{
                                    setCount(count-1)
                                    // props.subI();
                                    }}><Text style={{fontSize:20,color:'white'}}>-</Text></TouchableOpacity>
                                    : null
                            }
                        </View>
                        : null
                    }
            </View>
            <Modal
                animationType="slide" transparent={true} visible={viewDetail}
            >
                <View style={{flex:1,backgroundColor:'#000000aa',alignItems:'center'}}>
                    
                        <TouchableOpacity onPress={()=>setViewDetail(!viewDetail)}>
                        <View 
                        style={{backgroundColor:'white',
                                height:40,
                                width:40,
                                borderRadius:20,
                                justifyContent:'center',
                                alignItems:'center',
                                position:'absolute',
                                marginTop: HEIGHT*0.2
                                }}>
                            <IC_FontAwesome
                                name="remove"
                                size={20}
                                color="gray"
                            />
                        </View>
                        </TouchableOpacity>
                
                    <View style={{height: HEIGHT*0.6,backgroundColor:'white',position:'absolute',bottom:0,width:WIDTH,borderTopLeftRadius:50,borderTopRightRadius:50,padding:20}}>
                        <ScrollView>
                            <View style={{alignItems:'center',marginTop:10,marginEnd:10}}>
                                <Image style={{width:WIDTH*0.5,height: WIDTH*0.5,resizeMode:'cover'}}
                                source={{uri:'https://lh3.googleusercontent.com/proxy/oSF9hKmBzl5ZGW75Hm69k0z-PBuT3Iho0nZxbsERl_EDxxTJ5-zeZZWEZ9BBSWT9cXInb44QsZPHgE_gq_gecH339U8fjMM'}}
                                />
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:100}}>
                                <Image style={{height:80,width:80,resizeMode:'cover'}} source={{uri:'https://lh3.googleusercontent.com/proxy/oSF9hKmBzl5ZGW75Hm69k0z-PBuT3Iho0nZxbsERl_EDxxTJ5-zeZZWEZ9BBSWT9cXInb44QsZPHgE_gq_gecH339U8fjMM'}}  />
                            </View>
                            <View>
                                <Text style={{fontSize:24}}>{data.title}</Text>
                            </View>
                            <View style={{marginTop:10,marginEnd:10}}>
                                <Text style={{fontSize:15,}}>{data.unit}</Text>
                            </View>
                            <ScrollView style={{height:150,marginTop:10,marginEnd:10}}>
                                <Text style={{fontSize:15,overflow:'scroll'}}>Ngày 16/10, Vũ Phương Thảo (lớp 10A1, THPT Định Hóa) được biết đến với bài văn điểm 10 về người thầy có những cảm xúc trong sáng, chân thành.
Trong bài văn, Thảo viết: “Máy quay dường như đang chậm lại, từng cảnh từng nét hiện lên rõ ràng. Tôi thấy thầy đang lụi hụi trồng rau, chăm sóc con chó lông trắng đen già khụ, thấy cả chúng tôi ngày đó, trong những ngày vất vả nhưng yên bình. Tôi nghĩ, có lẽ đó là những ngày hạnh phúc và vui vẻ nhất tôi từng có. Sau này, khi bước đi trên đường đời chông gai, có thể sẽ chẳng còn ai chỉ bảo, dạy dỗ tôi tận tình như thầy đã từng, có thể sẽ chẳng có ai lo tôi liệu có ngủ đủ giấc, liệu có stress khi nhồi nhét quá nhiều. Nhưng, cố nhân từng nói, cuộc đời chỉ cần một người khiến ta ngưỡng mộ, để cả đời noi gương, cả đời thương mến. Vậy là quá đủ rồi</Text>
                            </ScrollView>
                            <View style={{flexWrap: 'wrap' ,flexDirection:'row',alignItems:'center',marginTop:20,marginEnd:10}}>
                                <TouchableOpacity>
                                    <Text style={{backgroundColor:'lightblue',fontSize:18,fontWeight:'bold',paddingHorizontal:20,height:30,borderRadius:18,marginHorizontal:10,marginTop:5}}>category1</Text>
                                </TouchableOpacity>
                            </View>


                            <View style={{marginTop:10,flexDirection:'row',height:60,alignItems:'center'}}>
                                <View>
                                    <Text style={{fontSize:22,fontWeight:'bold',color:'#009E7F'}}>$ {data.price}</Text>
                                </View>
                                <View style={{position:'absolute',right:0}}>
                                    <TouchableOpacity 
                                        onPress={()=>
                                            {
                                                setCount(count+1);
                                                addtotal()
                                                // props.addI();
                                            }}
                                    >
                                        <View style={{flexDirection:'row',alignItems:'center',marginRight:20}}>
                                            <IC_FontAwesome
                                            name="shopping-bag"
                                            color="#009E7F"
                                            size={25}
                                            />
                                            <Text style={{color:'#009E7F',fontSize:22,fontWeight:'bold',marginLeft:5}}>
                                                Cart
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    {
                                    count >0 ?
                                            <View style={{flexDirection: 'row',zIndex:10,position:'absolute',right:0,paddingHorizontal:20,justifyContent:'center',alignItems:'center',backgroundColor:'#009E7F',height:40,width:100,borderRadius:40}}>
                                                <TouchableOpacity>
                                                    <Text style={{color:'white',fontSize:22,fontWeight:'bold',}}>-</Text>
                                                </TouchableOpacity>
                                                <Text style={{color:'white',fontSize:22,fontWeight:'bold',marginLeft:20}}>x</Text>
                                                <TouchableOpacity>
                                                    <Text style={{color:'white',fontSize:22,fontWeight:'bold',marginLeft:20}}>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                            : null
                                        }
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            </View>
            
    )
}


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;


const styles = StyleSheet.create({
    container:{
        marginTop:10,
        // padding :10,
        width: WIDTH*0.5,
        // height: 250,
        // borderColor:'gray',
        // borderWidth: 1
        // backgroundColor: 'red'
    },
    image:{
        width: WIDTH*0.4,
        height: 150,
        resizeMode: 'center',
    },
    text:{
        fontSize: 14,
        marginTop:5
    },
    touchview:{
        flexDirection: 'row',
        marginTop: 40,
    },
    textview:{
        fontSize:  14,
        alignItems:'center'
    },
    icon:{
        height: 20,
        width: 20,
        position: 'absolute',
        right: 20
    }
});
