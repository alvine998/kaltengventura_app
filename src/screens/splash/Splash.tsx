import {View, Text, Image} from 'react-native';
import React, {use, useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {IUser} from '../../types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash({navigation}: any) {
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUserData = await AsyncStorage.getItem('user');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData) as IUser);
      }
    };
    fetchUserData();
    const timer = setTimeout(() => {
      if (userData?.id !== 0) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Intro');
      }
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <LinearGradient
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      colors={['#0000FF', '#87CEFA']} // Blue to light blue
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <Image
        source={require('../../assets/images/skv_logo.png')}
        style={{width: 200, height: 150}}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 10,
        }}>
        Kalteng Ventura
      </Text>
    </LinearGradient>
  );
}
