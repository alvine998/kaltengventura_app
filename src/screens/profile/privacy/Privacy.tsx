import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const Privacy = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://kaltengventura.com/kebijakan-privasi/'}}
      />
    </View>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
