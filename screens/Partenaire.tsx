import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'; 
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PartModal from '../popup/popUp_Partenaire';
import { partnersConfig } from '../config/Config_Partenaires';
import styles from '../styles/Partenaires_Styles';
import Colors from '../constants/colors';

export default function Partenaire() {
  const [selectedPart, setSelectedPart] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      title: 'Partenaires',
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

  const handlePartnerPress = (item) => {
    setSelectedPart(item);
    setModalVisible(true);
  };

  return (
    <ImageBackground source={partnersConfig.backgroundImage} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.screenContainer}>
        <FlatList
          data={partnersConfig.partnersList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.partnerContainer} onPress={() => handlePartnerPress(item)}>
              <Image style={styles.partnerImage} source={item.image} resizeMode="contain" />
              <Text style={styles.partnerName}>{item.name || 'Nom inconnu'}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<Text style={styles.emptyText}>{partnersConfig.messages.emptyList}</Text>}
        />
        <PartModal visible={modalVisible} onClose={() => setModalVisible(false)} part={selectedPart} />
      </View>
    </ImageBackground>
  );
}
