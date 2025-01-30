import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
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