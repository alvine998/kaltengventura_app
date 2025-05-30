import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface TextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  value: any;
  onChangeText: any;
  keyboardType?: any;
  icon?: any;
  label?: string;
}

export default function Input({
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  keyboardType,
  icon,
  label,
}: TextInputProps) {
  const [show, setShow] = useState<boolean>(true);
  return (
    <View style={{marginTop: 20, width: '100%'}}>
      {icon && (
        <View style={{position: 'absolute', top: 14, left: 14}}>{icon}</View>
      )}
      {label && (
        <Text style={{marginBottom: 5, fontSize: 14, color: '#808080', marginLeft:10}}>
          {label}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        secureTextEntry={show && secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType || 'default'}
        style={{
          width: '100%',
          height: 40,
          borderWidth: 1,
          padding: 10,
          borderRadius: 20,
          paddingHorizontal: icon ? 35 : 20,
        }}
        placeholderTextColor={'#808080'}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={{position: 'absolute', top: 12, right: 17}}
          onPress={() => setShow(!show)}>
          <Icon name={show ? 'eye-slash' : 'eye'} size={15} color={'#000'} />
        </TouchableOpacity>
      )}
    </View>
  );
}
