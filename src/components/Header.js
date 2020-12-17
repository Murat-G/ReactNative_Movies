import React from 'react';
import {StyleSheet,Dimensions,TouchableOpacity,Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Header = (props) => {
    return (
            <View style={styles.container}>
                <Text style={styles.text}> CINEMOTION </Text>
                <TouchableOpacity onPress={props.logOut}> 
                    <Icon name="logout" size={30} color="white" />
                </TouchableOpacity>
            </View>
    )
}

export { Header }

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#880e4f',
        padding: 10,
        alignItems:'center',
    },
    text: {
        color: '#f1f8e9',
        fontSize: 30,
        fontWeight: 'bold',
        // textAlign: 'center'
    }
})