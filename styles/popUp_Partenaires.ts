import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: 'rgb(40, 40, 40)', 
    },
    modalContainer: {
      flex: 1,
    },
    banner: {
      height: '30%',
    },
    bannerBackground: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    textContainer: {
      padding: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      alignSelf: 'flex-start',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    partName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    partGenre: {
      fontSize: 18,
      color: 'white',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      color: 'white',
      textAlign: 'justify',
    },
    socialIcons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
    },
    socialIcon: {
      marginHorizontal: 10,
    },
    closeButton: {
      position: 'absolute',
      zIndex: 10,
      padding: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 20,
    },
  });
  