import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import img1 from '../../../assets/img/1.jpg'; 
import img2 from '../../../assets/img/2.jpg'; 
import img3 from '../../../assets/img/3.jpg'; 
import img4 from '../../../assets/img/4.jpg'; 


const SlideImg = (props) => {
    const data =[
        {
            uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXAKUY7uYo_pgWqV9WlrDfaXLdN58gl3V6A&usqp=CAU'
        },
        {
            uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXAKUY7uYo_pgWqV9WlrDfaXLdN58gl3V6A&usqp=CAU'
        },
        {
            uri : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXAKUY7uYo_pgWqV9WlrDfaXLdN58gl3V6A&usqp=CAU'
        }
    ]
    return (
        <View >
        <Swiper showsPagination={false} style={styles.swiper}>
            {
                data.map((item,index)=>(
                    <View key={index} style={styles.view}>
                        <Image source={{uri: item.uri}} style={styles.image}/>
                    </View>
                ))
            }
        </Swiper>
        </View>
    );
};

export default SlideImg;

const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    swiper:{
        height:200,
    },
    view:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height: 200,
        width: WIDTH - 40,
        borderRadius: 20,
    }
})