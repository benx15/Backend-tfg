const express = require("express")
const ruta = express.Router()
const adminControlador=require("../controlador/admin.controlador")
const validacion = require("../intermediario/validador")
const roles = require("../intermediario/porRoles")

ruta.get("/buscarTodos", validacion, roles.esAdmin ,adminControlador.findAll)
ruta.post("/crearUno" , validacion, roles.esAdmin ,adminControlador.insertOne)
ruta.put("/:id", validacion, roles.esAdmin ,adminControlador.updateOne)
ruta.delete("/:id" , validacion, roles.esAdmin ,adminControlador.deleteOne)

module.exports = ruta