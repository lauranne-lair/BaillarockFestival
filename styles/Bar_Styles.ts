import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: Colors.darkGray,
  },
  backgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 768 / 1086,
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: Colors.darkGray,
    paddingVertical: 10,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    marginRight: 10,
    fontFamily: 'Capsmall',
    textTransform: 'uppercase', 
  },
  button: {
    backgroundColor: Colors.darkGray,
    padding: 5,
    borderRadius: 5,
    shadowColor: Colors.white,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
});
