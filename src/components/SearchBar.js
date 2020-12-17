import React from 'react';
import { View, StyleSheet, TextInput,TouchableOpacity,Text,Dimensions} from 'react-native';


const SearchBar = (props) => {
    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Search a Movie...'
                style={styles.search}
                onChangeText={value => props.onSelected(value)}
                onChangeText={value => props.onChanging(value)}
            />
            <TouchableOpacity  style={styles.button} onPress={ () => props.onSelectPress()}><Text style={styles.text}>Search</Text></TouchableOpacity>
        </View>
    )
}

export { SearchBar }


const styles = StyleSheet.create({
    search:{
        margin:5,
        padding:10,
        borderRadius:15,
        borderWidth:2,
        width: Dimensions.get('window').width * 0.7,
        fontWeight:'bold'
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between', 
        alignItems:'center',
    },
    button:{
        backgroundColor: '#880e4f',
        padding: 15,
        margin: 5,
        width: Dimensions.get('window').width * 0.25,
        height: 50,
        borderRadius: 20,

    },
    text: {
        color:'white',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        fontWeight:'bold'
    }
})