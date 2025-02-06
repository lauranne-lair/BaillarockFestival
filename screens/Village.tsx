import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import ExpoModal from '../popup/popUp_Expo';
import { backgroundImage, Exposants } from '../data/ExposantsData';
import { Food } from '../data/FoodData';
import * as Font from 'expo-font';
import styles from '../styles/Village_Styles'
import { villageConfig } from '../config/Config_Village';


const { width } = Dimensions.get('window');
const CONTAINER_WIDTH = width / 2 - 60;
const IMAGE_HEIGHT = width / 2 - 60;

export type ListExpo = {
  id: string;
  name: string;
  genre: string;
  description: string;
  image: number;
  imageBG: number;
  socialLinks: SocialLink[];
};

export type SocialLink = {
  name: string;
  url: string;
};

export type ListFood = {
  id: string;
  name: string;
  genre: string;
  description: string;
  image: number;
  imageBG: number;
  socialLinks: SocialLink[];
};

export default function Village() {
  const [selectedExpo, setSelectedExpo] = useState<ListExpo | ListFood | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const handleExpoPress = (expo: ListExpo | ListFood) => {
    setSelectedExpo(expo);
    setModalVisible(true);
  };

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Capsmall': require('../constants/fonts/Capsmall.ttf'),
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

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.screenContainer}>
        {/* Section Exposants */}
        <Text style={[styles.pageTitle, styles.expoTitle]}>
          {villageConfig.sectionTitles.exposants}
        </Text>
        <ScrollView horizontal contentContainerStyle={styles.horizontalListContent} showsHorizontalScrollIndicator={false}>
          {Exposants.map((item) => (
            <TouchableOpacity key={item.id} style={styles.container} onPress={() => handleExpoPress(item)}>
              <Image style={styles.expoImage} source={item.image} resizeMode="contain" />
              <Text style={styles.expoName}>{item.name || 'Nom inconnu'}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section Food */}
        <Text style={[styles.pageTitle, styles.foodTitle]}>
          {villageConfig.sectionTitles.food}
        </Text>
        <ScrollView {...villageConfig.scrollViewOptions}>
          {Food.map((item) => (
            <TouchableOpacity key={item.id} style={styles.container} onPress={() => handleExpoPress(item)}>
              <Image style={styles.foodImage} source={item.image} resizeMode="contain" />
              <Text style={styles.expoName}>{item.name || 'Nom inconnu'}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Modal commun */}
        <ExpoModal visible={modalVisible} onClose={() => setModalVisible(false)} item={selectedExpo} />
      </View>
    </ImageBackground>
  );
}
