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
import {BottomTabs} from './src/components/BottomTabs';
import IntroCapital from './src/screens/capital/Intro';
import InputCapital from './src/screens/capital/Input';
import DocumentCapital from './src/screens/capital/Document';
import WaitingVerify from './src/screens/capital/WaitingVerify';
import Simulation from './src/screens/funding/Simulation';
import WebViewBlog from './src/screens/webview/WebViewBlog';

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
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="IntroCapital" component={IntroCapital} />
          <Stack.Screen name="InputCapital" component={InputCapital} />
          <Stack.Screen name="DocumentCapital" component={DocumentCapital} />
          <Stack.Screen name="WaitingVerify" component={WaitingVerify} />
          <Stack.Screen name="Simulation" component={Simulation} />
          <Stack.Screen name="WebViewBlog" component={WebViewBlog} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}
