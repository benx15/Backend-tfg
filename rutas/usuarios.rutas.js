const express = require("express")
const ruta = express.Router()
const usuarioControlador = require("../controlador/usuarios.controlador")

    
ruta.post("/login" , usuarioControlador.login)
ruta.post("/register" , usuarioControlador.register)

module.exports=ruta