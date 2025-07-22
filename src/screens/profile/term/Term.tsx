import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const TermScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://kaltengventura.com/profil-kalteng-ventura/syarat-ketentuan/',
        }}
      />
    </View>
  );
};

export default TermScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
