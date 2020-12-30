import React,{useState} from 'react'
import {View,Text,Image} from 'react-native';
import { styles } from './styles/styles';
export default function cart() {
  const [cart,setCart] = useState([
    {id:1,
    title:'Lemon',
    weight:'12pc(s)',
    image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
    price:1.50,
    quantity:1,
    },
    {id:2,
      title:'Lime',
      weight:'12pc(s)',
      image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
      price:3.00,
      quantity:1,
      },
    {id:3,
      title:'Cherry',
      weight:'0.5lb',
      image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg',
      price:2.50,
      quantity:3,
      },
    {id:4,
      title:'Celery Stick',
      weight:'1lb',
      image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg',
      price:2.00,
      quantity:2,
      },
    ])
    const item = cart.map((e,i) => {return e.price*e.quantity})
    // console.log(item,"aaaa")
    const sum = item.reduce((partial_sum, a) => partial_sum + a,0); 
    // console.log(sum,"aaaa")
    return (
        <View style = {styles.yourOrder}>
        <Text style = {styles.TitleView}>Your Order</Text>
        <View style={styles.order}>
          {cart.map((e,i)=>(
            <View style = {styles.item} key={i}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>{e.quantity}  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>{e.name} |<Text style={styles.unit}> {e.weight} </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: e.image,
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>${e.quantity*e.price}</Text>
              </View>
            </View>
          ))}
            
        </View>
        <View style = {styles.totalContent}>
          <View style = {styles.itemTotal}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameItem}>Sub Total</Text>
            </View>
           <View>
            <Text style={styles.nameItem}>${sum}</Text>
          </View>
          </View>
          <View style = {styles.itemTotal}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameItem}>Delivery Fee</Text>
            </View>
           <View>
            <Text style={styles.nameItem}>$0.00</Text>
          </View>
          </View>
          <View style = {styles.itemTotal}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameItem}>Discount</Text>
            </View>
           <View>
            <Text style={styles.nameItem}>$0.00</Text>
          </View>
          </View>
          <View style = {styles.Total}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameTotal}>Total(lncl.VAT)</Text>
            </View>
           <View>
            <Text style={styles.nameTotal}>${sum}</Text>
          </View>
          </View>
        </View>
      </View>
    )
}
