// Import des fichiers multimédias statiques
import video from '../assets/videos/videohomepage.mp4';
import image from '../assets/images/Dragon.png';
import arrowAnimation from '../assets/animation/Arrow3.json';
import siteMap from '../assets/images/Accueil/Plan_site_festival.png';
import { Platform, Linking } from 'react-native'; 

// Localisation de la salle
export const openMaps = () => {
  const address = encodeURIComponent("Espace Mérovée, Route du stade, Saint Georges Les Baillargeaux, France");
  const url = Platform.select({
    ios: `maps:0,0?q=${address}`, // Apple Maps
    android: `geo:0,0?q=${address}` // Google Maps
  });

  if (url) {
    Linking.openURL(url).catch(() =>
      Alert.alert("Erreur", "Impossible d'ouvrir l'application de navigation.")
    );
  }
};


// Configuration de la page d'accueil
export const homeConfig = {
  festivalName: "BAILLAROCK FESTIVAL",
  festivalDate: "2025-05-23T17:30:00",
  mapsLocalisation: "Espace Mérovée, Route du stade, Saint Georges Les Baillargeaux, France",
  location: "Saint Georges Les Baillargeaux",
  socialMediaLinks: {
    shop: "https://my.weezevent.com/BaillarockFestival2025",
    instagram: "https://www.instagram.com/baillarock_unitedwefest/",
    facebook: "https://www.facebook.com/UnitedWeFest/",
    youtube: "https://www.youtube.com/channel/UCUzh0r_ru-REV_5OFLzamAw",
    website: "https://www.baillarockfestival.fr/"
  },
  assets: {
    arrowAnimation,
    video, // Fichier vidéo de la page d'accueil
    image, // Image de fond lorsque l'on fait glisser vers le bas pour cacher la vidéo
    siteMap,
    socialIcons: {
      instagram: {
        icon: "instagram",
        iconType: "FontAwesome",
        color: 'rgba(132, 132, 132, 0.7)'
      },
      facebook: {
        icon: "facebook",
        iconType: "FontAwesome",
        color: 'rgba(132, 132, 132, 0.7)'
      },
      youtube: {
        icon: "youtube",
        iconType: "FontAwesome",
        color: 'rgba(132, 132, 132, 0.7)'
      },
      website: {
        icon: "link",
        iconType: "FontAwesome",
        color: 'rgba(132, 132, 132, 0.7)'
      },
    }
  },
  colors: {
    backButton: 'rgb(14, 93, 8)',
  },
  messages: {
    countdownExpired: "C'est maintenant !",
    buyTickets: "Achetez vos billets !",
    viewSchedule: "Voir la programmation",
    socialMediaTitle: "Suivez-nous sur les réseaux sociaux",
  }
};
