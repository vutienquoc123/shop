import React from 'react';
import { View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import img1 from '../../../assets/img/1.jpg'; 
import img2 from '../../../assets/img/2.jpg'; 
import img3 from '../../../assets/img/3.jpg'; 
import img4 from '../../../assets/img/4.jpg'; 


const SlideImg = (props) => {
    let data =[
        'https://i.pinimg.com/originals/ca/58/61/ca5861451108c300b1e170cb8b1c47e3.jpg',
        'https://i.pinimg.com/originals/ca/58/61/ca5861451108c300b1e170cb8b1c47e3.jpg',
        'https://i.pinimg.com/originals/ca/58/61/ca5861451108c300b1e170cb8b1c47e3.jpg'
    ]
    return (
        <View>
            {/* <SliderBox images={data} /> */}
        </View>
      );
};

export default SlideImg;