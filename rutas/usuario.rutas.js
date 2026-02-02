const express = require("express")
const ruta = express.Router()
const usuarioControlador = require("../controlador/usuario.controlador")

ruta.get("/cargaInicial", usuarioControlador.cargaInicial) 
ruta.post("/login" , usuarioControlador.login)
ruta.post("/register" , usuarioControlador.register)

module.exports=ruta