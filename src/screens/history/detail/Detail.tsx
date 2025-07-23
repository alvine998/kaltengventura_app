import {View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Icon from '../../../components/Icon';
import {Colors} from '../../../utils/color';

export default function DetailPayment({navigation}: any) {
  const data = [
    {
      bulan: 0,
      pembayaran: {bulan: '0', angsuran: '-'},
      outstanding: '100,000,000',
    },
    {
      bulan: 1,
      pembayaran: {bulan: '5-Jan-24', angsuran: '3,795,000'},
      outstanding: '98,655,000',
    },
    {
      bulan: 2,
      pembayaran: {bulan: '5-Feb-24', angsuran: '3,795,000'},
      outstanding: '96,586,000',
    },
    {
      bulan: 3,
      pembayaran: {bulan: '5-Mar-24', angsuran: '3,795,000'},
      outstanding: '94,481,000',
    },
    {
      bulan: 4,
      pembayaran: {bulan: '5-Apr-24', angsuran: '3,795,000'},
      outstanding: '92,339,000',
    },
    {
      bulan: 5,
      pembayaran: {bulan: '5-May-24', angsuran: '3,795,000'},
      outstanding: '90,160,000',
    },
    {
      bulan: 6,
      pembayaran: {bulan: '5-Jun-24', angsuran: '3,795,000'},
      outstanding: '87,943,000',
    },
    {
      bulan: 7,
      pembayaran: {bulan: '5-Jul-24', angsuran: '3,795,000'},
      outstanding: '85,687,000',
    },
    {
      bulan: 8,
      pembayaran: {bulan: '5-Aug-24', angsuran: '3,795,000'},
      outstanding: '83,392,000',
    },
    {
      bulan: 9,
      pembayaran: {bulan: '5-Sep-24', angsuran: '3,795,000'},
      outstanding: '81,056,000',
    },
    {
      bulan: 10,
      pembayaran: {bulan: '5-Oct-24', angsuran: '3,795,000'},
      outstanding: '78,056,000',
    },
    {
      bulan: 11,
      pembayaran: {bulan: '5-Nov-24', angsuran: '3,795,000'},
      outstanding: '76,261,000',
    },
    {
      bulan: 12,
      pembayaran: {bulan: '5-Des-24', angsuran: '3,795,000'},
      outstanding: '73,801,000',
    },
  ];
  const renderItem = ({item}: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.bulan}</Text>
      <Text style={styles.cell}>{item.pembayaran.bulan}</Text>
      <Text style={styles.cell}>{item.pembayaran.angsuran}</Text>
      <Text style={styles.cell}>{item.outstanding}</Text>
    </View>
  );
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
        <Text style={{fontSize: 20, fontWeight: '500'}}>Detail Angsuran</Text>
        <View></View>
      </View>
      {/* <View style={styles.tableHead}>
        
        <View style={styles.borderHeadCol}>
          <Text style={{color: 'white'}}>Pembayaran</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.borderHead2}>
              <Text style={{color: 'white'}}>Bulan</Text>
            </View>
            <View style={styles.borderHead2}>
              <Text style={{color: 'white'}}>Angsuran</Text>
            </View>
          </View>
        </View>
        <View style={styles.borderHead}>
          <Text style={{color: 'white'}}>Outstanding</Text>
        </View>
      </View> */}
      {/* <View style={{flexDirection: 'row'}}>
        <View style={[styles.tableHead, {width: '30%'}]}>
          <View style={styles.borderHead}>
            <Text style={{color: 'white'}}>Bulan</Text>
          </View>
          {datas?.map((item, index) => (
            <View
              key={index}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.borderBody}>
                <Text>{item?.month}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={[styles.tableHead, {width: '50%'}]}>
          <View style={styles.borderHeadCol}>
            <Text style={{color: 'white'}}>Pembayaran</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: '50%'}}>
                <View style={styles.borderHead2}>
                  <Text style={{color: 'white'}}>Bulan</Text>
                </View>
                {datas?.map((item, index) => (
                  <View
                    key={index}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.borderBody}>
                      <Text>{item?.month}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <View style={{width: '50%'}}>
                <View style={styles.borderHead2}>
                  <Text style={{color: 'white'}}>Angsuran</Text>
                </View>
                {datas?.map((item, index) => (
                  <View
                    key={index}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.borderBody}>
                      <Text>{item?.unpaid}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View> */}
      <ScrollView horizontal>
        <View>
          {/* Header */}
          <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.headerCell}>Bulan</Text>
            <Text style={styles.headerCell}>Pembayaran Bulan</Text>
            <Text style={styles.headerCell}>Angsuran</Text>
            <Text style={styles.headerCell}>Outstanding</Text>
          </View>

          {/* Data Rows */}
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableHead: {
    backgroundColor: Colors.primary,
    // flexDirection: 'row',
    // alignItems: 'center',
    height: 100,
  },
  borderHead: {
    borderWidth: 1,
    borderColor: 'white',
    width: 'auto',
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderHeadCol: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    // height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    // paddingHorizontal:40
  },
  borderHead2: {
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  borderBody: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerRow: {
    backgroundColor: '#0d6efd',
  },
  cell: {
    padding: 10,
    minWidth: 120,
    textAlign: 'center',
  },
  headerCell: {
    padding: 10,
    minWidth: 110,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
