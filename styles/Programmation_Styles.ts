import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 20,
    },
    backgroundContainer: {
      flex: 1,
      backgroundColor: Colors.darkGray.replace('rgb', 'rgba').replace(')', ', 0.9)'),
    },
    screenContainer: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
      backgroundColor: Colors.lightGray,
    },
    listContent: {
      paddingBottom: height * 0.02,
    },
    normalGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: width * 0.03,
      backgroundColor: Colors.dark.background,
      marginVertical: height * 0.01,
      marginHorizontal: width * 0.03,
      borderRadius: 10,
    },
    pastGroup: {
      opacity: 0.5,
      backgroundColor: Colors.darkGray,
    },
    currentGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.secondary, 
      borderWidth: 2,
      borderColor: Colors.accent,
      elevation: 5,
      overflow: 'hidden',
      position: 'relative',
      marginVertical: height * 0.01,
      marginHorizontal: width * 0.03,
      borderRadius: 10,
    },
    videoContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    },
    videoBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.8,
    },
        
    groupImage: {
      width: width * 0.2,
      height: width * 0.2,
      borderRadius: 10,
      marginRight: width * 0.03,
    },
    currentGroupImage: {
      width: width * 0.3, 
      height: width * 0.3,
      borderRadius: 10,
      marginRight: width * 0.03,
    },
    groupDetails: {
      flex: 1,
    },
    groupName: {
      fontSize: height * 0.02,
      fontWeight: 'bold',
      color: Colors.white,
    },
    currentGroupText: {
      color: Colors.black,
      fontSize: height * 0.025, 
    },
    groupGenre: {
      fontSize: height * 0.018,
      color: Colors.secondary,
    },
    currentGenreText: {
      color: Colors.darkGray,
    },
    groupTime: {
      fontSize: 16,
      fontWeight: '500',
      color: 'white',
      textAlign: 'right',
    },
    currentTimeText: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'right',
    },
    futureGroup: {
      opacity: 0.8,
      backgroundColor: Colors.lightGray,
    },
  });