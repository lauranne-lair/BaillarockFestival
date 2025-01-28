import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Pour la navigation entre les pages
import * as Font from 'expo-font'; // Pour charger les polices
import { useNavigation, DrawerActions } from '@react-navigation/native'; 

export default function Prevention() {
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
        title: 'Prévention',
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

  if (!fontLoaded) {
    return null; // Afficher un loader si la police n'est pas encore chargée
  }

  return (
    <View style={styles.screenContainer}>
      {/* Contenu scrollable pour s'assurer de l'accessibilité sur tous les écrans */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Bienvenue à la Safe Place</Text>
        <Text style={styles.text}>
          À la Safe Place, tu trouveras :{"\n\n"}
          <Text style={styles.bulletPoint}>•</Text> Un lieu d'échange convivial.{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Des informations sur la prévention des risques.{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Des animations et de l'écoute.{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Un abri au besoin.{"\n\n"}
          Nous proposons également :{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Des bouchons d'oreilles.{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Des préservatifs.{"\n"}
          <Text style={styles.bulletPoint}>•</Text> Et bien d'autres choses !{"\n\n"}
          Passe nous voir, nous serons ravis de t'accueillir !
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#121212', // Fond noir pour un design moderne et contrasté
    padding: 16,
  },
  scrollContainer: {
    alignItems: 'center', // Centrer les éléments horizontalement
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0E5D08', // Vert pour un aspect rassurant
    textAlign: 'center', // Centré
    marginBottom: 20,
    fontFamily: 'Capsmall_clean', // Appliquer la police personnalisée
  },
  text: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 26,
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: 'Capsmall_clean',
  },
  bulletPoint: {
    fontSize: 22,
    color: '#0E5D08',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  backText: {
    marginLeft: 5,
    color: '#0E5D08',
    fontSize: 20,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10, // Bouton aligné à droite
  },
});