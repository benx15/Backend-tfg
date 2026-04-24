const express = require("express")
const ruta = express.Router()
const noticiasControlador = require("../controlador/noticias.controlador")


ruta.get("/mostrarTodas", noticiasControlador.buscarTodas)
ruta.get("/buscar/:tematica", noticiasControlador.buscarPorTema)
ruta.get("/buscador", noticiasControlador.buscarPorTitular)
ruta.get("/tematica" , noticiasControlador.obtenerTematicas)

module.exports=ruta