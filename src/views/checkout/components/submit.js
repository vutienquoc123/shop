import React,{useEffect, useState} from 'react'
import {View,Text,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../styles/styles';
import {ADD_ORDER} from '../../../graphql/mutation/order'
import { useMutation } from '@apollo/client';
export default function submit() {
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;
    const [addOrder] = useMutation(ADD_ORDER);
    const [products,setProducts] = useState([
        {id:1,
        title:'Lemon',
        weight:'12pc(s)',
        image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
        price:1.50,
        quantity:1,
        // total:1.50
        },
        {id:2,
          title:'Lime',
          weight:'12pc(s)',
          image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
          price:3.00,
          quantity:1,
        //   total:3.00,
          },
        // {id:3,
        //   title:'Cherry',
        //   weight:'0.5lb',
        //   image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg',
        //   price:2.50,
        //   quantity:3,
        //   total:7.50,
        //   },
        // {id:4,
        //   title:'Celery Stick',
        //   weight:'1lb',
        //   image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg',
        //   price:2.00,
        //   quantity:2,
        //   total:4.00,
        //   },
        ])
    // const contact = useSelector(state=>state.ContactReducer.contact)
    // const idOrder = {id:12}
    const userId = 12
    const date = '7th April 2019'
    const discount=  0.0
    const amount = 249.7
    const subtotal = 249.7
    const deliveryFee= 0.0
    let deliveryTime = useSelector(state=>state.TimeReducer.time.time)
    let deliveryAddress = useSelector(state=>state.AddressReducer.address.info)
    const status = "0"
    const card = useSelector(state=>state.PaymentReducer.card)
    let order ={id:10,userId,date,discount,amount,subtotal,deliveryFee,deliveryTime,deliveryAddress,status,products};
    let orders =
    console.log(order,"aaa")
    const postOrder = () =>{
        addOrder({variables: { orderInput: JSON.stringify(order) }})
    }
    return (
        <View>
        <View style={styles.end}>
        <View style={styles.voucher}>
        <TextInput style = {{ width:WIDTH*0.4,
                              height: 60,
                              borderWidth:1,
                              borderColor:'#afaeae',
                              marginBottom:10,
                              borderRadius:5,
                              backgroundColor:'#f7f7f7' }}
          underlineColorAndroid = "transparent"
          placeholder = "Enter Voucher"
          autoCapitalize = "none"
          />
             <TouchableOpacity style={[styles.buttonApply,{width:WIDTH*0.3}]}>
                 <Text style={styles.TextButton}>Apply</Text>
             </TouchableOpacity>
             </View>
         </View>
         <TouchableOpacity style={[styles.buttonApply,{marginTop:30}]} onPress={postOrder}>
             <Text style={styles.TextButton}>Proceed to Checkout</Text>
         </TouchableOpacity>
        </View>
    )
}
