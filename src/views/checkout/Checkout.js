import React from 'react';
import {View,Text,ScrollView,StyleSheet,Image,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles/styles';
import { useQuery,gql,useMutation } from '@apollo/client';
import { GET_LOGGED_IN_CUSTOMER } from '../../graphql/query/customer';
import Address from './components/Address'
import Payment from './components/Payments'
import TimeDelivery from './components/TimeDelivery'
import ContactNumber from './components/ContactNumber'
export default function Checkout({ navigation }) {
  const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
 if (loading) return null;
 if (error) return `Error! ${error}`;
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  return (
    <ScrollView  style = {styles.container}>
      <View style = {styles.yourOrder}>
        <Text style = {styles.TitleView}>Your Order</Text>
        <View style={styles.order}>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>Lemon |<Text style={styles.unit}> 12pc(s) </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>Lime |<Text style={styles.unit}> 12pc(s) </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X </Text>
              <Text style = {styles.nameItem}>Cherry |<Text style={styles.unit}> 0.5 lb </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
            <View style = {styles.item}>
              <View style={styles.ContentItem}>
               <Text style={styles.quantity}>1  </Text>
               <Text style={styles.nameItem}> X  </Text>
              <Text style = {styles.nameItem}>Celery Stick |<Text style={styles.unit}> 1 lb </Text></Text>
              </View>
              <Image style = {styles.imageItem}
                      source={{
                        uri: 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg',
                      }}/>
              <View style = {styles.price}>
                <Text style={styles.nameItem}>$1.50</Text>
              </View>
            </View>
        </View>
        <View style = {styles.totalContent}>
          <View style = {styles.itemTotal}>
           <View style = {styles.detailTotal}>
            <Text style={styles.nameItem}>Sub Total</Text>
            </View>
           <View>
            <Text style={styles.nameItem}>$8.20</Text>
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
            <Text style={styles.nameTotal}>$8.20</Text>
          </View>
          </View>
        </View>
      </View>
      
      <Address data={data}/>
      <TimeDelivery/>
      <ContactNumber data={data}/>
      <Payment data={data}/>
      <View style={{ height:50 }}>
      </View>
    </ScrollView>
  );
}


