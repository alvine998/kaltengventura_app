import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Splash({navigation}: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Intro');
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
