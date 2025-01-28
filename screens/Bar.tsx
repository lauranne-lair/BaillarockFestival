import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans la section Bar</Text>
    </View>
  );
};

export default Bar;

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
