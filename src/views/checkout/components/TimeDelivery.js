import React,{useState}from 'react'
import { styles } from '../styles/styles';
import {View,Text,TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { changeTime } from '../../../reducer/userCheckout/Actions/ContactActions';
export default function TimeDelivery() {
    const dispatch = useDispatch();
    const [data,setData]= useState([{id:1,time:"express delivery"},
                                    {id:2,time:"8.00am - 11.00am"},
                                    {id:3,time:"11.00am - 2.00pm"},
                                    {id:4,time:"2.00pm - 5.00pm"},
                                    {id:5,time:"5.00pm - 8.00pm"},
                                    {id:6,time:"Next Day"},])
    const primary = {
        borderColor: '#009e7f',
        backgroundColor:'white',
     }
     const secondary = {
        borderColor: 'white',
        backgroundColor:'#f7f7f7', 
     }
    const [id,setId] = useState(data[0].id)                                
    const handle = (e) => {
        setId(e.id)
    }
    return (
        <View style={styles.DeliverySchedule}>
          <View style={styles.HeaderAddress}>
            <View style={styles.leftHeader}>
            <View style={styles.numberBackground}>
               <Text style={styles.number}>2</Text>
            </View>
            <View style={styles.AddressTitle}>
            <Text style={styles.TitleAddress}> Delivery Chedule</Text>
            </View>
            </View>
          </View>
         {data.map((e,i)=>(
         <TouchableOpacity key={i} onPress={()=>{handle(e),dispatch(changeTime(e))}}> 
         {e.id == id ?   
         <View style={[styles.timeDelivery,{borderWidth:1,backgroundColor:primary.backgroundColor, borderColor:primary.borderColor}]}>
             <Text style={styles.timeTitle}>{e.time}</Text>
             <Text style={styles.timeContent}>{e.time}</Text>
         </View>:
         <View style={[styles.timeDelivery,{borderWidth:1,backgroundColor:secondary.backgroundColor,borderColor:secondary.borderColor}]}>
             <Text style={styles.timeTitle}>{e.time}</Text>
             <Text style={styles.timeContent}>{e.time}</Text>
         </View>}
         </TouchableOpacity>
         ))}
      </View>
    )
}
