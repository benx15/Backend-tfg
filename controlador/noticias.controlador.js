const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const ndao = require("../modelo/noticias.modelo")
const noticias = require("../bbdd/noticia.bbdd")

class NoticiasControlador{
    async carga(req,res){
        try{
            await ndao.insertMany(noticias)
            return res.status(201).send("Carga finalizada")
        }catch(err){
            console.error("Error en la carga", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async buscarTodas(req, res){
        try{
            const result = await ndao.find()
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar todas", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async buscarPorTema(req, res){
        try{
            const result = await ndao.find({tema: req.params.tema})
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar por tema", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
}

module.exports=  new NoticiasControlador();
/* luego si eso hacer tambien un autocompletado por titular en el buscador*/