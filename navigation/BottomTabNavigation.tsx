import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Image, Platform, Dimensions, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import COLORS from '../constants/colors';
import styles from '../styles/BottomTabNavigation_Styles';

// Import des écrans
import Home from '../screens/Accueil';
import Bar from '../screens/Bar';
import Programme from '../screens/Programmation';
import Merch from '../screens/Merch';
import Village from '../screens/Village';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

const tabHeight = Math.max(60, Math.min(height * 0.1, 80)); 
const iconSize = 28;
const homeButtonSize = Math.max(70, Math.min(height * 0.12, 90));

const BottomTabNavigation = () => {
  const navigation = useNavigation(); 

  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        tabBarShowLabel: true, // Affichage des labels sous les icônes
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: tabHeight,
          backgroundColor: COLORS.darkGray,
          borderColor: COLORS.black,
          paddingBottom: Platform.OS === 'ios' ? 10 : 5,
          paddingTop: 5, 
          paddingHorizontal: 10,
          justifyContent: 'center', 
          elevation: 10,
          shadowColor: COLORS.blacktransparent3,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 2,
          color: COLORS.white, // Couleur du texte
        },
      }}
    >
      {/* Onglet Programme */}
      <Tab.Screen
        name="Programme"
        component={Programme}
        options={{
          tabBarLabel: "Programme",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? 'musical-notes' : 'musical-notes-outline'}
                size={iconSize}
                color={focused ? COLORS.secondary : COLORS.white}
              />
            </View>
          ),
        }}
      />

      {/* Onglet Bar */}
      <Tab.Screen
        name="Bar"
        component={Bar}
        options={{
          tabBarLabel: "Bar",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? 'beer' : 'beer-outline'}
                size={iconSize}
                color={focused ? COLORS.secondary : COLORS.white}
              />
            </View>
          ),
        }}
      />

      {/* Bouton central Home */}
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarButton: (props) => (
            <View style={styles.centerContainer}>
              <TouchableOpacity
                style={[styles.homeButton, { width: homeButtonSize, height: homeButtonSize }]}
                activeOpacity={1}
                onPress={props.onPress}
              >
                <Image
                  source={require('../assets/menu/Museau.png')}
                  style={styles.homeIcon}
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
          tabBarLabel: "Village",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={iconSize}
                color={focused ? COLORS.secondary : COLORS.white}
              />
            </View>
          ),
        }}
      />

      {/* Onglet Menu */}
      <Tab.Screen
          name="Menu"
          component={() => null} // Éviter l’ouverture d’un écran
          options={{
            tabBarLabel: "",
            tabBarButton: () => (
              <View style={{ alignItems: 'center', justifyContent: 'center', height: 50 }}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }} // Assurer l'alignement vertical
                  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                  <MaterialCommunityIcons
                    name="menu"
                    size={iconSize}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
                <Text style={{ color: COLORS.white, fontSize: 10, marginTop: 2 }}>Menu</Text>
              </View>
            ),
          }}
        />

    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
