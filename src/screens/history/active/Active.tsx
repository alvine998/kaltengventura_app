import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/color';
import Icon from '../../../components/Icon';
import {formatThousand} from '../../../utils';
import moment from 'moment';
import {set} from 'lodash';

export default function ActiveHistory({navigation}: any) {
  const tabs = [
    {
      name: 'Aktif',
      path: 'active',
    },
    {
      name: 'Selesai',
      path: 'complete',
    },
  ];
  const grids = [
    {
      name: 'Jumlah tagihan',
      value: `Rp ${formatThousand(3795000)}`,
    },
    {
      name: 'Sisa tenor',
      value: 12 + ' Bulan',
    },
    {
      name: 'Status',
      value: 'Aktif',
    },
    {
      name: 'Pinjaman',
      value: `Rp ${formatThousand(100000000)}`,
    },
    {
      name: 'Tanggal tagihan',
      value: `${moment('2025-10-10').format('DD-MM-YYYY')}`,
    },
    {
      name: 'No Kontrak',
      value: '123456789',
    },
  ];
  const [statusTab, setStatusTab] = useState<string>('active');
  return (
    <View>
      <View style={styles.tabs}>
        {tabs?.map((tab, index) => (
          <TouchableOpacity key={index} onPress={() => setStatusTab(tab.path)}>
            <Text
              style={{
                color: statusTab === tab.path ? Colors.primary : '#000',
                fontSize: 20,
                fontWeight: 'bold',
                marginHorizontal: 10,
                textAlign: 'center',
              }}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={{padding: 10}}>
        <View style={styles.card}>
          <View style={{gap: 10, flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{backgroundColor: 'blue', padding: 5, borderRadius: 50}}>
              <Icon
                name={'file-document'}
                type="MaterialDesignIcons"
                size={20}
                color={'#fff'}
              />
            </View>
            <Text>Modal Kerja</Text>
          </View>
          <View style={styles.grid3}>
            {grids?.map((grid, index) => (
              <View key={index} style={{width: '30%', marginTop: 10}}>
                <Text
                  style={{
                    textAlign:
                      grid?.name === 'Status'
                        ? 'center'
                        : grid?.name === 'No Kontrak'
                        ? 'center'
                        : 'left',
                  }}>
                  {grid.name}
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    marginTop: 5,
                    textAlign:
                      grid?.name === 'Status'
                        ? 'center'
                        : grid?.name === 'No Kontrak'
                        ? 'center'
                        : 'left',
                    color:
                      grid?.name === 'Status' && grid.value === 'Aktif'
                        ? Colors.success
                        : '#000',
                  }}>
                  {grid.value}
                </Text>
              </View>
            ))}
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('UnpaidPayment')}>
              <Icon
                name="credit-card"
                type="FontAwesome5"
                color="white"
                size={20}
              />
              <Text style={{color: '#fff', textAlign: 'center'}}>Tagihan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.push('CashPayment')}>
              <Icon
                name="hand-holding-usd"
                type="FontAwesome5"
                color="white"
                size={20}
              />
              <Text style={{color: '#fff', textAlign: 'left', fontSize: 10}}>
                Tempat Pembayaran
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.push('DetailPayment')}>
              <Icon
                name="file-alt"
                type="FontAwesome5"
                color="white"
                size={20}
              />
              <Text style={{color: '#fff', textAlign: 'center'}}>Angsuran</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#fff',
    gap: 80,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
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
  grid3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '30%',
  },
});
