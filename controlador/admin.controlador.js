const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const udao = require("../modelo/usuarios.modelo")
const usuarios = require("../bbdd/usuarios.bbdd")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class AdminControlador{
    async findAll(req, res){
        try{
            const result = await udao.find()
            return res.status(200).send(result)
        }catch(err){
            console.error("Error en buscar todas", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async insertOne(req,res){
        try{
            const {password, ...usuario} = req.body;
            const passwordHash = await bcrypt.hash(password, 10);
            const usuarioNuevo = new udao({
                ...usuario,
                password: passwordHash
            });
            const result = await usuarioNuevo.save();
            if(!usuarioNuevo){
                return res.status(404).send("No se ha podido crear usuario")
            }
            return res.status(201).send(result)
        }catch(err){
            console.error("Error al crear usuario", err);
            return res.status(500).json({mensaje: "Error general, ver consola"})    
        }
    }

    async updateOne(req,res){
        try{
            const usuario = req.body;
            const usuarioActualizado = await udao.findByIdAndUpdate(req.params.id, usuario, {new: true})
            if(!usuarioActualizado){
                return res.status(404).send("Usuario no existe")
            }
            return res.status(200).send(usuarioActualizado)
    
        }catch(err){
            console.error("Error en updateOne de usuario" , err)
            return res.status(500).json({mensaje: "Error interno"})
        }
    }

    async deleteOne(req,res){
        try{
            if(!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(400).send("Id invalido")
            const usuarioEliminado = await udao.findByIdAndDelete(req.params.id)
            if(!usuarioEliminado){
                return res.status(404).send("Usuario no existe")
            }
            return res.status(200).send("Eliminado correctamente")
    
        }catch(err){
            console.error("Error en deleteOne de usuario" , err)
            return res.status(500).json({mensaje: "Error interno"})
        }
    }
}

module.exports= new AdminControlador()