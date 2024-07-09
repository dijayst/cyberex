import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Try = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, World!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Try;
