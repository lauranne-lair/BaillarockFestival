const tintColorLight = 'rgb(200, 210, 200)';
const tintColorDark = 'rgb(8, 10, 6)';

const Colors = {
  // Principales
  primary: 'rgb(34, 85, 23)', // Vert foncé
  secondary: 'rgb(90, 171, 51)', // Vert vif
  accent: 'rgb(120, 225, 80)', // Vert toxique
  greeninspi: 'rgba(31, 84, 5, 0.7)',

  // Neutres
  white: 'rgb(255, 255, 255)',
  black: 'rgb(8, 10, 6)', // Noir profond
  gray: 'rgb(40, 45, 40)', // Gris foncé
  lightGray: 'rgb(120, 130, 120)', // Gris moyen
  darkGray: 'rgb(20, 25, 20)', // Gris très foncé

  // Backgrounds
  background: 'rgb(8, 10, 6)', // Fond sombre
  cardBackground: 'rgba(34, 85, 23, 0.9)', // Fond de carte inspiré du vert foncé

  // Textes
  textPrimary: 'rgb(34, 85, 23)', // Vert foncé
  textSecondary: 'rgb(120, 130, 120)', // Gris neutre
  textAccent: 'rgb(120, 225, 80)', // Vert toxique

  // Couleurs spécifiques
  success: 'rgb(90, 171, 51)', // Vert vif
  warning: 'rgb(241,196,15)', // Avertissement
  error: 'rgb(231,76,60)', // Erreur
  info: 'rgb(52,152,219)', // Information
  
  // Couleur avec transparence 
  blacktransparent3: 'rgba(8,10,6,0.3)',
  blacktransparent5: 'rgba(8,10,6,0.5)',
  blacktransparent7: 'rgba(8,10,6,0.7)',
  blacktransparent9: 'rgba(8,10,6,0.9)',
  greentransparent9: 'rgba(31, 84, 5,0.8)',

  light: {
    text: 'rgb(24, 63, 25)', // Texte vert foncé
    background: 'rgb(240, 240, 235)', // Fond clair
    tint: tintColorLight,
    icon: 'rgb(31, 84, 5)',
    tabIconDefault: 'rgb(97, 98, 97)',
    tabIconSelected: 'rgb(40, 144, 9)',
    primary: 'rgb(40, 144, 9)', // Vert intense
    secondary: 'rgb(131, 180, 99)', // Vert clair
    accent: 'rgb(201, 243, 142)', // Vert fluorescent
    success: 'rgb(31, 84, 5)',
    warning: 'rgb(241, 196, 15)',
    error: 'rgb(211, 47, 47)',
    info: 'rgb(52, 152, 219)',
  },

  // Thème sombre (Baillarock Festival Style)
  dark: {
    text: 'rgb(231, 255, 214)', // Vert pâle pour contraste
    background: 'rgb(10, 20, 10)', // Noir verdâtre
    tint: tintColorDark,
    icon: 'rgb(148, 255, 136)',
    tabIconDefault: 'rgb(97, 98, 97)',
    tabIconSelected: 'rgb(90, 255, 90)',
    primary: 'rgb(64, 255, 53)', // Vert toxique principal
    secondary: 'rgb(31, 84, 5)', // Vert foncé
    accent: 'rgb(15, 170, 45)', // Vert fluo inspiré de l'affiche
    success: 'rgb(28, 114, 44)',
    warning: 'rgb(241, 196, 15)',
    error: 'rgb(231, 76, 60)',
    info: 'rgb(52, 152, 219)',
  },
};

export default Colors;