import * as React from 'react'; 
import { Modal, View, Text, ImageBackground, TouchableOpacity, SafeAreaView, Linking, Dimensions, Platform, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Group } from '../screens/Programmation';
import styles from '../styles/popUp_Groups_Styles';

export type GroupModalProps = {
  visible: boolean;
  onClose: () => void;
  group: Group | null;
};

const socialIconMap: { [key: string]: keyof typeof FontAwesome.glyphMap } = {
  facebook: "facebook",
  twitter: "twitter",
  instagram: "instagram",
  youtube: "youtube",
  linkedin: "linkedin",
};

const getSocialIcon = (name: string): keyof typeof FontAwesome.glyphMap => {
  return socialIconMap[name] || "link";
};

export default function GroupModal({ visible, onClose, group }: GroupModalProps) {
  if (!group) return null;

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      alert("Impossible d'ouvrir le lien.");
    });
  };

  const { width, height } = Dimensions.get('window'); // Récupération des dimensions de l'écran

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.modalContainer}>

          {/* Bannière avec image de fond */}
          <View style={styles.banner}>
            <ImageBackground source={group.bannerImage} style={styles.bannerBackground} resizeMode="cover">
              <View style={styles.textContainer}>
                <Text style={styles.groupName}>{group.name}</Text>
                <Text style={styles.groupGenre}>{group.genre}</Text>
              </View>
            </ImageBackground>
          </View>

          {/* ScrollView pour le contenu déroulant */}
          <ScrollView 
            style={styles.scrollView} 
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} 
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.content}>
              <Text style={styles.description}>{group.description}</Text>

              {/* Icônes des réseaux sociaux dynamiques */}
              <View style={styles.socialIcons}>
                {group.socialLinks.map((social, index) => (
                  <TouchableOpacity key={index} onPress={() => openLink(social.url)}>
                    <FontAwesome 
                      name={getSocialIcon(social.name)} 
                      size={30} 
                      color="#fff" 
                      style={styles.socialIcon} 
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Barre de fermeture en bas */}
          <TouchableOpacity style={styles.closeBar} onPress={onClose}>
            <Text style={styles.closeText}>Fermer</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </Modal>
  );
}