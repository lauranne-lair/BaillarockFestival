import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Image, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import COLORS from '../constants/colors';

// Import des écrans
import Home from '../screens/Accueil';
import Bar from '../screens/Bar';
import Programme from '../screens/Programmation';
import Merch from '../screens/Merch';
import Village from '../screens/Village';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const navigation = useNavigation(); // Hook pour accéder à DrawerActions

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 90, // Hauteur du bandeau
          backgroundColor: COLORS.white,
        },
        tabBarIconStyle: {
          marginTop : 5, // Baisse la position des icônes
        },
      }}
    >
      {/* Onglet Programme */}
      <Tab.Screen
        name="Programme"
        component={Programme}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'musical-notes' : 'musical-notes-outline'}
              size={30} // Taille de l'icône
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />

      {/* Onglet Bar */}
      <Tab.Screen
        name="Bar"
        component={Bar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'beer' : 'beer-outline'}
              size={30}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />

      {/* Bouton central avec l'image Museau.png */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: () => (
            <View style={styles.centerContainer}>
              <TouchableOpacity style={styles.homeButton}>
                <Image
                  source={require('../assets/Menu/Museau.png')} // Chemin vers l'image Museau.png
                  style={styles.homeIcon} // Style appliqué à l'image
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      {/* Onglet Village */}
      <Tab.Screen
        name="Village"
        component={Village}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={30}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />

      {/* Onglet Menu (ouvre le Drawer) */}
      <Tab.Screen
        name="Menu"
        component={Merch} // Peut être un écran neutre si nécessaire
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())} // Ouvre le Drawer
            >
              <MaterialCommunityIcons
                name="menu"
                size={35} // Taille de l'icône Menu
                color={COLORS.primary}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  centerContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 25 : 20,
    alignSelf: 'center',
    zIndex: 2,
  },
  homeButton: {
    width: 80, // Taille du bouton central
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  homeIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    resizeMode: 'cover',
  },
  menuButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
