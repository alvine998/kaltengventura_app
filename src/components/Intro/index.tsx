import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Button';

interface Props {
  item: {
    key: string;
    title: string;
    text: string;
    image: any;
    colors: any;
  };
  width: any;
  navigation: any;
}

export default function Intro1({item, width, navigation}: Props) {
  return (
    <LinearGradient
      style={{
        flex: 1,
        padding: 20,
        justifyContent: item.key === 'intro1' ? 'flex-start' : 'center',
      }}
      colors={item.colors}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      {item.key === 'intro1' && (
        <Text
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 10,
          }}>
          {item.title}
        </Text>
      )}
      {item.key === 'intro1' ? (
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            marginTop: 20,
          }}>
          <Image source={item.image} style={{width: 200, height: 150}} />
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            {item.text}
          </Text>
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            paddingHorizontal: 50,
          }}>
          <Image
            source={item.image}
            style={
              item.key === 'intro2'
                ? {width: 200, height: 150}
                : {width: 200, height: 200}
            }
          />
          <Text
            style={{
              fontSize: 30,
              color: 'black',
              marginTop: 10,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Aplikasi {'\n'} Kalteng Ventura
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: 10,
              textAlign: 'center',
            }}>
            {item.text}
          </Text>
        </View>
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 70,
          width: width,
          paddingHorizontal: 20,
          gap: 10,
        }}>
        <View style={{flex: 1}}>
          <Button
            label="Daftar"
            onPress={() => {
              navigation.navigate('Register');
            }}
            color={item.key === 'intro1' ? 'white' : '#32bdd4'}
            borderColor={item.key === 'intro1' ? 'white' : '#32bdd4'}
          />
        </View>
        <View style={{flex: 1}}>
          <Button
            label="Masuk"
            onPress={() => {
              navigation.navigate('Login');
            }}
            bgColor="#32bdd4"
            color="white"
          />
        </View>
      </View>
    </LinearGradient>
  );
}
