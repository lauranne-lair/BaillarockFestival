import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 768 / 1086, // Ratio de l'image pour l'afficher entière
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10,
  },
  button: {
    backgroundColor: 'hsla(0, 0.00%, 100.00%, 0.60)',
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
});
