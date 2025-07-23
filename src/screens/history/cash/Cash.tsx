import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '../../../components/Icon';
import moment from 'moment';
import { formatThousand } from '../../../utils';

export default function CashPayment({navigation}: any) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 20,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} type="FontAwesome" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Tempat Pembayaran</Text>
        <View></View>
      </View>
      <View style={{padding: 10}}>
        <View style={styles.card}>
          <Text>Modal Kerja</Text>
          <Text>{moment().format('DD/MM/YYYY HH:mm')}</Text>
          <View style={styles.blackLine}></View>
          <View style={{flexDirection: 'row', gap:50}}>
            <View style={{flexDirection: 'column', gap: 10}}>
              <Text>No. Akun</Text>
              <Text>Jumlah</Text>
              <Text>Pembayaran</Text>
              <Text>Cara Pembayaran</Text>
              <Text>No. Rekening</Text>
            </View>
            <View style={{flexDirection: 'column', gap: 10}}>
              <Text>: 123456</Text>
              <Text>: {formatThousand(3795000)}</Text>
              <Text>: Ke 1</Text>
              <Text>: Setoran</Text>
              <Text style={{lineHeight:20}}>
                : PT Sarana Kalteng Ventura{"\n"}
                  Bank Kalteng 1000103004121{"\n"}
                  BNI 0083727449{"\n"}
                  Bank Mandiri 031-0004803857
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  blackLine: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
});
