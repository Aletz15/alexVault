export const games = [

    //OBJECT LITERALS (BACKKROOMS, DBD, HALLOWEEN, PHASMO, RE, SUB2 )
    // ID, TITLE, TAGLINE, DESCRIPTION, RELEASEDATE, DEVELOPER, PUBLISHER, PRICE, SCORE, TAGS, FEATURES, VIDEO, COVER, GALLERY, INFLUENCERS
  {
    id: 'backrooms',
    category: 'terror',
    title: 'Escape the Backrooms',
    tagline: 'No deberías estar aquí.',
    description:
      'Quedaste atrapado entre las paredes de un lugar que no existe. Pasillos amarillentos que se repiten hasta el infinito.',
    releaseDate: '12 de marzo del 2023',
    developer: 'Fancy Games',
    publisher: 'Fancy Games',
    price: 'Mex$ 249.00',
    score: 94,
    tags: ['Terror', 'Supervivencia', 'Exploración', 'Un jugador'],
    features: [
      'Generacion de niveles infinitos y laberinticos',
      'Cooperacion en multijugador para escapar juntos',
      'Ambientacion misteriosa con luz parpadeante',
      'Sistema de sigilo para evitar entidades',
      'Audio 3D que delata la posicion de las criaturas',
    ],
    video: '/games/Backrooms/Backrooms.mp4',
    cover: '/games/Backrooms/backroomsheader.jpg',
    gallery: [
      '/games/Backrooms/backrooms1.jpg',
      '/games/Backrooms/backrooms2.jpg',
      '/games/Backrooms/backrooms3.jpg',
    ],
    influencers: [
      { name: 'VEGETTA777', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=JKOKyhxse7w' },
    ],
  },
  {
    id: 'dbd',
    category: 'terror',
    title: 'Dead by Daylight',
    tagline: 'Cuatro sobrevivientes. Un asesino. Ninguna salida fácil.',
    description:
      'Partidas de 4 contra 1: escapa reparando generadores o caza como uno de los asesinos más icónicos del terror.',
    releaseDate: '14 de junio del 2016',
    developer: 'Behaviour Interactive',
    publisher: 'Behaviour Interactive',
    price: 'Mex$ 399.00',
    score: 98,
    tags: ['Terror asimétrico', 'Multijugador', 'PvP', 'Cooperativo'],
    features: [
      'Modo 4 contra 1: sobrevivientes contra un asesino',
      'Mas de 30 asesinos con habilidades unicas',
      'Figuras de terror icononicas de peliculas y videojuegos',
      'Sistema de generadores y reparacion bajo presion',
      'Perks personalizables para armar tu propia build',
      'Mapas dinamicos inspirados en franquicias de terror',
    ],
    video: '/games/DBD/Dbd.mp4',
    cover: '/games/DBD/dbdheader.jpg',
    gallery: [
        '/games/DBD/dbd1.jpg', 
        '/games/DBD/dbd2.jpg', 
        '/games/DBD/dbd3.jpg'
    ],
    influencers: [
      { name: 'GENuINE993', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=x4jgZk4ltug' },
    ],
  },
  {
    id: 'halloween',
    category: 'terror',
    title: 'Halloween: The Game',
    tagline: 'Él siempre vuelve a casa.',
    description:
      'Sobrevive a una noche de persecución en un pueblo tomado por el pánico, mientras un asesino silencioso te sigue el rastro.',
    releaseDate: '31 de octubre del 2021',
    developer: 'NightHouse Studio',
    publisher: 'NightHouse Studio',
    price: 'Mex$ 349.00',
    score: 80,
    tags: ['Slasher', 'Terror', 'Un jugador', 'Historia'],
    features: [
      'Persecuciones tensas con el asesino más icónico del cine de terror',
      'Ambientacion de pueblo en noche de Halloween',
      'Objetos del entorno usables como armas o escondites',
      'Banda sonora orquestal que incrementa la tension',
      'Multiples finales segun las decisiones tomadas durante la noche',
    ],
    video: '/games/Halloween/Halloween.mp4',
    cover: '/games/Halloween/halloweenheader.jpg',
    gallery: [
      '/games/Halloween/halloween1.jpg',
      '/games/Halloween/halloween2.jpg',
      '/games/Halloween/halloween3.jpg',
    ],
    influencers: [
      { name: 'GENuINE993', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=Jtq7zhcEdl4' },
    ],
  },
  {
    id: 'phasmo',
    category: 'terror',
    title: 'Phasmophobia',
    tagline: 'La evidencia está ahí. La pregunta es si vas a sobrevivir a ella.',
    description:
      'Investiga casas embrujadas junto a tu equipo usando herramientas paranormales: cámara térmica, spirit box y detector EMF.',
    releaseDate: '18 de septiembre del 2020',
    developer: 'Kinetic Games',
    publisher: 'Kinetic Games',
    price: 'Mex$ 179.00',
    score: 95,
    tags: ['Terror paranormal', 'Cooperativo', 'Investigación', 'Multijugador'],
    features: [
      'Investigacion paranormal con equipo real (EMF, camara termica, spirit box)',
      'Chat por voz de proximidad que los fantasmas pueden usar para detectarte',
      'Mas de 20 tipos de fantasmas con comportamientos distintos',
      'Cordura del personaje que afecta la dificultad',
      'Cooperativo en linea de hasta 4 jugadores',
    ],
    video: '/games/Phasmo/Phasmo.mp4',
    cover: '/games/Phasmo/phasmoheader.jpg',
    gallery: ['/games/Phasmo/phasmo1.jpg', '/games/Phasmo/phasmo2.jpg', '/games/Phasmo/phasmo3.jpg'],
    influencers: [
      { name: 'GENuINE993', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=HH3Epy9gLy4' },
    ],
  },
  {
    id: 're',
    category: 'terror',
    title: 'Resident Evil Requiem',
    tagline: 'Bienvenido de nuevo al horror.',
    description:
      'Explora mansiones y laboratorios infestados, administra recursos escasos y enfréntate a criaturas icónicas de la saga.',
    releaseDate: '24 de marzo del 2023',
    developer: 'Capcom',
    publisher: 'Capcom',
    price: 'Mex$ 899.00',
    score: 98,
    tags: ['Survival horror', 'Acción', 'Un jugador', 'Historia'],
    features: [
      'Gestion de inventario y recursos limitados',
      'Puzzles ambientales clásicos de la saga',
      'Enemigos iconicos con persecucion',
      'Multiples rutas y desenlaces narrativos',
      'Graficos fotorrealistas con el motor RE Engine',
    ],
    video: '/games/RE/Re.mp4',
    cover: '/games/RE/reheader.jpg',
    gallery: ['/games/RE/re1.jpg', '/games/RE/re2.jpg', '/games/RE/re3.jpg'],
    influencers: [
      { name: 'GENuINE993', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=KMLBZ16xHmA' },
    ],
  },
  {
    id: 'sub2',
    category: 'terror',
    title: 'Subnautica 2',
    tagline: 'El silencio del océano esconde algo enorme.',
    description:
      'Naufragaste en un planeta oceánico desconocido. Bucea, construye una base y sobrevive a criaturas gigantes en las profundidades.',
    releaseDate: '23 de enero del 2018',
    developer: 'Unknown Worlds Entertainment',
    publisher: 'Unknown Worlds Entertainment',
    price: 'Mex$ 299.00',
    score: 90,
    tags: ['Exploración', 'Supervivencia', 'Mundo abierto', 'Un jugador'],
    features: [
      'Exploracion submarina en un planeta oceanico alienigena',
      'Construccion de bases y vehiculos submarinos',
      'Criaturas gigantes que generan tension en aguas profundas',
      'Crafteo de herramientas y equipo de buceo',
      'Biomas marinos unicos, cada uno con su propio ecosistema',
    ],
    video: '/games/Sub2/Sub2.mp4',
    cover: '/games/Sub2/sub2header.jpg',
    gallery: [
      '/games/Sub2/subnautica1.jpg',
      '/games/Sub2/subnautica2.jpg',
      '/games/Sub2/subnautica3.jpg',
    ],
    influencers: [
      { name: 'GENuINE993', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=LpMo-2xFSPc' },
    ],
  },

  //OBJECT LITERALS DE AVENTURA (ZELDA WIND WAKER, ZELDA BOTW, ZELDA OCARINA OF TIME)
 {
    id: 'wind-waker',
    category: 'aventura',
    title: 'The Legend of Zelda: The Wind Waker',
    tagline: 'Un mar entero espera ser descubierto.',
    description:
      'Zarpa por el Gran Mar junto a Link en una epopeya marítima para rescatar a su hermana Aryll y liberar a Hyrule de las sombras de Ganondorf.',
    releaseDate: '13 de diciembre de 2002',
    developer: 'Nintendo EAD',
    publisher: 'Nintendo',
    price: 'Mex$ 999.00',
    score: 92,
    tags: ['Aventura', 'Exploración', 'Un jugador', 'Zarpado marítimo', 'Puzzles'],
    features: [
      'Navegación libre por el vasto Gran Mar a bordo del Mascaballos (King of Red Lions)',
      'Uso de la Batuta del Viento para controlar la dirección de los vientos y resolver acertijos',
      'Estilo visual Cel-Shading atemporal con animaciones expresivas y detalladas',
      'Exploración de mazmorras y templos con jefe finales memorables',
      'Búsqueda de tesoros marinos, mapas náuticos e islas secretas',
    ],
    video: '/games/aventura/windwaker/windwaker.mp4',
    cover: '/games/aventura/windwaker/windwakerheader.png',
    gallery: [
      '/games/aventura/windwaker/windwaker1.png',
      '/games/aventura/windwaker/windwaker2.png',
      '/games/aventura/windwaker/windwaker3.png',
    ],
    influencers: [
      { name: 'Juja', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=PIXL4-jPbIs' },
    ],
  },
  {
    id: 'zelda-botw',
    category: 'aventura',
    title: 'The Legend of Zelda: Breath of the Wild',
    tagline: 'Un mundo entero espera ser descubierto.',
    description:
      'Explora un vasto reino de Hyrule en ruinas, resuelve santuarios, escala montañas y enfréntate a Ganon a tu propio ritmo.',
    releaseDate: '3 de marzo del 2017',
    developer: 'Nintendo EPD',
    publisher: 'Nintendo',
    price: 'Mex$ 999.00',
    score: 97,
    tags: ['Aventura', 'Mundo abierto', 'Un jugador', 'Exploración'],
    features: [
      'Mundo abierto sin rutas fijas ni orden obligatorio',
      'Fisica y quimica ambiental para resolver puzzles de forma libre',
      'Mas de 100 santuarios con retos unicos',
      'Sistema de clima y temperatura que afecta la supervivencia',
      'Cocina y crafteo de pociones con ingredientes recolectados',
    ],
    video: '/games/aventura/botw/botw.mp4',
    cover: '/games/aventura/botw/botwheader.png',
    gallery: [
      '/games/aventura/botw/botw1.png',
      '/games/aventura/botw/botw2.png',
      '/games/aventura/botw/botw3.png',
    ],
    influencers: [
      { name: 'IlloJuan', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=3jHK-t9WS_Y' },
    ],
  },
  {
    id: 'ocarina-of-time',
    category: 'aventura',
    title: 'The Legend of Zelda: Ocarina of Time',
    tagline: 'El clásico atemporal que revolucionó los videojuegos.',
    description:
      'Acompaña a Link en un viaje a través del tiempo para evitar que Ganondorf se apodere de la Trifuerza. Explora el reino de Hyrule en dos épocas distintas y viaja entre el pasado y el futuro para salvar el mundo.',
    releaseDate: '21 de noviembre de 1998',
    developer: 'Nintendo EAD',
    publisher: 'Nintendo',
    price: 'Mex$ 999.00',
    score: 99,
    tags: ['Aventura', 'Viajes en el tiempo', 'Un jugador', 'Puzzles', 'Clásico'],
    features: [
      'Mecanica de viajes en el tiempo entre la niñez y la adultez de Link',
      'Uso de la Ocarina del Tiempo para tocar melodias mágicas con diversos efectos',
      'Innovador sistema de fijación de objetivo Z-Targeting para el combate en 3D',
      'Exploración de icónicas mazmorras y templos elementales repletos de acertijos',
      'Viaja a lomos de la yegua Epona por la vasta Pradera de Hyrule',
    ],
    video: '/games/aventura/oot/oot.mp4',
    cover: '/games/aventura/oot/ootheader.png',
    gallery: [
      '/games/aventura/oot/oot1.png',
      '/games/aventura/oot/oot2.png',
      '/games/aventura/oot/oot3.png',
    ],
    influencers: [
      { name: 'Nombre del creador', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=6xh8fw_XUuE' },
    ],
  },

  //OBJECT LITERALS DE JRPG (PERSONA 3 RELOAD, PERSONA 4 GOLDEN, PERSONA 5 ROYAL)
  {
    id: 'persona-3-reload',
    category: 'jrpg',
    title: 'Persona 3 Reload',
    tagline: 'Vive cada día como si fuera el último.',
    description:
      'De día, ve a la escuela y forja lazos con tus compañeros. De noche, explora la Torre de Tartarus y enfréntate a las Sombras junto al SEES.',
    releaseDate: '2 de febrero del 2024',
    developer: 'Atlus',
    publisher: 'Atlus / Sega',
    price: 'Mex$ 1,199.00',
    score: 92,
    tags: ['JRPG', 'Anime', 'Historia', 'Turnos'],
    features: [
      'Sistema de calendario que combina vida escolar y exploración de mazmorras',
      'Combate por turnos con invocacion de Personas y ataques debilidad-tecnica',
      'Vinculos sociales que mejoran las habilidades de fusion de Personas',
      'Remake visual completo del clasico de PS2 con graficos modernos',
      'Banda sonora reorquestada con nuevos arreglos',
    ],
    video: '/games/jrpg/p3r/p3r.mp4',
    cover: '/games/jrpg/p3r/p3rheader.jpg',
    gallery: [
      '/games/jrpg/p3r/p3r1.png',
      '/games/jrpg/p3r/p3r2.png',
      '/games/jrpg/p3r/p3r3.png',
    ],
    influencers: [
      { name: 'Juja', platform: 'YouTube', url: 'https://www.youtube.com/' },
    ],
  },
  {
    id: 'persona-4-golden',
    category: 'jrpg',
    title: 'Persona 4 Golden',
    tagline: 'La verdad está oculta entre la niebla.',
    description:
      'En un pueblo tranquilo ocurren extraños asesinatos ligados a un misterioso "Canal de Medianoche". Investiga el caso mientras despiertas tu Persona interior.',
    releaseDate: '19 de junio del 2020',
    developer: 'Atlus',
    publisher: 'Atlus / Sega',
    price: 'Mex$ 399.00',
    score: 94,
    tags: ['JRPG', 'Misterio', 'Anime', 'Turnos'],
    features: [
      'Investigacion de un misterio central que avanza segun el calendario del juego',
      'Mundo alterno (TV World) con mazmorras generadas segun cada personaje',
      'Sistema Social Link que fortalece a tus Personas mediante amistades',
      'Combate por turnos con explotacion de debilidades elementales',
      'Contenido extra exclusivo de la version Golden respecto al original',
    ],
    video: '/games/jrpg/p4g/p4g.mp4',
    cover: '/games/jrpg/p4g/p4gheader.png',
    gallery: [
      '/games/jrpg/p4g/p4g1.png',
      '/games/jrpg/p4g/p4g2.png',
      '/games/jrpg/p4g/p4g3.png',
    ],
    influencers: [
      { name: 'Spartan115jef', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=izULSjSubuE' },
    ],
  },
  {
    id: 'persona-5-royal',
    category: 'jrpg',
    title: 'Persona 5 Royal',
    tagline: 'Roba los corazones corruptos, cambia el mundo.',
    description:
      'Conviértete en un Ladrón Fantasma y adéntrate en los Palacios, mundos nacidos de la corrupción de los adultos, para robar sus deseos distorsionados.',
    releaseDate: '31 de marzo del 2020',
    developer: 'Atlus',
    publisher: 'Atlus / Sega',
    price: 'Mex$ 799.00',
    score: 95,
    tags: ['JRPG', 'Estilo', 'Anime', 'Turnos'],
    features: [
      'Exploracion sigilosa de Palacios con puzzles ambientales',
      'Combate por turnos estilizado con ejecuciones tipo All-Out Attack',
      'Sistema Confidant que profundiza relaciones y desbloquea habilidades',
      'Direccion de arte y interfaz altamente estilizadas',
      'Contenido adicional exclusivo de la version Royal (nuevo personaje y final)',
    ],
    video: '/games/jrpg/p5r/p5r.mp4',
    cover: '/games/jrpg/p5r/p5rheader.png',
    gallery: [
      '/games/jrpg/p5r/p5r1.png',
      '/games/jrpg/p5r/p5r2.png',
      '/games/jrpg/p5r/p5r3.png',
    ],
    influencers: [
      { name: 'El Fedelobo', platform: 'YouTube', url: 'https://www.youtube.com/watch?v=FqtIv4n4UAI' },
    ],
  },
  {
    // No tiene score ni creador de contenido
    id: 'persona-4-revival',
    category: 'upcoming',
    title: 'Persona 4 Revival',
    tagline: 'Sintoniza el Canal de Medianoche y busca la verdad.',
    description:
      'Viaja entre el mundo real y el misterioso mundo de la televisión en el tranquilo pueblo de Inaba para investigar una serie de extraños asesinatos y descubrir la verdad tras la niebla.',
    releaseDate: '18 de febrero del 2027',
    developer: 'Atlus',
    publisher: 'Atlus / Sega',
    price: 'Mex$ 1,499.00',
    tags: ['JRPG', 'Misterio', 'Anime', 'Turnos'],
    features: [
      'Remake integral con gráficos, interfaz y mecánicas renovadas para la era moderna',
      'Exploración de mazmorras dentro del Mundo de la Televisión enfrentando a las Sombras',
      'Sistema de combates por turnos estilizados refinados con la jugabilidad moderna de la saga',
      'Gestión del día a día como estudiante en Inaba mediante Vínculos Sociales (Social Links)',
      'Investigación de crímenes y misterios urbanos junto al Equipo de Investigación',
    ],
    video: '/games/upcoming/p4r/p4r.mp4',
    cover: '/games/upcoming/p4r/p4rheader.jpg',
    gallery: [
      '/games/upcoming/p4r/p4r1.jpg',
      '/games/upcoming/p4r/p4r2.jpg',
      '/games/upcoming/p4r/p4r3.jpg',
    ],
    influencers: [],
  },
  {
    // No tiene score ni creador de contenido
    id: 'ocarina-of-time-remake',
    category: 'upcoming',
    title: 'The Legend of Zelda: Ocarina of Time Remake',
    tagline: 'El clásico atemporal, reconstruido desde cero.',
    description:
      'Vuelve a Hyrule con gráficos completamente renovados, animaciones fluidas y el mismo viaje entre el pasado y el futuro que marcó a toda una generación.',
    releaseDate: 'Próximamente',
    developer: 'Nintendo EAD',
    publisher: 'Nintendo',
    price: 'Mex$ 999.00',
    tags: ['Aventura', 'Viajes en el tiempo', 'Un jugador', 'Remake'],
    features: [
      'Remake grafico completo manteniendo el diseño original de niveles',
      'Mecanica de viajes en el tiempo entre la niñez y la adultez de Link',
      'Uso de la Ocarina del Tiempo para tocar melodias mágicas con diversos efectos',
      'Sistema de combate renovado sobre la base del Z-Targeting original',
      'Iluminacion y clima dinamicos en toda la Pradera de Hyrule',
    ],
    video: '/games/upcoming/ootremake/ootremake.mp4',
    cover: '/games/upcoming/ootremake/ootremakeheader.jpg',
    gallery: [
      '/games/upcoming/ootremake/ootremake1.png',
    ],
    influencers: [],
  },
]

// funcion busca un juego por su id
export function getGameById(id: string) {
  return games.find((game) => game.id === id)
}

// Funcion dice si el juego tiene video o no
export function hasVideo(game: any) {
  return game.video !== null
}

// Regresa la funcion limite de 6 juegos con mejor score, de mayor a menor.
export function getTopScored(limite = 6) {
  return games
    .filter((game) => typeof game.score === 'number')
    .sort((a, b) => (b.score as number) - (a.score as number))
    .slice(0, limite)
}