const express = require("express")
const ruta = express.Router()
const clienteControlador = require("../controlador/cliente.controlador")
const validacion = require("../intermediario/validador")
const roles = require("../intermediario/porRoles")

ruta.post("/unirseGrupo" , validacion, roles.esCliente, clienteControlador.agregarUsuarioAGrupo)
ruta.post("apuntarseEvento" , validacion , roles.esCliente, clienteControlador.agregarUsuarioAEvento)

module.exports= ruta