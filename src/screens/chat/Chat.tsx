import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Input from '../../components/Input';
import {Colors} from '../../utils/color';

export default function Chat({navigation}: any) {
  const [chat, setChat] = useState<any>();
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 70,
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: '500'}}>Chat</Text>
        <View></View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingBottom: 20,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <View style={{flex: 1, paddingRight:50}}>
          <Input
            value={chat}
            onChangeText={(e: any) => {
              setChat(e);
            }}
            placeholder="Type your message"
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.primary,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            alignSelf: 'flex-end',
            marginLeft: -40
          }}>
          <IconFA name="send-o" color={'white'} size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
