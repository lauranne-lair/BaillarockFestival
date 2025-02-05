import * as React from 'react';
import { Modal, View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Linking, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/popUp_Partenaires';

export type Part = {
  name: string;
  genre: string;
  imageBG: any;
  description: string;
  socialLinks: { name: string; url: string }[];
};

export type PartModalProps = {
  visible: boolean;
  onClose: () => void;
  part: Part | null;
};

const socialIconMap: { [key: string]: keyof typeof FontAwesome.glyphMap } = {
  facebook: 'facebook',
  instagram: 'instagram',
  website: 'link',
};

const getSocialIcon = (name: string): keyof typeof FontAwesome.glyphMap => {
  return socialIconMap[name] || 'link';
};

export default function PartModal({ visible, onClose, part }: PartModalProps) {
  if (!part) return null;

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      alert("Impossible d'ouvrir le lien.");
    });
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.modalContainer}>

          {/* Bannière avec image de fond */}
          <View style={styles.banner}>
            <ImageBackground source={part.imageBG} style={styles.bannerBackground} resizeMode="cover">
              <View style={styles.textContainer}>
                <Text style={styles.partName}>{part.name}</Text>
                <Text style={styles.partGenre}>{part.genre}</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Contenu principal */}
          <View style={styles.content}>
            <Text style={styles.description}>{part.description}</Text>

            {/* Icônes des réseaux sociaux dynamiques */}
            <View style={styles.socialIcons}>
              {part.socialLinks.map((social, index) => (
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

          {/* Barre de fermeture en bas */}
          <TouchableOpacity style={styles.closeBar} onPress={onClose}>
            <Text style={styles.closeText}>Fermer</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </Modal>
  );
}
