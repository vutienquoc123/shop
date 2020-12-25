import React,{useState} from 'react';
import Swiper from 'react-native-swiper'
import Next from '../../../components/Next'
import Prev from '../../../components/Prev'
import {View,Text,Image,Dimensions,TouchableOpacity,TextInput,Modal} from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/styles';
export default function Payments(profile) {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const [data,setData] = useState(profile.data)
  const [card,setCard] = useState(data.me.card)
  const [colorCard,setColorCard] = useState('white')
  const [visibleCard,setVisibleCard]= useState({show:false})
  const handleCard = () =>{
  // console.log(e,"aaaa")
    if(colorCard=='white')
      {setColorCard('#009e7f') }
    }
    const [dataNewCard, setDataNewCard] = useState('')
    const deleteCard = (e,i)=>{ 
    // console.log(i)
    const items = [...card]
    items.splice(i,1)
    setCard(items)
  }
const dishandledCard = () =>{
  if(colorCard=='#009e7f')
   {setColorCard('white')}
}
  const onChangeDataCard = (formData) =>{ 
     JSON.stringify(formData.values, null, " ")
     setDataNewCard(formData.values)
     // console.log(formData.values)
  };
  const addCard = (e) =>{
     const str = e.number
     const lastNumber={lastFourDigit : str.substring(15)} 
     const item = Object.assign(e,lastNumber)
     const items= [...card]
     items.push(item)
     setCard(items)

  }
    return (
      <View>

        <View style={styles.HeaderAddress}>
          <View style={styles.leftHeader}>
            <View style={styles.numberBackground}>
               <Text style={styles.number}>4</Text>
            </View>
            <View style={styles.AddressTitle}>
            <Text style={styles.TitleAddress}> Payment Option</Text>
            </View>
          </View>
          <TouchableOpacity style={{ justifyContent:'center',marginRight:-10 }} onPress={()=>{setVisibleCard({show:true})}}>
            <Text style={styles.add}>+Add Cart</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.payment}>
          <Swiper style={styles.wrapper} 
            showsButtons={true} 
            showsPagination={false}
            nextButton={<Next/>}
            prevButton={<Prev/>}
            onMomentumScrollEnd={dishandledCard}>  
        {card.map((e,i)=>(
        <TouchableOpacity  style={styles.card} onPress={handleCard} key={i}>
        <Image
          style={{
            resizeMode: 'stretch',height:180,width:WIDTH*0.75,borderColor:colorCard,borderWidth:1}}
          source={require('../../../assets/img/card-front.png')}
          />
          {e.cardType=="paypal"?
            <Image
             style={{
               resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
               source={require('../../../assets/img/paypal.png')}
             /> : null
             }
            {e.cardType=="master"?
            <Image
             style={{
               resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
               source={require('../../../assets/img/master.png')}
             /> : null
             }
              {e.cardType=="visa"?
            <Image
             style={{
               resizeMode: 'stretch',height:20,width:WIDTH*0.2,position:'absolute',right:30,marginTop:20}}
               source={require('../../../assets/img/visa.png')}
             /> : null
             }
          <View style={styles.contentCard}>
             <TouchableOpacity  style={{position:'absolute',top:2,right:-WIDTH*0.06,backgroundColor:'red',borderRadius:15,height:30,width:30,justifyContent:'center',alignItems:'center'}}>
                  <Icon
                  name="close" 
                  color='white'
                  size={25}
                  />
               </TouchableOpacity >
             <Text style={styles.cardNumber}>Card Number</Text>
             <View style={{  flexDirection: 'row',justifyContent: 'space-between',width:WIDTH*0.68,left:20,marginTop:15 }}>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>****</Text>
                <Text style={styles.numberCard}>{e.lastFourDigit}</Text>
             </View>
             <Text  style={styles.nameUserCard}>{e.name}</Text>
          </View>
        </TouchableOpacity>
        ))}
      </Swiper>
      <Modal transparent={true}
               visible={visibleCard.show}> 
            <View style={{ backgroundColor:'#000000aa',flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <TouchableOpacity style={{ height:40,width:40,borderRadius:20 ,backgroundColor:'white',justifyContent: 'center',alignItems: 'center',position: 'absolute',right:10,top:15,zIndex:10}}
            onPress={()=>{setVisibleCard({show:false})}}>
               <Icon  name="close" 
                  color='black'
                  size={30}/>
            </TouchableOpacity>  
               <View style={{backgroundColor:'#f7f8f9',margin:50,width:WIDTH*0.94,height:HEIGHT*0.6,justifyContent: 'center'}}>
                  <Text style={{ fontSize:30,fontWeight:'bold',marginLeft:10}}>Add Card</Text>
                  <View style={styles.cardPayment}>
                  <CreditCardInput
                     autoFocus
                     requiresName
                     requiresCVC
                     allowScroll={true}
                     labelStyle={styles.label}
                     inputContainerStyle={styles.containerInput}
                     inputStyle={styles.inputCard}
                     validColor={"black"}
                     invalidColor={"red"}
                     placeholderColor={"darkgray"}
                     // onFocus={onFocusData}
                     onChange={onChangeDataCard} 
                     />
                  </View>
                  <TouchableOpacity onPress={()=>{setVisibleCard({show:false});addCard(dataNewCard)}} style={{ backgroundColor:'#43458B',alignItems: 'center',marginTop:10,marginHorizontal:10}}>
                     <Text style={{ fontSize:25,color:'white',fontWeight:'bold',height:50,marginTop:10}}>Add Card</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </Modal>
      </View>
      </View>
      
    )
}
