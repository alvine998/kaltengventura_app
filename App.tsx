import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/screens/splash/Splash';
import Login from './src/screens/auth/login/Login';
import Register from './src/screens/auth/register/Register';
import Intro from './src/screens/intro/Intro';
import Home from './src/screens/home/Home';
import Toast from 'react-native-toast-message';
import Notification from './src/screens/notification/Notification';
import Chat from './src/screens/chat/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
