import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    position: 'relative', // Permet d'avoir les boutons en absolu SUR l'image
    width: '100%',
    height: 3000, // Hauteur grande pour scroller
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'hsla(0, 0.00%, 100.00%, 0.60)',
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    borderRadius: 2.5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  button1: {
    top: 425,
    left: width * 0.7,
    borderRadius: 50, 
  },
  button2: {
    top: 370,
    left: width * 0.7,
    borderRadius: 50,
  },
});
