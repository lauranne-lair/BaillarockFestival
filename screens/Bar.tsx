import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, Linking, SafeAreaView } from 'react-native';
import { barConfig } from '../config/Config_BarPage';
import styles from '../styles/Bar_Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Boisson: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Image principale */}
        <Image source={barConfig.assets.image} style={styles.backgroundImage} resizeMode="cover" />

        {/* Section des brasseries avec leurs boutons */}
        <View style={styles.buttonContainer}>
          {/* Brasserie du XIII */}
          <View style={styles.buttonRow}>
            <Text style={styles.buttonText}>Brasserie du XIII</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Linking.openURL('https://www.instagram.com/brasserie_du_treize/')}>
              <FontAwesome name="instagram" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* Bière du Clain */}
          <View style={styles.buttonRow}>
            <Text style={styles.buttonText}>Les Pirates du Clain</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => Linking.openURL('https://www.instagram.com/piratesduclain/')}>
              <FontAwesome name="instagram" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Boisson;
