import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Prevention: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans la section Prevention</Text>
    </View>
  );
};

export default Prevention;

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
