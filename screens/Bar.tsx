import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import { barConfig } from '../config/Config_BarPage';
import styles from '../styles/Bar_Styles';

export default function Boisson() {
  // Récupérer la hauteur de l'écran
  const screenHeight = Dimensions.get('window').height;

  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={barConfig.assets.image} // Utilisation de l'image définie dans barConfig
            style={styles.backgroundImage}
            resizeMode="cover" // Ajuste l'image pour couvrir tout l'espace disponible
          />
        </View>
      </ScrollView>
  );
}


