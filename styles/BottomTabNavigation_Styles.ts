import { StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
    iconContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerContainer: {
      position: 'absolute',
      bottom: Platform.OS === 'ios' ? 20 : 15,
      alignSelf: 'center',
      zIndex: 2,
    },
    homeButton: {
      borderRadius: 50,
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: 'gray',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    },
    homeIcon: {
      width: '100%',
      height: '100%',
      borderRadius: 50,
      resizeMode: 'cover', 
    },
    menuButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  