import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import COLORS from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabNavigation from './BottomTabNavigation';

// Import des écrans
import Merch from '../screens/Merch';
import Prevention from '../screens/Prevention';
import Partenaire from '../screens/Partenaire';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: COLORS.darkGray,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.black,
        },
        headerShown: false, // Masquer l'en-tête du Drawer
        headerTintColor: COLORS.white,
        drawerLabelStyle: {
          color: COLORS.white,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      {/* Accueil */}
      <Drawer.Screen
        name="Accueil"
        component={BottomTabNavigation}
        options={{
          drawerLabel: 'Accueil',
          title: 'Accueil',
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={COLORS.white} />
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
            <Ionicons name="cart-outline" size={24} color={COLORS.white} />
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
            <Ionicons name="shield-checkmark-outline" size={24} color={COLORS.white} />
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
            <Ionicons name="people-outline" size={24} color={COLORS.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
