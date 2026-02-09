const udao = require("../modelo/usuarios.modelo")
const usuarios = require("../bbdd/usuario.bbdd")
const ndao = require("../modelo/noticias.modelo")
const noticias = require("../bbdd/noticia.bbdd")
const edao = require("../modelo/eventos.modelo")
const eventos = require("../bbdd/eventos.bbdd")
const gdao = require("../modelo/grupos.modelo")
const grupos = require("../bbdd/grupos.bbdd")
const pdao = require("../modelo/publicaciones.modelo")
const publicaciones = require("../bbdd/publicaciones.bbdd")

class SemillaDatos{
    async cargaUsuarios(){
        try{
            const total = await udao.countDocuments()
            if(total>0){
                console.log("Usuarios ya existen")
                return
            }
            await udao.insertMany(usuarios)
            console.log("Usuarios cargados")
        }catch(err){
            console.error("Error en la carga de Usuarios", err)
        }
    }
    async cargaNoticias(){
        try{
           const total = await ndao.countDocuments()
            if(total>0){
                console.log("Noticias ya existen")
                return
            }
            await ndao.insertMany(noticias)
            console.log("Noticias cargadas")
        }catch(err){
            console.error("Error en la carga de Noticias", err)
        }
    }
    async cargaEventos(){
        try{
            const total = await edao.countDocuments()
            if(total>0){
                console.log("Eventos ya existen")
                return
            }
            await edao.insertMany(eventos)
            console.log("Eventos cargados")
        }catch(err){
            console.error("Error en la carga de Eventos", err)
        }
    }
    async cargaGrupos(){
        try{
            const total = await gdao.countDocuments()
            if(total>0){
                console.log("Grupos ya existen")
                return
            }
            await gdao.insertMany(grupos)
            console.log("Grupos cargados")
        }catch(err){
            console.error("Error en la carga de Grupos", err)
        }
    }
    async cargaPublicaciones(){
        try{
            const total = await pdao.countDocuments()
            if(total>0){
                console.log("Publicaciones ya existen")
                return
            }
            await pdao.insertMany(publicaciones)
            console.log("Publicaciones cargadas")
        }catch(err){
            console.error("Error en la carga de Publicaciones", err)
        }
    }
}

module.exports = new SemillaDatos();