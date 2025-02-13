import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import COLORS from '../constants/colors';
import styles from '../styles/APropos_Styles';
import AProposConfig from '../config/Config_APropos';
import AProposModal from '../popup/popUp_APropos';

const APropos: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedContent, setSelectedContent] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={30} color={COLORS.dark.accent} />
        </TouchableOpacity>
      ),
      headerShown: true,
    });
  }, [navigation]);

  const openModal = (title: string, content: any[]) => {
    setSelectedTitle(title);
    setSelectedContent(content);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.sectionTitle}>📌 Informations Générales</Text>
          <Text style={styles.text}>Nom de l’application : <Text style={styles.bold}>{AProposConfig.appInfo.name}</Text></Text>
          <Text style={styles.text}>Version : <Text style={styles.bold}>{AProposConfig.appInfo.version}</Text></Text>
          <Text style={styles.text}>Description :</Text>
          <Text style={[styles.text, styles.bold, { textAlign: 'justify' }]}>
            {AProposConfig.appInfo.description}
          </Text>

          {/* Sections cliquables */}
          {AProposConfig.sections.map((section, index) => (
            <TouchableOpacity key={index} onPress={() => openModal(section.title, section.content)} style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>{section.title}</Text>
              <Ionicons name="chevron-down" size={24} color="white" />
            </TouchableOpacity>
          ))}

          {/* Liens utiles */}
          <Text style={styles.sectionTitle}>🔗 Liens Utiles</Text>
          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${AProposConfig.contactEmail}`)}>
            <Text style={styles.link}>📩 Contact Support</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Utilisation du composant modal */}
        <AProposModal visible={modalVisible} onClose={() => setModalVisible(false)} title={selectedTitle} content={selectedContent} />
      </View>
    </SafeAreaView>
  );
};

export default APropos;
