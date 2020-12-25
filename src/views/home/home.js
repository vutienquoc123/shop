import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardProduct from './component/CardProduct';
import Category from './component/Category';
import FilterCategory from './component/FilterCategory';
import Search from './component/Search';
// import ShowProduct from './component/ShowProduct';
import SlideImg from './component/SlideImg';

import IC_cart from 'react-native-vector-icons/Ionicons';


const Home = (props) => {
  const [total, setTotal] = useState(0)

  const additem =()=>
  {
    setTotal(total+1)
  }
  const subitem =()=>
  {
    setTotal(total-1)
  }

  return (
    <View style={{alignItems:'center'}}>
    <ScrollView>
      <Category/>
      <Search/>
      <SlideImg/>
      <FilterCategory/>
      
      <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
        <CardProduct addI={additem} subI={subitem} />
        <CardProduct addI={additem} subI={subitem} />
        <CardProduct addI={additem} subI={subitem} />
        <CardProduct addI={additem} subI={subitem} />
        <CardProduct addI={additem} subI={subitem} />
        <CardProduct addI={additem} subI={subitem} />
        <CardProduct addI={additem} subI={subitem} />
        
        </View>

      
    </ScrollView>
    <View style={styles.btnfixed}>
      <TouchableOpacity >
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{total} item</Text>
          <IC_cart
            name='cart-outline'
            color='white'
            size={30}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};
const HEIGHT = Dimensions.get('screen').height;
export default Home;

const styles = StyleSheet.create({
  container:{

  },
  btnfixed:{
    borderRadius: 40,
    backgroundColor: '#009E7F',
    position:'absolute',
    zIndex:10,
    width: '90%',
    top:HEIGHT*0.7,
    height: 50
  },
  text:{
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
    marginTop: 10
  },
  icon:{
    position: 'absolute',
    right: 20,
    marginTop: 5
  }
})