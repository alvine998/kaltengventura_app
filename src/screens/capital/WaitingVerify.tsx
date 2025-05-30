import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {Colors} from '../../utils/color';

export default function WaitingVerify({navigation}: any) {
  const {width} = Dimensions.get('window');
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{
        paddingBottom: 30,
        backgroundColor: 'white',
        height: '100%',
      }}>
      <View>
        <Image
          source={require('../../assets/images/head-2.png')}
          style={{width: '100%', height: 500}}
        />
      </View>
      <View
        style={{
          paddingVertical: 30,
          paddingLeft: 30,
          paddingRight: 60,
          gap: 10,
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: Colors.primary}}>
          Terima Kasih
        </Text>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>
          Kami akan segera memvalidasi data diri anda
        </Text>
      </View>
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
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}>
          <Button
            label="Selesai"
            onPress={() => {
              navigation.navigate('Home');
            }}
            bgColor="#32bdd4"
            color="white"
          />
        </View>
      </View>
    </ScrollView>
  );
}
