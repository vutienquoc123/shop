import React, { useState } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeSubCategory } from '../actions';



const DropdownPicker = (props) => {
    let data =props.data;
    const [isShow, setshow] = useState(false);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>(setshow(!isShow))}>
                {data.image ? <Image source={data.image} style={styles.icon} /> : null}
                <Text style={styles.title}>
                    {data.title}
                </Text>
            </TouchableOpacity>
            {
                isShow ? 
                <View>
                {data.children.map((item,index)=>(
                    <TouchableOpacity key={index} onPress={
                        ()=>{
                            props.setTitle(item.title)
                            dispatch(changeSubCategory(item.slug))
                        }}>
                    <Text style={styles.child}>
                        {item.title}
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
        marginLeft : 30,
        color: '#009E7F',
        fontSize: 22
    },
    child:{
        fontSize: 20,
        color: '#424242',
        marginLeft : 60,
        marginTop: 10,
        marginEnd:10
    }
})