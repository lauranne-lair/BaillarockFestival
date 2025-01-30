import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Image, Platform, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import COLORS from '../constants/colors';
import styles from '../styles/BottomTabNavigation_Styles'

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
        tabBarShowLabel: false,
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
        tabBarIconStyle: {
          margin: 15, 
        },
      }}
    >
      {/* Onglet Programme */}
      <Tab.Screen
        name="Programme"
        component={Programme}
        options={{
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
        component={Merch} 
        options={{
          tabBarButton: () => (
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <MaterialCommunityIcons
                name="menu"
                size={iconSize}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;