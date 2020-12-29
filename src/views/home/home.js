import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CardProduct from './component/CardProduct';
import Category from './component/Category';
import FilterCategory from './component/FilterCategory';
import Search from './component/Search';
// import ShowProduct from './component/ShowProduct';
import SlideImg from './component/SlideImg';
import IC_FontAwesome from 'react-native-vector-icons/FontAwesome';
import IC_cart from 'react-native-vector-icons/Ionicons';

import {useLazyQuery, useQuery} from '@apollo/client';
import {
  GET_CATEGORIES,
  GET_LIST_CATEGORIES,
} from '../../graphql/query/category';
import {GET_PRODUCTS} from '../../graphql/query/products';
import {useDispatch, useSelector} from 'react-redux';
import {changeCategory, changeSubCategory} from './actions';
import {loadSubCategory} from '../../reducer/action/action';
import {Modal} from 'react-native';

const Home = (props) => {
  const [visibleCart, setVisibleCart] = useState(false);

  const {loading: loading1, error: error1, data: data1} = useQuery(
    GET_LIST_CATEGORIES,
  );
  const dispatch = useDispatch();
  console.log(data1);



  const datahome = useSelector((state) => state.HomeReducer);
  const cartData = useSelector((state)=>state.Cart)
  

  useEffect(() => {
    data1 &&
      dispatch(changeCategory(data1.listcategories[0].slug)) &&
      dispatch(changeSubCategory(data1.listcategories[0].slug));
  }, [data1]);

  const [total, setTotal] = useState(null);
  useEffect(() => {
    if (datahome.total) {
      setTotal(datahome.total);
    }
  }, [datahome.total]);

  useEffect(() => {
    if (datahome.sub_category) {
      setTypeP(datahome.sub_category);
    }
  }, [datahome.sub_category]);

  // setCategory(data1.listcategories[0].slug)
  const [category, setCategory] = useState();

  useEffect(() => {
    if (datahome.category_name) {
      setCategory(datahome.category_name);
    }
  }, [datahome.category_name]);

  // const [fetchCategory,{loading: loadingC,data : dataC}]= useLazyQuery(GET_CATEGORIES);
  // if (loadingC) return <Text>Loading ...</Text>;
  // if(dataC) console.log("Data C: ",dataC.categories)
  // else console.log("data c null");

  // get product by cate
  const [typeP, setTypeP] = useState();
  console.log('type p: ', typeP);
  const {loading: loadingP, error: errorP, data: dataP} = useQuery(
    GET_PRODUCTS,
    {variables: {type: category}},
  );
  if (loadingP) {
    return null;
  }
  if (errorP) {
    return `Error! ${errorP}`;
  }
  console.log(dataP.products.items);

  // useEffect(() => {
  //   dataP && dispatch(loadSubCategory(dataP));
  // }, [dataP]);
  console.log(cartData)
  

  return (
    <View style={{alignItems: 'center'}}>
      <ScrollView>
        <Category data={data1} />
        <Search />
        <SlideImg />
        <FilterCategory name={category} />

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {dataP.products.items.map((item, index) => (
            <CardProduct key={index} data={item} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.btnfixed}>
        <TouchableOpacity onPress={()=>setVisibleCart(!visibleCart)}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>{total} item</Text>
            <IC_cart
              name="cart-outline"
              color="white"
              size={30}
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={visibleCart}>
        <View style={{flex:1,backgroundColor: '#000000aa'}}>
          <View style={styles.modal}>
            <View style={{flexDirection: 'row',marginTop: 10,height:60,alignItems:'center',justifyContent:'center'}}>
            <IC_cart
              name="cart-outline"
              color="#009E7F"
              size={30}
            />
            <Text style={{color: '#009E7F',fontSize: 22,marginLeft: 10,fontWeight: 'bold'}}>{cartData.total_item} item</Text>
            </View>


            {/* <Text>list item</Text> */}
            <ScrollView>
              {
                cartData.list_item.map((item,index)=>(
                  <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#009E7F',minWidth: 40,width : WIDTH*0.1 ,borderRadius:30}}>
                  <TouchableOpacity onPress={()=>{console.log('press: +')}}>
                    <Text style={{color:'white',fontSize:22,width:30,textAlign:'center'}}>+</Text>
                  </TouchableOpacity>
                  <Text style={{fontSize:22,color:'white'}}> {item.total} </Text>
                  <TouchableOpacity onPress={()=>{console.log('press: -')}}>
                    <Text style={{color:'white',fontSize:22,width:30,textAlign:'center'}}>-</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width : WIDTH*0.3}}>
                  <Image style={{width: WIDTH*0.3,height: WIDTH*0.3,resizeMode: 'cover'}}
                  source={{uri:"data:image/jpeg;base64,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"}} />
                </View>
                <View style={{width : WIDTH*0.25,padding:10}}>
                  <Text style={{fontSize: 18,fontWeight:'bold'}}>{item.name}</Text>
                  <Text style={{fontSize: 18,fontWeight:'bold',color:'#009E7F'}}>{item.price}</Text>
                  <Text style={{fontSize: 18,fontWeight:'bold'}}>{item.unit}</Text>
                </View>
                <View style={{width : WIDTH*0.25,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize: 18,fontWeight:'bold',color:'#009E7F'}}>price</Text>
                </View>
                <View style={{width:WIDTH*0.1,alignItems:'center',justifyContent:'center'}}>
                  <IC_FontAwesome name="remove" color="gray" size={25} />
                </View>
              
            </View>
                ))
              }
                  
            </ScrollView>
            
              {/* <Text>z-index button check out</Text> */}
            <View style={{position:'absolute', bottom : 0,backgroundColor:'white',padding: 5,alignItems:'center',width:'100%',zIndex:10}}>
              <Text style={{margin: 20,fontSize: 18, color:'#009E7F',fontWeight: 'bold'}}>Do you have a voucher?</Text>
              <TouchableOpacity>
                <View style={{flexDirection:'row',width: WIDTH*0.9, height: 60,backgroundColor: '#009E7F',alignItems: 'center',paddingHorizontal: 20,borderRadius:30 }}>
                <Text style={{fontSize: 18,fontWeight:'bold',color: 'white'}}>Checkout</Text>
                <View style={{justifyContent:'center',position:'absolute',right: 5,backgroundColor:'white',height:50,padding: 20,borderRadius:30}}>
                  <Text style={{color:'#009E7F',fontSize: 18,fontWeight:'bold'}}>total price</Text>  
                </View> 
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const HEIGHT = Dimensions.get('screen').height;
const WIDTH= Dimensions.get('screen').width;
export default Home;

const styles = StyleSheet.create({
  container: {},
  btnfixed: {
    borderRadius: 40,
    backgroundColor: '#009E7F',
    position: 'absolute',
    zIndex: 10,
    width: '90%',
    top: HEIGHT * 0.7,
    height: 50,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
    marginTop: 10,
  },
  icon: {
    position: 'absolute',
    right: 20,
    marginTop: 5,
  },
  modal:{
    backgroundColor: 'white',
        width: WIDTH,
        height: HEIGHT*0.8,
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
        flexDirection : 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        // justifyContent: 'center'
  }
});
