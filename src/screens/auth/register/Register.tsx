import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/color';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Register({navigation}: any) {
  const [step, setStep] = useState<number>(1);
  const [payload, setPayload] = useState<any>({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (name: string, value: string) => {
    setPayload({...payload, [name]: value});
  };
  if (step === 1) {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Image
          source={require('../../../assets/images/register.png')}
          style={{width: '100%', height: 500}}
        />
        <View style={{padding: 20, paddingHorizontal: 40}}>
          <Text style={{fontSize: 30, fontWeight: '500'}}>Buat Akun Anda</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Now!</Text>

          <Text style={{fontSize: 18, color: Colors.disabled, marginTop: 50}}>
            Buat akun anda untuk menggunakan aplikasi
          </Text>

          <View style={{flexDirection: 'row', gap: 10, marginTop: 50}}>
            <View style={{flex: 1}}>
              <Button
                label="Kembali"
                color={Colors.primary}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
            <View style={{flex: 1}}>
              <Button
                label="Selanjutnya"
                bgColor={Colors.primary}
                onPress={() => setStep(2)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (step == 2) {
    return (
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
        <Image
          source={require('../../../assets/images/register2.png')}
          style={{width: '100%', height: 200}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: Colors.disabled,
            width: 100,
            height: 100,
            borderRadius: 100,
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Icon name='user-circle' size={50} color="black" />
          </TouchableOpacity>
        <View style={{marginTop: 20, width: '100%', paddingHorizontal: 20}}>
          <ScrollView>
            <Input
              value={payload.name}
              onChangeText={(e: any) => handleChange('name', e)}
              placeholder="Nama"
              icon={<Icon name='user' />}
            />
            <Input
              value={payload.email}
              onChangeText={(e: any) => handleChange('email', e)}
              placeholder="Email"
              icon={<Icon name='envelope' />}
            />
            <Input
              value={payload.phone}
              onChangeText={(e: any) => handleChange('phone', e)}
              placeholder="Nomor Telepon"
              icon={<Icon name='phone' />}
            />
            <Input
              value={payload.password}
              secureTextEntry
              onChangeText={(e: any) => handleChange('password', e)}
              placeholder="Password"
              icon={<Icon name='lock' />}
            />
          </ScrollView>

          <View style={{marginTop: 50}}>
            <Button
              label="Daftar"
              onPress={() => navigation.navigate('Login')}
              bgColor={Colors.primary}
            />
          </View>
        </View>
      </View>
    );
  }
}
