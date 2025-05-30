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
import ModalComponent, {useModal} from '../../components/Modal';
import {FUNDINGS} from '../../constant/funding';
import {formatThousand} from '../../utils';
import {TENORS} from '../../constant/tenors';

export default function Simulation({navigation}: any) {
  const {width, height} = Dimensions.get('window');
  const [payload, setPayload] = useState<any>({
    fund: 0,
    tenor: 0,
    angsuran: 0,
  });
  const [modal, setModal] = useState<useModal>({
    open: false,
    data: {},
    key: '',
  });
  const countLoan = async () => {
    const months = payload?.tenor * 12;
    const angsuran = payload?.fund / months;
    return setPayload({...payload, angsuran: Math.round(angsuran)});
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
          Simulasi Pembiayaan
        </Text>
        <View></View>
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 70}}>
        <Button
          label={
            payload?.fund ? 'Rp ' + formatThousand(payload?.fund) : 'Pembiayaan'
          }
          onPress={() => {
            setModal({...modal, open: true, key: 'fund'});
          }}
          bgColor={Colors.primary}
          color={'white'}
        />
        <ModalComponent
          visible={modal.open && modal.key === 'fund'}
          onClose={() => setModal({...modal, open: false, key: ''})}
          title="Pilih Pembiayaan">
          <ScrollView
            style={{padding: 20}}
            contentContainerStyle={{paddingBottom: 50}}>
            {FUNDINGS?.map((item: any, index: number) => (
              <Button
                label={'Rp ' + formatThousand(item.amount)}
                onPress={() => {
                  setPayload({...payload, fund: item.amount});
                  setModal({...modal, open: false, key: ''});
                }}
                bgColor={Colors.border}
                color={'black'}
                key={index}
              />
            ))}
          </ScrollView>
        </ModalComponent>
        <Button
          label={payload?.tenor ? payload?.tenor + ' Tahun' : 'Jangka Waktu'}
          onPress={() => {
            setModal({...modal, open: true, key: 'tenor'});
          }}
          bgColor={Colors.primary}
          color={'white'}
        />
        <ModalComponent
          visible={modal.open && modal.key === 'tenor'}
          onClose={() => setModal({...modal, open: false, key: ''})}
          title="Pilih Pembiayaan">
          <ScrollView
            style={{padding: 20}}
            contentContainerStyle={{paddingBottom: 50}}>
            {TENORS?.map((item: any, index: number) => (
              <Button
                label={item.tenor + ' Tahun'}
                onPress={() => {
                  setPayload({...payload, tenor: item.tenor});
                  setModal({...modal, open: false, key: ''});
                }}
                bgColor={Colors.border}
                color={'black'}
                key={index}
              />
            ))}
          </ScrollView>
        </ModalComponent>
        <Button
          label="Angsuran"
          onPress={countLoan}
          bgColor={Colors.primary}
          color={'white'}
        />
        {payload?.angsuran !== 0 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              justifyContent: 'center',
            }}>
            <View style={{marginTop: 20, flexDirection: 'column', gap: 10}}>
              <Text>Pinjaman</Text>
              <Text>Jangka Waktu</Text>
              <Text>Angsuran</Text>
            </View>
            <View style={{marginTop: 20, flexDirection: 'column', gap: 10}}>
              <Text>Rp {formatThousand(payload?.fund)}</Text>
              <Text>{payload?.tenor} Tahun</Text>
              <Text>Rp {formatThousand(payload?.angsuran)}/bulan</Text>
            </View>
          </View>
        )}
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
            label="Ajukan"
            onPress={() => {
              navigation.navigate('IntroCapital');
            }}
            bgColor={Colors.primary}
            color={'white'}
          />
        </View>
      </View>
    </ScrollView>
  );
}
