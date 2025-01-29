import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image, SafeAreaView } from 'react-native';
import { barConfig } from '../config/Config_BarPage';

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

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff', // Assure un fond blanc pour la zone sécurisée
  },
  scrollContainer: {
    flexGrow: 1,
    margin: 0, // Pas de marges autour du ScrollView
    paddingBottom: 70, // Ajoute un espace pour éviter que le contenu passe sous la barre
  },
  imageContainer: {
    width: '100%',
    height: 'auto', // Ajuster la hauteur en fonction de la taille de l'image
    overflow: 'hidden', // Masquer les parties de l'image qui dépassent
  },
  backgroundImage: {
    width: '100%',
    height: 3000, // Une hauteur arbitraire pour rendre l'image plus grande que l'écran
  },
});
