import React from 'react';
import {StyleSheet,Dimensions,TouchableOpacity,Text} from 'react-native';

const Button = (props) => {
    return (
            <TouchableOpacity style={styles.container} onPress={props.onClicked}>
                <Text style={styles.text}> {props.name} </Text>
            </TouchableOpacity>
    )
}

export { Button }

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width * 0.5,
        borderRadius:15,
        padding:10,
        margin:5,
        backgroundColor: '#ad1457'

    },
    text: {
        color:'white',
        fontWeight: '400',
        textAlign:'center',

    }
})