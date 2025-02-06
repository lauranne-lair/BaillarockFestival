import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import COLORS from '../constants/colors';
import styles from '../styles/APropos_Styles'
import { aboutConfig } from '../config/Config_APropos';

const APropos: React.FC = () => {
  const navigation = useNavigation();

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

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* Informations générales */}
          <Text style={styles.sectionTitle}>📌 Informations Générales</Text>
          <Text style={styles.text}>Nom de l’application : <Text style={styles.bold}>{aboutConfig.appInfo.name}</Text></Text>
          <Text style={styles.text}>Version : <Text style={styles.bold}>{aboutConfig.appInfo.version}</Text></Text>
          <Text style={styles.text}>Description :</Text>
          <Text style={[styles.text, styles.bold, { textAlign: 'justify' }]}>{aboutConfig.appInfo.description}</Text>

          {/* Mentions légales */}
          <Text style={styles.sectionTitle}>📜 Mentions Légales</Text>
          <TouchableOpacity onPress={() => Linking.openURL(aboutConfig.legalInfo.privacyPolicy)}>
            <Text style={styles.link}>Politique de confidentialité</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(aboutConfig.legalInfo.termsOfUse)}>
            <Text style={styles.link}>Conditions Générales d'Utilisation</Text>
          </TouchableOpacity>

          {/* Crédits */}
          <Text style={styles.sectionTitle}>💡 Crédits & Développement</Text>
          <Text style={styles.text}>Développement : <Text style={styles.bold}>{aboutConfig.credits.development}</Text></Text>
          <Text style={styles.text}>Organisation : <Text style={styles.bold}>{aboutConfig.credits.organization}</Text></Text>
          <Text style={styles.text}>Design Graphique : <Text style={styles.bold}>{aboutConfig.credits.design}</Text></Text>

          <Text style={styles.sectionTitle}>🚀 Technologies utilisées</Text>
          {aboutConfig.technologies.map((tech, index) => (
            <View key={index} style={styles.techContainer}>
              <FontAwesome5 name={tech.icon} size={20} color={COLORS.white} style={styles.techIcon} />
              <Text style={styles.techText}> {tech.name}</Text>
            </View>
          ))}

          {/* Liens utiles */}
          <Text style={styles.sectionTitle}>🔗 Liens Utiles</Text>
          <TouchableOpacity onPress={() => Linking.openURL(aboutConfig.links.supportEmail)}>
            <Text style={styles.link}>📩 Contact Support</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(aboutConfig.links.googlePlay)}>
            <Text style={styles.link}>📱 Télécharger sur Google Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(aboutConfig.links.appStore)}>
            <Text style={styles.link}>📱 Télécharger sur Play Store</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default APropos;
