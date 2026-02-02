const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const udao = require("../modelo/usuarios.modelo")
const usuarios = require("../bbdd/usuario.bbdd")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class UsuarioControlador{
    async cargaInicial(req,res){
        try{
            await udao.insertMany(usuarios)
            return res.status(201).send("Carga finalizada")
        }catch(err){
            console.error("Error en la carga", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async register(req,res){
        try{
            const {password , ...usuario}= req.body;
            const passwordHash = await bcrypt.hash(password, 10);
            const usuarioNuevo= new udao({
                ...usuario,
                password: passwordHash,
                rol: "CLIENTE"
            });
            const result = await usuarioNuevo.save();
            if(!usuarioNuevo){
                return res.status(404).send("No se ha podido crear usuario")
            }
            return res.status(201).json({mensaje: "Usuario registrado"})
        }catch(err){
            console.error("Error en el register", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }
    async login(req,res){
        try{
            const { username, password } = req.body; 
            const usuario = await udao.findOne({username: req.body.username}).select("+password");
            if(!usuario){
                return res.status(401).json({mensaje:"Usuario incorrecto"})
            }
            const verficar = await bcrypt.compare(password, usuario.password)
            if(!verficar){
                return res.status(401).json({mensaje:"Contraseña incorrecta"})
            }
            const token = jwt.sign({id: usuario._id , rol: usuario.rol }, "CLAVE_SECRETA" , {expiresIn: "1h"});

            return res.status(201).json({token, rol: usuario.rol , nombre: usuario.name});

        }catch(err){
            console.error("Error en el login", err)
            return res.status(500).json({mensaje: "Error general, ver consola"})
        }
    }

}

module.exports= new UsuarioControlador