import React, { useEffect, useState } from 'react';
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
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../../graphql/query/category';

const FilterCategory = (props) => {
    console.log("filte:",props.name)
    const [title,setTitle] = useState(props.name);

    const {loading : loading,error: error,data: data} = useQuery(GET_CATEGORIES,{variables:{type: props.name}});
    const [modalVisible, setModalVisible] = useState(false);
    
    return (    
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>{title}</Text>
                { 
                <TouchableOpacity 
                    onPress={()=>(setModalVisible(!modalVisible))}
                    style={{position:'absolute', right: 10}}
                    >
                    <Text style={[styles.text,{color: '#009E7F'}]}>Filter</Text>
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
                            data && 
                            data.categories.map((item,index)=>(
                                <DropdownPicker data={item} key={index} setTitle={setTitle}   />
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
        fontSize: 18,
        fontWeight:'bold',
        height: 30,
        textAlign:'center',
        paddingHorizontal:10,
        backgroundColor : 'whitesmoke',
        borderRadius:10

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
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingTop: 20
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