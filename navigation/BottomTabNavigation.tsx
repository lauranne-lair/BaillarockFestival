import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
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


// Obtenir la taille de l'écran pour adapter la barre et les icônes
const { width, height } = Dimensions.get("window");

// Ajustement dynamique de la barre et des icônes
const iconSize = Math.max(20, Math.min(height* 0.09,26)); // entre 55px et 70 px
const tabHeight = Math.max(30, Math.min(height* 0.09,200)); // 9% de la hauteur de l'écran

  return (
    
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: tabHeight, // Hauteur du bandeau
          backgroundColor: COLORS.white,
        },
        tabBarIconStyle: {
          marginTop : 12, // Baisse la position des icônes
        },
        headerTitleAlign: "center", // Centrer le titre dans le header
        headerStyle: {
          height: tabHeight, // Même hauteur que la BottomTabBar pour alignement
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
              size={iconSize} // Taille de l'icône
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
              size={iconSize}
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
            tabBarButton: () => {
              const navigation = useNavigation(); // Accès à la navigation

              return (
                <View style={styles.centerContainer}>
                  <TouchableOpacity
                    style={styles.homeButton}
                    onPress={() => navigation.navigate('Home')} // Redirection vers Home
                  >
                    <Image
                      source={require('../assets/menu/Museau.png')} // Image Museau.png
                      style={styles.homeIcon}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
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
              size={iconSize}
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
                size={iconSize} // Taille de l'icône Menu
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
