import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {Colors} from '../../../utils/color';
import Toast from 'react-native-toast-message';
export default function Login({navigation}: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const [payload, setPayload] = useState<any>({email: '', password: ''});
  const handleChange = (name: string, value: string) => {
    setPayload({...payload, [name]: value});
  };

  const onLogin = async () => {
    setLoading(true);
    try {
      if (!payload.email || !payload.password) {
        setLoading(false);
        Toast.show({
          type: 'error',
          text1: 'Failed',
          text2: 'Email atau password tidak boleh kosong',
          position: 'top',
        });
        return;
      }
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Selamat Datang User',
        position: 'top',
      });
      setLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../../assets/images/login_logo.png')}
        style={{width: 250, height: 200}}
      />
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Kalteng Ventura</Text>

      <View style={{width: '100%', marginTop: 20, paddingHorizontal: 50}}>
        <Input
          value={payload.email}
          placeholder="johndoe@gmail.com"
          onChangeText={(e: any) => {
            handleChange('email', e);
          }}
        />
        <Input
          value={payload.password}
          placeholder="********"
          secureTextEntry
          onChangeText={(e: any) => {
            handleChange('password', e);
          }}
        />
        <View style={{marginTop: 20}}>
          <Button
            disabled={loading}
            label={loading ? 'Memproses...' : 'Login'}
            onPress={() => {
              onLogin();
            }}
            bgColor={Colors.primary}
            color="white"
          />
        </View>

        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: Colors.mutedText, fontSize: 16}}>
            Saya belum punya akun?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={{color: Colors.primary, fontSize: 16}}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
