import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: Colors.dark.background,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    scrollContainer: {
      alignItems: 'flex-start',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.white,
      textAlign: 'center',
      marginBottom: 20,
      fontFamily: 'Capsmall_clean',
      alignSelf: 'center',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.primary,
      marginTop: 15,
      marginBottom: 5,
    },
    text: {
      fontSize: 14,
      color: Colors.white,
      marginBottom: 5,
    },
    bold: {
      fontWeight: 'bold',
    },
    link: {
      fontSize: 14,
      color: Colors.secondary,
      textDecorationLine: 'underline',
      marginBottom: 10,
    },
    techContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    techIcon: {
      marginRight: 10,
    },
    techText: {
      fontSize: 14,
      color: Colors.white,
    },
    menuButton: {
      marginRight: 15,
    },
  });
  