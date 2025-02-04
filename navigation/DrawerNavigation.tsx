import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import COLORS from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import BottomTabNavigation from './BottomTabNavigation';

// Import des écrans
import Merch from '../screens/Merch';
import Prevention from '../screens/Prevention';
import Partenaire from '../screens/Partenaire';
import CustomDrawerContent from '../components/CustomDrawerContent'; // Import du menu customisé
import Parrainage from '../screens/Parrainage'
import APropos from '../screens/Apropos'
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Ajout du menu personnalisé
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: 'transparent', // On met transparent pour laisser voir l'image
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.black,
        },
        headerShown: false,
        headerTintColor: COLORS.white,
        drawerActiveBackgroundColor: COLORS.primary.replace('rgb', 'rgba').replace(')', ', 0.5)'), // Couleur de fond de l'élément actif
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
          color: COLORS.white,
          fontSize: 14,
          marginLeft: -5,
        },
      }}
    >
      {/* Accueil */}
      <Drawer.Screen
        name="Accueil"
        component={BottomTabNavigation}
        options={{
          drawerLabel: ' Retour',
          title: 'Retour',
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="dragon" size={20} color={COLORS.white} />
          ),
        }}
      />

      {/* Boutique Merch */}
      <Drawer.Screen
        name="Merch"
        component={Merch}
        options={{
          drawerLabel: 'Boutique Merch',
          drawerIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color={COLORS.white} />
          ),
        }}
      />

      {/* Prévention */}
      <Drawer.Screen
        name="Prevention"
        component={Prevention}
        options={{
          drawerLabel: 'Prévention',
          drawerIcon: ({ color }) => (
            <Ionicons name="shield-checkmark" size={24} color={COLORS.white} />
          ),
        }}
      />

      {/* Partenaires */}
      <Drawer.Screen
        name="Partenaire"
        component={Partenaire}
        options={{
          drawerLabel: 'Partenaires',
          drawerIcon: ({ color }) => (
            <Ionicons name="people" size={24} color={COLORS.white} />
          ),
        }}
      />

      {/* Parrainage */}
      <Drawer.Screen
        name="Parrainage"
        component={Parrainage}
        options={{
          drawerLabel: 'Parrainage',
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="hands-helping" size={20} color={COLORS.white} />
          ),
        }}
      />

      {/* APropos */}
      <Drawer.Screen
        name="À propos"
        component={APropos}
        options={{
          drawerLabel: 'À propos',
          drawerIcon: ({ color }) => (
            <Ionicons name="information-circle-sharp" size={24} color={COLORS.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;