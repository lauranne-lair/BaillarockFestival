import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Modal, Image, Linking } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native'; // ✅ Utilisation de useNavigation
import { homeConfig, openMaps } from '../config/Config_HomePage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImageZoom from 'react-native-image-pan-zoom';
import LottieView from 'lottie-react-native';
import styles from '../styles/Accueil_Styles';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get('window');

const Home: React.FC = () => {
  const navigation = useNavigation(); // ✅ Récupération de l'objet navigation
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timeExpired, setTimeExpired] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const festivalDate = new Date(homeConfig.festivalDate);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = festivalDate.getTime() - now.getTime();
      if (timeDifference <= 0) {
        setTimeExpired(true);
      } else {
        setTimeLeft({
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
        });
      }
    };
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [festivalDate]);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Capsmall': require('../constants/fonts/Capsmall.ttf'),
        'Capsmall_clean': require('../constants/fonts/Capsmall_clean.ttf'),
      });
      setFontLoaded(true);
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

  const handleScroll = (event: any) => {
    setIsScrolled(event.nativeEvent.contentOffset.y > 500);
  };

  const navigateToExplore = () => {
    navigation.navigate('Programmation'); // ✅ Remplacement de router.push() par navigation.navigate()
  };

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
      <ScrollView contentContainerStyle={styles.scrollContainer} onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={[styles.imageContainer, { height: height }]}>
          {isScrolled ? (
            <Image source={homeConfig.assets.image} style={styles.backgroundImage} resizeMode="cover" />
          ) : (
            <Video source={homeConfig.assets.video} style={styles.backgroundVideo} resizeMode="cover" shouldPlay isLooping isMuted />
          )}
          <View style={styles.overlay}>
            <Text style={styles.TitleText}>{homeConfig.festivalName}</Text>
            {timeExpired ? (
              <>
                <Text style={styles.expiredText}>{homeConfig.messages.countdownExpired}</Text>
                <TouchableOpacity style={styles.button} onPress={navigateToExplore}>
                  <Text style={styles.buttonText}>{homeConfig.messages.viewSchedule}</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.countdownContainer}>
                  <View style={styles.countdownRow}>
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <View key={unit} style={styles.countdownItem}>
                        <Text style={styles.countdownNumber}>{value}</Text>
                        <Text style={styles.countdownLabel}>{unit}</Text>
                      </View>
                    ))}
                  </View>
                </View>
                <Text style={styles.addressText}>{homeConfig.location}</Text>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(homeConfig.socialMediaLinks.shop)}>
                  <Text style={styles.buttonText}>{homeConfig.messages.buyTickets}</Text>
                </TouchableOpacity>
              </>
            )}
            <View style={styles.ArrowAnimation}>
              <LottieView source={homeConfig.assets.arrowAnimation} autoPlay loop style={styles.ArrowAnimation} />
            </View>
          </View>
        </View>

        <View style={styles.stepContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.subtitle}>Plan du site</Text>
          </View>
          <TouchableOpacity onPress={() => handleImagePress(homeConfig.assets.siteMap)}>
            <Image source={homeConfig.assets.siteMap} style={styles.planImage} resizeMode="contain" />
          </TouchableOpacity>

          <TouchableOpacity onPress={openMaps} style={styles.buttonMaps}>
            <Text style={styles.buttonTextMaps}>Y aller</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <FontAwesome name="times" size={30} color={homeConfig.colors.backButton} />
          </TouchableOpacity>
          {selectedImage && (
            <ImageZoom cropWidth={width} cropHeight={height} imageWidth={width * 0.9} imageHeight={width * 0.9}>
              <Image source={selectedImage} style={styles.zoomedImage} />
            </ImageZoom>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Home;
