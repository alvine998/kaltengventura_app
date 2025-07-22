import {View, Text} from 'react-native';
import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface IconProps {
  type:
    | 'Ionicons'
    | 'FontAwesome'
    | 'MaterialIcons'
    | 'FontAwesome5'
    | 'MaterialDesignIcons';
  name: string;
  size?: number;
  color?: string;
}

export default function Icon({name, type, color, size}: IconProps) {
  if (type === 'Ionicons') {
    return <IonIcon name={name} size={size || 24} color={color || 'black'} />;
  }
  if (type === 'FontAwesome') {
    return (
      <FontAwesomeIcon name={name} size={size || 24} color={color || 'black'} />
    );
  }
  if (type === 'FontAwesome5') {
    return (
      <FontAwesome5Icon
        name={name}
        size={size || 24}
        color={color || 'black'}
      />
    );
  }
  if (type === 'MaterialIcons') {
    return (
      <MaterialIcon name={name} size={size || 24} color={color || 'black'} />
    );
  }
  if (type === 'MaterialDesignIcons') {
    return (
      <MaterialCommunityIcons
        name={name}
        size={size || 24}
        color={color || 'black'}
      />
    );
  }
}
