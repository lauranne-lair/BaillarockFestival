import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Font from 'expo-font';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import styles from '../styles/Prevention_Styles';
import Colors from '../constants/colors';
import { preventionConfig } from '../config/Config_Prevention';

export default function Prevention() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const router = useRouter();
  const navigation = useNavigation();

  // Charger les polices
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Capsmall_clean': require('../constants/fonts/Capsmall_clean.ttf'),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  // Personnaliser l'en-tête
  useEffect(() => {
    navigation.setOptions({
      title: 'Prévention',
      headerLeft: () => null,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={30} color={Colors.dark.accent} />
        </TouchableOpacity>
      ),
      headerShown: true,
    });
  }, [navigation]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{preventionConfig.title}</Text>

        {preventionConfig.sections.map((section, index) => (
          <View key={index} style={styles.sectionContainer}> 
            <Text style={styles.sectionTitle}>{section.title}</Text> 

            {section.points.map((point, i) => (
              <View key={i} style={styles.bulletPointContainer}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletPointText}>{point}</Text>
              </View>
            ))}
          </View>
        ))}



        <Text style={styles.closingText}>{preventionConfig.closingText}</Text>
      </ScrollView>
    </View>
  );
}
