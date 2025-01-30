import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: Colors.blacktransparent9, // Fond noir pour un design moderne et contrasté
      padding: 16,
    },
    scrollContainer: {
      alignItems: 'center', // Centrer les éléments horizontalement
      paddingBottom: 30,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: Colors.greeninspi, // Vert pour un aspect rassurant
      textAlign: 'center', // Centré
      marginBottom: 20,
      fontFamily: 'Capsmall_clean', // Appliquer la police personnalisée
    },
    text: {
      fontSize: 18,
      color: '#fff',
      lineHeight: 26,
      textAlign: 'left',
      marginBottom: 20,
      fontFamily: 'Capsmall_clean',
    },
    bulletPoint: {
      fontSize: 22,
      color: Colors.greeninspi,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
    },
    backText: {
      marginLeft: 5,
      color: Colors.greeninspi,
      fontSize: 20,
    },
    menuButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10, // Bouton aligné à droite
    },
  });