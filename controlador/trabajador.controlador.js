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
    async mostrarEventos(req,res){
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
    async actualizarEvento(req,res){
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
            const grupoActualizado = await gdao.findByIdAndUpdate(req.params.id, grupo, {new: true})
            if(!grupoActualizado){
                return res.status(404).send("Grupo no existe")
            }
            return res.status(200).send(grupoActualizado)
        }catch(err){
            console.error("Error en actualizar grupo" , err)
            return res.status(500).json({mensaje: "Error interno"})
        }
    }
    async borrarNoticia(req,res){
        try{
            if(!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(400).send("Id invalido")
            const noticiaEliminada = await ndao.findByIdAndDelete(req.params.id)
            if (!noticiaEliminada){
                return res.status(404).send("Noticia no encontrada")
            }
            return res.status(200).json({mensaje: "noticia eliminada correctamente"})
        }catch(err){
            console.error("Error al borrar noticia", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async borrarEvento(req,res){
        try {
            if(!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(400).send("Id invalido")
            const evento = await edao.findById(req.params.id)
            if (!evento) {
                return res.status(404).send("Evento no encontrado")
            }
        
            if (evento.usuarios && evento.usuarios.length > 0) {
                return res.status(403).json({ mensaje: "No se puede eliminar un evento con usuarios inscritos" })
            }
            await edao.findByIdAndDelete(req.params.id)
            return res.status(200).json({ mensaje: "Evento eliminado correctamente", evento })
        } catch (err) {
            console.error("Error al borrar evento", err)
            return res.status(500).json({ mensaje: "Error general, ver consola" })
        }
    }
    async borrarGrupo(req, res) {
        try {
            if(!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(400).send("Id invalido")
            const grupo = await gdao.findById(req.params.id)
            if (!grupo) {
                return res.status(404).send("Grupo no encontrado")
            }
        
            if (grupo.usuarios && grupo.usuarios.length > 0) {
                return res.status(403).json({ mensaje: "No se puede eliminar un grupo con usuarios registrados" })
            }
            await gdao.findByIdAndDelete(req.params.id)
            return res.status(200).json({ mensaje: "Grupo eliminado correctamente", grupo })
        } catch (err) {
            console.error("Error al borrar grupo", err)
            return res.status(500).json({ mensaje: "Error general, ver consola" })
        }
    }
}

module.exports = new TrabajadorControlador()