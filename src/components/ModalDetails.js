import Modal from 'react-native-modal';
import React,{useState} from 'react';
import {View,Text,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native';

const ModalDetails = (props) => {
    return (
        <Modal isVisible={props.visibility} onBackdropPress={(value) => props.turn(value)}>  

            <View style={styles.container}>
                <Image    
                    source={{uri: "https://image.tmdb.org/t/p/w500" + props.selectedFilm.backdrop_path }}
                    style={styles.image}
                    />
                <Text style={styles.title}> <Text style={styles.span}>Movie's Name:</Text> {props.selectedFilm.title}</Text>
                <Text style={styles.desc}><Text style={styles.span}>Overview:</Text>{props.selectedFilm.overview}</Text>
                <View style={styles.container2}>
                    <Text style={styles.desc}><Text style={styles.span}>Rated:</Text>{props.selectedFilm.vote_average}</Text>
                    <Text style={styles.desc}><Text style={styles.span}>View:</Text>{props.selectedFilm.popularity}</Text>
                    <Text style={styles.desc}><Text style={styles.span}>Lang:</Text>{props.selectedFilm.original_language}</Text>
                    <Text style={styles.desc}><Text style={styles.span}>Release:</Text>{props.selectedFilm.release_date}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> WATCH NOW </Text>
                </TouchableOpacity>

            </View>
        </Modal>
)
    }

export { ModalDetails };


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#37474f',
        borderRadius: 10,
        padding: 10,
        width: Dimensions.get('window').width * 0.95 ,
        height: 'auto',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:200,
        height:100,
        alignSelf:'center',
    },
    title:{
        color: '#f1f8e9',
        fontSize: 20,
        marginBottom:10,
        textAlign:'center',
    },
    desc:{
        color: '#f1f8e9',
        paddingRight: 5,
        paddingLeft: 5,
    },
    span: {
        fontSize: 15,
        fontWeight: '600',
        color: '#f4a999',

    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button:{
        width: Dimensions.get('window').width * 0.5,
        padding:10,
        margin:15,
        borderRadius: 10,
        backgroundColor: '#03a9f4',
    },
    buttonText: {
        fontSize: 20,
        color: '#f1f8e9',
        textAlign:'center',
        fontWeight:'bold',

    }
    
})