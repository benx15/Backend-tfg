const express = require("express")
const ruta = express.Router()
const noticiasControlador = require("../controlador/noticias.controlador")

ruta.get("/carga", noticiasControlador.carga)
ruta.get("/mostrarTodas", noticiasControlador.buscarTodas)
ruta.get("/busca/:tematica", noticiasControlador.buscarPorTema)
ruta.get("/buscador", noticiasControlador.buscarPorTitular)
ruta.get("/temetica" , noticiasControlador.obtenerTematicas)

module.exports=ruta