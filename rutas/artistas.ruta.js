const express = require("express")
const ruta = express.Router()
const artistaControlador = require("../controlador/artistas.controlador")

ruta.get('/verArtistas', artistaControlador.obtenerArtistas);

module.exports = ruta