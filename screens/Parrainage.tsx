import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as Font from 'expo-font';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import styles from '../styles/Parrainage_Styles';
import Colors from '../constants/colors';
import { parrainageConfig } from '../config/Config_Parrainage';

export default function Parrainage() {
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

  // Personnalisation de l'en-tête
  useEffect(() => {
    navigation.setOptions({
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
        <View style={styles.animationContainer}></View>

        <Text style={styles.text}>
          {parrainageConfig.messages.intro}
        </Text>

        <View style={styles.bulletPointContainer}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>Invite tes amis à rejoindre l'application.</Text>
        </View>
        <View style={styles.bulletPointContainer}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>Pour chaque ami inscrit grâce à toi, tu gagnes des récompenses.</Text>
        </View>
        <View style={styles.bulletPointContainer}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text style={styles.text}>Ton ami bénéficie également d’un bonus de bienvenue.</Text>
        </View>

        {/* Bouton pour inviter un ami */}
        <TouchableOpacity style={styles.inviteButton} onPress={() => alert(parrainageConfig.messages.inviteAlert)}>
          <Text style={styles.inviteText}>{parrainageConfig.messages.inviteButton}</Text>
        </TouchableOpacity>

        <Text style={styles.text}>{parrainageConfig.messages.outro}</Text>
      </ScrollView>
    </View>
  );
}
