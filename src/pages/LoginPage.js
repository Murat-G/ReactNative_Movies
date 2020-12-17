import React,{useState} from 'react';
import { SafeAreaView,View,Text,StyleSheet,Image,Dimensions,Alert,KeyboardAvoidingView,ScrollView} from 'react-native';
import { InputBar, Button} from '../components';
import { resolveAuthError } from '../function';
import auth from '@react-native-firebase/auth';

const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginFunc = async () => {
        try {
            if (email === '' || password === '') {
              Alert.alert('Cinemotion', resolveAuthError('auth/null-value'));
            } else {
              await auth().signInWithEmailAndPassword(email, password);
              props.navigation.navigate("Movie");
            }
          } catch (error) {
            Alert.alert('Cinemotion', resolveAuthError(error.code));
          }
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
            <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={{flex:1,backgroundColor:'#e0e0e0'}}>
                <Image 
                        source={require('../asset/image/mount.png')}
                        style = {styles.image}
                />
                <Text style={styles.myName}>CINEMOTION</Text>
                <View  style={styles.container}>
                    
                    <InputBar 
                        inputProps={{
                            placeholder: 'Type your email address..',
                            keyboardType: 'email-address',
                          }}
                          onType = {(value) => setEmail(value)}
                    />
                    <InputBar
                        inputProps={{
                            placeholder: 'Type your password..',
                            secureTextEntry: true,
                          }}
                          onType = {(value) => setPassword(value)}

                    />
                    <Button name="SIGN IN" onClicked={() => loginFunc()} />
                    <Button name= "SIGN UP" onClicked={() => props.navigation.navigate('Create')}/>
                    
                    
                </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export { LoginPage }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        width: Dimensions.get('window').width * 0.70,
        height: Dimensions.get('window').height * 0.3,
        resizeMode: 'contain',
        borderWidth: 1,
        alignSelf:'center',
        backgroundColor:'#e0e0e0',
        marginTop: 30,
    },
    myName:{
        fontSize: 35,
        fontWeight: 'bold',
        textAlign:'center',
        color: 'black',
    }
})

