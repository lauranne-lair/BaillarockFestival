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
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 36,
    color: Colors.accent,
    marginRight: 5,
  },
  inviteButton: {
    backgroundColor: Colors.greeninspi,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    alignItems: 'center',
    marginTop: 15,
  },
  inviteText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  menuButton: {
    paddingRight: 15,
  },
});
