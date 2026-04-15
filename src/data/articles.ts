export interface ArticleI18n {
  title: string;
  excerpt: string;
  category: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
  content: string[];
  i18n?: {
    ar?: ArticleI18n;
    en?: ArticleI18n;
    ru?: ArticleI18n;
  };
}

export const ARTICLES: Article[] = [
  {
    slug: 'que-faire-panne-autoroute',
    title: 'Que faire en cas de panne sur autoroute ?',
    excerpt: "Les bons réflexes à adopter en cas de panne sur autoroute : sécurité, signalisation, appel aux secours et prise en charge par un dépanneur agréé.",
    category: 'Conseils',
    date: '2026-04-01',
    readTime: 5,
    image: '/blog/panne-autoroute.webp',
    content: [
      "Une panne sur autoroute est une situation stressante, mais en adoptant les bons réflexes, vous pouvez assurer votre sécurité et celle des autres usagers. Voici les étapes à suivre.",

      "## 1. Allumez vos feux de détresse immédiatement",
      "Dès que vous sentez un problème mécanique, activez vos warnings. Cela prévient les conducteurs derrière vous et réduit le risque de collision. Même si vous pensez pouvoir continuer, signalez votre situation.",

      "## 2. Rangez-vous sur la bande d'arrêt d'urgence",
      "Dirigez-vous vers la droite et immobilisez votre véhicule le plus loin possible de la voie de circulation. Si possible, choisissez une zone de refuge ou une aire de repos. Serrez le frein à main et mettez les roues braquées vers la droite.",

      "## 3. Enfilez votre gilet jaune AVANT de sortir",
      "C'est obligatoire et vital. Enfilez votre gilet réfléchissant à l'intérieur du véhicule avant d'ouvrir la portière. Sortez par le côté droit (côté glissière) pour éviter la circulation.",

      "## 4. Placez le triangle de signalisation",
      "Posez votre triangle à au moins 30 mètres derrière votre véhicule, voire plus sur autoroute. Attention : sur autoroute à forte circulation, cette étape peut être dangereuse. Privilégiez votre sécurité.",

      "## 5. Mettez-vous à l'abri derrière la glissière",
      "Ne restez jamais dans le véhicule ni sur la chaussée. Éloignez-vous de la voiture et attendez derrière la glissière de sécurité avec tous les passagers.",

      "## 6. Appelez les secours",
      "Utilisez les bornes d'appel orange (tous les 2 km) ou appelez le 07 56 97 36 86 (ZDEPANNAGE). Sur autoroute, les sociétés de dépannage agréées sont les seules habilitées à intervenir. Le tarif est réglementé par arrêté ministériel : à partir de 151 € TTC en journée.",

      "## 7. La prise en charge assurance",
      "La plupart des contrats d'assurance auto incluent une assistance dépannage. Notez votre numéro de contrat et appelez votre assureur en parallèle. Chez ZDEPANNAGE, nous pouvons gérer la prise en charge directement avec votre compagnie pour que vous n'ayez rien à avancer.",

      "## Ce qu'il ne faut JAMAIS faire",
      "- Ne jamais tenter de réparer sur la voie de circulation\n- Ne jamais traverser l'autoroute à pied\n- Ne jamais rester dans le véhicule si possible\n- Ne jamais faire appel à un dépanneur non agréé sur autoroute",
    ],
  },
  {
    slug: 'prise-en-charge-assurance-depannage',
    title: 'Comment fonctionne la prise en charge assurance pour un dépannage ?',
    excerpt: "Tout savoir sur la prise en charge de votre dépannage par l'assurance : conditions, démarches et comment ne rien avancer.",
    category: 'Assurance',
    date: '2026-03-28',
    readTime: 4,
    image: '/blog/assurance-depannage.webp',
    content: [
      "Quand votre voiture tombe en panne, la question du coût arrive vite. Bonne nouvelle : dans la majorité des cas, votre assurance auto prend en charge le dépannage. Voici comment ça fonctionne concrètement.",

      "## Votre contrat inclut-il l'assistance ?",
      "La quasi-totalité des contrats d'assurance auto en France incluent une garantie assistance/dépannage. Vérifiez les conditions : certains contrats imposent une distance minimale du domicile (généralement 25 ou 50 km), d'autres couvrent dès le pas de votre porte.",

      "## Les étapes de la prise en charge",
      "**1. Appelez votre dépanneur** — Contactez ZDEPANNAGE au 07 56 97 36 86. Décrivez la panne et votre localisation.\n\n**2. Communiquez vos infos assurance** — Numéro de contrat, nom de l'assureur, immatriculation du véhicule.\n\n**3. Le dépanneur gère la prise en charge** — Chez ZDEPANNAGE, nous contactons directement votre assureur pour obtenir l'accord de prise en charge. Vous n'avez rien à avancer.\n\n**4. Intervention et facturation** — Le dépanneur intervient. La facture est envoyée directement à votre assurance.",

      "## Que couvre l'assurance ?",
      "Selon votre contrat, l'assurance peut couvrir :\n- Le remorquage jusqu'au garage le plus proche\n- La réparation sur place (si possible)\n- Un véhicule de remplacement\n- Le rapatriement des passagers\n- L'hébergement si nécessaire (panne de nuit loin du domicile)",

      "## Les cas particuliers",
      "**Panne sur autoroute** : les tarifs sont réglementés par arrêté ministériel. L'assurance couvre généralement le forfait de base (151 € TTC).\n\n**Accident avec tiers** : c'est l'assurance du responsable qui prend en charge les frais.\n\n**Panne à domicile** : certains contrats excluent les pannes à moins de 25 km du domicile. Vérifiez votre contrat.",

      "## Notre conseil",
      "Gardez toujours votre numéro de contrat d'assurance dans votre téléphone. En cas de panne, cela accélère considérablement la prise en charge. Chez ZDEPANNAGE, nous travaillons avec toutes les compagnies d'assurance françaises — AXA, MAIF, Allianz, Matmut, MACIF, Groupama, et toutes les autres.",
    ],
  },
  {
    slug: 'tarifs-reglementés-depannage-2026',
    title: 'Les tarifs réglementés du dépannage automobile en 2026',
    excerpt: "Comprendre les tarifs de dépannage fixés par arrêté ministériel : autoroutes, police, majorations et prestations complémentaires.",
    category: 'Tarifs',
    date: '2026-03-20',
    readTime: 6,
    image: '/blog/tarifs-depannage.webp',
    content: [
      "Les tarifs de dépannage automobile en France ne sont pas fixés librement : ils sont encadrés par des arrêtés ministériels pour protéger les consommateurs. Voici tout ce qu'il faut savoir sur les prix en 2026.",

      "## Dépannage sur autoroute — Arrêté du 1er janvier 2026",
      "Sur autoroute et voies express, les tarifs sont strictement réglementés :\n\n- **Dépannage sur place** : 151 € TTC (véhicules < 3,5T)\n- **Remorquage jusqu'à l'atelier** : 151 € à 186,72 € TTC selon le poids\n- **Tarif majoré** (+50%) : nuits (18h-8h), week-ends et jours fériés\n\nCes forfaits incluent les 30 premières minutes d'intervention et les 5 premiers km après la sortie d'autoroute.",

      "## Dépannage suite à appel police/gendarmerie",
      "Quand les forces de l'ordre réquisitionnent un dépanneur, une grille tarifaire spécifique s'applique :\n\n- **0-20 km** : 144 € (base) / 216 € (majoré)\n- **20-30 km** : 162 € (base) / 243 € (majoré)\n- **30+ km** : 180 € (base) / 270 € (majoré)\n- **Km supplémentaire** : 2,28 € / 3,42 €",

      "## Les prestations complémentaires",
      "Certaines interventions nécessitent des opérations supplémentaires, facturées en sus :\n\n- **Treuillage** : 168 € / demi-heure\n- **Grutage** : 288 € / demi-heure\n- **Ouverture de porte** : 84 €\n- **Véhicule incendié** : 348 €\n- **Gardiennage** : 68 € / jour",

      "## Horaires base vs majorés",
      "**Tarif de base** : du lundi au vendredi, de 8h à 18h.\n**Tarif majoré (+50%)** : nuits (18h-8h), samedis, dimanches et jours fériés.\n\nConcrètement, si vous tombez en panne un samedi soir sur l'autoroute, le forfait de base de 151 € passe à 226,50 €.",

      "## Comment éviter les mauvaises surprises",
      "**1. Demandez le prix avant l'intervention** — Tout dépanneur sérieux vous communique le tarif exact par téléphone.\n\n**2. Vérifiez l'agrément** — Sur autoroute, seuls les dépanneurs agréés sont autorisés à intervenir.\n\n**3. Pensez à votre assurance** — Dans la majorité des cas, votre assurance couvre tout ou partie du dépannage.\n\nChez ZDEPANNAGE, nous appliquons strictement les tarifs réglementés et communiquons toujours le prix exact avant de partir. Transparence totale, aucun frais caché.",
    ],
  },
  {
    slug: 'pourquoi-choisir-depanneur-agree',
    title: 'Pourquoi choisir un dépanneur agréé par les forces de l\'ordre ?',
    excerpt: "Les avantages de faire appel à un dépanneur agréé : sécurité, tarifs réglementés, prise en charge assurance et équipement professionnel.",
    category: 'Conseils',
    date: '2026-03-15',
    readTime: 4,
    image: '/blog/depanneur-agree.webp',
    content: [
      "Quand vous êtes en panne, vous pouvez être tenté d'appeler le premier dépanneur trouvé sur internet. Mais choisir un dépanneur agréé par les forces de l'ordre fait une vraie différence. Voici pourquoi.",

      "## Qu'est-ce qu'un dépanneur agréé ?",
      "Un dépanneur agréé est une entreprise autorisée par la préfecture à intervenir suite aux réquisitions de la police nationale et de la gendarmerie. Pour obtenir cet agrément, l'entreprise doit respecter des critères stricts : équipement aux normes, assurance professionnelle, disponibilité 24h/24 et formation du personnel.",

      "## Les garanties d'un dépanneur agréé",
      "**Tarifs réglementés** : un dépanneur agréé applique les tarifs fixés par arrêté ministériel. Pas de surprise, pas de surfacturation.\n\n**Équipement professionnel** : plateaux dernière génération, équipement de levage et de fixation aux normes, véhicules entretenus.\n\n**Assurance professionnelle** : votre véhicule est couvert pendant toute l'opération de remorquage.\n\n**Disponibilité 24/7** : les dépanneurs agréés doivent assurer un service continu, y compris nuits, week-ends et jours fériés.",

      "## Les risques d'un dépanneur non agréé",
      "- Prix libres et souvent gonflés — sans cadre légal\n- Pas de garantie sur la qualité de l'intervention\n- Assurance professionnelle pas toujours à jour\n- Équipement parfois inadapté (risque d'endommager votre véhicule)\n- Difficulté pour la prise en charge par votre assurance",

      "## Comment vérifier l'agrément ?",
      "Demandez simplement au dépanneur son numéro d'agrément préfectoral. Vous pouvez aussi vérifier auprès de votre préfecture ou demander à voir l'agrément affiché dans le véhicule de dépannage.",

      "## ZDEPANNAGE : agréé et transparent",
      "Chez ZDEPANNAGE, nous sommes agréés par les forces de l'ordre pour l'Île-de-France. Notre équipe de 6 professionnels intervient 24h/24 avec 6 plateaux dernière génération (2 Mercedes Sprinter + 2 Toyota Hilux + 2 Mercedes Atego). Nous appliquons les tarifs réglementés et communiquons toujours le prix exact avant de partir. Appelez-nous au 07 56 97 36 86.",
    ],
  },
  {
    slug: 'entretien-voiture-eviter-panne',
    title: '10 vérifications pour éviter la panne automobile',
    excerpt: "Les contrôles simples à faire régulièrement pour prévenir les pannes les plus courantes : batterie, pneus, liquides, courroie.",
    category: 'Entretien',
    date: '2026-03-10',
    readTime: 5,
    image: '/blog/entretien-voiture.webp',
    content: [
      "La meilleure façon de ne jamais avoir besoin d'un dépanneur, c'est de prévenir les pannes. Voici 10 vérifications simples que tout automobiliste peut faire régulièrement.",

      "## 1. La batterie",
      "La batterie est la cause n°1 des pannes en France. Vérifiez que les cosses sont propres et bien serrées. Une batterie de plus de 4-5 ans doit être testée. En hiver, une batterie fatiguée lâche souvent au premier matin froid.",

      "## 2. Les pneus",
      "Vérifiez la pression une fois par mois (à froid). Des pneus sous-gonflés augmentent la consommation et le risque d'éclatement. Contrôlez aussi l'usure : la profondeur minimale légale est de 1,6 mm, mais au-dessous de 3 mm, le freinage sur sol mouillé est déjà dégradé.",

      "## 3. Le niveau d'huile moteur",
      "Vérifiez-le tous les 1 000 km ou avant un long trajet. Un moteur qui manque d'huile peut se gripper en quelques minutes, causant des dommages irréversibles.",

      "## 4. Le liquide de refroidissement",
      "Vérifiez le niveau dans le vase d'expansion (moteur froid). Un manque de liquide peut entraîner une surchauffe moteur — une des pannes les plus graves et coûteuses.",

      "## 5. Les freins",
      "Soyez attentif aux signaux : bruit de grincement, pédale molle, vibrations au freinage. Des plaquettes usées peuvent endommager les disques et augmenter considérablement la facture.",

      "## 6. L'éclairage",
      "Faites le tour de votre véhicule régulièrement : phares, feux arrière, clignotants, feux de recul. Une ampoule grillée peut vous valoir une amende et surtout réduire votre visibilité.",

      "## 7. Les essuie-glaces",
      "Changez-les une fois par an. Des balais usés réduisent dangereusement la visibilité sous la pluie. C'est une pièce peu coûteuse mais essentielle.",

      "## 8. La courroie de distribution",
      "C'est LA pièce à ne jamais négliger. Un remplacement coûte 400-800 €, mais une rupture peut détruire le moteur (5 000 € et plus). Respectez les intervalles recommandés par le constructeur.",

      "## 9. Le liquide de frein",
      "À remplacer tous les 2 ans environ. Le liquide de frein absorbe l'humidité avec le temps, ce qui réduit son efficacité et peut causer une défaillance du freinage.",

      "## 10. Le carburant",
      "Ne roulez jamais avec le réservoir presque vide. Rouler sur la réserve aspire les impuretés du fond du réservoir dans le circuit, ce qui peut endommager la pompe à carburant et les injecteurs.",

      "## En cas de panne malgré tout",
      "Si malgré ces précautions votre voiture vous lâche, appelez ZDEPANNAGE au 07 56 97 36 86. Nous intervenons en 30 minutes en Île-de-France, 24h/24, 7j/7.",
    ],
  },
  {
    slug: 'depannage-moto-scooter-idf',
    title: "Dépannage moto et scooter : ce qu'il faut savoir",
    excerpt: "Votre moto ou scooter est en panne ? Voici comment fonctionne le dépannage deux-roues : équipement spécifique, tarifs et précautions.",
    category: 'Services',
    date: '2026-03-05',
    readTime: 4,
    image: '/blog/depannage-moto.webp',
    content: [
      "Le dépannage d'une moto ou d'un scooter nécessite un équipement et des compétences spécifiques. Contrairement à une voiture, un deux-roues ne peut pas simplement être accroché à un crochet de remorquage. Voici tout ce qu'il faut savoir.",

      "## Un plateau adapté est indispensable",
      "Pour transporter une moto en toute sécurité, il faut un plateau équipé de systèmes de fixation dédiés : sangles à cliquet, berceaux de roue et points d'ancrage adaptés. Chez ZDEPANNAGE, nos 3 plateaux sont équipés pour prendre en charge tous types de deux-roues : motos sportives, customs, trails, scooters et quads.",

      "## Les pannes les plus courantes sur deux-roues",
      "**Batterie à plat** : c'est la panne n°1, surtout après une période d'inactivité. Une moto qui n'a pas roulé pendant 2-3 semaines peut avoir une batterie déchargée.\n\n**Crevaison** : les pneus moto sont plus vulnérables que ceux d'une voiture. Un clou ou un débris de verre suffit.\n\n**Chute** : même une chute à l'arrêt peut endommager un levier de frein, un clignotant ou tordre un guidon, rendant la moto non roulable.\n\n**Chaîne cassée** : une chaîne mal tendue ou usée peut casser en roulant.",

      "## Que faire en cas de panne moto ?",
      "**1. Sécurisez-vous** : garez la moto sur le côté, hors de la circulation. Allumez les warnings si possible.\n\n**2. Ne tentez pas de pousser sur une longue distance** : une moto en panne est lourde et instable, surtout avec des sacoches.\n\n**3. Appelez un dépanneur équipé** : ZDEPANNAGE au 07 56 97 36 86. Précisez qu'il s'agit d'un deux-roues pour qu'on envoie le plateau adapté.",

      "## Tarifs et assurance",
      "Les tarifs de dépannage moto sont les mêmes que pour les véhicules légers (< 1,8T). Votre assurance moto inclut généralement une assistance dépannage. Nous gérons la prise en charge directement avec votre assureur.",

      "## Notre conseil",
      "Gardez toujours un antivol en U (même si votre moto est en panne sur le bord de la route), votre carte grise et votre numéro d'assurance accessible. Et n'hésitez pas à nous appeler — nous intervenons 24h/24, 7j/7 en Île-de-France.",
    ],
  },
  {
    slug: 'panne-hiver-froid-batterie',
    title: 'Pannes hivernales : comment protéger votre voiture du froid',
    excerpt: "Le froid est l'ennemi numéro 1 de votre voiture. Batterie, diesel gelé, antigel : les précautions essentielles pour passer l'hiver sereinement.",
    category: 'Entretien',
    date: '2026-02-28',
    readTime: 5,
    image: '/blog/panne-hiver.webp',
    content: [
      "Chaque hiver, les appels de dépannage explosent. Le froid met à rude épreuve les batteries, les moteurs diesel et les circuits de refroidissement. Voici comment préparer votre voiture pour éviter la panne au pire moment.",

      "## La batterie : victime n°1 du froid",
      "Par temps froid, la capacité d'une batterie diminue de 30 à 50%. C'est pourquoi elle lâche souvent au premier matin glacial. Nos conseils :\n\n- **Faites tester votre batterie** avant l'hiver (garage ou centre auto)\n- **Une batterie de plus de 4 ans** doit être remplacée préventivement\n- **Coupez tous les consommateurs** (chauffage, radio, phares) avant de démarrer\n- **Si la voiture ne démarre pas** : attendez 30 secondes entre chaque tentative",

      "## Le diesel peut geler",
      "En dessous de -15°C, le gazole standard peut commencer à se figer (formation de paraffine). Solutions :\n\n- **Faites le plein avec du diesel hiver** dès novembre (les stations-service adaptent automatiquement)\n- **Ne laissez jamais le réservoir presque vide** en hiver\n- **Garez-vous dans un garage** si possible",

      "## Le liquide de refroidissement",
      "Un antigel insuffisant peut geler dans le circuit et provoquer des dégâts catastrophiques (bloc moteur fissuré). Vérifiez que votre antigel est dosé pour résister à -25°C minimum. Un contrôle en centre auto prend 2 minutes.",

      "## Les pneus hiver",
      "Depuis 2024, les pneus hiver ou chaînes sont obligatoires dans certaines zones montagneuses du 1er novembre au 31 mars. Même en Île-de-France, des pneus hiver améliorent considérablement l'adhérence dès que la température descend sous 7°C.",

      "## Le kit d'hiver indispensable",
      "Gardez dans votre coffre :\n- Câbles de démarrage\n- Grattoir à givre + bombe dégivrante\n- Couverture de survie\n- Lampe torche\n- Gilet jaune et triangle (obligatoires toute l'année)",

      "## Si la panne arrive quand même",
      "Le froid n'attend pas. Appelez ZDEPANNAGE au 07 56 97 36 86 — nous intervenons 24h/24, même à 3h du matin par -10°C. En moyenne, notre dépanneur est sur place en 30 minutes en Île-de-France.",
    ],
  },
  {
    slug: 'que-faire-apres-accident-route',
    title: 'Que faire après un accident de la route ? Le guide complet',
    excerpt: "Constat amiable, appel aux secours, dépanneur agréé : les bonnes étapes à suivre après un accident pour protéger vos droits et votre véhicule.",
    category: 'Sécurité',
    date: '2026-04-05',
    readTime: 6,
    image: '/blog/accident.webp',
    content: [
      "Un accident de la route, même léger, est un événement traumatisant. Pour éviter d'aggraver la situation et protéger vos droits, certaines étapes sont indispensables. Voici ce qu'il faut faire — et ne pas faire — après un choc.",

      "## 1. Sécuriser les lieux immédiatement",
      "Allumez vos feux de détresse, enfilez votre gilet jaune **avant de sortir** du véhicule, et posez le triangle de signalisation à au moins 30 mètres en arrière (150 mètres sur autoroute). Faites sortir les passagers et éloignez-vous de la chaussée.",

      "## 2. Évaluer les blessés",
      "Si quelqu'un est blessé, appelez immédiatement le **15 (SAMU)** ou le **112**. Ne déplacez jamais une personne blessée sauf danger imminent (incendie, risque de sur-accident).",

      "## 3. Appeler la police ou la gendarmerie",
      "Composez le **17** dans les cas suivants :\n\n- Blessés ou décès\n- Refus de présenter les papiers ou d'établir un constat\n- Suspicion d'alcool ou de stupéfiants\n- Délit de fuite\n- Dégâts importants sur le mobilier urbain ou la voirie",

      "## 4. Remplir le constat amiable",
      "Le constat amiable est **obligatoire** dès qu'il y a des dégâts matériels. Quelques règles essentielles :\n\n- Remplissez-le **sur place**, à deux, calmement\n- Faites un croquis précis avec sens de circulation et points d'impact\n- Cochez avec attention les cases (chaque case = un fait juridique)\n- Notez les coordonnées de témoins éventuels\n- **Signez seulement si tout est exact** — une fois signé, plus de modification possible\n- Photos, photos, photos : documentez tout (véhicules, plaques, environnement, traces de freinage)",

      "## 5. Faire intervenir un dépanneur agréé",
      "Si votre véhicule n'est pas en état de rouler, appelez un dépanneur agréé. ZDEPANNAGE intervient en 30 minutes en Île-de-France et peut prendre en charge directement votre assureur — vous n'avez rien à avancer. Numéro : **07 56 97 36 86**.",

      "## 6. Déclarer le sinistre à votre assurance",
      "Vous disposez de **5 jours ouvrés** pour transmettre le constat à votre assureur (2 jours en cas de vol). Conservez une copie. Joignez photos, factures éventuelles et coordonnées des témoins.",

      "## Ce qu'il ne faut JAMAIS faire",
      "- Quitter les lieux sans constat (délit de fuite — jusqu'à 75 000 € d'amende)\n- Reconnaître par écrit votre responsabilité (laissez les assureurs trancher)\n- Accepter de l'argent en espèces pour ne pas faire le constat\n- Faire appel à un dépanneur non agréé ou \"qui passait par là\" sur autoroute",

      "## En résumé",
      "Restez calme, documentez tout, appelez les bons numéros, et confiez votre véhicule à un professionnel agréé. ZDEPANNAGE vous accompagne 24h/24 dans toute l'Île-de-France.",
    ],
  },
  {
    slug: 'voiture-electrique-panne-remorquage',
    title: 'Voiture électrique en panne : remorquage et précautions spécifiques',
    excerpt: "Tesla, Renault Zoé, Peugeot e-208... le remorquage d'un véhicule électrique obéit à des règles strictes. Voici tout ce qu'il faut savoir.",
    category: 'Conseils',
    date: '2026-04-04',
    readTime: 5,
    image: '/blog/voiture-electrique.webp',
    content: [
      "Avec plus de 1,3 million de véhicules électriques en circulation en France en 2026, le dépannage de ces voitures représente un enjeu croissant. Mais remorquer une voiture électrique n'est PAS la même chose qu'une thermique — et les erreurs peuvent coûter cher.",

      "## Pourquoi un remorquage électrique est différent",
      "Les voitures électriques ont des particularités techniques qui imposent des précautions spécifiques :\n\n- **Pas de point mort traditionnel** sur la plupart des modèles\n- **Récupération d'énergie au freinage** : tracter sur les roues motrices peut endommager le moteur électrique\n- **Batterie haute tension** : risque électrique en cas de choc ou d'incendie\n- **Poids élevé** : les VE sont 20 à 30% plus lourds qu'une thermique équivalente",

      "## La règle d'or : remorquage sur plateau uniquement",
      "Les constructeurs (Tesla, Renault, Peugeot, Volkswagen, Hyundai…) recommandent **TOUS** le remorquage sur plateau (toutes roues levées). Tracter une voiture électrique avec les roues au sol peut :\n\n- Endommager irréversiblement le moteur électrique\n- Provoquer une surchauffe de la batterie\n- Annuler la garantie constructeur",

      "## Cas particulier : Tesla",
      "Les Tesla Model S, 3, X et Y nécessitent un mode \"Transport\" à activer via l'écran central avant tout déplacement. Sans ce mode, le frein de parking reste actif et les roues peuvent être détruites lors du remorquage. ZDEPANNAGE est formé à ces procédures spécifiques.",

      "## En cas d'incendie ou de choc violent",
      "Les batteries lithium-ion peuvent s'enflammer plusieurs heures après un choc. Si vous suspectez un endommagement de la batterie :\n\n- **Évacuez** immédiatement le véhicule et les alentours (15 mètres minimum)\n- **Appelez les pompiers (18)** — pas un dépanneur classique\n- **Ne touchez à aucun câble** orange (haute tension)",

      "## Combien ça coûte ?",
      "Le tarif d'un remorquage VE est identique à un véhicule thermique de même PTAC, **sauf** si une procédure spéciale est nécessaire (Tesla mode transport, levage spécial). Sur autoroute, le tarif réglementé reste **151 € TTC** en heure normale.",

      "## ZDEPANNAGE est équipé pour les VE",
      "Notre flotte dispose de plateaux adaptés et nos chauffeurs sont formés aux procédures spécifiques aux véhicules électriques (Tesla, Renault Zoé/Mégane E-Tech, Peugeot e-208, Volkswagen ID.3/4, etc.). Appelez le **07 56 97 36 86** — intervention en 30 minutes en Île-de-France.",
    ],
  },
  {
    slug: 'panne-peripherique-paris-guide',
    title: 'Panne sur le périphérique parisien : le guide complet',
    excerpt: "Le périph est l'un des axes les plus dangereux de France. Que faire en cas de panne, qui appeler, combien ça coûte : on vous dit tout.",
    category: 'Conseils',
    date: '2026-04-03',
    readTime: 6,
    image: '/blog/peripherique-paris.webp',
    content: [
      "Avec 1,1 million de véhicules par jour, le boulevard périphérique parisien est l'autoroute urbaine la plus fréquentée d'Europe. Tomber en panne ici n'est pas une expérience anodine : pas de bande d'arrêt d'urgence sur de nombreux tronçons, vitesse élevée, circulation dense. Voici comment réagir intelligemment.",

      "## Le périphérique : un cas à part",
      "Contrairement aux autoroutes classiques, le périphérique parisien :\n\n- **N'a pas de bande d'arrêt d'urgence** sur la majorité de son tracé (35 km au total)\n- **Est limité à 50 km/h** depuis le 1er octobre 2024\n- **Est géré par la Ville de Paris** (et non par une concession autoroutière)\n- **Est surveillé par la Préfecture de Police** — appel possible au 17",

      "## Étape 1 — Tenter de rejoindre une sortie",
      "Si vous sentez votre véhicule défaillir mais qu'il roule encore, **dirigez-vous vers la prochaine sortie**. Le périph en compte une tous les 1,5 km en moyenne. Activez vos warnings dès que vous ralentissez.",

      "## Étape 2 — Si vous êtes contraint de vous arrêter",
      "Sans BAU disponible :\n\n- Serrez le plus à droite possible\n- Allumez vos feux de détresse\n- Sortez par le côté droit (jamais côté circulation)\n- Mettez votre gilet jaune AVANT de sortir\n- Éloignez-vous derrière la glissière s'il y en a une, sinon mettez-vous debout sur le trottoir surélevé",

      "## Étape 3 — Appeler les secours",
      "Sur le périph, deux numéros :\n\n- **17 (Police-secours)** : pour une intervention rapide, sécurisation, signalisation\n- **07 56 97 36 86 (ZDEPANNAGE)** : pour l'enlèvement et le remorquage\n\nLes bornes d'appel orange n'existent pas sur le périph. Utilisez votre téléphone.",

      "## Combien coûte un dépannage sur le périph ?",
      "Le périphérique parisien n'est PAS une autoroute au sens juridique — les tarifs réglementés \"autoroute\" ne s'appliquent pas. C'est un dépannage urbain classique :\n\n- **Forfait minimum** : à partir de 144 € TTC en journée\n- **Tarif majoré** : nuits, week-ends et jours fériés (+50%)\n- **Kilomètres supplémentaires** : facturés au-delà de la zone d'enlèvement\n\nDemandez toujours le tarif AVANT l'intervention.",

      "## Qui peut intervenir sur le périph ?",
      "Contrairement aux autoroutes (où seuls les dépanneurs agréés peuvent intervenir), sur le périph **tout dépanneur agréé Police peut intervenir**. ZDEPANNAGE est référencé par la Préfecture de Police de Paris et intervient en moins de 25 minutes sur l'ensemble du périph et des boulevards des Maréchaux.",

      "## Conseil final",
      "Le périphérique pardonne peu les pannes. Faites vérifier régulièrement votre niveau de carburant, vos pneus et votre batterie — surtout avant les départs. Et gardez le numéro de ZDEPANNAGE dans vos contacts : **07 56 97 36 86**.",
    ],
  },
  {
    slug: 'arnaques-depannage-comment-eviter',
    title: 'Comment éviter les arnaques au dépannage automobile',
    excerpt: "Faux dépanneurs, surfacturation, devis abusifs : en cas de panne, vous êtes vulnérable. Voici comment reconnaître les pièges et vous protéger.",
    category: 'Sécurité',
    date: '2026-04-02',
    readTime: 6,
    image: '/blog/arnaque-depannage.webp',
    content: [
      "Chaque année, des milliers d'automobilistes en panne sont victimes d'arnaques au dépannage. Profitant du stress et de l'ignorance, certains opérateurs facturent des sommes délirantes pour des prestations basiques. Voici les pièges classiques et comment les éviter.",

      "## Les arnaques les plus fréquentes",
      "**1. Le faux dépanneur \"qui passait par là\"** — Sur autoroute notamment, des individus s'arrêtent et proposent leur aide. Ils ne sont pas agréés, surfacturent et disparaissent ensuite.\n\n**2. Le tarif \"oral\" non confirmé** — Le dépanneur annonce un prix au téléphone, puis facture le double sur place en invoquant des frais cachés.\n\n**3. La fausse pièce détachée** — Le dépanneur prétend qu'une pièce coûteuse doit être changée immédiatement, alors que la panne est mineure.\n\n**4. Le remorquage \"obligatoire\" abusif** — Pour une panne réparable sur place, le dépanneur insiste pour vous remorquer vers son propre garage (où il facturera la réparation au prix fort).\n\n**5. Le moyen de paiement imposé** — Refus du chèque ou de la carte, exigence d'espèces uniquement (souvent associé à du travail dissimulé).",

      "## Comment reconnaître un dépanneur sérieux",
      "Un dépanneur professionnel se reconnaît à :\n\n- **Un véhicule clairement identifié** (logo, nom de société, numéro SIRET visible)\n- **Une carte professionnelle** délivrée par la préfecture\n- **Un agrément** (police, gendarmerie, autoroutes selon la zone)\n- **Une assurance RC pro** affichée ou disponible sur demande\n- **Un devis écrit AVANT intervention** (obligatoire au-delà de 150 €)\n- **Des avis Google vérifiables** (méfiez-vous des entreprises sans présence en ligne)",

      "## Sur autoroute : règle d'or",
      "**Sur autoroute, n'acceptez JAMAIS un dépanneur qui n'a pas été envoyé par la borne d'appel orange.** Les sociétés de dépannage agréées sont les seules autorisées à intervenir, et leurs tarifs sont **fixés par arrêté ministériel** :\n\n- Forfait dépannage sur place : **151 € TTC**\n- Forfait remorquage : **151 € TTC** (jusqu'à l'atelier ou un lieu choisi)\n- Tarif majoré la nuit/week-end : **226,50 € TTC**\n\nSi quelqu'un vous demande plus, c'est une arnaque.",

      "## Vos droits en tant que client",
      "Selon la loi française, vous avez **toujours droit** à :\n\n- Un **devis écrit gratuit** avant toute intervention de plus de 150 €\n- Une **facture détaillée** mentionnant SIRET, TVA, prestations et tarifs\n- Le **droit de refuser** une intervention dont vous n'êtes pas convaincu\n- Le **délai de rétractation** de 14 jours pour un contrat à distance (sauf urgence avérée)",

      "## En cas de litige",
      "Si vous pensez avoir été victime d'une arnaque :\n\n1. **Conservez tous les documents** (devis, facture, échanges)\n2. **Contactez la DGCCRF** via signal.conso.gouv.fr\n3. **Saisissez votre assureur** s'il a payé la facture\n4. **Déposez plainte** auprès de la police pour escroquerie",

      "## ZDEPANNAGE : la transparence avant tout",
      "Chez ZDEPANNAGE, nous appliquons les tarifs réglementés, fournissons systématiquement un devis écrit et acceptons tous les moyens de paiement. Notre numéro SIRET et notre agrément Police sont affichés sur tous nos véhicules. Plus de 22 avis Google 5 étoiles attestent de notre sérieux. Appelez le **07 56 97 36 86** en toute confiance.",
    ],
  },
  {
    slug: 'depannage-utilitaire-poids-lourd',
    title: 'Dépannage utilitaire et poids lourd : tarifs et procédure',
    excerpt: "Camion, fourgon, utilitaire, poids lourd jusqu'à 3,5 tonnes : ce que vous devez savoir avant d'appeler un dépanneur.",
    category: 'Services',
    date: '2026-04-01',
    readTime: 5,
    image: '/blog/utilitaire.webp',
    content: [
      "Quand un utilitaire ou un poids lourd tombe en panne, l'enjeu n'est pas seulement le véhicule — c'est aussi l'activité professionnelle qui s'arrête. Voici tout ce qu'il faut savoir sur le dépannage des véhicules lourds en Île-de-France.",

      "## Quels véhicules sont concernés ?",
      "Le \"dépannage utilitaire\" couvre une large gamme :\n\n- **Camionnettes / fourgons** : Renault Master, Mercedes Sprinter, Iveco Daily, Peugeot Boxer\n- **Pick-ups** : Ford Ranger, Volkswagen Amarok\n- **Camping-cars et fourgons aménagés**\n- **Petits poids lourds** jusqu'à 3,5 tonnes de PTAC (Poids Total Autorisé en Charge)\n\nAu-delà de 3,5 tonnes, on parle de **dépannage poids lourd** qui nécessite une dépanneuse beaucoup plus puissante (8 à 30 tonnes) — ZDEPANNAGE peut vous orienter vers un partenaire spécialisé si nécessaire.",

      "## Pourquoi c'est plus cher",
      "Le dépannage d'un véhicule lourd coûte plus cher qu'une voiture pour plusieurs raisons :\n\n- **Matériel spécifique** : dépanneuse plus puissante, rampes renforcées\n- **Temps d'intervention** plus long (chargement, sécurisation)\n- **Risque accru** : un utilitaire en charge (livraison, déménagement) demande plus de précautions\n- **Réglementation** : tarifs réglementés différents sur autoroute selon le PTAC",

      "## Tarifs réglementés sur autoroute",
      "Pour les véhicules entre **1,8 tonne et 3,5 tonnes** sur autoroute :\n\n- **Dépannage sur place** : 151 € TTC (heure normale)\n- **Remorquage jusqu'à l'atelier** : 186,72 € TTC\n- **Tarif majoré nuit/week-end** : 226,50 à 280,08 € TTC\n- **Kilomètre supplémentaire** : 4,80 € TTC par km\n\nCes tarifs sont fixés par l'arrêté ministériel du 1er janvier 2026.",

      "## Spécificités utilitaire pro",
      "Les utilitaires professionnels (artisans, livreurs, déménageurs) ont quelques particularités :\n\n- **Marchandises à bord** : il faut décharger ou sécuriser avant de remorquer\n- **Outillage de valeur** : prévoir un convoyage sécurisé\n- **Cartes carburant et badges télépéage** : ne pas oublier de les récupérer\n- **Certificat d'immatriculation pro** : à présenter pour la prise en charge assurance",

      "## Prise en charge assurance pro",
      "Les contrats d'assurance professionnelle incluent généralement une **assistance dépannage 0 km** — c'est-à-dire dès le départ du chantier ou du domicile. Vérifiez votre contrat et notez le numéro d'assistance. ZDEPANNAGE peut faire une prise en charge directe avec la plupart des assureurs pros (AXA Pro, Generali, MMA Entreprises…).",

      "## Délais et zones d'intervention",
      "ZDEPANNAGE intervient sur les utilitaires et véhicules jusqu'à 3,5 tonnes dans toute l'**Île-de-France**, en moins de 30 minutes en moyenne. Notre flotte de 3 dépanneuses couvre les 8 départements. Pour les poids lourds au-delà de 3,5 tonnes, contactez-nous : nous vous orientons vers un partenaire spécialisé.",

      "## En urgence, appelez-nous",
      "Pour un dépannage utilitaire ou poids lourd jusqu'à 3,5 tonnes : **07 56 97 36 86**, 24h/24, 7j/7. Devis transparent, prise en charge assurance, intervention rapide.",
    ],
  },
  {
    slug: 'depannage-grigny-91350',
    title: 'Dépannage auto Grigny 91350 — Votre dépanneur local',
    excerpt: "Basés à Grigny dans l'Essonne, nous intervenons en 30 minutes maximum sur toute la commune et les villes voisines (Viry-Châtillon, Ris-Orangis, Évry, Corbeil-Essonnes).",
    category: 'Services',
    date: '2026-04-15',
    readTime: 4,
    image: '/blog/depannage-grigny-91350.webp',
    content: [
      "Vous êtes en panne à Grigny (91350) ou dans les communes voisines de l'Essonne ? ZDEPANNAGE est votre dépanneur de proximité, basé directement à Grigny depuis 2023. Voici ce que vous devez savoir si vous avez besoin d'une intervention rapide.",

      "## Pourquoi un dépanneur local change tout",
      "Quand votre voiture tombe en panne, chaque minute compte. Un dépanneur basé à Paris ou en banlieue lointaine peut mettre 1h à 1h30 pour vous atteindre, surtout aux heures de pointe. À l'inverse, **ZDEPANNAGE étant basé à Grigny même**, nous intervenons généralement en moins de 30 minutes sur l'ensemble de la commune et les villes limitrophes. Notre dépôt est situé à proximité directe de la N7, ce qui nous permet de rejoindre rapidement n'importe quel point de l'agglomération.",

      "## Notre zone d'intervention autour de Grigny",
      "Notre flotte de 6 véhicules dépanneurs (2 Mercedes Sprinter, 2 Toyota Hilux, 2 Mercedes Atego) intervient en priorité sur :\n\n- **Grigny** (91350) — temps moyen : 15 minutes\n- **Viry-Châtillon** (91170) — 15 minutes\n- **Ris-Orangis** (91130) — 20 minutes\n- **Évry-Courcouronnes** (91000) — 20 minutes\n- **Corbeil-Essonnes** (91100) — 25 minutes\n- **Juvisy-sur-Orge** (91260) — 20 minutes\n- **Athis-Mons** (91200) — 20 minutes\n- **Savigny-sur-Orge** (91600) — 20 minutes\n\nNous couvrons aussi tout le sud de l'Île-de-France au-delà, avec des délais légèrement plus longs.",

      "## Les pannes les plus fréquentes à Grigny",
      "Notre expérience locale nous permet d'identifier les pannes récurrentes dans le secteur :\n\n- **Batterie déchargée** — particulièrement en hiver, sur les parkings résidentiels\n- **Crevaisons** sur la N7 et la D448 (chaussée parfois dégradée)\n- **Démarrage difficile** matinal après chute des températures\n- **Pannes de carburant** sur l'A6 entre Grigny et la sortie 7\n- **Accidents légers** au rond-point de la mairie et carrefour des Bordes\n\nNous arrivons toujours équipés du matériel adapté pour ces situations courantes : booster batterie, kit anti-crevaison, plateau pour remorquage.",

      "## Tarifs réglementés et transparents",
      "Nos prix sont les **tarifs réglementés par arrêté ministériel**. Pas de mauvaise surprise :\n\n- **Dépannage simple** (batterie, démarrage) : à partir de 70 € TTC\n- **Remorquage VL en ville** (jusqu'à 5 km) : à partir de 110 € TTC\n- **Remorquage en heures non ouvrables** : majoration nuit/dimanche/férié\n- **Tarif sur autoroute** (différent, fixé par arrêté) : à partir de 151 € TTC\n\nLe **prix exact** vous est communiqué au téléphone avant notre départ. **Si nous ne pouvons pas dépanner sur place, le déplacement reste facturé** (norme du secteur).",

      "## Prise en charge assurance",
      "Si votre assurance auto inclut une **assistance dépannage** (la plupart des contrats l'incluent), nous pouvons gérer la prise en charge directement avec votre compagnie. Vous n'avancez rien. Préparez :\n\n- Votre numéro de contrat assurance\n- Votre permis de conduire\n- Votre carte grise\n\nNous travaillons avec **toutes les compagnies françaises** (AXA, MAIF, MACIF, Groupama, Allianz, Matmut, GMF, MMA, etc.) et nous nous occupons de la facturation à votre assureur.",

      "## Comment nous joindre depuis Grigny ?",
      "Un seul numéro à enregistrer dans votre téléphone : **07 56 97 36 86**. Disponible **24h/24, 7j/7** — y compris la nuit, le dimanche et les jours fériés. Nous répondons en moins de 30 secondes.\n\nVous pouvez aussi nous joindre par **WhatsApp** au même numéro (pratique pour envoyer une photo de la panne et votre localisation GPS), ou via le formulaire de notre site.",

      "## Pourquoi nous choisir à Grigny",
      "- **Entreprise locale**, basée à Grigny depuis 2023\n- **Agréés** par les forces de l'ordre pour l'Île-de-France\n- **Équipe de 6 professionnels** disponibles 24/7\n- **Flotte récente de 6 véhicules** entretenus régulièrement\n- **Note Google ⭐⭐⭐⭐⭐** (avis vérifiés)\n- **Sans sous-traitance** : c'est nous qui répondons et c'est nous qui arrivons\n\nEnregistrez notre numéro maintenant — vous nous remercierez la prochaine fois que votre voiture vous lâchera.",
    ],
  },
  {
    slug: 'panne-batterie-autoroute-a6',
    title: 'Panne de batterie sur l\'A6, A10 ou A86 : que faire ?',
    excerpt: "Voiture en panne de batterie sur autoroute en Île-de-France ? Procédure à suivre, qui appeler, tarifs réglementés et délais d'intervention.",
    category: 'Conseils',
    date: '2026-04-15',
    readTime: 5,
    image: '/blog/panne-batterie-autoroute-a6.webp',
    content: [
      "Une panne de batterie au péage de Saint-Arnoult sur l'A10, dans un bouchon de l'A6 vers Paris ou en pleine voie sur l'A86 — la situation est plus stressante qu'en ville. Voici la procédure exacte à suivre, qui appeler, et combien ça coûte.",

      "## Reconnaître une panne de batterie au volant",
      "Plusieurs symptômes peuvent indiquer une batterie défaillante :\n\n- **Voyant batterie rouge** allumé au tableau de bord\n- **Phares qui faiblissent** progressivement\n- **Démarreur qui peine** au redémarrage après un arrêt\n- **Vitres électriques lentes**, autoradio qui se coupe\n- **Pertes de puissance** soudaines\n\nSur autoroute, ces signes peuvent évoluer vite : ne tentez pas de continuer en espérant atteindre la sortie. **Mieux vaut s'arrêter en sécurité immédiatement.**",

      "## La procédure obligatoire en 6 étapes",
      "**1. Allumez vos feux de détresse** dès que vous sentez le problème.\n\n**2. Rangez-vous sur la bande d'arrêt d'urgence (BAU)** le plus à droite possible, idéalement dans une zone refuge.\n\n**3. Sortez avec votre gilet jaune** déjà enfilé, du côté droit (côté glissière). Ne descendez JAMAIS côté circulation.\n\n**4. Posez le triangle 30 mètres derrière** le véhicule. Si la circulation est trop dense, **sautez cette étape** : votre vie passe avant.\n\n**5. Mettez-vous derrière la glissière** avec tous les passagers. Ne restez ni dans la voiture ni sur la chaussée.\n\n**6. Appelez les secours** depuis derrière la glissière.",

      "## Qui appeler exactement ?",
      "Sur autoroute, **vous ne pouvez PAS choisir n'importe quel dépanneur**. Seuls les dépanneurs agréés par la concession autoroutière peuvent intervenir.\n\nDeux options :\n\n- **Borne d'appel orange** (tous les 2 km) : appel gratuit qui prévient automatiquement la société autoroutière. Elle envoie le dépanneur agréé du secteur. **C'est la méthode obligatoire en théorie.**\n\n- **Téléphone portable** : appelez le **07 56 97 36 86** (ZDEPANNAGE). Si nous sommes le dépanneur agréé sur votre tronçon, nous intervenons. Sinon, nous vous orientons vers le bon prestataire.\n\n**Notre zone d'intervention autoroutière** :\n- A6 (entre porte d'Italie et sortie 8 Auxerre)\n- A10 (entre Wissous et Étampes)\n- A86 (boucle complète sud + ouest)\n- N7, N20, N104 (Francilienne)",

      "## Tarifs réglementés sur autoroute (2026)",
      "Les tarifs sur autoroute sont **fixés par arrêté ministériel** (décret du 1er janvier 2026) :\n\n- **Dépannage simple sur place** (batterie, crevaison, carburant) : **151,55 € TTC**\n- **Remorquage jusqu'à 5 km** : **151,55 € TTC** (inclus dans le forfait)\n- **Au-delà de 5 km** : **2,29 € TTC / km supplémentaire**\n- **Majoration nuit (18h-8h)** : **+50 %**\n- **Majoration dimanche/jour férié** : **+50 %**\n- **Cumul nuit + dimanche/férié** : **+100 %**\n\nUn dépannage de batterie en pleine nuit un dimanche revient donc à environ **303 € TTC**. C'est le **tarif maximum légal** — aucun dépanneur ne peut facturer plus.",

      "## Prise en charge par votre assurance",
      "La quasi-totalité des contrats d'assurance auto en France incluent une **garantie assistance**. Selon votre formule :\n\n- **Assistance 0 km** (formule tous risques) : prise en charge totale, vous n'avancez rien\n- **Assistance avec franchise kilométrique** (souvent 25 ou 50 km) : si vous êtes au-delà du domicile, c'est pris en charge\n- **Aucune assistance** : vous payez, vous conservez la facture, vous demandez le remboursement à votre mutuelle si elle couvre\n\n**Avant que le dépanneur arrive**, appelez votre assistance (numéro au dos de la carte verte) pour ouvrir un dossier. Communiquez le numéro de dossier au dépanneur à son arrivée.",

      "## Que faire après le dépannage ?",
      "Une fois en sécurité au prochain garage ou à votre domicile, **changez votre batterie au plus vite**. Une batterie qui a lâché ne se \"recharge\" pas durablement — elle peut tenir quelques jours au mieux. Comptez 80 à 200 € pour une batterie neuve selon votre véhicule.\n\nProfitez-en aussi pour faire vérifier :\n- L'**alternateur** (responsable de la recharge en roulant)\n- Les **cosses** (oxydation)\n- Les **fusibles** liés au démarrage",

      "## En cas d'urgence sur l'A6, A10, A86 ou A104",
      "Ayez toujours en tête : **07 56 97 36 86** (ZDEPANNAGE — agréé Île-de-France).\n\nEn pleine panne sur autoroute, la priorité est votre **sécurité**, pas la rapidité. Mettez-vous à l'abri, puis appelez. Nous arrivons en 30 minutes en moyenne sur les autoroutes franciliennes.",
    ],
  },
];
