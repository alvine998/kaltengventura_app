import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Notification({navigation}: any) {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 70,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Notifikasi</Text>
        <View></View>
      </View>

      <View style={{padding: 20}}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Selamat</Text>
            <Text>Data anda telah terverifikasi</Text>
          </View>
          <Image
            source={require('../../assets/images/congratulations.png')}
            style={{width: 150, height: 150}}
          />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'space-between',
            marginTop: 10
          }}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Maaf</Text>
            <Text>Verifikasi anda ditolak</Text>
          </View>
          <Image
            source={require('../../assets/images/rejected.png')}
            style={{width: 150, height: 150}}
          />
        </View>
      </View>
    </ScrollView>
  );
}
