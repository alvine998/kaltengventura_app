import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/Button';
import {Colors} from '../../utils/color';
import Icon from '../../components/Icon';
import Input from '../../components/Input';

export default function DocumentCapital({navigation}: any) {
  const {width, height} = Dimensions.get('window');
  const [payload, setPayload] = useState<any>({
    partner_ktp: '',
    kk: '',
  });
  const handleChange = (field: string, value: string) => {
    setPayload((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{paddingBottom: 20, height: height}}>
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
        <Text style={{fontSize: 20, fontWeight: '500'}}>
          Dokumen pendukung modal usaha
        </Text>
        <View></View>
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <Input
          label="Foto KTP Suami/Istri"
          value={payload?.business_name || ''}
          onChangeText={(e: any) => handleChange('business_name', e)}
          placeholder="Pilih foto KTP Suami/Istri"
        />
        <Input
          label="Kartu Keluarga (KK)"
          value={payload?.address || ''}
          onChangeText={(e: any) => handleChange('address', e)}
          placeholder="Pilih Foto Kartu Keluarga (KK)"
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
              navigation.navigate('WaitingVerify');
            }}
            bgColor={Colors.primary}
            color={'white'}
          />
        </View>
      </View>
    </ScrollView>
  );
}
