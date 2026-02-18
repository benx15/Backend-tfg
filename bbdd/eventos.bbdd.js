const eventos = [
  {
    "nombre": "Concierto Rock Estelar",
    "precio": 50,
    "artista": [{ "nombreArtistico": "The Rolling Stones" }],
    "fecha": "2026-03-15T20:00:00Z",
    "aforo": 200,
    "ubicacion": "Auditorio Nacional",
    "genero": "Rock",
    "descripcion": "Gran concierto de rock con banda internacional invitada.",
    "usuarios": [{ "username": "cliente04" }]
  },
  {
    "nombre": "Festival Jazz Nocturno",
    "precio": 35,
    "artista": [{ "nombreArtistico": "Miles Davis" }],
    "fecha": "2026-04-10T19:30:00Z",
    "aforo": 150,
    "ubicacion": "Parque Central",
    "genero": "Jazz",
    "descripcion": "Festival al aire libre con artistas nacionales de jazz.",
    "usuarios": [{ "username": "cliente03" }]
  },
  {
    "nombre": "Noche de Flamenco",
    "precio": 45,
    "artista": [{ "nombreArtistico": "Rosalía" }],
    "fecha": "2026-05-05T21:00:00Z",
    "aforo": 120,
    "ubicacion": "Teatro de la Villa",
    "genero": "Flamenco",
    "descripcion": "Espectáculo tradicional de flamenco en vivo.",
    "usuarios": []
  },
  {
    "nombre": "Festival Electrónico Summer",
    "precio": 60,
    "artista": [{ "nombreArtistico": "Daft Punk" }],
    "fecha": "2026-06-20T22:00:00Z",
    "aforo": 500,
    "ubicacion": "Club Arena",
    "genero": "Electronica",
    "descripcion": "Festival de música electrónica con DJs internacionales.",
    "usuarios": [{ "username": "cliente04" }]
  },
  {
    "nombre": "Concierto de Música Clásica",
    "precio": 40,
    "artista": [{ "nombreArtistico": "Ludwig van Beethoven" }],
    "fecha": "2026-07-12T18:00:00Z",
    "aforo": 300,
    "ubicacion": "Sala Sinfónica",
    "genero": "Clasica",
    "descripcion": "Interpretación de obras clásicas de Mozart y Beethoven.",
    "usuarios": []
  },
  {
    "nombre": "Fiesta Salsa Tropical",
    "precio": 30,
    "artista": [{ "nombreArtistico": "Karol G" }],
    "fecha": "2026-08-08T20:30:00Z",
    "aforo": 180,
    "ubicacion": "Club Tropical",
    "genero": "Salsa",
    "descripcion": "Noche de baile con música latina en directo.",
    "usuarios": []
  },
  {
    "nombre": "Concierto Pop Estelar",
    "precio": 55,
    "artista": [{ "nombreArtistico": "Taylor Swift" }],
    "fecha": "2026-09-01T21:00:00Z",
    "aforo": 400,
    "ubicacion": "Estadio Central",
    "genero": "Pop",
    "descripcion": "Show en vivo del artista pop del momento.",
    "usuarios": []
  },
  {
    "nombre": "Electronic Sunset Festival",
    "precio": 50,
    "artista": [{ "nombreArtistico": "Avicii" }],
    "fecha": "2026-07-25T19:00:00Z",
    "aforo": 1200,
    "ubicacion": "Recinto Ferial",
    "genero": "Electronica",
    "descripcion": "Festival al aire libre con los mejores DJs de electrónica.",
    "usuarios": []
  },
  {
    "nombre": "Jazz & Soul Live",
    "precio": 40,
    "artista": [{ "nombreArtistico": "John Coltrane" }],
    "fecha": "2026-09-12T20:00:00Z",
    "aforo": 350,
    "ubicacion": "Teatro Principal",
    "genero": "Jazz",
    "descripcion": "Concierto elegante con influencias de jazz y soul.",
    "usuarios": []
  },
  {
    "nombre": "Pop Party Night",
    "precio": 30,
    "artista": [{ "nombreArtistico": "Dua Lipa" }],
    "fecha": "2026-06-30T22:30:00Z",
    "aforo": 600,
    "ubicacion": "Sala Infinity",
    "genero": "Pop",
    "descripcion": "Fiesta pop con espectáculo en vivo y animación.",
    "usuarios": []
  },
  {
    "nombre": "Rock Legends Live",
    "precio": 65,
    "artista": [{ "nombreArtistico": "The Rolling Stones" }],
    "fecha": "2026-10-03T21:00:00Z",
    "aforo": 900,
    "ubicacion": "Estadio Sur",
    "genero": "Rock",
    "descripcion": "Concierto potente con los grandes clásicos del rock.",
    "usuarios": []
  },
  {
    "nombre": "Noche de Rock Alternativo",
    "precio": 40,
    "artista": [{ "nombreArtistico": "The Strokes" }],
    "fecha": "2026-11-14T20:30:00Z",
    "aforo": 500,
    "ubicacion": "Sala Underground",
    "genero": "Rock",
    "descripcion": "Evento especial con lo mejor del rock alternativo.",
    "usuarios": []
  },
  {
    "nombre": "Rock & Fire Festival",
    "precio": 75,
    "artista": [{ "nombreArtistico": "Arctic Monkeys" }],
    "fecha": "2026-12-05T22:00:00Z",
    "aforo": 1500,
    "ubicacion": "Recinto Rock Arena",
    "genero": "Rock",
    "descripcion": "Festival explosivo con bandas de rock nacional e internacional.",
    "usuarios": []
  },
  {
    "nombre": "Festival para los amantes del Rock Alternativo",
    "precio": 70,
    "artista": [{ "nombreArtistico": "The Strokes" }],
    "fecha": "2026-11-14T20:30:00Z",
    "aforo": 4000,
    "ubicacion": "Londres",
    "genero": "Rock",
    "descripcion": "Evento especial con lo mejor del rock alternativo.",
    "usuarios": []
  },
  
  {
    "nombre": "Deep House Sessions: Rooftop Edition",
    "precio": 35,
    "artista": [{ "nombreArtistico": "Calvin Harris" }],
    "fecha": "2026-08-12T20:30:00Z",
    "aforo": 300,
    "ubicacion": "Skyline Terrace",
    "genero": "Electronica",
    "descripcion": "Una experiencia íntima de Deep House con vistas 360 de la ciudad durante el atardecer.",
    "usuarios": []
  },
  {
    "nombre": "Techno Bunker Experience",
    "precio": 25,
    "artista": [{ "nombreArtistico": "David Guetta" }],
    "fecha": "2026-10-05T23:55:00Z",
    "aforo": 800,
    "ubicacion": "Underground Club",
    "genero": "Electronica",
    "descripcion": "Inmersión total en sonidos industriales y visuales hipnóticos en el club más icónico de la escena.",
    "usuarios": []
  },
  {
    "nombre": "Ambient Night: Modular Synths",
    "precio": 23,
    "artista": [{ "nombreArtistico": "Avicii" }],
    "fecha": "2026-11-20T21:00:00Z",
    "aforo": 150,
    "ubicacion": "Centro Cultural Experimental",
    "genero": "Electronica",
    "descripcion": "Sesión de escucha experimental enfocada en la síntesis modular y paisajes sonoros envolventes.",
    "usuarios": []
  }

]

module.exports = eventos