import React, { useState } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

let data ={
    name : 'cate1',
    list:[
        {
            label: 'item2',
            value : 'item1'
        },
        {
            label: 'item1',
            value : 'item1'
        }
    ]
}

const DropdownPicker = (props) => {
    let data =props.data;
    const [isShow, setshow] = useState(false);
    // console.log(isShow);
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>(setshow(!isShow))}>
                {data.image ? <Image source={data.image} style={styles.icon} /> : null}
                <Text style={styles.title}>
                    {data.name}
                </Text>
            </TouchableOpacity>
            {
                isShow ? 
                <View>
                {data.list.map((item,index)=>(
                    <TouchableOpacity key={index} onPress={()=>{console.log(item.label);}}>
                    <Text style={styles.child}>
                        {item.label}
                    </Text>
                </TouchableOpacity>
                ))}
                </View>
                : null
            }
        </View>
    );
    // if(isShow)
    // return (
    //     <View>
    //         {data.list.map((item,index)=>(
    //             <TouchableOpacity>
    //             <Text>
    //                 {item.name}
    //             </Text>
    //         </TouchableOpacity>
    //         ))}
    //     </View>
    // );
};

export default DropdownPicker;

const styles = StyleSheet.create({
    container :{
        marginTop: 10,
    },
    view:{

    },
    icon:{
        height : 40,
        width: 40,

    },
    title:{
        fontSize : 18,
        marginLeft : 20,
        color: 'gray',
    },
    child:{
        fontSize: 18.,
        color: 'gray',
        marginLeft : 40,
    }
})