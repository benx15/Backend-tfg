const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const gdao = require("../modelo/grupos.modelo")


class GruposControlador{
    
    async buscarTodas(req, res){
        try{
            const result = await gdao.find()
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar todas", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
}

module.exports = new GruposControlador();