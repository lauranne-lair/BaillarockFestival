import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignSelf: 'flex-start',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    groupName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    groupGenre: {
      fontSize: 17,
      color: 'lightgray',
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
    closeBar: {
      backgroundColor: Colors.black,
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    
    closeText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
    },
  });
  