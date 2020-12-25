import React, { useEffect, useState } from 'react';
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
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_CATEGORIES, GET_LIST_CATEGORIES } from '../../graphql/query/category';
import { GET_PRODUCTS } from '../../graphql/query/products';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from './actions';


const Home = (props) => {
  const {loading : loading1,error: error1,data: data1} = useQuery(GET_LIST_CATEGORIES);
  const dispatch = useDispatch();

  const datahome = useSelector(state=> state.HomeReducer);

  const [total,setTotal] = useState(null);
  useEffect(()=>{
    if(datahome.total)
    {
      setTotal(datahome.total);
    }
  },[datahome.total])

  useEffect(()=>{
    data1 && dispatch(changeCategory(data1.listcategories[0].slug))
  },[data1])

  useEffect(()=>{

  },[])

  const [searchfilter,setFilter] = useState("No filter");


  // setCategory(data1.listcategories[0].slug)
  const [category, setCategory] = useState();
  
  // useEffect(()=>{
  //   if(data1) dispatch(changeCategory(data1.listcategories[0].slug))
  // },[data1])


  useEffect(()=>{
    if(datahome.category_name){
      setCategory(datahome.category_name)
      // && fetchCategory({variables:{type: datahome.category_name}})
    }
  },[datahome.category_name])


  const [fetchCategory,{loading: loadingC,data : dataC}]= useLazyQuery(GET_CATEGORIES);
  if (loadingC) return <Text>Loading ...</Text>;
  if(dataC) console.log("Data C: ",dataC.categories)
  else console.log("data c null");

  // get product by cate

  
  const {loading: loadingP, error: errorP, data: dataP} 
  =useQuery(GET_PRODUCTS,{variables:{type: "Thucpham"}})
  if(loadingP) return null;
  if (errorP) return `Error! ${error}`;
  // console.log(dataP.products.items)

  console.log(category);

  return (
    <View style={{alignItems:'center'}}>
    <ScrollView>
      <Category data={data1} />
      <Search/>
      <SlideImg/>
      {
        // dataC &&
        <FilterCategory  name={category} />
      }

      
      <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
        {
          dataP.products.items.map((item,index)=>(<CardProduct key={index} data={item}  />))

        }
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