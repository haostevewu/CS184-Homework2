import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { auth } from '../firebase'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <Text>{auth.currentUser?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;