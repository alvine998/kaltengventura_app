import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}: any) {
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <LinearGradient
        style={{flex: 1, paddingVertical: 50, paddingHorizontal: 20}}
        colors={['#0000FF', '#87CEFA']} // Blue to light blue
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}>
        <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              <Icon
                name="chatbubble-ellipses-outline"
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
              <Icon name="notifications-outline" size={30} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/skv_logo.png')}
            style={{width: 100, height: 70}}
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 10,
              }}>
              Kalteng Ventura
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'white',
              }}>
              Sarana kebutuhan bisnis dan usaha anda
            </Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
