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
      backgroundColor: Colors.blacktransparent7,
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
    groupContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: width * 0.03,
      backgroundColor: Colors.lightGray,
      marginVertical: height * 0.01,
      marginHorizontal: width * 0.03,
      borderRadius: 10,
    },
    pastGroup: {
      opacity: 0.5,
      backgroundColor: '#e0e0e0',
    },
    currentGroup: {
      backgroundColor: Colors.primary,
      borderWidth: 2,
      borderColor: Colors.secondary,
      elevation: 5,
    },
    currentGroupImage: {
      width: width * 0.25,
      height: width * 0.25,
      borderRadius: 15,
      marginRight: width * 0.03,
    },
    futureGroup: {
      opacity: 0.8,
      backgroundColor: Colors.white,
    },
    groupImage: {
      width: width * 0.2,
      height: width * 0.2,
      borderRadius: 10,
      marginRight: width * 0.03,
    },
    groupDetails: {
      flex: 1,
    },
    groupName: {
      fontSize: height * 0.02,
      fontWeight: 'bold',
    },
    groupGenre: {
      fontSize: height * 0.018,
      color: '#555',
    },
    groupTime: {
      fontSize: height * 0.015,
      fontWeight: '500',
      color: Colors.darkGray,
    },
  });