import React from 'react';
import { SafeAreaView,View,TextInput,StyleSheet,Dimensions} from 'react-native';

const InputBar = (props) => {
    return (
            <View style={styles.container}>
                <TextInput 
                    style = {styles.Input}
                    placeholder={props.placeholder}
                    {...props.inputProps}
                    onChangeText = {props.onType}
                />
            </View>

    )
}

export { InputBar }

const styles = StyleSheet.create({
    Input:{
        width: Dimensions.get('window').width * 0.85,
        padding: 10,
        backgroundColor:'white',
        margin: 5,
        borderRadius: 20,
        
    },
    container:{
        margin:10,
    }
})