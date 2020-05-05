import React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet, SafeAreaView} from 'react-native';

export default ArticleScreen = ({route}) => {
  const {article} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});