import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import Intro1 from '../../components/Intro';

const {width} = Dimensions.get('window');

const slides = [
  {
    key: 'intro1',
    title: 'Halo, Selamat Datang di',
    text: 'Kalteng Ventura',
    image: require('../../assets/images/skv_logo.png'),
    colors: ['#0000FF', '#87CEFA'],
  },
  {
    key: 'intro2',
    title: 'Aplikasi Kalteng Ventura',
    text: 'Platform Digital Pembiayaan',
    image: require('../../assets/images/intro2.png'), // Replace with your image
    colors: ['#FFF', '#FFF'],
  },
  {
    key: 'intro3',
    title: 'Gabung Sekarang!',
    text: 'Aplikasi membantu kebutuhan modal usaha dan investasi',
    image: require('../../assets/images/intro3.png'), // Replace with your image
    colors: ['#FFF', '#FFF'],
  },
];

const Intro = ({navigation}: any) => {
  const renderItem = ({item}: any) => {
    return <Intro1 item={item} width={width} navigation={navigation} />;
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      showSkipButton={false}
      showNextButton={false}
      showDoneButton={false}
      dotClickEnabled
      dotStyle={{backgroundColor: '#FFE5B4'}}
      activeDotStyle={{backgroundColor: '#fff'}}
    />
  );
};

export default Intro;
