import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  ArrowAnimation: {
    position: 'absolute',
    top: height * 0.38,   // 🔥 Ajuste la position verticale (modifiable)
    left: '50%',          // 🔥 Positionne la flèche au centre de l'écran
    transform: [{ translateX: -60 }], // 🔥 Centre la flèche en tenant compte de sa nouvelle largeur
    width: 120,           // 🔥 Augmente la largeur
    height: 80,          // 🔥 Augmente la hauteur
  },
  
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120,
    backgroundColor: Colors.blacktransparent9,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blacktransparent5,
    paddingBottom: 50,
  },
  TitleText: {
    fontSize: width* 0.15,
    color: Colors.white,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Capsmall',
  },
  countdownContainer: {
    marginVertical: 20,
    alignItems: 'center',
    fontFamily: 'Capsmall_clean',
  },
  countdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    fontFamily: 'Capsmall_clean',
  },
  countdownItem: {
    alignItems: 'center',
    fontFamily: 'Capsmall_clean',
  },
  countdownNumber: {
    fontSize: width* 0.09,
    fontWeight: 'bold',
    color: Colors.white,
    fontFamily: 'People',
  },
  countdownLabel: {
    fontSize: width* 0.04,
    fontWeight: 'normal',
    fontFamily: 'People',
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.greeninspi,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonMaps: {
    marginTop: 10,
    padding: 10,
    backgroundColor: Colors.greeninspi,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonTextMaps: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  expiredText: {
    fontSize: 22,
    color: Colors.white,
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  planImage: {
    width: '170%',
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 10,
    textShadowColor: Colors.blacktransparent3,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: 'Arial',
  },
  titleContainer: {
    marginBottom: 20,
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
  },
});
