const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const edao = require("../modelo/eventos.modelo")


class EventosControlador{
    
    async buscarTodas(req, res){
        try{
            const result = await edao.find()
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar todas", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
}

module.exports= new EventosControlador();