import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

export default function Button({
  label,
  onPress,
  color,
  disabled,
  loading,
  bgColor,
  borderColor
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        width: '100%',
        height: 50,
        borderColor: borderColor || 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor || 'transparent',
        opacity: disabled ? 0.5 : 1,
      }}>
      <Text style={{color: color || 'white', fontSize: 16}}>
        {loading ? 'Loading...' : label}
      </Text>
    </TouchableOpacity>
  );
}
