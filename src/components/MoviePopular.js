import React from 'react';
import { SafeAreaView,View,TextInput,StyleSheet,Dimensions,Text,Image,TouchableOpacity } from 'react-native';

    // const baseUrl = 'https://api.themoviedb.org/3/movie/top_rated' ;
    const baseImageUrl = "https://image.tmdb.org/t/p/w500";
    // poster_path

    const MoviePopular = (props) => {
    return (
        <View style={styles.container}>  
                <TouchableOpacity onPress={() => props.onClicked()}>

                    <Image 
                    source = {{ uri: baseImageUrl + props.data.poster_path }}
                    style={styles.image}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>
                    {props.data.title}
                    <Text style={{color:'#f06292'}}> ({props.data.popularity})</Text>    
                </Text>
         
        </View>
    )
}

export { MoviePopular }

const styles = StyleSheet.create({
    image:{
        width: Dimensions.get('window').width * 0.6, 
        height : Dimensions.get('window').height* 0.35,
        resizeMode: 'stretch',
        alignSelf:'center'
    },
    text: {
        fontWeight:'700',
        color: '#f1f8e9',
        textAlign: 'center'
    },
    container:{
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.8,  
        // borderWidth: 4,
        marginTop:5,
    },
   

})