const express = require("express")
const ruta = express.Router()
const eventosControlador = require("../controlador/eventos.controlador")

ruta.get("/cargaI" , eventosControlador.carga)
ruta.get("/mostrar" , eventosControlador.buscarTodas)

module.exports=ruta