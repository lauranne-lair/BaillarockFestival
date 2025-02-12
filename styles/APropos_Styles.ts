import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    marginVertical: 10,
  },
  sectionButton: {
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    color: Colors.white,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    color: Colors.dark.accent,
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: Colors.dark.background,
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'justify',
  },
  modalCloseButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  modalCloseText: {
    fontSize: 18,
    color: Colors.dark.accent,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Capsmall_clean',
    alignSelf: 'center',
  },
  techContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  techIcon: {
    marginRight: 10,
  },
  techText: {
    fontSize: 14,
    color: Colors.white,
  },
  menuButton: {
    marginRight: 15,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark.accent,
    marginBottom: 5,
  },
  modalLink: {
    fontSize: 16,
    color: Colors.error,
    textDecorationLine: 'underline',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.light.primary,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 10, 
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    flex: 1,
  },
  });
  