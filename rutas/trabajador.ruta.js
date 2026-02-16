const express = require("express")
const ruta = express.Router()
const trabajadorControlador = require("../controlador/trabajador.controlador")
const validacion = require("../intermediario/validador")
const roles = require("../intermediario/porRoles")

ruta.post("/crearNoticia", validacion, roles.esTrabajador, trabajadorControlador.crearNoticia)
ruta.post("/crearEvento", validacion, roles.esTrabajador, trabajadorControlador.crearEvento)
ruta.post("/crearGrupo", validacion, roles.esTrabajador, trabajadorControlador.crearGrupo)
ruta.get("/buscarNoticias", validacion, roles.esTrabajador, trabajadorControlador.mostrarNoticias)
ruta.get("/buscarEventos", validacion, roles.esTrabajador, trabajadorControlador.mostrarEventos)
ruta.get("/buscarGrupos", validacion, roles.esTrabajador, trabajadorControlador.mostrarGrupos)
ruta.put("/noticiaActualizar/:id", validacion, roles.esTrabajador, trabajadorControlador.actualizarNoticia)
ruta.put("/eventoActualizar/:id", validacion, roles.esTrabajador, trabajadorControlador.actualizarEvento)
ruta.put("/grupoActualizar/:id", validacion, roles.esTrabajador, trabajadorControlador.actualizarGrupo)

module.exports = ruta