import { ListPartners } from '../screens/Partenaire';

export const Partenaires: ListPartners[] = [
  {
    id: '1',
    name: 'La cuisine de Comptoir',
    genre: 'Restaurant',
    description: 'Finaliste 🏆 : \n\nCoupe de France du Burger Sud : 2020 - 2021 - 2022 - 2023 - 2024\n\nDepuis plusieurs années la cuisine de comptoir vous offre une cuisine simple, élaborée à partir de produits frais et locaux.Tout est fait ici pour créer un endroit convivial, autour de vrais produits d’artisans, une cuisine aux goûts de tous, que vous soyez végétarien, amateur de belles viandes, de poissons fins ou de burgers bien faits !\n\nVive le Fait Maison !',
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
    description:'Benjamin GONZALEZ, fort de 12 ans d\'expérience dans une grande entreprise de frigoriste, a fondé BG Froid. \n\nPassionné par un métier technique et en constante évolution, il souhaite apporter son expertise aux clients. Sensible aux enjeux environnementaux, il privilégie les fluides à faible PRG et se spécialise dans les installations sous CO₂. \n\nIl a créé son entreprise pour exercer avec des valeurs humaines fortes, à l écoute des besoins des clients. Son objectif: conseiller, accompagner et garantir satisfaction à chaque projet. \n\nVotre besoin devient son objectif.',
    image: require('../assets/images/Logo_Part/BGFroid/logo_BGFroid.png'),
    imageBG: require('../assets/images/Logo_Part/BGFroid/logo_BGFroid.png'),
    socialLinks: [
      { name: "facebook", url: "https://www.facebook.com/people/SARL-BG-FROID/100063951528912/#" },
      { name: "website", url: "https://www.bgfroid86.fr/A-propos.e.htm" },
    ],
  },

  {
    id: '3',
    name: 'Grand Poitiers',
    genre: 'Communauté urbaine',
    image: require('../assets/images/Logo_Part/Grand_Poitiers/Logo_GrandPoitiers.png'),
    imageBG: require('../assets/images/Logo_Part/Grand_Poitiers/Bg_GrandPoitiers.png'),
    socialLinks: [
      { name: "facebook", url: "https://fr-fr.facebook.com/GrandPoitiers/" },
      { name: "instagram", url: "https://www.instagram.com/grandpoitiers/?hl=fr" },
      { name: "website", url: "https://www.grandpoitiers.fr/" },
    ],
  },

  {
    id: '4',
    name: 'Saint-Georges lès-Baillargeaux',
    genre: 'Commune',
    image: require('../assets/images/Logo_Part/SaintG.png'),
    imageBG: require('../assets/images/Logo_Part/SaintG.png'),
    socialLinks: [
      { name: "website", url: "https://www.saint-georges-les-baillargeaux.fr/" },
    ],
  },



  {
    id: '5',
    name: 'Crédit Agricole',
    genre: 'Banque',
    description:'Notre relation avec le Crédit Agricole est née lors de la création de l\'association. Il était naturel pour notre association de rencontrer rapidement la banque de notre commune afin de présenter l’association et le projet. Nous avons été accueillis chaleureusement par les équipes de l’agence de Saint Georges les Baillargeaux qui nous ont présenté l’engagement du Crédit Agricole pour les associations. Nous y avons tout de suite senti des valeurs communes de proximité et de soutien. \n\nC’est donc sans hésitation que nous avons confié la gestion du compte bancaire de l’association à l’agence de Saint Georges les Baillargeaux. La proximité géographique, la réactivité et la confiance mutuelle nous ravis dans cette relation.  \n\nGrâce à notre partenariat avec le Crédit Agricole nous abordons sereinement chaque édition afin de proposer aux festivaliers le meilleur accueil possible. Le Crédit Agricole est véritablement un moteur pour notre association, les offres et avantages y sont nombreux et nous sommes vraiment très satisfait de cette relation. \n\nMerci le Crédit Agricole !',
    image: require('../assets/images/Logo_Part/Credit_Agricole/CA.png'),
    imageBG: require('../assets/images/Logo_Part/Credit_Agricole/CA.png'),
    socialLinks: [
      { name: "facebook", url: "https://www.facebook.com/CreditAgricole" },
      { name: "instagram", url: "https://www.instagram.com/creditagricole/" },
      { name: "website", url: "https://www.credit-agricole.fr/" },
    ],
  },

  {
    id: '6',
    name: 'Square Habitat',
    genre: 'Réseau d\'agences immobilières',
    description:'Square Habitat Saint Georges les Baillargeaux est une agence immobilière, filiale de la Caisse Régionale du Crédit Agricole qui met son réseau et ses compétences au service des projets immobiliers. Couvrant l’ensemble des métiers de l’immobilier, Square Habitat s’engage aux côtés de ses clients pour les accompagner avec efficacité et transparence. \n\nL’agence de Saint Georges les Baillargeaux est représentée par Florence Godefroy qui nous soutient depuis la première édition du Baillarock festival. Florence est une grande amatrice de musique en tout genre, elle participe à de nombreux concerts et festivals. Partageant cette même passion avec des valeurs liées à la valorisation de la culture sur notre territoire, elle nous a ouvert ses portes depuis 2022 et nous soutient dans la fabrication de nos gobelets ! Merci Florence ! \n\nVous avez un projet immobilier sur Saint Georges les Baillargeaux ou dans les communes alentours ? Venez rencontrer Florence !',
    image: require('../assets/images/Logo_Part/Square_Habitat/sqh.png'),
    imageBG: require('../assets/images/Logo_Part/Square_Habitat/SQH_bg.jpg'),
    socialLinks: [
      { name: "facebook", url: "https://www.facebook.com/SquareHabitatCA" },
      { name: "instagram", url: "https://www.instagram.com/squarehabitatfrance/" },
      { name: "website", url: "https://www.squarehabitat.fr/" },
    ],
  },

  {
    id: '7',
    name: 'American Socks',
    genre: 'Boutique en ligne',
    description:'A travers vos pieds, American Socks se veut le reflet des cultures alternatives et du streetwear. Fondée en 2013, la marque a commencé à rééditer et à améliorer les chaussettes à rayures classiques utilisées par les premiers skateurs dans les années 80.\n\nNous avons pris la route pour participer à des festivals de musique et de sports dans toute l\'Europe, construisant une communauté de #Sockers, tout en améliorant et en développant de nouvelles générations de produits originaux inspirés par la musique rock, la culture des tatouages et les sports extrêmes. Nous sommes la marque audacieuse et excentrique qui ose se différencier par le design.\n\nNous sommes basés à Barcelone, mais vous pouvez trouver nos produits dans des magasins de skate et de streetwear dans plus de 25 pays.',
    image: require('../assets/images/Logo_Part/American_Socks/AmericanSocks_logo.jpg'),
    imageBG: require('../assets/images/Logo_Part/American_Socks/AmericanSocks_bg.png'),
    socialLinks: [
      { name: "facebook", url: "https://www.facebook.com/AmericanSocks/" },
      { name: "instagram", url: "https://www.instagram.com/americansocks/" },
      { name: "website", url: "https://www.americansocks.com/fr-fr" },
    ],
  },

  {
    id: '8',
    name: 'Studio Ludo',
    genre: 'Photographie et impression numérique',
    description:'Implanté à Saint-Georges-les-Baillargeaux depuis 30 ans, Studio LUDO est une entreprise familiale reconnue pour son expertise en photographie et impression numérique. \nSon savoir-faire s\'étend du Louvre au Mémorial de Verdun, en passant par Clairefontaine et la grotte Chauvet.\nPartenaire fidèle du Baillarock Festival, Studio LUDO est derrière tous les supports visuels du festival, grâce à Jérôme et son équipe. \n\nDès qu\'on franchit la porte du studio, on y retrouve une ambiance chaleureuse, portée par une passion commune pour la musique rock et les bières artisanales.\nBrasseurs passionnés, ils sont aussi à l\'origine de la Baillarock Beer, produite par leur Brasserie du 13. \n\nUne collaboration précieuse, empreinte d\'amitié et de fidélité depuis le début du festival. \nUn immense merci à eux !',
    image: require('../assets/images/Logo_Part/Studio_Ludo/StudioLudo_logo.jpg'),
    imageBG: require('../assets/images/Logo_Part/Studio_Ludo/StudioLudo_bg.jpg'),
    socialLinks: [
      { name: "facebook", url: "https://www.facebook.com/profile.php?id=100063639638554" },
      { name: "website", url: "https://www.studioludo.com/" },
    ],
  },

  //{
    //id: '9',
    //name: 'Bee Factory',
    //genre: 'Sérigraphie',
    //description:'Bee Factory est une entreprise Poitevine spécialisée dans la création d\'objets publicitaires et la sérigraphie.Derrière les manettes, il y a Franck. \nPartenaire depuis la première heure, partageant les valeurs de notre association, Franck est tout simplement considéré comme un membre de notre association par son soutien et son investissement dans l\'organisation du Baillarock Festival. \nNotre relation va au-delà du partenariat, c\'est un ami ! \nToujours réactif, très professionnel et d\'une gentillesse extraordinaire. Il conçoit tous les supports du festival et nous lui sommes très reconnaissant ! \nLes t-shirts et sweats que vous portez ont été désignés et fabriqué par lui ! Les gobelets du fest et vos bracelets aussi ! \nSi vous chercher pour votre entreprise ou votre association un professionnel dans la création d\'objets publicitaires, foncez les yeux fermés et contactez Franck de chez Bee Factory ! \nMerci Franck !',
    //image: require('../assets/images/Logo_Part/Bee_Fact/bee_fact.jpg'),
    //imageBG: require('../assets/images/Logo_Part/Bee_Fact/bee_fact.jpg'),
    //socialLinks: [
      //{ name: "facebook"},
      //{ name: "instagram"},
      //{ name: "website"},
    //],
  //},
  {
    id: '10',
    name: 'Crossfit daemon',
    genre: 'Sport',
    description:'CrossFit Daemon et Baillarock partagent des valeurs communes et une passion pour le sport, réunissant régulièrement membres et bénévoles dans la box.\n\nLe CrossFit, initialement développé pour le corps militaire, est un entraînement complet mêlant haltérophilie, gymnastique et conditionnement physique, visant à améliorer 10 qualités du fitness (force, endurance, agilité, vitesse, etc.).\n\nSituée à Chasseneuil-du-Poitou (près du Futuroscope), la box CrossFit Daemon offre 800m² dédiés au CrossFit et 200m² d\'espace détente. Fondée par Flo & Laëti, passionnés de CrossFit, l\'équipe propose un accompagnement personnalisé, des cours en petits groupes (12 pers. max) et un espace OpenGym accessible à tout moment.\n\nDébutant ou compétiteur, bénéficiez d\'un coaching adapté dans un cadre convivial. Un espace détente est aussi prévu pour échanger et partager un moment en toute simplicité.',
    image: require('../assets/images/Logo_Part/Cross_D/Cross_D.jpg'),
    imageBG: require('../assets/images/Logo_Part/Cross_D/Cross_D.jpg'),
    socialLinks: [
      { name: "facebook", url:"https://www.facebook.com/crossfitdaemon"},
      { name: "instagram", url:"https://www.instagram.com/crossfit_daemon/"},
      { name: "website", url:"www.crossfitdaemon.com"},
    ],
  },
  {
  id: '11',
  name: 'ÉNERGISOLE',
  genre: 'Société',
  description:'La société ÉNERGISOLE est experte en techniques d\'isolation. Son domaine d\'intervention porte aussi bien sur des maisons neuves que sur la rénovation. \nVous êtes écouté et entendu. Le dirigeant, Bruno Sauvage, et ses techniciens experts et spécialistes en techniques d\'isolation, mène eux-même l\'analyse et le diagnostic de votre habitation ou de votre bâtiment. \n\n05 49 55 98 01\n4 rue de champ de gain 86130 \nSt Georges les Baillargeaux',
  image: require('../assets/images/Logo_Part/EnergiS/EnergiS.png'),
  imageBG: require('../assets/images/Logo_Part/EnergiS/EnergiS.png'),
  socialLinks: [
    { name: "website", url:"https://www.energisole.fr/"},
  ],
},
{
  id: '12',
  name: 'Futuroscope',
  genre: 'Parc d\'attraction',
  description:'Lorsque l\'on pense à Poitiers, on pense au Futuroscope ! \n\nLe Futuroscope renommé il y a peu « Futuroscope Xperiences » est le parc de loisirs français centré sur la technologie, la science et l\'innovation, qui propose des expériences immersives et sensorielles combinant projections d\'images et attractions à thèmes futuristes. \n\nCe n\'est pas pour rien que le Futuroscope Xperiences est l\'un des parcs de loisirs français les plus fréquentés avec une fréquentation totale s\'élevant à plus de 60 millions de visiteurs accueillis depuis son ouverture en 1987. \n\nDésormais doté d\'un parc aquatique « Aquascope » et d\'un parc hôtelier récemment inauguré, le Futuroscope Xperiences, c\'est ce lieu extraordinaire où le réel et l\'imaginaire se côtoient. Ici, vous pourrez rejoindre Mars en roller coaster, sauter dans une tornade, danser dans les bras d\'un robot ou croiser des Lapins Crétins. \n\nC\'est grâce à eux que nos artistes profitent d\'un moment de détente au parc avant ou après avoir mis le feu sur scène ! \nNous sommes fiers de les avoir comme partenaires du Baillarock festival depuis 2023 ! Merci le Futuroscope Xperiences !',
  image: require('../assets/images/Logo_Part/FutuR/FutuR.png'),
  imageBG: require('../assets/images/Logo_Part/FutuR/FutuR.png'),
  socialLinks: [
    { name: "facebook", url:"https://www.facebook.com/Futuroscope"},
    { name: "website", url:"https://www.futuroscope.com/fr/"},
    { name: "instagram", url:"https://www.instagram.com/futuroscope/"},

  ],
},
{
  id: '13',
  name: 'Uniscop',
  genre: 'Rénovation',
  description:'UNISCOP est le spécialiste Poitevin de la rénovation du Patrimoine & Réhabilitation de l\'Ancien, la Construction Neuve et l\'écoconstruction et la Restauration des Monuments Historiques ! \n\nSi vous souhaitez transformer, agrandir ou rénover une construction existante, une maison de caractère, UNISCOP met tout son professionnalisme afin de trouver les solutions les plus adaptées à la mise en œuvre de vos travaux. \n\nPartenaire du Baillarock festival, David est un grand amateur de musique Metal ! Un grand merci à UNISCOP pour leur soutien !',
  image: require('../assets/images/Logo_Part/Uniscop/Uniscop.jpg'),
  imageBG: require('../assets/images/Logo_Part/Uniscop/Uniscop.jpg'),
  socialLinks: [
    { name: "facebook", url:"https://www.facebook.com/uniscop"},
    { name: "website", url:"https://uniscop.com/"},
  ],
},
{
  id: '14',
  name: 'NESS & NONO Traiteur',
  genre: 'Traiteur',
  description: 'Traiteurs pour professionnels ou particulier, repas de famille, pour une entreprise, un anniversaire ou un mariage.\n\nFaites-nous confiance pour faire de votre événement un moment mémorable !',
  image: require('../assets/images/Logo_FoodT/Logo_nessno.png'),
  imageBG: require('../assets/images/Logo_FoodT/bg_ness_no.png'),
  socialLinks: [
    { name: "facebook", url: "https://www.facebook.com/nessetnono" },
    { name: "instagram", url: "https://www.instagram.com/nessetnono/" },
    { name: "website", url: "https://www.ness-et-nono-traiteur.com/" },
  ],
},
{
  id: '15',
  name: 'Coriolis',
  genre: 'Téléphonie',
  description: 'Votre magasin Coriolis est votre destination privilégiée pour tous vos besoins en téléphonie. Ici, vous découvrirez un espace dédié où technologie et convivialité se rencontrent, vous offrant une expérience unique de découverte et d\'achat.\n\nNos équipes d\'experts, formées aux dernières innovations du secteur, sont à votre disposition pour vous guider. Que vous soyez à la recherche d\'un nouveau forfait mobile, ou que vous ayez besoin d\'aide pour optimiser votre utilisation actuelle ou réparer votre téléphone, nos conseillers sont là pour vous aider. Leur compétence et leur passion sont votre garantie d\'un service de qualité, personnalisé à vos besoins.\n\nNous avons hâte de vous accueillir et de vous aider à trouver la solution de télécommunication qui vous convient le mieux.',
  image: require('../assets/images/Logo_Part/Coriolis/logo_coriolis.png'),
  imageBG: require('../assets/images/Logo_Part/Coriolis/logo_coriolis.png'),
  socialLinks: [
    { name: "facebook", url: "https://www.facebook.com/CoriolisPoitiers" },
    { name: "instagram", url: "https://www.instagram.com/coriolis_poitiers/" },
    { name: "website", url: "https://www.coriolis.com/magasins/carte/nouvelle-aquitaine/poitiers/coriolis-telecom-poitiers-3/" },
  ],
},
{
  id: '16',
  name: 'Medicalife',
  genre: 'Matériel médical',
  description: 'Notre mission? Vous proposer des solutions qui simplifient la vie, en toute proximité et avec un vrai sens de l\'écoute. Notre équipe de professionnels de santé est à votre service pour vous conseiller et vous accompagner, avec le sourire. Chez nous, chaque bénéficiaire est unique et mérite une attention particulière !\n\nNos Services : Matériel Médical, Orthopédie, Maintien à domicile',
  image: require('../assets/images/Logo_Part/Medicalife/logo_medicalife.jpg'),
  imageBG: require('../assets/images/Logo_Part/Medicalife/logo_medicalife.jpg'),
  socialLinks: [
    { name: "facebook", url: "https://www.facebook.com/medicalife86/?locale=fr_FR" },
    { name: "instagram", url: "https://www.instagram.com/medicalife_poitiers/?hl=fr" },
    { name: "website", url: "https://www.medicalife.fr/" },
  ],
},

];
