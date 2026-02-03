const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const gdao = require("../modelo/grupos.modelo")
const grupos = require("../bbdd/grupos.bbdd")

class GruposControlador{
    async cargaIni(req,res){
        try{
            await gdao.insertMany(grupos)
            return res.status(201).send("Carga terminada")
        }catch(err){
            console.error("Error en la carga", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
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