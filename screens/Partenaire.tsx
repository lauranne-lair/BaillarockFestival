import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PartModal from '../popup/popUp_Partenaire';
import { Partenaires } from '../data/PartenaireData';
import { backgroundImage } from '../data/ExposantsData';
import styles from '../styles/Partenaires_Styles'
import Colors from '../constants/colors';

export type ListPartners = {
  id: string;
  name: string;
  genre: string;
  description: string;
  image: number;
  imageBG: number;
  socialLinks: { name: string; url: string }[];
};

export default function Partenaire() {
  const [selectedPart, setSelectedPart] = useState<ListPartners | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
        navigation.setOptions({
          title: 'Partenaires',
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
  const handlePartnerPress = (partner: ListPartners) => {
    setSelectedPart(partner);
    setModalVisible(true);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.screenContainer}>
        <FlatList
          data={Partenaires}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.partnerContainer} onPress={() => handlePartnerPress(item)}>
              <Image style={styles.partnerImage} source={item.image} resizeMode="contain" />
              <Text style={styles.partnerName}>{item.name || 'Nom inconnu'}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>Aucun partenaire disponible</Text>}
        />
        <PartModal visible={modalVisible} onClose={() => setModalVisible(false)} part={selectedPart} />
      </View>
    </ImageBackground>
  );
}