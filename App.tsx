import React, { useEffect } from 'react';
import MainNavigator from './navigation/MainNavigation';
import { Appearance, StatusBar, View } from 'react-native';

export default function App() {
  useEffect(() => {
    Appearance.setColorScheme('dark'); // Force le mode sombre sur toute l'application
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* Barre de statut en noir avec icônes blanches */}
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* Ton navigateur principal */}
      <MainNavigator />
    </View>
  );
}