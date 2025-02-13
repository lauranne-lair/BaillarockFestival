import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, Linking, Dimensions } from 'react-native';
import { barConfig } from '../config/Config_BarPage';
import styles from '../styles/Bar_Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Boisson: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Conteneur de l'image et des boutons */}
      <View style={styles.imageContainer}>
        {/* IMAGE PRINCIPALE */}
        <Image source={barConfig.assets.image} style={styles.backgroundImage} resizeMode="cover" />

        {/* BOUTON 1 */}
        <TouchableOpacity 
          style={[styles.button, styles.button1]} 
          onPress={() => Linking.openURL('https://www.instagram.com/brasserie_du_treize/')}>
          <FontAwesome name="instagram" size={30} color="#fff" /> 
        </TouchableOpacity>

        {/* BOUTON 2 */}
        <TouchableOpacity 
          style={[styles.button, styles.button2]} 
          onPress={() => Linking.openURL('https://www.instagram.com/piratesduclain/')}>
          <FontAwesome name="instagram" size={30} color="#fff" /> 
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Boisson;
