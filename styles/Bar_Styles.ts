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
<<<<<<< HEAD
    backgroundColor: Colors.darkGray,
=======
    backgroundColor: Colors.black,
>>>>>>> 00349e1cd329d6e04fb812411a0cddf8f49827d2
  },
  backgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 768 / 1086,
  },
  buttonContainer: {
<<<<<<< HEAD
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: Colors.darkGray,
    paddingVertical: 10,
=======
    marginTop: 0, // Évite tout espace entre l’image et les boutons
    alignItems: 'center',
    backgroundColor: Colors.black,
>>>>>>> 00349e1cd329d6e04fb812411a0cddf8f49827d2
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
<<<<<<< HEAD
    backgroundColor: Colors.darkGray,
=======
>>>>>>> 00349e1cd329d6e04fb812411a0cddf8f49827d2
    padding: 5,
    borderRadius: 5,
    shadowColor: Colors.white,
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
});
