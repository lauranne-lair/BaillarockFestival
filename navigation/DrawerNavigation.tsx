import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import COLORS from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.darkGray,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.black,
        },
        headerShown: false,
        headerTintColor: COLORS.white,
        drawerLabelStyle: {
          color: COLORS.white,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
