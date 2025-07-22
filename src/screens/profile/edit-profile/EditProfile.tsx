import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Colors} from '../../../utils/color';
import {IUser} from '../../../types/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import apiService from '../../../utils/apiService';
import {omit} from 'lodash';

export default function EditProfile({navigation}: any) {
  const [payload, setPayload] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (field: string, value: string) => {
    setPayload(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUserData = await AsyncStorage.getItem('user');
      if (storedUserData) {
        setPayload({...JSON.parse(storedUserData), password: ''});
      }
    };
    fetchUserData();
  }, []);
  const onSubmit = async () => {
    setLoading(true);
    try {
      let newPayload: any = {...payload};
      // Hapus password jika kosong atau hanya spasi
      if (!newPayload.password?.trim()) {
        const {password, ...rest} = newPayload;
        newPayload = rest;
      }
      const result: any = await apiService.patch('/user', newPayload);
      if (result) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Berhasil Mengubah Profil',
          position: 'top',
        });
        AsyncStorage.setItem('user', JSON.stringify(result.result));
      }

      setLoading(false);
    } catch (error: any) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Failed',
        text2:
          (error.response && error.response.data.message) ||
          error.response.data.error_message,
        position: 'top',
      });
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} type="FontAwesome" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profil</Text>
        <View></View>
      </View>
      <View style={[styles.centering, {marginTop: 20}]}>
        <Icon name="user-circle" size={150} type="FontAwesome" color="grey" />
        <TouchableOpacity style={{position: 'absolute', bottom: 0, right: 125}}>
          <Icon name="pen-square" size={40} type="FontAwesome5" />
        </TouchableOpacity>
      </View>
      <View style={[styles.col, {marginTop: 20}]}>
        <Input
          label=""
          value={payload?.name || ''}
          onChangeText={(e: any) => handleChange('name', e)}
          placeholder="Nickname"
        />
        <Input
          label=""
          value={payload?.phone || ''}
          onChangeText={(e: any) => handleChange('phone', e)}
          placeholder="Phone"
        />
        <Input
          label=""
          value={payload?.email || ''}
          onChangeText={(e: any) => handleChange('email', e)}
          placeholder="Email"
        />
        <Input
          label=""
          value={payload?.password}
          onChangeText={(e: any) => handleChange('password', e)}
          placeholder="Password"
          secureTextEntry
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: -150,
            width: '100%',
            gap: 10,
          }}>
          <View style={{flex: 1}}>
            <Button
              label={loading ? 'Menyimpan...' : 'Simpan'}
              onPress={onSubmit}
              bgColor={Colors.primary}
              color={'white'}
              disabled={loading}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  col: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
