const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const edao = require("../modelo/eventos.modelo")
const eventos = require("../bbdd/eventos.bbdd")
const ndao = require("../modelo/noticias.modelo")
const noticias = require("../bbdd/noticias.bbdd")
const gdao = require("../modelo/grupos.modelo")
const grupos = require("../bbdd/grupos.bbdd")

class TrabajadorControlador{
    async crearNoticia(req, res){
        try{
            const noticia = req.body;
            const noticiaNueva = new ndao(noticia)
            const result = await noticiaNueva.save()
            if(!noticiaNueva){
                return res.status(404).send("No se ha podido crear noticia")
            }
            return res.status(201).send(result)
        }catch(err){
            console.error("Error al crear noticia", err);
            return res.status(500).json({mensaje: "Error general, ver consola"})   
        }
    }
    async crearEvento(req, res){
        try{
            const evento = req.body;
            const eventoNuevo = new edao(evento)
            const result = await eventoNuevo.save()
            if(!eventoNuevo){
                return res.status(404).send("No se ha podido crear evento")
            }
            return res.status(201).send(result)
        }catch(err){
            console.error("Error al crear evento", err);
            return res.status(500).json({mensaje: "Error general, ver consola"})   
        }
    }
    async crearGrupo(req, res){
        try{
            const grupo = req.body;
            const grupoNuevo = new gdao(grupo)
            const result = await grupoNuevo.save()
            if(!grupoNuevo){
                return res.status(404).send("No se ha podido crear grupo")
            }
            return res.status(201).send(result)
        }catch(err){
            console.error("Error al crear grupo", err);
            return res.status(500).json({mensaje: "Error general, ver consola"})   
        }
    }
    async mostrarNoticias(req,res){
        try{
            const result = await ndao.find()
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar todas las noticias", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async mostrarEventos(res,res){
        try{
            const result = await edao.find()
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar todos los eventos", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async mostrarGrupos(req,res){
        try{
            const result = await gdao.find()
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar todos los grupos", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async actualizarNoticia(req,res){
        try{
            const noticia = req.body;
            const noticiaActualizada = await ndao.findByIdAndUpdate(req.params.id, noticia, {new: true})
            if(!noticiaActualizada){
                return res.status(404).send("Noticia no existe")
            }
            return res.status(200).send(noticiaActualizada)
        }catch(err){
            console.error("Error en actualizar noticia" , err)
            return res.status(500).json({mensaje: "Error interno"})
        }
    }
    async actualizarEvento(res,res){
        try{
            const evento = req.body;
            const eventoActualizado = await edao.findByIdAndUpdate(req.params.id, evento, {new: true})
            if(!eventoActualizado){
                return res.status(404).send("Evento no existe")
            }
            return res.status(200).send(eventoActualizado)
        }catch(err){
            console.error("Error en actualizar evento" , err)
            return res.status(500).json({mensaje: "Error interno"})
        }
    }
    async actualizarGrupo(req,res){
        try{
            const grupo = req.body;
            const grupoActualizado = await ndao.findByIdAndUpdate(req.params.id, grupo, {new: true})
            if(!grupoActualizado){
                return res.status(404).send("Grupo no existe")
            }
            return res.status(200).send(grupoActualizado)
        }catch(err){
            console.error("Error en actualizar grupo" , err)
            return res.status(500).json({mensaje: "Error interno"})
        }
    }

}

module.exports = new TrabajadorControlador()