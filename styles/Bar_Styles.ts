import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 768 / 1086, // Conserve les proportions de l'image
  },
  buttonContainer: {
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: 'black', // Fond noir pour la section des brasseries
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
    color: 'white',
    marginRight: 10,
    fontFamily: 'Capsmall', // Utilisation de la police personnalisée
    textTransform: 'uppercase', 
  },
  button: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
    shadowColor: '#fff',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
  },
});
