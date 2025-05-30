// WebViewScreen.js
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewBlog = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://kaltengventura.com/blog/'}} />
    </View>
  );
};

export default WebViewBlog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
