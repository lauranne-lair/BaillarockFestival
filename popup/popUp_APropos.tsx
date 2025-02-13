import * as React from 'react';
import { Modal, View, Text, TouchableOpacity, SafeAreaView, ScrollView, Linking } from 'react-native';
import styles from '../styles/popUp_APropos_Styles';

export type AProposModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  content: any[];
};

export default function AProposModal({ visible, onClose, title, content }: AProposModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.modalContainer}>

          {/* En-tête avec le titre */}
          <View style={styles.banner}>
            <Text style={styles.title}>{title}</Text>
          </View>

          {/* ScrollView pour le contenu */}
          <ScrollView 
            style={styles.scrollView} 
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} 
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              {content.map((section, index) => (
                <View key={index} style={styles.section}>
                  <Text style={styles.sectionHeading}>{section.heading}</Text>
                  <Text style={styles.sectionText}>{section.text}</Text>
                  {section.link && (
                    <TouchableOpacity onPress={() => Linking.openURL(section.link)}>
                      <Text style={styles.sectionLink}>{section.linkText}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Bouton de fermeture en bas */}
          <TouchableOpacity style={styles.closeBar} onPress={onClose}>
            <Text style={styles.closeText}>Fermer</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </Modal>
  );
}
