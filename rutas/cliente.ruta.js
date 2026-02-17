const express = require("express")
const ruta = express.Router()
const clienteControlador = require("../controlador/cliente.controlador")
const validacion = require("../intermediario/validador")
const roles = require("../intermediario/porRoles")

ruta.post("/unirseGrupo" , validacion, roles.esCliente, clienteControlador.agregarUsuarioAGrupo)
ruta.post("/apuntarseEvento" , validacion , roles.esCliente, clienteControlador.agregarUsuarioAEvento)
ruta.post("/publicar", validacion, roles.esCliente, clienteControlador.crearPost)
ruta.post("/respuesta" , validacion, roles.esCliente, clienteControlador.respuestaPost)
ruta.get("/misPosts/:id", validacion, roles.esCliente, clienteControlador.verMisPosts)
ruta.get("/misRespuestas/:id", validacion, roles.esCliente, clienteControlador.verMisRespustas)

module.exports= ruta