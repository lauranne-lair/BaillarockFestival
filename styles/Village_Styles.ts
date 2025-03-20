import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

const { width } = Dimensions.get('window');
const CONTAINER_WIDTH = width / 2 - 60;
const IMAGE_HEIGHT = width / 2 - 60;

export default StyleSheet.create({
    backgroundImage: {
      flex: 1,
    },
    screenContainer: {
      flex: 1,
      backgroundColor: Colors.blacktransparent7,
      padding: 8,
      paddingTop: 20,
    },
    pageTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: Colors.white,
      textAlign: 'left',
      marginBottom: 15,
      fontFamily: 'Capsmall',
    },
    expoTitle: {
      marginTop: 90,
    },
    foodTitle: {
      marginTop: -60,
    },
    horizontalListContent: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingHorizontal: 8,
    },
    container: {
      width: CONTAINER_WIDTH,
      height: 250,
      padding: 8,
      backgroundColor: Colors.dark.secondary.replace('rgb', 'rgba').replace(')', ', 0.8)'),
      borderRadius: 8,
      marginHorizontal: 8,
      shadowColor: Colors.black,
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    expoName: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 8,
      color: Colors.white,
      textAlign: 'center',
    },
    expoImage: {
      width: CONTAINER_WIDTH - 40,
      height: IMAGE_HEIGHT,
      marginBottom: 8,
      borderRadius: 10,
    },
    foodImage: {
      width: CONTAINER_WIDTH - 40,
      height: CONTAINER_WIDTH - 40, 
      marginBottom: 8,
      borderRadius: (CONTAINER_WIDTH - 40) / 2, 
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    loadingText: {
      color: Colors.white,
      fontSize: 20,
    },
  });
  