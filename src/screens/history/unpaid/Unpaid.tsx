import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from '../../../components/Icon';
import {Colors} from '../../../utils/color';
import {formatThousand} from '../../../utils';
import moment from 'moment';
import Button from '../../../components/Button';

export default function UnpaidPayment({navigation}: any) {
  const grids = [
    {
      name: 'Sisa tenor',
      value: 12 + ' Bulan',
    },
    {
      name: 'Tanggal tagihan',
      value: `${moment('2025-10-10').format('DD/MM/YYYY')}`,
    },
    {
      name: 'Pinjaman',
      value: `Rp ${formatThousand(100000000)}`,
    },
    {
      name: 'Nomor Kontrak',
      value: '123456789',
    },
    {
      name: 'Tagihan',
      value: 'Ke 1',
    },
  ];
  return (
    <View style={{flex: 1}}>
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
        <Text style={{fontSize: 20, fontWeight: '500'}}>Tagihan</Text>
        <View></View>
      </View>
      <View style={{padding: 10, marginTop: 20}}>
        <View style={styles.header}>
          <Icon
            name={'file-document'}
            type="MaterialDesignIcons"
            size={40}
            color={'#fff'}
          />
          <View>
            <Text style={{color: '#fff', marginLeft: 10}}>Jumlah Tagihan</Text>
            <Text style={{color: '#fff', marginLeft: 10}}>
              Rp {formatThousand(3795000)}
            </Text>
          </View>
        </View>
        <View style={styles.grid3}>
          {grids?.map((grid, index) => (
            <View key={index} style={{width: '33%', marginTop: 10}}>
              <Text
                style={{
                  textAlign: 'left',
                }}>
                {grid.name}
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  marginTop: 5,
                  textAlign: 'left',
                  color:
                    grid?.name === 'Status' && grid.value === 'Aktif'
                      ? Colors.success
                      : '#000',
                }}>
                {grid.value}
              </Text>
            </View>
          ))}
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            marginVertical: 20,
            color: Colors.primary,
            marginLeft: 10,
          }}>
          Detail Tagihan
        </Text>
        <View style={styles.monthlyCard}>
          <View style={styles.row}>
            <Text style={{color: 'blue'}}>Tagihan Bulan Ini</Text>
            <Text style={{color: 'blue'}}>05/01/2025</Text>
          </View>
          <View style={styles.blackLine} />
          <View style={styles.rowEvenly}>
            <View>
              <Text>Jumlah</Text>
              <Text>Keterangan</Text>
            </View>
            <View>
              <Text>: Rp {formatThousand(3795000)}</Text>
              <Text>: Ke 1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <Button
          label="Bayar"
          onPress={() => navigation.navigate('Payment')}
          bgColor={Colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.primary,
    height: 100,
    borderRadius: 10,
    zIndex: 2,
  },
  grid3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginTop: -10,
    zIndex: 1,
  },
  monthlyCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blackLine: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  rowEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
  },
  bottomBtn: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
});
