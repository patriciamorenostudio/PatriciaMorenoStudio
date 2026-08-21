/* ============================================================
   Contenido del sitio, en tres idiomas.
   Para agregar una pieza nueva: cópiala en PIECES siguiendo el
   mismo formato y agrega sus fotos a assets/img/<serie>/.
   ============================================================ */

const I18N = {
  fr: {
    nav_about: "À propos",
    nav_work: "Œuvre",
    nav_commissions: "Commissions",
    nav_cv: "CV",
    nav_contact: "Contact",
    hero_h1_1: "Je fais du tissage un espace de",
    hero_h1_2: "recherche et de sculpture",
    hero_h1_3: ".",
    hero_lede: "Artiste tisserande, formée en Colombie et en France. Je construis des sculptures textiles, des volumes qui prennent forme sur le métier à tisser entre savoirs ancestraux.",
    statement_intro: "Après avoir découvert le tissage à Paris, je suis retournée à Bogotá pour me former aux techniques andines de tissage.",
    eyebrow_statement: "Artist statement",
    statement_h2: "Le tissage comme espace de rencontre",
    statement_p1: "Je développe une pratique du tissage orientée vers la création d'objets volumétriques et tridimensionnels qui s'éloignent de la fonction utilitaire du textile. En déplaçant le tissu hors de ses usages traditionnels, je cherche à en atténuer la dimension fonctionnelle pour en faire des formes autonomes, où se condensent gestes, matériaux et savoirs.",
    statement_p2: "Au cœur de mon travail se trouve l'étude des matériaux organiques et des textures, ainsi qu'une réappropriation du mot « oficio », souvent associé à la domesticité dans le contexte colombien. Je m'intéresse à la manière dont ce terme peut être recontextualisé et activé comme un lieu de connaissance.",
    statement_p3: "À travers des structures, des couches, des tensions et des volumes, j'explore comment savoir technique et savoir culturel coexistent dans le tissage.",
    eyebrow_work: "Œuvre",
    work_h2: "Séries",
    eyebrow_commissions: "Commissions",
    commissions_h2: "Pièces murales et collaborations",
    commissions_p: "Je réalise des pièces murales sur mesure pour des particuliers, hôtels, cabinets d'architecture, designers d'intérieur, curateurs et marques. Chaque commission part d'un dialogue sur le lieu, l'espace et l'intention avant toute proposition technique.",
    process: [
      ["Premier contact", "Vous m'écrivez avec le contexte du projet: lieu, usage, dimensions approximatives, délai souhaité."],
      ["Mood board et références", "Je vous demande des photos du lieu, des références visuelles ou un mood board si vous en avez un. Cela oriente la palette et la technique."],
      ["Proposition et devis", "Je propose une direction technique et un prix, selon la taille et la complexité de la pièce."],
      ["Production", "Le tissage se fait à la main sur métier. Je partage l'avancement en cours de route."],
      ["Livraison", "La pièce est livrée avec ses instructions d'installation."]
    ],
    price_from: "À partir de 500€",
    price_note: "Prix indicatif pour une pièce d'environ 20 × 20cm. Le tarif final dépend de la taille, des matériaux et de la complexité technique de chaque commission.",
    cta_commission: "Discuter d'un projet",
    eyebrow_cv: "CV",
    cv_h2: "Parcours",
    cv_download: "Télécharger le CV (PDF)",
    footer_h2: "Discutons",
    footer_copy: "© Patricia Moreno. Tissage et sculpture textile, Paris.",
    modal_materials: "Matériaux",
    modal_dimensions: "Dimensions",
    photo_soon: "Photo à venir",
    series_names: {
      shibori: "Série Shibori",
      "multiple-nappe": "Série Multiple Nappe",
      "techniques-multiples": "Série Techniques multiples",
      collaboration: "Collaborations"
    },
    series_notes: {
      shibori: "Le shibori est une technique japonaise traditionnelle de teinture. Je génère des structures tridimensionnelles et remplace parfois la teinture par une application manuelle de peinture acrylique.",
      "multiple-nappe": "Exploration du tissage à plans parallèles et à multiples nappes. Entre les couches émerge un volume, un espace où un autre univers semble se déployer.",
      "techniques-multiples": "Techniques traditionnelles (gaufre, métier yoruba, métier à ceinture andin) réinventées comme formes sculpturales et expressives.",
      collaboration: "Projets menés avec d'autres artistes, où ma pratique dialogue avec des matériaux et des contextes qui ne sont pas les miens."
    }
  },

  en: {
    nav_about: "About",
    nav_work: "Work",
    nav_commissions: "Commissions",
    nav_cv: "CV",
    nav_contact: "Contact",
    hero_h1_1: "I turn weaving into a space for",
    hero_h1_2: "research and sculpture",
    hero_h1_3: ".",
    hero_lede: "Textile artist, trained in Colombia and France. I build textile sculptures, volumes that take shape on the loom, between ancestral knowledges.",
    statement_intro: "After discovering weaving in Paris, I went back to Bogotá to train in Andean weaving techniques.",
    eyebrow_statement: "Artist statement",
    statement_h2: "Weaving as a meeting place",
    statement_p1: "I develop a weaving practice oriented toward volumetric and three dimensional objects that move away from the utilitarian function of textile. By displacing fabric from its traditional uses, I try to soften its functional dimension and turn it into autonomous forms, where gestures, materials and knowledge condense.",
    statement_p2: "At the center of my work is the study of organic materials and textures, along with a reclaiming of the word « oficio », often tied to domesticity in the Colombian context. I am interested in how this term can be recontextualized and activated as a site of knowledge.",
    statement_p3: "Through structures, layers, tensions and volumes, I explore how technical knowledge and cultural knowledge coexist in the weave.",
    eyebrow_work: "Work",
    work_h2: "Series",
    eyebrow_commissions: "Commissions",
    commissions_h2: "Wall pieces and collaborations",
    commissions_p: "I create made to measure wall pieces for private clients, hotels, architecture firms, interior designers, curators and brands. Every commission starts with a conversation about the space and the intention behind it, before any technical proposal.",
    process: [
      ["First contact", "Happy to hear from you here: tell me about the space, how you're picturing the piece being used, rough dimensions, and your timeline."],
      ["Mood board and references", "Share a few photos of the space, any references, or a mood board if you already have one. That's what shapes the palette and the technique."],
      ["Proposal and quote", "From there, I put together a technical direction and a price, matched to the size and complexity of the piece."],
      ["Production", "The weaving happens by hand, on the loom. I keep you posted as the piece takes shape."],
      ["Delivery", "Your piece arrives ready to hang, with simple instructions for installation."]
    ],
    price_from: "Starting at €500",
    price_note: "Indicative price for a piece of approximately 20 × 20cm. The final price depends on the size, materials and technical complexity of each commission.",
    cta_commission: "Discuss a project",
    eyebrow_cv: "CV",
    cv_h2: "Background",
    cv_download: "Download CV (PDF)",
    footer_h2: "Let's talk",
    footer_copy: "© Patricia Moreno. Weaving and textile sculpture, Paris.",
    modal_materials: "Materials",
    modal_dimensions: "Dimensions",
    photo_soon: "Photo coming soon",
    series_names: {
      shibori: "Shibori series",
      "multiple-nappe": "Multiple Nappe series",
      "techniques-multiples": "Multiple techniques series",
      collaboration: "Collaborations"
    },
    series_notes: {
      shibori: "Shibori is a traditional Japanese dyeing technique. I generate three dimensional structures and sometimes replace dyeing with a manual application of acrylic paint.",
      "multiple-nappe": "An exploration of weaving with parallel planes and multiple layers. Between the layers, a volume emerges, a space where another world seems to unfold.",
      "techniques-multiples": "Traditional techniques (waffle weave, Yoruba loom, Andean backstrap loom) reinvented as sculptural, expressive forms.",
      collaboration: "Projects carried out with other artists, where my practice engages with materials and contexts that are not my own."
    }
  },

  es: {
    nav_about: "Sobre mí",
    nav_work: "Obra",
    nav_commissions: "Comisiones",
    nav_cv: "CV",
    nav_contact: "Contacto",
    hero_h1_1: "Convierto el tejido en un espacio de",
    hero_h1_2: "investigación y escultura",
    hero_h1_3: ".",
    hero_lede: "Artista tejedora, formada en Colombia y en Francia. Construyo esculturas textiles, volúmenes que toman forma en el telar, entre saberes ancestrales.",
    statement_intro: "Después de descubrir el tejido en París, volví a Bogotá a formarme en técnicas andinas de tejido.",
    eyebrow_statement: "Artist statement",
    statement_h2: "El tejido como espacio de encuentro",
    statement_p1: "Desarrollo una práctica del tejido orientada a la creación de objetos volumétricos y tridimensionales que se alejan de la función utilitaria del textil. Al desplazar el tejido de sus usos tradicionales, busco atenuar su dimensión funcional para convertirlo en formas autónomas, donde se condensan gestos, materiales y saberes.",
    statement_p2: "En el centro de mi trabajo está el estudio de materiales orgánicos y texturas, junto con una reapropiación de la palabra «oficio», a menudo asociada a la domesticidad en el contexto colombiano. Me interesa cómo este término puede recontextualizarse y activarse como un lugar de conocimiento.",
    statement_p3: "A través de estructuras, capas, tensiones y volúmenes, exploro cómo el saber técnico y el saber cultural coexisten en el tejido.",
    eyebrow_work: "Obra",
    work_h2: "Series",
    eyebrow_commissions: "Comisiones",
    commissions_h2: "Piezas murales y colaboraciones",
    commissions_p: "Realizo piezas murales a medida para particulares, hoteles, despachos de arquitectura, diseñadores de interiores, curadores y marcas. Cada comisión parte de una conversación sobre el lugar, el espacio y la intención, antes de cualquier propuesta técnica.",
    process: [
      ["Primer contacto", "Me escribes con el contexto del proyecto: lugar, uso, dimensiones aproximadas, plazo deseado."],
      ["Mood board y referencias", "Te pido fotos del lugar, referencias visuales o un mood board si ya tienes uno. Esto orienta la paleta y la técnica."],
      ["Propuesta y presupuesto", "Propongo una dirección técnica y un precio, según el tamaño y la complejidad de la pieza."],
      ["Producción", "El tejido se hace a mano en el telar. Comparto el avance en el camino."],
      ["Entrega", "La pieza se entrega con sus instrucciones de instalación."]
    ],
    price_from: "Desde 500€",
    price_note: "Precio indicativo para una pieza de aproximadamente 20 × 20cm. El precio final depende del tamaño, los materiales y la complejidad técnica de cada comisión.",
    cta_commission: "Hablar de un proyecto",
    eyebrow_cv: "CV",
    cv_h2: "Trayectoria",
    cv_download: "Descargar CV (PDF)",
    footer_h2: "Hablemos",
    footer_copy: "© Patricia Moreno. Tejido y escultura textil, París.",
    modal_materials: "Materiales",
    modal_dimensions: "Dimensiones",
    photo_soon: "Foto próximamente",
    series_names: {
      shibori: "Serie Shibori",
      "multiple-nappe": "Serie Multiple Nappe",
      "techniques-multiples": "Serie Técnicas múltiples",
      collaboration: "Colaboraciones"
    },
    series_notes: {
      shibori: "El shibori es una técnica japonesa tradicional de teñido. Genero estructuras tridimensionales y a veces reemplazo el teñido por una aplicación manual de pintura acrílica.",
      "multiple-nappe": "Una exploración del tejido en planos paralelos y múltiples capas. Entre las capas emerge un volumen, un espacio donde parece desplegarse otro universo.",
      "techniques-multiples": "Técnicas tradicionales (gofrado, telar yoruba, telar de cintura andino) reinventadas como formas sculpturales y expresivas.",
      collaboration: "Proyectos realizados con otras artistas, donde mi práctica dialoga con materiales y contextos que no son los míos."
    }
  }
};

/* Cada pieza: id único, serie (clave que coincide con series_names),
   dimensiones y materiales (iguales en los tres idiomas, son datos),
   y una historia (story) traducida en fr / en / es.
   images: lista de rutas relativas. La primera es la foto principal
   de la tarjeta; si no existe, se muestra el placeholder. */
const PIECES = [
  {
    id: "acrilico-sobre-algodon-tejido",
    series: "shibori",
    title: "Acrilico sobre algodón tejido",
    dimensions: "3m × 50cm",
    materials: "Coton, peinture acrylique",
    images: ["assets/img/shibori/acrilico-sobre-algodon-tejido-01.jpg", "assets/img/shibori/acrilico-sobre-algodon-tejido-02.jpg"],
    story: {
      fr: "L'œuvre existe entre deux mondes: le monde volumétrique, où elle évoque la forme d'un vêtement, et l'univers pictural, où une composition peinte apparaît sur une toile de coton.",
      en: "The piece exists between two worlds: the volumetric world, where it evokes the shape of a garment, and the pictorial world, where a painted composition appears on a cotton canvas.",
      es: "La obra existe entre dos mundos: el mundo volumétrico, donde evoca la forma de una prenda, y el universo pictórico, donde una composición pintada aparece sobre un lienzo de algodón."
    }
  },
  {
    id: "brutalist-shibori",
    series: "shibori",
    title: "Brutalist Shibori",
    dimensions: "1,5m × 50cm",
    materials: "Lin, coton, acrylique et pastels",
    images: ["assets/img/shibori/brutalist-shibori-01.jpg", "assets/img/shibori/brutalist-shibori-02.jpg", "assets/img/shibori/brutalist-shibori-03.jpg"],
    story: {
      fr: "Pièce de la série Shibori, structures tridimensionnelles obtenues par pliage et fils de chaîne supplémentaires.",
      en: "A piece from the Shibori series, three dimensional structures obtained through folding and additional warp threads.",
      es: "Pieza de la serie Shibori, estructuras tridimensionales obtenidas mediante pliegue e hilos de urdimbre adicionales."
    }
  },
  {
    id: "mazorca-shibori",
    series: "shibori",
    title: "Mazorca Shibori",
    dimensions: "1,2m × 50cm",
    materials: "Coton, polyester",
    images: ["assets/img/shibori/mazorca-shibori-01.jpg", "assets/img/shibori/mazorca-shibori-02.jpg", "assets/img/shibori/mazorca-shibori-03.jpg", "assets/img/shibori/mazorca-shibori-04.jpg"],
    story: {
      fr: "Référence à la mazorca, l'épi de maïs. Volume tissé en shibori.",
      en: "A reference to the mazorca, the corn cob. Volume woven in shibori.",
      es: "Referencia a la mazorca. Volumen tejido en shibori."
    }
  },
  {
    id: "paciencia",
    series: "shibori",
    title: "Paciencia",
    dimensions: "1,2m × 50cm",
    materials: "Acrylique, laine, polyester, cuir, fil de métal",
    images: ["assets/img/shibori/paciencia-01.jpg", "assets/img/shibori/paciencia-02.jpg", "assets/img/shibori/paciencia-03.jpg"],
    story: {
      fr: "Pièce de la série Shibori, réalisée avec du fil de métal.",
      en: "A piece from the Shibori series, made with metal wire.",
      es: "Pieza de la serie Shibori, realizada con alambre metálico."
    }
  },
  {
    id: "m-en-p",
    series: "shibori",
    title: "M en P",
    dimensions: "2,7m × 50cm",
    materials: "Coton, lin, laine, cuir",
    images: ["assets/img/shibori/m-en-p-01.jpg", "assets/img/shibori/m-en-p-02.jpg", "assets/img/shibori/m-en-p-03.jpg", "assets/img/shibori/m-en-p-04.jpg"],
    story: {
      fr: "Pièce de la série Shibori, avec du cuir et une structure translucide.",
      en: "A piece from the Shibori series, with leather and a translucent structure.",
      es: "Pieza de la serie Shibori, con cuero y una estructura translúcida."
    }
  },
  {
    id: "entre-planes",
    series: "multiple-nappe",
    title: "Entre planes",
    dimensions: "1m × 50cm",
    materials: "Double nappe, coton et laine",
    images: ["assets/img/multiple-nappe/entre-planes-01.jpg", "assets/img/multiple-nappe/entre-planes-02.jpg", "assets/img/multiple-nappe/entre-planes-03.jpg"],
    story: {
      fr: "Deux structures de tissage distinctes mais parallèles, l'une plus ordonnée, l'autre plus spontanée.",
      en: "Two distinct but parallel weave structures, one more ordered, the other more spontaneous.",
      es: "Dos estructuras de tejido distintas pero paralelas, una más ordenada, la otra más espontánea."
    }
  },
  {
    id: "cadena-montanosa",
    series: "multiple-nappe",
    title: "Cadena montañosa",
    dimensions: "50cm × 1,5m",
    materials: "Tissage multicouche, polyester et fil de cuivre",
    images: ["assets/img/multiple-nappe/cadena-montanosa-05.jpg", "assets/img/multiple-nappe/cadena-montanosa-02.jpg", "assets/img/multiple-nappe/cadena-montanosa-03.jpg", "assets/img/multiple-nappe/cadena-montanosa-04.jpg", "assets/img/multiple-nappe/cadena-montanosa-01.jpg"],
    story: {
      fr: "Quatre nappes qui s'entrelacent selon un mouvement sinusoïdal, évoquant des chaînes montagneuses.",
      en: "Four layers that interlace in a sinusoidal movement, evoking mountain ranges.",
      es: "Cuatro capas que se entrelazan en un movimiento sinusoidal, evocando cadenas montañosas."
    }
  },
  {
    id: "lana-reciclada-con-algodon",
    series: "multiple-nappe",
    title: "Lana reciclada con algodón",
    dimensions: "1m × 40cm",
    materials: "Coton rembourré, laine recyclée",
    images: ["assets/img/multiple-nappe/lana-reciclada-con-algodon-01.jpg", "assets/img/multiple-nappe/lana-reciclada-con-algodon-02.jpg", "assets/img/multiple-nappe/lana-reciclada-con-algodon-03.jpg"],
    story: {
      fr: "Objet volumétrique à double face, laine vierge filée à la main issue d'une couverture démontée.",
      en: "A double sided volumetric object, hand spun virgin wool from a dismantled blanket.",
      es: "Objeto volumétrico de doble cara, lana virgen hilada a mano proveniente de una cobija desarmada."
    }
  },
  {
    id: "figura-flotante-en-lana",
    series: "techniques-multiples",
    title: "Figura flotante en lana",
    dimensions: "1,8m × 45cm",
    materials: "Tissage waffle, laine, acrylique et papier",
    images: ["assets/img/techniques-multiples/figura-flotante-en-lana-01.jpg", "assets/img/techniques-multiples/figura-flotante-en-lana-02.jpg", "assets/img/techniques-multiples/figura-flotante-en-lana-03.jpg"],
    story: {
      fr: "La structure en gaufre, réinventée comme forme sculpturale, loin de sa fonction absorbante d'origine.",
      en: "The waffle structure, reinvented as a sculptural form, far from its original absorbent function.",
      es: "La estructura en gofrado, reinventada como forma escultórica, lejos de su función absorbente original."
    }
  },
  {
    id: "afectaciones-yorubas",
    series: "techniques-multiples",
    title: "Afectaciones Yorubas",
    dimensions: "130cm × 15cm",
    materials: "Coton, métier à tisser yoruba",
    images: ["assets/img/techniques-multiples/afectaciones-yorubas-01.jpg", "assets/img/techniques-multiples/afectaciones-yorubas-02.jpg", "assets/img/techniques-multiples/afectaciones-yorubas-03.jpg"],
    story: {
      fr: "Une toile de base perturbée par des volumes de fils, en dialogue avec l'influence yoruba dans la musique caribéenne.",
      en: "A base cloth disrupted by volumes of thread, in dialogue with Yoruba influence in Caribbean music.",
      es: "Una tela base alterada por volúmenes de hilos, en diálogo con la influencia yoruba en la música caribeña."
    }
  },
  {
    id: "cortina-de-cintura",
    series: "techniques-multiples",
    title: "Cortina de cintura",
    dimensions: "2,80m × 14cm",
    materials: "Métier à ceinture, coton, laine et papier",
    images: ["assets/img/techniques-multiples/cortina-de-cintura-01.jpg", "assets/img/techniques-multiples/cortina-de-cintura-02.jpg", "assets/img/techniques-multiples/cortina-de-cintura-03.jpg"],
    story: {
      fr: "La technique du Chumbe andin, déplacée vers une exploration sculpturale du volume.",
      en: "The technique of the Andean Chumbe, shifted toward a sculptural exploration of volume.",
      es: "La técnica del Chumbe andino, desplazada hacia una exploración escultórica del volumen."
    }
  },
  {
    id: "woven-foam-jacket",
    series: "collaboration",
    title: "Woven Foam Jacket",
    dimensions: "40cm × 100cm",
    materials: "Métier 8 cadres, polyester, mousse et fil de fer",
    images: ["assets/img/collaboration/woven-foam-jacket-01.jpg", "assets/img/collaboration/woven-foam-jacket-02.jpg", "assets/img/collaboration/woven-foam-jacket-03.jpg", "assets/img/collaboration/woven-foam-jacket-04.jpg", "assets/img/collaboration/woven-foam-jacket-05.jpg", "assets/img/collaboration/woven-foam-jacket-06.jpg"],
    story: {
      fr: "Collaboration avec l'artiste R Moreno pour le magazine Répertoire, tissage de matériaux synthétiques et recyclés.",
      en: "A collaboration with artist R Moreno for Répertoire magazine, weaving synthetic and recycled materials.",
      es: "Colaboración con la artista R Moreno para la revista Répertoire, tejido de materiales sintéticos y reciclados."
    }
  }
];

const SERIES_ORDER = ["shibori", "multiple-nappe", "techniques-multiples", "collaboration"];

/* Fotos de comisiones ya realizadas. Para agregar una nueva,
   solo suma una línea aquí con la ruta del archivo, y súbelo
   a assets/img/commissions/ con ese mismo nombre. */
const COMMISSION_PHOTOS = [
  "assets/img/commissions/commission-01.jpg"
];
