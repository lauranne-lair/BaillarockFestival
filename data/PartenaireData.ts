import { ListPartners } from '../screens/Partenaire';

export const Partenaires: ListPartners[] = [
  {
    id: '1',
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
  {
    id: '2',
    name: 'Saint-Georges lès-Baillargeaux',
    genre: 'Commune',
    description: 'Description Commune',
    image: require('../assets/images/Logo_Part/SaintG.png'),
    imageBG: require('../assets/images/Logo_Part/SaintG.png'),
    socialLinks: [
      { name: "website", url: "https://www.saint-georges-les-baillargeaux.fr/" },
    ],
  },
];
