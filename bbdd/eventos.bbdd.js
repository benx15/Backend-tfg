const eventos = [
  {
    "nombre": "Concierto Especial Aniversario",
    "precio": 50,
    "artista": [{ "nombreArtistico": "The Strokes" }],
    "fecha": "2026-03-15T20:00:00Z",
    "aforo": 200,
    "ubicacion": "Palacio Vista Alegre",
    "genero": "Rock",
    "descripcion": "Primer concierto en España después de varios años ",
    "usuarios": [{ "username": "mariomn" }]
  },
  {
    "nombre": "Noches del Botanico",
    "precio": 35,
    "artista": [{ "nombreArtistico": "Miles Davis" }],
    "fecha": "2026-06-13T19:30:00Z",
    "aforo": 150,
    "ubicacion": "Parque del Retiro",
    "genero": "Jazz",
    "descripcion": "Concierto al aire libre.",
    "usuarios": [{ "username": "Beita03" }]
  },
  {
    "nombre": "Especial Flamenco",
    "precio": 45,
    "artista": [{ "nombreArtistico": "Rosalía" }],
    "fecha": "2026-05-05T21:00:00Z",
    "aforo": 120,
    "ubicacion": "Teatro Real",
    "genero": "Flamenco",
    "descripcion": "Espectáculo de flamenco en vivo.",
    "usuarios": []
  },
  {
    "nombre": "We are back",
    "precio": 60,
    "artista": [{ "nombreArtistico": "Daft Punk" }],
    "fecha": "2026-06-20T22:00:00Z",
    "aforo": 500,
    "ubicacion": "La Riviera",
    "genero": "Electronica",
    "descripcion": "Fecha unica en Madrid del mítico duo ",
    "usuarios": [{ "username": "mariomn" }]
  },
  {
    "nombre": "Amantes de lo clásico",
    "precio": 40,
    "artista": [{ "nombreArtistico": "Ludwig van Beethoven" }],
    "fecha": "2026-07-12T18:00:00Z",
    "aforo": 300,
    "ubicacion": "Movistar Arena",
    "genero": "Clasica",
    "descripcion": "Interpretación de obras clásicas Beethoven.",
    "usuarios": []
  },
  {
    "nombre": "RBF",
    "precio": 60,
    "artista": [{ "nombreArtistico": "Karol G" }],
    "fecha": "2026-08-08T20:30:00Z",
    "aforo": 180,
    "ubicacion": "Caja Mágica",
    "genero": "Reggaeton",
    "descripcion": "Una noche de música latina en directo de la mano de Karol G",
    "usuarios": []
  },
  {
    "nombre": "I love Spain",
    "precio": 300,
    "artista": [{ "nombreArtistico": "Taylor Swift" }],
    "fecha": "2026-09-01T21:00:00Z",
    "aforo": 400,
    "ubicacion": "Estadio Metropolitano",
    "genero": "Pop",
    "descripcion": "Unica fecha de la cantante estadounidense",
    "usuarios": []
  },
  {
    "nombre": "CCME",
    "precio": 50,
    "artista": [{ "nombreArtistico": "Avicii" }],
    "fecha": "2026-07-25T19:00:00Z",
    "aforo": 1200,
    "ubicacion": "Auditorio Miguel Rios",
    "genero": "Electronica", 
    "descripcion": "Festival de musica variada con la participacion de un DJ que pondra los hit del fallecido Avicii",
    "usuarios": []
  },
  {
    "nombre": "Jazz en vivo",
    "precio": 20,
    "artista": [{ "nombreArtistico": "John Coltrane" }],
    "fecha": "2026-09-12T20:00:00Z",
    "aforo": 50,
    "ubicacion": "Teatro Alcalá",
    "genero": "Jazz",
    "descripcion": "Concierto elegante con influencias de jazz y soul.",
    "usuarios": []
  },
  {
    "nombre": "After party de Dua Lipa",
    "precio": 35,
    "artista": [{ "nombreArtistico": "Dua Lipa" }],
    "fecha": "2026-06-30T22:30:00Z",
    "aforo": 200,
    "ubicacion": "Teatro Barceló",
    "genero": "Pop",
    "descripcion": "Fiesta pop con espectáculo en vivo ",
    "usuarios": []
  },
  {
    "nombre": "Leyendas del rock",
    "precio": 65,
    "artista": [{ "nombreArtistico": "The Rolling Stones" }],
    "fecha": "2026-10-03T21:00:00Z",
    "aforo": 900,
    "ubicacion": "Movistar Arena",
    "genero": "Rock",
    "descripcion": "Concierto  con los grandes clásicos del rock.",
    "usuarios": []
  },
  {
    "nombre": "Puro latino",
    "precio": 70,
    "artista": [{ "nombreArtistico": "Bad Bunny" }],
    "fecha": "2026-11-14T20:30:00Z",
    "aforo": 500,
    "ubicacion": "Shoko",
    "genero": "Reggaeton",
    "descripcion": "Evento muy especial con la estrella del momento",
    "usuarios": []
  },
  {
    "nombre": "Tour por España",
    "precio": 75,
    "artista": [{ "nombreArtistico": "Arctic Monkeys" }],
    "fecha": "2026-12-05T22:00:00Z",
    "aforo": 1500,
    "ubicacion": "Palacio Vista Alegre",
    "genero": "Rock",
    "descripcion": "Tour especial por la salidad de su ultimo disco",
    "usuarios": []
  },
  {
    "nombre": "Para los amantes del Rock Alternativo",
    "precio": 80,
    "artista": [{ "nombreArtistico": "The Strokes" }],
    "fecha": "2026-11-14T20:30:00Z",
    "aforo": 1000,
    "ubicacion": "Londres",
    "genero": "Rock",
    "descripcion": "Evento especial con la mejor banda de rock alternartivo",
    "usuarios": []
  },
  
  {
    "nombre": "Exclusive Party",
    "precio": 120,
    "artista": [{ "nombreArtistico": "Calvin Harris" }],
    "fecha": "2026-08-12T20:30:00Z",
    "aforo": 100,
    "ubicacion": "New York",
    "genero": "Electronica",
    "descripcion": "Una experiencia inolvidable",
    "usuarios": []
  },
  {
    "nombre": "The Last Dance",
    "precio": 90,
    "artista": [{ "nombreArtistico": "David Guetta" }],
    "fecha": "2026-10-05T23:55:00Z",
    "aforo": 900,
    "ubicacion": "Fabrik",
    "genero": "Electronica",
    "descripcion": "Ultima vez que pinchará David Guetta ",
    "usuarios": []
  },
  {
    "nombre": "Gira mundial",
    "precio": 125,
    "artista": [{ "nombreArtistico": "Drake" }],
    "fecha": "2026-11-20T21:00:00Z",
    "aforo": 1500,
    "ubicacion": "La Riviera",
    "genero": "Hip hop",
    "descripcion": "Concierto espectacular",
    "usuarios": []
  }

]

module.exports = eventos