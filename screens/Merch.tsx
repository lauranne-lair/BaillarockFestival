import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  Dimensions,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native'; // Import de DrawerActions
import { Ionicons } from '@expo/vector-icons';
import ImageZoom from 'react-native-image-pan-zoom';
import MerchConfig from '../config/Config_Merch';

const { width, height } = Dimensions.get('window');

const Merch: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const navigation = useNavigation(); // Hook pour accéder à la navigation

  useEffect(() => {
    navigation.setOptions({
      title: 'Merchandising',
      headerLeft: () => null, // Supprime le bouton par défaut à gauche
      headerRight: () => ( // Bouton "Menu" personnalisé à droite
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} // Ouvre le menu latéral
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={30} color="#0E5D08" />
        </TouchableOpacity>
      ),
      headerShown: true,
    });
  }, [navigation]);

  const handleImagePress = (image: any) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={MerchConfig.images.background} style={styles.backgroundImage}>
        <View style={styles.overlay} />
      </ImageBackground>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{MerchConfig.texts.title}</Text>

        <TouchableOpacity onPress={() => handleImagePress(MerchConfig.images.top)}>
          <Image source={MerchConfig.images.top} style={styles.topImage} />
        </TouchableOpacity>

        <Image source={MerchConfig.images.logo} style={styles.logoImage} />

        <TouchableOpacity onPress={() => handleImagePress(MerchConfig.images.teeshirt)}>
          <Image source={MerchConfig.images.teeshirt} style={styles.teeshirtImage} />
        </TouchableOpacity>

        <Image source={MerchConfig.images.logo} style={styles.logoImage} />
        <Image source={MerchConfig.images.part} style={styles.partImage} />
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <FontAwesome name="times" size={30} color={MerchConfig.colors.backButton} />
          </TouchableOpacity>
          {selectedImage && (
            <ImageZoom
              cropWidth={width}
              cropHeight={height}
              imageWidth={width * 0.9}
              imageHeight={width * 0.9}
            >
              <Image source={selectedImage} style={styles.zoomedImage} />
            </ImageZoom>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: height,
    position: 'absolute',
    zIndex: -1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  scrollContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    zIndex: 1,
    paddingBottom: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'RockSalt',
    textAlign: 'center',
    marginBottom: 20,
  },
  topImage: {
    width: 360,
    height: 280,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    borderRadius: 30,
    zIndex: 2,
  },
  logoImage: {
    width: 150,
    height: 120,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    borderRadius: 20,
    zIndex: 2,
  },
  teeshirtImage: {
    width: 350,
    height: 370,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    borderRadius: 20,
    zIndex: 2,
  },
  partImage: {
    width: 360,
    height: 390,
    marginBottom: 60,
    opacity: 0.5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    borderRadius: 20,
    zIndex: 2,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 3,
    backgroundColor: 'transparent',
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10, // Bouton aligné à droite
  },
  menuText: {
    marginLeft: 5,
    color: '#0E5D08',
    fontSize: 20,
  },
});

export default Merch;
