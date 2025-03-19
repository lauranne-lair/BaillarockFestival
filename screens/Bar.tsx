import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { barConfig } from '../config/Config_BarPage';
import styles from '../styles/Bar_Styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const Boisson: React.FC = () => {
  const [imageHeight, setImageHeight] = useState(300); // Hauteur initiale par défaut

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.imageContainer}>
        {/* IMAGE PRINCIPALE */}
        <Image
          source={barConfig.assets.image}
          style={{ width: width, height: imageHeight }}
          resizeMode="contain" // Garde toute l'image visible sans la couper
          onLoad={(event) => {
            const { width: imgWidth, height: imgHeight } = event.nativeEvent.source;
            setImageHeight((width * imgHeight) / imgWidth); // Ajuste la hauteur en fonction du ratio de l'image
          }}
        />

        {/* BOUTON 1 (Baillarock - IPA) */}
        <TouchableOpacity 
          style={[styles.button, { top: imageHeight * 0.33, left: width * 0.75 }]} 
          onPress={() => Linking.openURL('https://www.instagram.com/brasserie_du_treize/')}>
          <FontAwesome name="instagram" size={30} color="#fff" /> 
        </TouchableOpacity>

        {/* BOUTON 2 (Petroleuse - Ambrée/Blonde) */}
        <TouchableOpacity 
          style={[styles.button, { top: imageHeight * 0.40, left: width * 0.75 }]} 
          onPress={() => Linking.openURL('https://www.instagram.com/piratesduclain/')}>
          <FontAwesome name="instagram" size={30} color="#fff" /> 
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Boisson;
