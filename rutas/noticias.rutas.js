const express = require("express")
const ruta = express.Router()
const noticiasControlador = require("../controlador/noticias.controlador")

ruta.get("/carga", noticiasControlador.carga)
ruta.get("/mostrarTodas", noticiasControlador.buscarTodas)
ruta.get("mostrarPorTema", noticiasControlador.buscarPorTema)

module.exports=ruta