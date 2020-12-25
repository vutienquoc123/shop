import React from 'react';
import { View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Next() {
    return (  
       <View style={{ height:50,width:50,marginRight:-10}}>
          <View style={{height:50,width:50,backgroundColor: 'white',borderRadius:25,borderWidth:1,borderColor:'#dddbdb',alignItems: 'center',justifyContent: 'center'}}>
          <Icon
          name="keyboard-arrow-right" 
          color= '#009e7f'
          size={40}
          />
          </View>
       </View>
    );
}