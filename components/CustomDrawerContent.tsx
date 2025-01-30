import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import COLORS from '../constants/colors';

const CustomDrawerContent = (props: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/Dragon_Drawer_BW.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        {/* Logo ou Avatar */}
        <View style={{ alignItems: 'center', padding: 10 }}>
          <Image
            source={require('../assets/images/logo_unitedWeFest.png')} 
            style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 5 }}
          />
          <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
            Bienvenue !
          </Text>
        </View>

        {/* Affichage des éléments du menu */}
        <View style={{ flex: 1, backgroundColor: COLORS.blacktransparent5, paddingVertical: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </ImageBackground>
  );
};

export default CustomDrawerContent;
