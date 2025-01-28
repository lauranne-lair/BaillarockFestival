import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Village: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans le Village</Text>
    </View>
  );
};

export default Village;

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
