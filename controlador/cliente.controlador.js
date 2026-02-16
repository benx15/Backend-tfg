const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const udao = require("../modelo/usuarios.modelo")
const gdao = require("../modelo/grupos.modelo")
const edao = require("../modelo/eventos.modelo")
const pdao = require("../modelo/publicaciones.modelo")

class ClienteControlador{
    async  agregarUsuarioAGrupo(req, res) {
        try{
           const { usuarioId, grupoId } = req.body;

            const usuario = await udao.findById(usuarioId);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }

            const grupo = await gdao.findById(grupoId);
            if (!grupo) {
                return res.status(404).json({ mensaje: "Grupo no encontrado" });
            }

            grupo.usuarios.push({
                id: usuario._id,
                username: usuario.username
            });

            await grupo.save();

            res.json({ mensaje: "Usuario agregado al grupo correctamente" });
        }catch(err){
            console.error("Error en agregar usuario a grupo", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async  agregarUsuarioAEvento(req,res){
         try{
           const { usuarioId, eventoId } = req.body;

            const usuario = await udao.findById(usuarioId);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }

            const evento = await edao.findById(eventoId);
            if (!evento) {
                return res.status(404).json({ mensaje: "Evento no encontrado" });
            }

            evento.usuarios.push({
                id: usuario._id,
                username: usuario.username
            });

            await evento.save();

            res.json({ mensaje: "Usuario agregado al evento correctamente" });
        }catch(err){
            console.error("Error en agregar usuario a grupo", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async crearPost(req,res){
        try{
            const { titulo, contenido, usuarioId, grupoId } = req.body;

            if (!titulo || !contenido || !usuarioId || !grupoId) {
                return res.status(400).json({ 
                    mensaje: "Faltan campos requeridos: titulo, contenido, usuarioId, grupoId" 
                });
            }

            const usuario = await udao.findById(usuarioId);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }

            const grupo = await gdao.findById(grupoId);
            if (!grupo) {
                return res.status(404).json({ mensaje: "Grupo no encontrado" });
            }

            const nuevaPublicacion = new pdao({
                titulo: titulo,
                contenido: contenido,
                fecha: new Date(),
                autor: {
                    id: usuario._id,
                    username: usuario.username
                },
                grupo: {
                    id: grupo._id,
                    nombre: grupo.nombre
                },
                respuestas: []
            });

            
            await nuevaPublicacion.save();

            res.status(201).json({ 
                mensaje: "Publicación creada correctamente",
                publicacion: nuevaPublicacion
            });
        }catch(err){
            console.error("Error al crear publicación", err);
            return res.status(500).json({mensaje: "Error general, ver consola"});
        }
    }
    async respuestaPost(req, res){
        try{
            const { publicacionId, usuarioId, contenido } = req.body;

            if (!publicacionId || !usuarioId || !contenido) {
                return res.status(400).json({ 
                    mensaje: "Faltan campos requeridos: publicacionId, usuarioId, contenido" 
                });
            }

            const usuario = await udao.findById(usuarioId);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }

            const publicacion = await pdao.findById(publicacionId);
            if (!publicacion) {
                return res.status(404).json({ mensaje: "Publicación no encontrada" });
            }

            const nuevaRespuesta = {
                contenido: contenido,
                autor: {
                    id: usuario._id,
                    username: usuario.username
                },
                fechaPublicacion: new Date()
            };

            publicacion.respuestas.push(nuevaRespuesta);

            await publicacion.save();

            res.status(201).json({ 
                mensaje: "Respuesta agregada correctamente",
                respuesta: nuevaRespuesta
            });
        }catch(err){
            console.error("Error al responder publicación", err);
            return res.status(500).json({mensaje: "Error general, ver consola"});
        }
    }
    async verMisPosts(req,res){
        try{
            const { usuarioId } = req.params;

            const usuario = await udao.findById(usuarioId);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }

            const publicaciones = await pdao.find({ "autor.id": usuarioId })
                .sort({ fecha: -1 });

            res.json({ 
                mensaje: "Publicaciones obtenidas correctamente",
                total: publicaciones.length,
                publicaciones: publicaciones
            });
        }catch(err){
            console.error("Error al obtener publicaciones del usuario", err);
            return res.status(500).json({mensaje: "Error general, ver consola"});
        }
    }
    async verMisRespustas(req,res){
        try{
            const { usuarioId } = req.params;

            const usuario = await udao.findById(usuarioId);
            if (!usuario) {
                return res.status(404).json({ mensaje: "Usuario no encontrado" });
            }

         
            const publicaciones = await pdao.find({ 
                "respuestas.autor.id": usuarioId 
            }).sort({ fecha: -1 });

            const misRespuestas = [];
            
            publicaciones.forEach(publicacion => {
                const respuestasDelUsuario = publicacion.respuestas.filter(
                    respuesta => respuesta.autor.id.toString() === usuarioId
                );

                respuestasDelUsuario.forEach(respuesta => {
                    misRespuestas.push({
                        respuesta: respuesta,
                        publicacion: {
                            id: publicacion._id,
                            titulo: publicacion.titulo,
                            contenido: publicacion.contenido,
                            autor: publicacion.autor,
                            grupo: publicacion.grupo
                        }
                    });
                });
            });

            res.json({ 
                mensaje: "Respuestas obtenidas correctamente",
                total: misRespuestas.length,
                respuestas: misRespuestas
            });
        }catch(err){
            console.error("Error al obtener respuestas del usuario", err);
            return res.status(500).json({mensaje: "Error general, ver consola"});
        }
    }
}

module.exports= new ClienteControlador()