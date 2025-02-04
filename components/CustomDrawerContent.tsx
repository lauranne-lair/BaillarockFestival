import React from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import COLORS from '../constants/colors';

const CustomDrawerContent = (props: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/Dragon_Drawer_v2.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* Zone fixe pour le logo et le texte "Bienvenue" */}
      <View style={{ alignItems: 'center', paddingVertical: 30, backgroundColor: COLORS.dark.background }}>
        <Image
          source={require('../assets/images/Logo_UWF_v2.png')} 
          style={{ width: 120, height: 120, borderRadius: 50, marginBottom: 5 }}
        />
        <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
          Bienvenue !
        </Text>
      </View>

      {/* Fond noir couvrant toute la zone du menu, avec les options remontées */}
      <View style={{ flex: 1, backgroundColor: COLORS.blacktransparent7, justifyContent: 'flex-start' }}>
        <DrawerContentScrollView 
          {...props} 
          contentContainerStyle={{ flexGrow: 1, paddingTop: 5 }}
        >
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    </ImageBackground>
  );
};

export default CustomDrawerContent;
