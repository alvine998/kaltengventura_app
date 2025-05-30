import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

export default function Home({navigation}: any) {
  const fullWidth = Dimensions.get('window').width;
  const openAllInfo = async () => {
    const url = 'https://kaltengventura.com/blog';
    try {
      const supported = await Linking.canOpenURL(url);
      console.log('Supported:', supported);

      if (supported) {
        await Linking.openURL(url);
      } else {
        navigation.navigate('WebViewBlog', {url: url});
      }
    } catch (error) {
      console.error('An error occurred', error);
      Toast.show({
        type: 'error',
        text1: 'Failed',
        text2: 'Cannot open this link',
        position: 'top',
      });
    }
  };
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 30}}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
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

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('IntroCapital')}
            style={{
              marginTop: 20,
              borderRadius: 10,
              width: '100%',
              height: 70,
              backgroundColor: 'transparent',
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              borderWidth: 1,
              borderColor: '#dfdfdf',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#dfdfdf',
                borderRadius: 10,
                padding: 10,
                width: 40,
                height: 40,
              }}>
              <Image
                source={require('../../assets/images/refresh_icon.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={{color: 'white', fontSize: 20}}>Modal Usaha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Simulation')}
            style={{
              marginTop: 10,
              borderRadius: 10,
              width: '100%',
              height: 70,
              paddingHorizontal: 20,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              borderWidth: 1,
              borderColor: '#dfdfdf',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#dfdfdf',
                borderRadius: 10,
                padding: 10,
                width: 40,
                height: 40,
              }}>
              <Image
                source={require('../../assets/images/doc_icon.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={{color: 'white', fontSize: 20}}>Pembiayaan</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Promo
          </Text>
          <Image
            source={require('../../assets/images/promo-1.png')}
            style={{
              width: '100%',
              height: 200,
              marginTop: 10,
              borderRadius: 10,
            }}
          />
        </View>

        <View style={{marginTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Icon name="information-circle" size={30} color={'white'} />
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                Info Sarana Kalteng Ventura
              </Text>
            </View>
            <TouchableOpacity onPress={openAllInfo}>
              <Text style={{color: 'white', fontSize: 14}}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity style={{width: fullWidth / 2 - 25}}>
              <Image
                source={require('../../assets/images/info-1.png')}
                style={{
                  width: fullWidth / 2 - 25,
                  height: 200,
                  marginTop: 10,
                  borderRadius: 10,
                }}
              />
              <Text style={{color: 'white', fontSize: 14}}>
                Persyaratan Umum - Peminjaman Dana Tunai di PT Sarana Kalteng
                Ventura
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: fullWidth / 2 - 25}}>
              <Image
                source={require('../../assets/images/info-2.png')}
                style={{
                  width: fullWidth / 2 - 25,
                  height: 200,
                  marginTop: 10,
                  borderRadius: 10,
                }}
              />
              <Text style={{color: 'white', fontSize: 14}}>
                Podcast Kalteng Ventura (Pembiayaan)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
