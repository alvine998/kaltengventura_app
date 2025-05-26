import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from '../../components/Icon';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function InputCapital({navigation}: any) {
  const {width, height} = Dimensions.get('window');
  const [payload, setPayload] = useState({
    business_name: '',
    address: '',
    field: '',
    place_status: '',
    other_loan: '',
    mother_name: '',
  });

  const handleChange = (field: string, value: string) => {
    setPayload(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 20, height: height}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} type="FontAwesome" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Modal Usaha</Text>
        <View></View>
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <Input
          label="Nama Usaha/Pemohon"
          value={payload?.business_name || ''}
          onChangeText={(e: any) => handleChange('business_name', e)}
          placeholder="Masukkan nama usaha/pemohon"
        />
        <Input
          label="Alamat Rumah"
          value={payload?.address || ''}
          onChangeText={(e: any) => handleChange('address', e)}
          placeholder="Masukkan alamat rumah"
        />
        <Input
          label="Bidang Usaha"
          value={payload?.field || ''}
          onChangeText={(e: any) => handleChange('field', e)}
          placeholder="Masukkan bidang usaha"
        />
        <Input
          label="Status Tempat Tinggal"
          value={payload?.place_status || ''}
          onChangeText={(e: any) => handleChange('place_status', e)}
          placeholder="Masukkan status tempat tinggal"
        />
        <Input
          label="Apakah anda memiliki pinjaman dengean pihak lain?"
          value={payload?.other_loan || ''}
          onChangeText={(e: any) => handleChange('other_loan', e)}
          placeholder="Ya/Tidak"
        />
        <Input
          label="Nama Ibu Kandung"
          value={payload?.mother_name || ''}
          onChangeText={(e: any) => handleChange('mother_name', e)}
          placeholder="Masukkan nama ibu kandung"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 20,
          width: width,
          paddingHorizontal: 20,
          gap: 10,
        }}>
        <View style={{flex: 1}}>
          <Button
            label="Selanjutnya"
            onPress={() => {
              navigation.navigate('Home');
            }}
            bgColor={Colors.primary}
            color={'white'}
          />
        </View>
      </View>
    </ScrollView>
  );
}
