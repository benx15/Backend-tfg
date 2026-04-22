const express = require("express")
const ruta = express.Router()
const clienteControlador = require("../controlador/cliente.controlador")
const validacion = require("../intermediario/validador")
const roles = require("../intermediario/porRoles")

ruta.post("/unirseGrupo" , validacion, roles.esCliente, clienteControlador.agregarUsuarioAGrupo)
ruta.post("/apuntarseEvento" , validacion , roles.esCliente, clienteControlador.agregarUsuarioAEvento)
ruta.post("/publicar", validacion, roles.esCliente, clienteControlador.crearPost)
ruta.post("/respuesta" , validacion, roles.esCliente, clienteControlador.respuestaPost)
ruta.get("/misPosts/:usuarioId", validacion, roles.esCliente, clienteControlador.verMisPosts)
ruta.get("/misRespuestas/:usuarioId", validacion, roles.esCliente, clienteControlador.verMisRespustas)
ruta.post("/guardarArtista" , validacion, roles.esCliente, clienteControlador.guardarArtistas)
ruta.get("/misArtistas/:usuarioId", validacion, roles.esCliente , clienteControlador.verMisArtistas)
ruta.get("/verPostGrupo/:grupoId", validacion, roles.esCliente, clienteControlador.verPostGrupo)

module.exports= ruta