import {View, Text, TextInput} from 'react-native';
import React from 'react';

interface TextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  value: any;
  onChangeText: any;
  keyboardType?: any;
  icon?: any;
}

export default function Input({
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  keyboardType,
  icon,
}: TextInputProps) {
  return (
    <View style={{marginTop: 20, width: '100%'}}>
      {icon && (
        <View style={{position: 'absolute', top: 14, left: 14}}>{icon}</View>
      )}
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
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
      />
    </View>
  );
}
