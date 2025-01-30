import React, { useState, useEffect } from 'react';
import {  View,  ImageBackground,  Image,  Text,  Dimensions,  ScrollView,  Modal,  TouchableOpacity,} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native'; // Import de DrawerActions
import { Ionicons } from '@expo/vector-icons';
import ImageZoom from 'react-native-image-pan-zoom';
import MerchConfig from '../config/Config_Merch';
import styles from '../styles/Merch_Styles'

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
          <Ionicons name="menu" size={30} color= "#0E5D08"/>
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

export default Merch;
