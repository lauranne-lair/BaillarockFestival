import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import * as Font from 'expo-font';
import styles from '../styles/Parrainage_Styles';
import Colors from '../constants/colors';
import { parrainageConfig } from '../config/Config_Parrainage';

export default function Parrainage() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Capsmall_clean': require('../constants/fonts/Capsmall_clean.ttf'),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <Ionicons name="menu" size={30} color={Colors.dark.accent} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={styles.menuButton} />
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
        <Text style={styles.title}>Qu'est ce que le Parrainage ?</Text>
        <Text style={styles.text}>{parrainageConfig.messages.intro}</Text>
        {parrainageConfig.messages.steps.map((step, index) => (
          <View key={index} style={styles.bulletPointContainer}>
            <FontAwesome5 name={step.icon} size={20} color={Colors.dark.accent} style={styles.bulletPoint} />
            <Text style={styles.text}>{step.text}</Text>
          </View>
        ))}
        <Text style={styles.text}>{parrainageConfig.messages.outro}</Text>
      </ScrollView>
    </View>
  );
}