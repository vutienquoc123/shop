import React, { useState } from 'react';
import { Text } from 'react-native';
import { Modal } from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import DropdownPicker from './DropdownPicker';


import ic_x from '../../../assets/icon/X.jpg';
import { Image } from 'react-native';

let data=[
    {
        name : 'cate1',
        list:[
            {
                label: 'item11',
                value : 'item11'
            },
            {
                label: 'item12',
                value : 'item12'
            }
        ]
    },
    {
        name : 'cate2',
        list:[
            {
                label: 'item21',
                value : 'item21'
            },
            {
                label: 'item22',
                value : 'item22'
            }
        ]
    },
    {
        name : 'cate3',
        list:[
            {
                label: 'item31',
                value : 'item31'
            },
            {
                label: 'item32',
                value : 'item32'
            }
        ]
    }
]

const FilterCategory = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Text</Text>
                { 
                <TouchableOpacity 
                    onPress={()=>(setModalVisible(!modalVisible))}
                    style={{position:'absolute', right: 10}}
                    >
                    <Text style={[styles.text]}>Filter</Text>
                </TouchableOpacity>
                }
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                style={styles.modal}
            >
                <View style={styles.modalbg}>
                    <View style={styles.modal_icon}>
                        <TouchableOpacity onPress={()=>{ setModalVisible(!modalVisible)}}>
                            <Image
                                source={ic_x}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.modalView}>
                        
                        {
                            data.map((item,index)=>(
                                <DropdownPicker data={item} key={index} />
                            ))
                        }
                    </ScrollView>
                </View>
            </Modal>

        </View>
    );
};

export default FilterCategory;

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginHorizontal: 20
    },
    header:{
        flexDirection: 'row',
    },
    data:{

    },
    modal:{
        // flex: 1,
    },  
    text:{
        fontSize: 16
    },
    modalbg:{
        flex:1,
        backgroundColor: '#000000aa',
        alignItems:'center'
        // alignItems: 'center',
        // justifyContent:'center',
        // flexDirection: 'column'
        // position: 'relative',
    },
    modalView:{
        width: WIDTH,
        backgroundColor: 'white',
        height: HEIGHT*0.6,
        marginTop: HEIGHT*0.05,
        // marginTop: HEIGHT*0.3,
        
    },
    modal_icon:{
        zIndex:1,
        backgroundColor:'white',
        height:40,
        width:40,
        padding:10,
        borderRadius:20,
        marginTop:HEIGHT*0.2,
    },
    icon:{
        height:20,
        width:20,
    }
})