import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation'; 

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false, 
          animation: 'slide_from_right' // 🔥 Effet de transition qui fait venir l'écran depuis la droite
        }}
        initialRouteName="Drawer"
      >

        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
