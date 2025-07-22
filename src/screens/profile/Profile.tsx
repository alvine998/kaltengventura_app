import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from '../../types/user';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../utils/color';
import Icon from '../../components/Icon';

export default function Profile({navigation}: any) {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [refresh, setRefresh] = useState(false);
  const fetchUserData = async () => {
    const storedUserData = await AsyncStorage.getItem('user');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  };
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      fetchUserData();
      setRefresh(false);
    }, 2000);
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const openWhatsApp = (phoneNumber: string, message?: string) => {
    const formattedNumber = phoneNumber.replace(/\D/g, ''); // hapus karakter non-angka
    const encodedMessage = message ? encodeURIComponent(message) : '';
    const url = `whatsapp://send?phone=${formattedNumber}${
      message ? `&text=${encodedMessage}` : ''
    }`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          Alert.alert('WhatsApp tidak terpasang');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => Alert.alert('Terjadi kesalahan', err.message));
  };
  const menuProfiles = [
    {
      name: 'Edit Profil',
      icon: 'user',
      onPress: () => {
        navigation.navigate('EditProfile');
      },
    },
    {
      name: 'Kebijakan Privasi',
      icon: 'shield-alt',
      onPress: () => {
        navigation.navigate('Privacy');
      },
    },
    {
      name: 'Syarat & Ketentuan',
      icon: 'question-circle',
      onPress: () => {
        navigation.navigate('Term');
      },
    },
    {
      name: 'Bantuan',
      icon: 'clipboard-list',
      onPress: () => {
        openWhatsApp('6282352787733', 'Saya Butuh Bantuan');
      },
    },
    {
      name: 'Logout',
      icon: 'sign-out-alt',
      onPress: () => {
        AsyncStorage.removeItem('user');
        navigation.navigate('Login');
      },
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Icon name="user-circle" size={150} type="FontAwesome" color="grey" />
          <Text style={styles.name}>{userData?.name}</Text>

          <View style={styles.grayLine} />
        </View>

        <View style={styles.leftContainer}>
          {menuProfiles?.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={item.onPress}
              style={styles.row}>
              <View style={styles.circleWhite}>
                <FA5Icon color={'blue'} name={item.icon} size={20} />
              </View>
              <Text style={styles.textName}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  grayLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 40,
  },
  circleWhite: {
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    padding: 15,
    elevation: 5,
  },
  leftContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
