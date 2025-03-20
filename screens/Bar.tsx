import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { barConfig } from '../config/Config_BarPage';
import styles from '../styles/Bar_Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Boisson: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* IMAGE PRINCIPALE */}
      <Image source={barConfig.assets.image} style={styles.backgroundImage} resizeMode="cover" />

      {/* CONTENEUR DES BOUTONS SOUS L'IMAGE */}
      <View style={styles.buttonContainer}>
        {/* BRASSERIE DU XIII + BOUTON 1 */}
        <View style={styles.buttonRow}>
          <Text style={styles.buttonText}>Brasserie du XIII</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => Linking.openURL('https://www.instagram.com/brasserie_du_treize/')}>
            <FontAwesome name="instagram" size={30} color="#fff" /> 
          </TouchableOpacity>
        </View>

        {/* BIÈRES DU CLAIN + BOUTON 2 */}
        <View style={styles.buttonRow}>
          <Text style={styles.buttonText}>Les Pirates du Clain</Text>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => Linking.openURL('https://www.instagram.com/piratesduclain/')}>
            <FontAwesome name="instagram" size={30} color="#fff" /> 
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Boisson;
