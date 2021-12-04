import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { alignContent } from 'styled-system';

export default function Loading() {
  return (
    <View  // Background Linear Gradient
        colors={['#C9D6FF', '#E2E2E2']}
        style={styles.gradient}
        >
        <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor:'white'
    
  },
  text: {
    fontSize: 40,
    fontWeight: "200",
  }
});