import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Programme: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Programmation des événements</Text>
    </View>
  );
};

export default Programme;

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
