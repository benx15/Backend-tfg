const express = require("express")
const ruta = express.Router()
const adminControlador=require("../controlador/admin.controlador")

ruta.get("/buscarTodos", adminControlador.findAll)
ruta.post("/crearUno" , adminControlador.insertOne)
ruta.put("/actualizar" , adminControlador.updateOne)
ruta.delete("/borrar" , adminControlador.deleteOne)

module.exports = ruta