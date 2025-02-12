import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, SafeAreaView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import COLORS from '../constants/colors';
import styles from '../styles/APropos_Styles';
import AProposConfig from '../config/Config_APropos';

const APropos: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
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

  const openModal = (content: any[]) => {
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
            <TouchableOpacity key={index} onPress={() => openModal(section.content)} style={styles.categoryButton}>
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

        {/* Modal amélioré */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <ScrollView>
                {selectedContent.map((section, index) => (
                  <View key={index} style={{ marginBottom: 15 }}>
                    <Text style={styles.modalHeading}>{section.heading}</Text>
                    <Text style={styles.modalText}>{section.text}</Text>
                    {section.link && (
                      <TouchableOpacity onPress={() => Linking.openURL(section.link)}>
                        <Text style={styles.modalLink}>{section.linkText}</Text>
                      </TouchableOpacity>
                    )}
                    {section.extraText && <Text style={styles.modalText}>{section.extraText}</Text>}
                  </View>
                ))}
              </ScrollView>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
                <Text style={styles.modalCloseText}>Fermer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default APropos;
