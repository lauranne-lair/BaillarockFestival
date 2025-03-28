import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.black, // Empêche un fond blanc en haut de l'écran
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  backgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 768 / 1086,
  },
  buttonContainer: {
    marginTop: 0, // Évite tout espace entre l’image et les boutons
    alignItems: 'center',
    backgroundColor: Colors.black,
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
    padding: 5,
    borderRadius: 5,
    shadowColor: Colors.white,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
});
