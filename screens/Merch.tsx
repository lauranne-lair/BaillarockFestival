import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Merch: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans la boutique Merch</Text>
    </View>
  );
};

export default Merch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
