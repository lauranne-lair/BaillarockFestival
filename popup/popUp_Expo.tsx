import * as React from 'react';
import { 
  Modal, 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  SafeAreaView, 
  Linking, 
  Dimensions, 
  Platform 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ListFood, ListExpo } from '../screens/Village';

export type FoodExpoModalProps = {
  visible: boolean;
  onClose: () => void;
  item: ListFood | ListExpo | null; 
};

const socialIconMap: { [key: string]: keyof typeof FontAwesome.glyphMap } = {
  facebook: "facebook",
  instagram: "instagram",
  website: "link",
};

const getSocialIcon = (name: string): keyof typeof FontAwesome.glyphMap => {
  return socialIconMap[name] || "link"; 
};

export default function FoodExpoModal({ visible, onClose, item }: FoodExpoModalProps) {
  if (!item) return null;

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {
      alert("Impossible d'ouvrir le lien.");
    });
  };

  const { width, height } = Dimensions.get('window');

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.modalContainer}>
          
          {/* Icône de fermeture */}
          <TouchableOpacity 
            style={[styles.closeButton, { top: Platform.OS === 'ios' ? height * 0.02 : height * 0.01, right: width * 0.01 }]} 
            onPress={onClose}
          >
            <FontAwesome name="times" size={30} color="green" />
          </TouchableOpacity>

          {/* Bannière avec image de fond */}
          <View style={styles.banner}>
            <ImageBackground source={item.imageBG} style={styles.bannerBackground} resizeMode="cover">
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemGenre}>{item.genre}</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Contenu principal */}
          <View style={styles.content}>
            <Text style={styles.description}>{item.description}</Text>

            {/* Icônes des réseaux sociaux dynamiques */}
            <View style={styles.socialIcons}>
              {item.socialLinks.map((social, index) => (
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
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'rgb(40, 40, 40)', 
  },
  modalContainer: {
    flex: 1,
  },
  banner: {
    height: '30%',
  },
  bannerBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignSelf: 'flex-start',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  itemGenre: {
    fontSize: 18,
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    textAlign: 'justify',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  closeButton: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
});
