const udao = require("../modelo/usuarios.modelo")
const usuarios = require("../bbdd/usuarios.bbdd")
const ndao = require("../modelo/noticias.modelo")
const noticias = require("../bbdd/noticias.bbdd")
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
                return await udao.find()
            }
            const usuariosGuardados =await udao.insertMany(usuarios)
            console.log("Usuarios cargados")
            return usuariosGuardados
        }catch(err){
            console.error("Error en la carga de Usuarios", err)
        }
    }
    async cargaNoticias(){
        try{
           const total = await ndao.countDocuments()
            if(total>0){
                console.log("Noticias ya existen")
                return await ndao.find()
            }
            const noticiasGuardadas = await ndao.insertMany(noticias)
            console.log("Noticias cargadas")
            return noticiasGuardadas
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
            const cliente = usuarios.find()
            if (!cliente) {
                console.error("No se encontró ningún usuario en la BD para asignar a eventos")
                return
            }
            const eventosUsuario = eventos.map(evento => ({
                ...evento,
                usuarios:[{
                    id: cliente._id,
                    username: cliente.username
                }]
            }))
            await edao.insertMany(eventosUsuario)
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
            const usuarioReal = await udao.findOne();
            const eventoReal = await edao.findOne();
            const noticiaReal = await ndao.findOne();

            if (!usuarioReal || !eventoReal || !noticiaReal) {
                console.error("Faltan datos previos (usuarios, eventos o noticias) para crear grupos.");
                return;
            }

       
            const gruposConfigurados = grupos.map(grupo => ({
                ...grupo,
                usuarios: [{
                    id: usuarioReal._id,
                    username: usuarioReal.username
                }],
                eventos: [{
                    id: eventoReal._id,
                    nombre: eventoReal.nombre 
                }],
                noticias: [{
                    id: noticiaReal._id,
                    titular: noticiaReal.titular,
                    contenido: noticiaReal.contenido
                }]
            }));

        
            await gdao.insertMany(gruposConfigurados);
            console.log("Grupos cargados correctamente con relaciones reales");
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
            const usuarios = await udao.find(); 
            const grupo = await gdao.find();  

            if (!usuarios.length || !grupo.length) {
                console.error("No se pueden cargar publicaciones: faltan usuarios o el grupo en la BD");
                return;
            }

            const publicacionesCorregidas = publicaciones.map(pub => {
                const usuarioReal = usuarios.find(u => u.username === pub.autor.username);

                if (!usuarioReal) {
                    console.log(`No se encontró el usuario ${pub.autor.username} en la base de datos.`);
                    return null;
                }

                return {
                    ...pub,
                    autor: {
                        id: usuarioReal._id, 
                        username: usuarioReal.username
                    },
                    grupo: grupo._id 
                };
            }).filter(p => p !== null); 

       
            
            await pdao.insertMany(publicacionesCorregidas);
            console.log("Publicaciones cargadas correctamente");
            
        }catch(err){
            console.error("Error en la carga de Publicaciones", err)
        }
    }
}

module.exports = new SemillaDatos();
