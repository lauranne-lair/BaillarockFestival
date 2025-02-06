import { ListPartners } from '../screens/Partenaire';

export const Partenaires: ListPartners[] = [
  {
    id: '1',
    name: 'La cuisine de Comptoir',
    genre: 'Restaurant',
    description:"Depuis plusieurs années la cuisine de comptoir vous offre une cuisine simple, élaborée à partir de produits frais et locaux, du burger artisanal à la côte de bœuf racée sélectionnée par notre boucher Laurent Point, de nos bières artisanales à nos vins sélectionnée par notre sommelier, nous travaillons avec plus d'une vingtaine de producteurs locaux! Tout est fait ici pour créer un endroit convivial, autour de vrais produits d'artisans, une cuisine aux gouts de tous, que vous soyez végétarien, amateur de belles viandes; de poissons fins ou de burgers bien fat! Vive le Fait Maison!",
    image: require('../assets/images/Logo_Part//Cuisine_de_Comptoir/logo_cuisinecomptoir.png'),
    imageBG: require('../assets/images/Logo_Part/Cuisine_de_Comptoir/background.png'),
    socialLinks: [
      { name: "facebook", url: "https://www.facebook.com/lacuisinedecomptoir/" },
      { name: "instagram", url: "https://www.instagram.com/lacuisinedecomptoir86/" },
      { name: "website", url: "https://la-cuisine-de-comptoir.eatbu.com/?lang=fr" },
    ],
  },

  {
    id: '2',
    name: 'BG Froid',
    genre: 'Artisant',
    description:'Description BG Froid',
    image: require('../assets/images/Logo_Part/BGFroid/logo_BGFroid.png'),
    imageBG: require('../assets/images/Logo_Part/BGFroid/logo_BGFroid.png'),
    socialLinks: [
      { name: "facebook", url: "https://www.facebook.com/people/SARL-BG-FROID/100063951528912/#" },
      { name: "website", url: "https://www.bgfroid86.fr/A-propos.e.htm" },
    ],
  },

  {
    id: '3',
    name: 'Grand Potiers',
    genre: 'Communauté urbaine',
    description:'Description Crédit Agricole',
    image: require('../assets/images/Logo_Part/Grand_Poitiers/Logo_GrandPoitiers.png'),
    imageBG: require('../assets/images/Logo_Part/Grand_Poitiers/Bg_GrandPoitiers.png'),
    socialLinks: [
      { name: "facebook", url: "https://www.instagram.com/grandpoitiers/?hl=fr" },
      { name: "instagram", url: "https://fr-fr.facebook.com/GrandPoitiers/" },
      { name: "website", url: "https://www.grandpoitiers.fr/" },
    ],
  },

  {
    id: '4',
    name: 'Saint-Georges lès-Baillargeaux',
    genre: 'Commune',
    description: 'Description Commune',
    image: require('../assets/images/Logo_Part/SaintG.png'),
    imageBG: require('../assets/images/Logo_Part/SaintG.png'),
    socialLinks: [
      { name: "website", url: "https://www.saint-georges-les-baillargeaux.fr/" },
    ],
  },



  {
    id: '2',
    name: 'Crédit Agricole',
    genre: 'Banque',
    description:'Description Crédit Agricole',
    image: require('../assets/images/Logo_Part/CA.png'),
    imageBG: require('../assets/images/Logo_Part/CA.png'),
    socialLinks: [
      { name: "facebook", url: "https://www.instagram.com/creditagricole/" },
      { name: "instagram", url: "https://www.facebook.com/CreditAgricole" },
      { name: "website", url: "https://www.credit-agricole.fr/" },
    ],
  },

];
