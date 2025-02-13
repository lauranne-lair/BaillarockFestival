import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: Colors.dark.background,
      padding: 16,
    },
    scrollContainer: {
      alignItems: 'center', 
      paddingBottom: 30,
    },
    title: {
      fontSize: 28,
      color: Colors.dark.accent, 
      textAlign: 'center',
      marginBottom: 20,
      fontFamily: 'Capsmall_clean', 
      alignSelf: 'center',
    },
    text: {
      fontSize: 18,
      color: Colors.white,
      lineHeight: 26,
      textAlign: 'left',
      marginBottom: 20,
      fontFamily:'Raleway_400Regular',
    },
    sectionContainer: {
      alignSelf: 'stretch', 
      width: '100%', 
      marginBottom: 10, 
    },
    sectionTitle: {
      fontSize: 20,
      color: Colors.white,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'left',
    },
    bulletPointContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    bulletPointText: {
      fontSize: 18,
      color: Colors.white,
      lineHeight: 26,
      textAlign: 'left', 
      flexShrink: 1,
    },
    bulletPoint: {
      fontSize: 24,
      color: Colors.dark.accent,
      margin: 5,
    },
    closingText: {
      fontSize: 18,
      color: Colors.white,
      marginTop: 10,
      textAlign: 'center',
    },
    menuButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
    },
      
  });