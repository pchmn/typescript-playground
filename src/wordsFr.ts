// List of 100 adjectives in French
const adjectives: string[] = [
  'heureux', 'brave', 'joueur', 'doux', 'doux', 'furieux', 'déterminé', 'actif', 'courageux', 'drôle',
  'fidèle', 'généreux', 'honnête', 'calme', 'vif', 'patient', 'gentil', 'poli', 'modeste', 'sérieux',
  'timide', 'intelligent', 'talentueux', 'joyeux', 'rêveur', 'créatif', 'réservé', 'agréable', 'dynamique', 'doux',
  'sympathique', 'aimable', 'énergique', 'sincère', 'loyal', 'chaleureux', 'optimiste', 'sage', 'rassurant', 'gracieux',
  'malicieux', 'charmant', 'respectueux', 'courtois', 'imaginatif', 'pacifique', 'bienveillant', 'passionné', 'confiant', 'sensible',
  'amusant', 'affectueux', 'inventif', 'fiable', 'bon', 'curieux', 'vif', 'équilibré', 'épanoui', 'spirituel',
  'sociable', 'délicat', 'aérien', 'doux', 'authentique', 'brillant', 'compréhensif', 'digne', 'dévoué', 'simple',
  'expressif', 'familier', 'gai', 'gracieux', 'honnête', 'humble', 'inventif', 'lumineux', 'merveilleux', 'patient',
  'positif', 'raisonnable', 'ravissant', 'satisfait', 'sincère', 'solide', 'sûr', 'talentueux', 'tranquille', 'vif',
  'vivace', 'volontaire', 'vrai', 'zen', 'énigmatique', 'fantaisiste', 'doux', 'élégant', 'idéaliste', 'inoubliable',
  'lumineux', 'magnifique', 'pétillant', 'poétique', 'rayonnant', 'romantique', 'serein', 'vibrant', 'vivifiant', 'voluptueux'
];

// List of 100 colors in French
const colors: string[] = [
  'blanc', 'noir', 'gris', 'rouge', 'vert', 'bleu', 'jaune', 'orange', 'rose', 'violet',
  'marron', 'beige', 'marine', 'turquoise', 'cyan', 'magenta', 'turquoise', 'lavande', 'bordeaux', 'olive',
  'or', 'argent', 'indigo', 'corail', 'saumon', 'charbon', 'prune', 'rubis', 'émeraude', 'saphir',
  'ambre', 'ivoire', 'mauve', 'fuchsia', 'lilas', 'corail', 'aqua', 'menthe', 'forêt', 'bleu pervenche',
  'pêche', 'bleu ciel', 'citrouille', 'chocolat', 'kaki', 'bourgogne', 'vert mousse', 'moutarde', 'orchidée', 'bleu acier',
  'citron', 'aubergine', 'curcuma', 'rouge rubis', 'rose poudré', 'mandarine', 'vert olive', 'bleu sarcelle', 'bleu marine', 'jaune tournesol',
  'rose bébé', 'pourpre profond', 'marron foncé', 'vert pastel', 'bleu clair', 'rouge brique', 'rose corail', 'vert menthe', 'gris charbon', 'mauve lavande',
  'bleu poussière', 'rose saumon', 'pourpre lilas', 'caramel', 'abricot', 'vert forêt', 'jaune pâle', 'gris clair', 'or rose', 'bleu aqua',
  'rose mauve', 'rose pêche', 'rouge bourgogne', 'bleu turquoise', 'blanc nacré', 'gris cendré', 'rouge rubis', 'vert émeraude', 'bleu saphir', 'orange corail',
  'bleu océan', 'prune pourpre', 'pourpre améthyste', 'jaune topaze', 'marron olive', 'orange citrouille', 'bleu lavande', 'gris acier', 'rouge grenat', 'bleu indigo'
];

// List of 100 animals in French
const animals: string[] = [
  'lion', 'tigre', 'éléphant', 'girafe', 'singe', 'zèbre', 'crocodile', 'hippopotame', 'léopard', 'panthère',
  'ours', 'koala', 'kangourou', 'toucan', 'panda', 'gorille', 'rhinocéros', 'hippocampe', 'pingouin', 'dauphin',
  'baleine', 'requin', 'chimpanzé', 'serpent', 'écureuil', 'grenouille', 'abeille', 'fourmi', 'papillon', 'coccinelle',
  'escargot', 'tortue', 'poule', 'coq', 'canard', 'oie', 'paon', 'perroquet', 'hibou', 'corbeau',
  'aigle', 'faucon', 'faisan', 'pigeon', 'pie', 'mouette', 'colombe', 'souris', 'rat', 'hérisson',
  'chauve-souris', 'souris', 'lézard', 'iguane', 'salamandre', 'chameau', 'chèvre', 'mouton', 'vache', 'cochon',
  'cheval', 'âne', 'éléphant', 'chien', 'chat', 'lapin', 'hamster', 'furet', 'raton-laveur', 'loup',
  'renard', 'ours polaire', 'pingouin', 'dauphin', 'orque', 'baleine', 'requin', 'tigre blanc', 'gorille', 'chimpanzé',
  'gazelle', 'gazelle', 'crocodile', 'alligator', 'serpent', 'serpent à sonnette', 'écureuil', 'écureuil volant', 'fourmi', 'guêpe',
  'papillon', 'mante religieuse', 'coccinelle', 'escargot', 'tortue', 'tortue marine', 'poule', 'coq', 'canard', 'caneton',
  'oie', 'paon', 'perroquet', 'hibou', 'corbeau', 'aigle', 'faucon', 'vautour', 'faisan', 'pigeon'
];

// List of 100 flowers in French
const flowers: string[] = [
  'rose', 'lys', 'tulipe', 'marguerite', 'tournesol', 'orchidée', 'hortensia', 'iris', 'œillet', 'coquelicot',
  'jonquille', 'chrysanthème', 'pivoine', 'lilas', 'violette', 'œillet d’Inde', 'gerbera', 'gueule de loup', 'zinnia',
  'anémone', 'aster', 'jacinthe', 'crocus', 'delphinium', 'freesia', 'gladiolus', 'hibiscus', 'impatiens', 'jasmin',
  'kalanchoé', 'lavande', 'magnolia', 'narcisse', 'orchidée', 'pensée', 'dentelle de la Reine Anne', 'renoncule', 'étoile de Bethléem', 'tulipe',
  'utriculaire', 'violette', 'flocon de cire', 'xérante', 'yarrow', 'zinnia', 'alstroemère', 'bégonia', 'crocus', 'jonquille',
  'eustoma', 'freesia', 'gladiolus', 'heliconia', 'iris', 'jonquille', 'kalanchoé', 'delphinium', 'freesia', 'gladiolus',
  'heliconia', 'iris', 'pensée', 'renoncule', 'tulipe', 'utriculaire', 'violette', 'myrtille', 'mûre', 'cacao',
  'catalpa', 'cinnamomum', 'clou de girofle', 'palmier cocotier', 'cornouiller', 'cornouiller sanguin', 'cacao', 'catalpa', 'cinnamomum', 'clou de girofle',
  'cocotier', 'cornouiller', 'cornouiller sanguin', 'dracaena', 'eucalyptus', 'figuier', 'ginkgo', 'bouleau jaune', 'fruit du dragon', 'jacaranda',
  'châtaignier', 'noisetier', 'noyer', 'sycamore', 'bois de santal', 'teck', 'ébène', 'bois de rose', 'baobab', 'banian',
  'chêne-liège', 'buckeye', 'callistemon', 'cacaoyer', 'catalpa', 'cèdre du Liban', 'pseudotsuga menziesii', 'chêne anglais', 'hêtre européen', 'abies fraseri',
  'lycium barbarum', 'laburnum', 'magnolia', 'mangifera indica', 'morus', 'morinda', 'carya illinoinensis', 'corylus', 'juglans', 'fagus',
  'quercus', 'sassafras', 'trichilia', 'acer saccharum', 'liquidambar', 'calocedrus', 'taxodium', 'tilia tomentosa'
];

// List of 100 vehicles in French
const vehicles: string[] = [
  'voiture', 'camion', 'moto', 'vélo', 'bus', 'train', 'avion', 'bateau', 'hélicoptère', 'yacht',
  'scooter', 'tramway', 'métro', 'fusée', 'navette spatiale', 'vélo électrique', 'voilier', 'dirigeable', 'voiture de sport', 'sous-marin',
  'fourgonnette', 'trottinette', 'ulm', 'navire de croisière', 'delorean', 'monospace', 'chariot', 'sous-marin nucléaire', 'bateau de plaisance', 'montgolfière',
  'hydroglisseur', 'yacht à moteur', 'limousine', 'moto-neige', 'vélo tout-terrain', 'hélicoptère de sauvetage', 'hydravion', 'montagnarde', 'voiture de course', 'autobus à impériale',
  'vaisseau spatial', 'voiture électrique', 'bateau à voile', 'vaisseau de guerre', 'voiture autonome', 'navire de transport', 'bateau de pêche', 'voiture hybride', 'ferry', 'traîneau',
  'voiture de luxe', 'char de combat', 'fourgon de livraison', 'vélomoteur', 'bateau de patrouille', 'voiture de rallye', 'téléphérique', 'bateau de sauvetage', 'voiture familiale', 'planeur',
  'aéroglisseur', 'chariot élévateur', 'wagon', 'vaisseau spatial habité', 'voiture décapotable', 'yacht de luxe', 'voiture utilitaire', 'montgolfière à air chaud', 'tricycle', 'jet-ski',
  'tracteur', 'vaisseau de transport de passagers', 'bobsleigh', 'voiture d\'occasion', 'navire de charge', 'voiture compacte', 'chariot à traction animale', 'voiture de collection', 'bateau de plaisance à moteur', 'vaisseau spatial cargo',
  'voiture de course électrique', 'bateau à moteur de sport', 'chariot de golf', 'voiture citadine', 'bateau de recherche', 'vaisseau spatial sans pilote', 'véhicule tout-terrain', 'trawler', 'voiture de sport de luxe', 'autobus scolaire'
];

const trees: string[] = [
  'chêne', 'pin', 'érable', 'bouleau', 'saule', 'cyprès', 'épicéa', 'frêne', 'cyprès', 'noyer',
  'acacia', 'merisier', 'mélèze', 'tilleul', 'peuplier', 'orme', 'peuplier', 'aulne', 'hêtre', 'châtaignier',
  'noisetier', 'if', 'sycamore', 'bois de santal', 'teck', 'ébène', 'palissandre', 'baobab', 'banian', 'chêne-liège',
  'paulownia', 'néflier', 'noyer', 'pistachier', 'mûrier', 'dattier', 'carambolier', 'cacoyer', 'cajoutier', 'cacaoyer',
  'dattier du désert', 'davurica', 'pomelo', 'pamplemoussier', 'pharaon', 'milletia', 'phytolacca', 'pigeon blanc', 'lucerne des marais', 'pied de cheval',
  'cornouiller sanguin', 'grain de café', 'poivrier', 'poirier', 'pommier', 'grenadier', 'prunier', 'platane', 'potentille', 'prunier noir',
  'oranger', 'bigaradier', 'cognassier', 'nandou', 'morelle douce-amère', 'cormier', 'tournesol', 'navet', 'souci', 'muguet',
  'lavande', 'valériane', 'saponaire', 'viorne', 'mûre', 'belladone', 'jasmin', 'myrtille', 'belladone', 'peuplier noir',
  'sorbier', 'troène', 'laîche', 'roseau', 'orchidée', 'épiphyte', 'palmier à huile', 'vanillier', 'mandarinier', 'rose trémière',
  'macadamia', 'acérola', 'paquetier', 'safran', 'mûre', 'figuier', 'goji', 'goyavier', 'cognassier du Japon', 'cognassier du Japon',
  'acacia', 'goji', 'mûrier', 'poirier', 'bois de santal', 'carambolier', 'carapa', 'caroubier', 'carapa', 'coco fesse',
  'aiguillat', 'calamar', 'calicot', 'diable de mer', 'hippocampe', 'lote', 'sole', 'tanche', 'cichlidé', 'silure'
];

export { adjectives, animals, colors, flowers, vehicles, trees };
