import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
    backgroundImage: {
      flex: 1,
    },
    screenContainer: {
      flex: 1,
      backgroundColor: Colors.blacktransparent7,
      padding: 8,
      paddingTop: 10,
    },
    listContent: {
      paddingBottom: 16,
      justifyContent: 'center',
    },
    partnerContainer: {
      flex: 1,
      padding: 8,
      backgroundColor: Colors.greentransparent9,
      borderRadius: 8,
      margin: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    partnerName: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 8,
      color: Colors.white,
      textAlign: 'center',
    },
    partnerImage: {
      width: 120,
      height: 120,
      marginBottom: 8,
      borderRadius: 10,
    },
    emptyText: {
      color: Colors.black,
      textAlign: 'center',
      marginTop: 20,
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
      paddingRight: 10,
    },
  });