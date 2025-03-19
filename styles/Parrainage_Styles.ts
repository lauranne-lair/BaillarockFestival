import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.dark.accent,
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Capsmall_clean', 
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: Colors.white,
    textAlign: 'left',
    marginBottom: 10,
    lineHeight: 24,
    flexShrink: 1,
  },
  bulletPointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletPoint: {
    marginRight: 8,
  },
  menuButton: {
    paddingRight: 15,
  },
  socialMediaContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.blacktransparent9,
    borderRadius: 10,
  },
  socialMediaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 10,
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialMediaIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  }
});