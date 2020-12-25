import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { View, Text } from 'react-native'

import ic_cart from '../../../assets/icon/cart.png';

export default function CardProduct(props) {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image 
                source={{uri:'https://lh3.googleusercontent.com/proxy/GLo3x5fxmQFNJOdzeM2lqFauZfu-qA4fFDFDNTc6OSyriQ9zovp2ggNfNjE7YRV3asysihgfZYUAHEDl4VAoRAI-JA2HrAhvurFihoKaJNmOmNV87jS5_eAfY4smAEUKOCTmy0H-8h7pmw'}}
                style={styles.image} />
            </View>
            <Text style={[styles.text,{fontWeight: 'bold'}]}>name</Text>
            <View>
                <Text style={styles.text}>don vi</Text>
                <TouchableOpacity onPress={()=>
                    {
                        setCount(count+1);
                        props.addI();
                    }
                    }>
                    <View style={styles.touchview}>
                        <Text style={styles.textview}>price</Text>
                        <Image source={ic_cart} style={styles.icon}/>
                    </View>
                </TouchableOpacity>
                {
                        count > 0 ? 
                        <View style={{flexDirection : 'column',backgroundColor:'#009E7F', width : 40,alignItems:'center',borderRadius:20,position:'absolute',right:0,padding:10}}>
                            <TouchableOpacity onPress={()=>{
                                setCount(count+1)
                                props.addI();
                            }}><Text style={{fontSize:20,color:'white'}}>+</Text></TouchableOpacity>
                            <Text style={{fontSize: 18, color:'white'}}>{count}</Text>
                            {
                                count > 0 ? <TouchableOpacity onPress={()=>{
                                    setCount(count-1)
                                    props.subI();
                                    }}><Text style={{fontSize:20,color:'white'}}>-</Text></TouchableOpacity>
                                    : null
                            }
                        </View>
                        : null
                    }
            </View>
            
            </View>
    )
}


const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;


const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding :10,
        width: WIDTH*0.5,
        // borderColor:'gray',
        // borderWidth: 1
        // backgroundColor: 'red'
    },
    image:{
        width: WIDTH*0.3,
        height: WIDTH*0.3,
        resizeMode: 'cover',
    },
    text:{
        fontSize: 14,
        marginTop:5
    },
    touchview:{
        flexDirection: 'row',
        marginTop: 20,
    },
    textview:{
        fontSize:  14,
        alignItems:'center'
    },
    icon:{
        height: 20,
        width: 20,
        position: 'absolute',
        right: 10
    }
});
