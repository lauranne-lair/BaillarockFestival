import React, { useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import COLORS from '../constants/colors';

const APropos: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={30} color={COLORS.white} />
        </TouchableOpacity>
      ),
      headerShown: true,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* Titre */}
          <Text style={styles.title}>À propos de l’application</Text>
          
          {/* Informations générales */}
          <Text style={styles.sectionTitle}>📌 Informations Générales</Text>
          <Text style={styles.text}>Nom de l’application : <Text style={styles.bold}>BailaRock Festival</Text></Text>
          <Text style={styles.text}>Version : <Text style={styles.bold}>1.0.0</Text></Text>
          <Text style={styles.text}>Description :  </Text>
          <Text style={[styles.text, styles.bold, { textAlign: 'justify' }]}>Une application conçue pour enrichir votre expérience en festival en vous permettant de consulter la programmation, découvrir les exposants présents sur le village, et recevoir des alertes en cas d'événements importants.</Text>

          {/* Mentions légales */}
          <Text style={styles.sectionTitle}>📜 Mentions Légales</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://ton-site.com/politique-de-confidentialite')}>
            <Text style={styles.link}>Politique de confidentialité</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://ton-site.com/CGU')}>
            <Text style={styles.link}>Conditions Générales d'Utilisation</Text>
          </TouchableOpacity>

          {/* Crédits */}
          <Text style={styles.sectionTitle}>💡 Crédits & Développement</Text>
          <Text style={styles.text}>Développement : <Text style={styles.bold}>Gphy</Text></Text>
          <Text style={styles.text}>Organisation : <Text style={styles.bold}>United We Fest</Text></Text>
          <Text style={styles.text}>Design Graphique : <Text style={styles.bold}>United We Fest X Gphy</Text></Text>
          <Text style={styles.sectionTitle}>🚀 Technologies utilisées</Text>
          <View style={styles.techContainer}>
            <FontAwesome5 name="react" size={20} color={COLORS.white} style={styles.techIcon} />
            <Text style={styles.techText}> React Native</Text>
          </View>
          <View style={styles.techContainer}>
            <FontAwesome5 name="js-square" size={20} color={COLORS.white} style={styles.techIcon} />
            <Text style={styles.techText}> JavaScript</Text>
          </View>
          <View style={styles.techContainer}>
            <FontAwesome5 name="code" size={16} color={COLORS.white} style={styles.techIcon} />
            <Text style={styles.techText}>TypeScript</Text>
          </View>
          <View style={styles.techContainer}>
            <FontAwesome5 name="fire" size={20} color={COLORS.white} style={styles.techIcon} />
            <Text style={styles.techText}>  Firebase</Text>
          </View>

          {/* Liens utiles */}
          <Text style={styles.sectionTitle}>🔗 Liens Utiles</Text>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:support@ton-site.com')}>
            <Text style={styles.link}>📩 Contact Support</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.tonapp')}>
            <Text style={styles.link}>📱 Télécharger sur Google Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.tonapp')}>
            <Text style={styles.link}>📱 Télécharger sur Play Store</Text>
          </TouchableOpacity>


        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default APropos;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.dark.background,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'left',
    marginBottom: 20,
    fontFamily: 'Capsmall_clean',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    fontSize: 14,
    color: COLORS.secondary,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  techContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  techIcon: {
    marginRight: 10,
  },
  techText: {
    fontSize: 14,
    color: COLORS.white,
  },
  menuButton: {
    marginRight: 15,
  },
});
