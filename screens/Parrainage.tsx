import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Pour la navigation entre les pages
import * as Font from 'expo-font'; // Pour charger les polices
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import styles from '../styles/Prevention_Styles'; // Crée un fichier styles spécifique au parrainage
import Colors from '../constants/colors';

export default function Parrainage() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const router = useRouter(); // Hook pour la navigation entre les pages
  const navigation = useNavigation(); // Hook de navigation de React Navigation

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

  // Personnaliser l'en-tête lorsque le composant est monté
  useEffect(() => {
    navigation.setOptions({
      title: 'Parrainage',
      headerLeft: () => null, // Supprime le bouton par défaut à gauche
      headerRight: () => ( // Bouton "Menu" personnalisé à droite
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} // Ouvre le menu latéral
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={30} color={Colors.dark.accent} />
        </TouchableOpacity>
      ),
      headerShown: true,
    });
  }, [navigation]);

  if (!fontLoaded) {
    return null; // Afficher un loader si la police n'est pas encore chargée
  }

  return (
    <View style={styles.screenContainer}>
      {/* Contenu scrollable pour s'assurer de l'accessibilité sur tous les écrans */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Programme de Parrainage</Text>
        <Text style={styles.text}>
          Rejoins notre programme de parrainage et profite d'avantages exclusifs !{"\n\n"}
          Comment ça marche ?{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Invite tes amis à rejoindre l'application.{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Pour chaque ami inscrit grâce à toi, tu gagnes des récompenses.{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Ton ami bénéficie également d’un bonus de bienvenue.{"\n"}
        </Text>

        {/* Section pour inviter un ami */}
        <TouchableOpacity style={style.inviteButton} onPress={() => alert("Lien de parrainage généré !")}>
          <Text style={style.inviteText}>📩 Inviter un ami</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          🎉 Plus tu parraines, plus tu gagnes !{"\n\n"}
          Partage ton lien et cumule les récompenses dès maintenant.
        </Text>
      </ScrollView>
    </View>
  );
}



const style = StyleSheet.create({
  inviteText: {
    color: Colors.white
  },

  inviteButton:{
  
  }
});