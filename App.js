import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './screen/Screen';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#D3ECA7',
    justifyContent: 'center',
  },
});