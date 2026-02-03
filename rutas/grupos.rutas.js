const express = require("express")
const ruta = express.Router()
const gruposControlador = require("../controlador/grupos.controlador")

ruta.get("/cargaIni" , gruposControlador.cargaIni)
ruta.get("/buscarTodas" , gruposControlador.buscarTodas)

module.exports=ruta