import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import UserInput from '../../../components/text_input/UserInput';
import icon_search from '../../../assets/icon/Search.png';
const Search = (props) => {
    const [searchText, setSearch] = useState('');

    const handleChange =(e)=>{
        setSearch({searchText : e.target.value})
        console.log('text :',searchText)
    }
    return (
        <View style={styles.container}>
            <UserInput 
                image={icon_search} 
                placeholder='Search your product from here'
                value = {searchText}
                onchange ={handleChange}
                />
        </View>
    );
};

export default Search;


const styles = StyleSheet.create({
    container:{
        marginHorizontal : 20
    }
})