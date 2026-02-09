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
            await udao.insertMany(usuarios)
            console.log("Usuarios cargados")
        }catch(err){
            console.error("Error en la carga de Usuarios", err)
        }
    }
    async cargaNoticias(){
        try{
            await ndao.insertMany(noticias)
            console.log("Noticias cargados")
        }catch(err){
            console.error("Error en la carga de Noticias", err)
        }
    }
    async cargaEventos(){
        try{
            await edao.insertMany(eventos)
            console.log("Eventos cargados")
        }catch(err){
            console.error("Error en la carga de Eventos", err)
        }
    }
    async cargaGrupos(){
        try{
            await gdao.insertMany(grupos)
            console.log("Grupos cargados")
        }catch(err){
            console.error("Error en la carga de Grupos", err)
        }
    }
    async cargaPublicaciones(){
        try{
            await pdao.insertMany(publicaciones)
            console.log("Publicaciones cargados")
        }catch(err){
            console.error("Error en la carga de Publicaciones", err)
        }
    }
}

module.exports = new SemillaDatos();