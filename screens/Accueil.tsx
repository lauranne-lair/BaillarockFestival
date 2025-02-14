import React, { useState, useEffect } from 'react';
import { Platform, View, Text, ScrollView, Dimensions, TouchableOpacity, Modal, Image, Linking, SafeAreaView } from 'react-native';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
import { homeConfig } from '../config/Config_HomePage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageZoom from 'react-native-image-pan-zoom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import styles from '../styles/Accueil_Styles';

import * as Font from 'expo-font';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const Home: React.FC = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [timeExpired, setTimeExpired] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const festivalDate = new Date(homeConfig.festivalDate);
  const router = useRouter();

  const labels = {
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
  };

  const openMaps = () => {
    const address = encodeURIComponent(homeConfig.mapsLocalisation);
    const url = Platform.select({
      ios: `maps:0,0?q=${address}`,
      android: `geo:0,0?q=${address}`,
    });
    Linking.openURL(url).catch(err => console.error("Erreur d'ouverture des cartes", err));
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = festivalDate.getTime() - now.getTime();
      if (timeDifference <= 0) {
        setTimeExpired(true);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [festivalDate]);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Capsmall': require('../constants/fonts/Capsmall.ttf'),
          'Capsmall_clean': require('../constants/fonts/Capsmall_clean.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Erreur lors du chargement des polices :", error);
      }
    };
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Chargement...</Text>
      </View>
    );
  }

  const screenHeight = Dimensions.get('window').height;

  const handleScroll = (event: any) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const threshold = 500;
    setIsScrolled(contentOffsetY > threshold);
  };

  const navigateToExplore = () => {
    router.push(homeConfig.internalLinks.programmationPage);
  };

  const handleImagePress = (image: any) => {
    console.log("Image sélectionnée :", image);
    setSelectedImage(image);
    setModalVisible(true);
  };
  
  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={[styles.imageContainer, { height: screenHeight }]}>
          {isScrolled ? (
            <Image
              source={homeConfig.assets.image}
              style={styles.backgroundImage}
              resizeMode="cover"
            />
          ) : (
            <Video
              source={homeConfig.assets.video}
              style={styles.backgroundVideo}
              resizeMode="cover"
              shouldPlay
              isLooping
              isMuted
            />
          )}
          <View style={styles.overlay}>
            <Text style={styles.TitleText}>{homeConfig.festivalName}</Text>
            {timeExpired ? (
              <Text style={styles.expiredText}>{homeConfig.messages.countdownExpired}</Text>
            ) : (
              <>
                <View style={styles.countdownContainer}>
                  <View style={styles.countdownRow}>
                    {Object.keys(labels).map(unit => (
                      <View key={unit} style={styles.countdownItem}>
                        <Text style={styles.countdownNumber}>{timeLeft[unit]}</Text>
                        <Text style={styles.countdownLabel}>{labels[unit]}</Text>
                      </View>
                    ))}
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => Linking.openURL(homeConfig.socialMediaLinks.shop)}
                >
                  <Text style={styles.buttonText}>{homeConfig.messages.buyTickets}</Text>
                </TouchableOpacity>
              </>
            )}

            <View style={styles.ArrowAnimation}>
              <LottieView 
              source={homeConfig.assets.arrowAnimation} // 🔥 Utilisation correcte du fichier JSON
              autoPlay
              loop
              style={styles.ArrowAnimation} 
              />
            </View>
          </View>
        </View>

        <ThemedView style={styles.stepContainer}>
          <View style={styles.titleContainer}>
            <ThemedText style={styles.subtitle}>Plan du site</ThemedText>
          </View>
          <TouchableOpacity onPress={() => handleImagePress(homeConfig.assets.siteMap)}>
            <Image 
              source={homeConfig.assets.siteMap} 
              style={styles.planImage} 
              resizeMode="contain" 
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={openMaps} style={styles.buttonMaps}>
            <Text style={styles.buttonTextMaps}>Y aller</Text>
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <View style={styles.titleContainer}>
            <ThemedText style={styles.subtitle}>Suivez-nous sur les réseaux sociaux</ThemedText>
          </View>
          <View style={styles.socialMediaIcons}>
            {Object.keys(homeConfig.socialMediaLinks).map(key => {
              const iconData = homeConfig.assets.socialIcons[key];
              if (!iconData) return null;

              const IconComponent =
                iconData.iconType === 'FontAwesome' ? FontAwesome :
                iconData.iconType === 'Ionicons' ? Ionicons :
                iconData.iconType === 'MaterialIcons' ? MaterialIcons :
                null;

              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => Linking.openURL(homeConfig.socialMediaLinks[key])}
                >
                  <IconComponent
                    name={iconData.icon}
                    size={30}
                    color={iconData.color}
                    style={styles.socialMediaIcon}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ThemedView>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <FontAwesome name="times" size={30} color={homeConfig.colors.backButton} />
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

export default Home;