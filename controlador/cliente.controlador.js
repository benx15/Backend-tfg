const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const udao = require("../modelo/usuarios.modelo")
const gdao = require("../modelo/grupos.modelo")
const edao = require("../modelo/eventos.modelo")

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
}

module.exports= new ClienteControlador()