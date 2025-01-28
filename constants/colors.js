const tintColorLight = '#fff';
const tintColorDark = '#fff';

const Colors = {
  // Principales
  primary: 'rgb(17,93,8)', // Vert principal
  secondary: '#2ecc71', // Vert
  accent: '#e74c3c', // Rouge

  // Neutres
  white: '#ffffff',
  black: '#000000',
  gray: '#7f8c8d',
  lightGray: '#dfe6e9',
  darkGray: '#2d3436',

  // Backgrounds
  background: '#f5f5f5',
  cardBackground: '#ffffff',

  // Textes
  textPrimary: '#2c3e50',
  textSecondary: '#95a5a6',
  textAccent: '#e74c3c',

  // Couleurs spécifiques
  success: '#27ae60',
  warning: '#f1c40f',
  error: '#e74c3c',
  info: '#3498db',
  
  light: {
    text: '#ECEDEE', // Couleur du texte dans le thème clair
    background: '#f5f5f5', // Couleur de fond claire
    tint: tintColorLight, // Couleur d'accentuation pour le thème clair
    icon: '#9BA1A6', // Couleur des icônes
    tabIconDefault: '#9BA1A6', // Couleur des icônes inactives
    tabIconSelected: tintColorLight, // Couleur des icônes actives
    primary: 'rgb(17,93,8)', // Vert principal
    secondary: '#2ecc71', // Vert clair
    accent: '#e74c3c', // Rouge pour accentuer
    success: '#27ae60', // Vert pour le succès
    warning: '#f1c40f', // Jaune pour les avertissements
    error: '#e74c3c', // Rouge pour les erreurs
    info: '#3498db', // Bleu pour les informations
  },
  dark: {
    text: '#ECEDEE', // Couleur du texte dans le thème sombre
    background: '#151718', // Couleur de fond sombre
    tint: tintColorDark, // Couleur d'accentuation pour le thème sombre
    icon: '#9BA1A6', // Couleur des icônes
    tabIconDefault: '#9BA1A6', // Couleur des icônes inactives
    tabIconSelected: tintColorDark, // Couleur des icônes actives
    primary: 'rgb(17,93,8)', // Vert principal
    secondary: '#2ecc71', // Vert clair
    accent: '#e74c3c', // Rouge pour accentuer
    success: '#27ae60', // Vert pour le succès
    warning: '#f1c40f', // Jaune pour les avertissements
    error: '#e74c3c', // Rouge pour les erreurs
    info: '#3498db', // Bleu pour les informations
  },
};

export default Colors;
