import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage,MoviePage,CreateAccount } from './pages'
import auth from '@react-native-firebase/auth';


const Stack = createStackNavigator();

function App() {

  const [hasSession, setSession] = React.useState(false);

    React.useEffect(() => {
      auth().onAuthStateChanged((user) => {
        setSession(user);
      });
    }, []);
  
    return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {hasSession ? (
        <Stack.Screen name="Movie" component={MoviePage} />
      ) : (
        <>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Create" component={CreateAccount} />
        </>
      )}

        
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;