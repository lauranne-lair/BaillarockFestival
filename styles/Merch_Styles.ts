import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      width: '100%',
      height: height,
      position: 'absolute',
      zIndex: -1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: Colors.blacktransparent7,
    },
    scrollContainer: {
      paddingVertical: 20,
      alignItems: 'center',
      zIndex: 1,
      paddingBottom: 50,
    },
    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: Colors.white,
      fontFamily: 'RockSalt',
      textAlign: 'center',
      marginBottom: 20,
    },
    topImage: {
      width: 360,
      height: 280,
      marginBottom: 20,
      shadowColor: Colors.black,
      shadowOpacity: 0.8,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 10 },
      borderRadius: 30,
      zIndex: 2,
    },
    logoImage: {
      width: 150,
      height: 120,
      marginBottom: 20,
      shadowColor: Colors.black,
      shadowOpacity: 0.8,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 10 },
      borderRadius: 20,
      zIndex: 2,
    },
    teeshirtImage: {
      width: 350,
      height: 370,
      marginBottom: 20,
      shadowColor: Colors.black,
      shadowOpacity: 0.8,
      shadowRadius: 15,
      shadowOffset: { width: 0, height: 10 },
      borderRadius: 20,
      zIndex: 2,
    },
    partImage: {
      width: 360,
      height: 390,
      marginBottom: 60,
      opacity: 0.5,
      shadowColor: Colors.black,
      shadowOpacity: 0.5,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      borderRadius: 20,
      zIndex: 2,
    },
    modalContainer: {
      flex: 1,
      backgroundColor:Colors.blacktransparent7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    zoomedImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    closeButton: {
      position: 'absolute',
      top: 50,
      right: 20,
      zIndex: 3,
      backgroundColor: 'transparent',
    },
    menuButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10, // Bouton aligné à droite
    },
    menuText: {
      marginLeft: 5,
      color: Colors.greeninspi,
      fontSize: 20,
    },
  });