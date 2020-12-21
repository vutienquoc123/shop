import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from 'react-native';
import { Modal } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

import ic_x from '../../../assets/icon/X.jpg';

const Category = () => {
    let data=[
        {
            id: '1',
            text: "Thuc pham 1",
            image: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-strawberry-icon-for-your-project-png-image_4813361.jpg',
        },
        {
            id: '2',
            text: "Thuc pham 2",
            image: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-strawberry-icon-for-your-project-png-image_4813361.jpg',
        },
        {
            id: '3',
            text: "Thuc pham 3",
            image: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-strawberry-icon-for-your-project-png-image_4813361.jpg',
        },
        {
            id: '4',
            text: "Thuc pham 4",
            image: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-strawberry-icon-for-your-project-png-image_4813361.jpg',
        },
    ]
    const [modalVisible, setModalVisible] = useState(false);
    const [isCategory,setCategory] =useState(data[0].id);


    return (
        
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
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

                    <View style={styles.modalview}>
                        {
                            data.map((item,index)=>{
                                if(item.id==isCategory)
                                return(
                            <View key={index} style={{height:80,width: WIDTH*0.4,margin: 10}}>
                                <TouchableOpacity style={{alignItems:'center',backgroundColor:'#009E7F',borderRadius:20,height:80,padding:10}}
                                onPress={()=>{
                                    // setCategory(item.id)
                                    setCategory(item.id);
                                }}
                                >
                                    <Image
                                        source={{uri: item.image}}
                                        style={{height:40,width:40}}
                                    />
                                    <Text style={{fontSize:16,color:'white'}}>{item.text}</Text>
                                </TouchableOpacity>
                            </View>)
                        return(
                            <View key={index} style={{height:80,width: WIDTH*0.4,margin: 10}}>
                                <TouchableOpacity style={{alignItems:'center',backgroundColor:'white',borderRadius:20,height:80,padding:10}}
                                onPress={()=>{
                                    setCategory(item.id)
                        
                                }}
                                >
                                    <Image
                                        source={{uri: item.image}}
                                        style={{height:40,width:40}}
                                    />
                                    <Text style={{fontSize:16,color:'#009E7F'}}>{item.text}</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        
                        
                        })
                        }
                    </View>
                </View>
                
            </Modal>


            <Text style={styles.text}>Groceries Delivered in 90 minute </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text2}
                    onPress={()=>{ setModalVisible(!modalVisible)}}
                >Grocery</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Category;

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding : 20,
        marginHorizontal: 20,
        marginTop: 20
    },
    text:{
        fontSize:16
    },
    text2:{
        fontSize:16,
        color: '#009E7F'
    },
    button:{
        
    },
    modalbg:{
        flex: 1,
        backgroundColor: '#000000aa',
        alignItems: 'center',
        position: 'relative'
    },
    modal_icon:{
        zIndex:1,
        backgroundColor:'white',
        height:40,
        width:40,
        padding:10,
        borderRadius:20,
        marginTop:HEIGHT*0.2,
    }
    ,
    modalview:{
        backgroundColor: 'white',
        width: WIDTH,
        height: HEIGHT*0.6,
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0,
        flexDirection : 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    modal_child:{
        height:80,
        width: WIDTH*0.4,
        margin: 10
    }
    ,
    icon:{
        height:20,
        width:20,
    }
})