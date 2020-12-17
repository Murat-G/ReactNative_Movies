import React,{useState} from 'react';
import { SafeAreaView,View,Text,StyleSheet,Image,Dimensions,Alert} from 'react-native';
import { InputBar, Button} from '../components';
import {resolveAuthError} from '../function';
import auth from '@react-native-firebase/auth';

const CreateAccount = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    async function sign() {
        if (password === passwordRepeat) {
          try {
            if (email === '' || password === '') {
              Alert.alert('ClarusMovie', resolveAuthError('auth/null-value'))
            }else {
              await auth().createUserWithEmailAndPassword(email, password);
              // props.navigation.navigate('Login');
            }
          } catch (error) {
            Alert.alert('ClarusMovie', 'An error occured');
          }
        } else {
          Alert.alert('ClarusMovie', 'Passwords are not match');
        }
      }
    
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#e0e0e0'}}>
              {/* <Text style={styles.myName}>CINEMOTION</Text> */}
                <Image 
                        source={require('../asset/image/mount.png')}
                        style = {styles.image}
                />
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
                    <InputBar
                        inputProps={{
                            placeholder: ' Please type your password again..',
                            secureTextEntry: true,
                          }}
                          onType = {(value) => setPasswordRepeat(value)}

                    />

                    <Button name= "CREATE ACCOUNT" onClicked={() => sign()}/>
                    <Button name= "CANCEL" onClicked={() => props.navigation.goBack()}/>
                    
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export { CreateAccount }

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
    },
  //   myName:{
  //     fontSize: 35,
  //     fontWeight: 'bold',
  //     textAlign:'center',
  //     color: '#212121',
  // }
})

