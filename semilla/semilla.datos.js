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
const bcrypt = require("bcrypt")
const adao = require("../modelo/artistas.modelo")
const artistas = require("../bbdd/artistas.bbdd")

class SemillaDatos{
    async cargaUsuarios(){
        try{
            const total = await udao.countDocuments()
            if(total>0){
                console.log("Usuarios ya existen")
                return await udao.find()
            }
            const usuariosEncriptados = await Promise.all(
                usuarios.map(async (usuario) => ({
                    ...usuario,
                    password: await bcrypt.hash(usuario.password, 10)
                }))
            )
            const usuariosGuardados =await udao.insertMany(usuariosEncriptados)
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
            const cliente = await udao.find()
            if (!cliente || cliente.length === 0) {
                console.error("No se encontró ningún usuario en la BD para asignar a eventos")
                return
            }
            const artistasBD = await adao.find()
            if (!artistasBD || artistasBD.length === 0) {
                console.error("No se encontró ningún artista en la BD para asignar a eventos")
                return
            }
            const eventosConfigurados = eventos.map(evento => {
                const usuariosEvento = evento.usuarios.map(u => {
                    const usuarioReal = cliente.find(c => c.username === u.username)
                    if (usuarioReal) {
                        return {
                            id: usuarioReal._id,
                            username: usuarioReal.username
                        }
                    }
                }).filter(u => u !== undefined)

                const artistasEvento = evento.artista.map(a => {
                    const artistaReal = artistasBD.find(ab => ab.nombreArtistico === a.nombreArtistico)
                    if (artistaReal) {
                        return {
                            id: artistaReal._id,
                            nombreArtistico: artistaReal.nombreArtistico
                        }
                    }
                }).filter(a => a !== undefined)
    
                return {
                    ...evento,
                    usuarios: usuariosEvento,
                    artista: artistasEvento
                }
            })
            const eventosGuardados = await edao.insertMany(eventosConfigurados)
            console.log("Eventos cargados")
            return eventosGuardados
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
            const usuariosBD  = await udao.find();
            const eventosBD  = await edao.find();
            const noticiasBD  = await ndao.find();

            if (!usuariosBD.length || !eventosBD.length || !noticiasBD.length) {
                console.error("Faltan datos previos (usuarios, eventos o noticias) para crear grupos.");
                return;
            }

            const gruposConfigurados = grupos.map(grupo => {
                
                const usuariosGrupo = grupo.usuarios.map(u => {
                    const usuarioReal = usuariosBD.find(ubd => ubd.username === u.username)
                    if (usuarioReal) {
                        return {
                            id: usuarioReal._id,
                            username: usuarioReal.username
                        }
                    }
                }).filter(u => u !== undefined)

                
                const eventosGrupo = grupo.eventos.map(e => {
                    const eventoReal = eventosBD.find(ebd => ebd.nombre === e.nombre)
                    if (eventoReal) {
                        return {
                            id: eventoReal._id,
                            nombre: eventoReal.nombre
                        }
                    }
                }).filter(e => e !== undefined)

                
                const noticiasGrupo = grupo.noticias.map(n => {
                    const noticiaReal = noticiasBD.find(nbd => nbd.titular === n.titular)
                    if (noticiaReal) {
                        return {
                            id: noticiaReal._id,
                            titular: noticiaReal.titular,
                            contenido: noticiaReal.contenido
                        }
                    }
                }).filter(n => n !== undefined)

                return {
                    nombre: grupo.nombre,
                    cantidad: grupo.cantidad,
                    genero: grupo.genero,
                    usuarios: usuariosGrupo,
                    eventos: eventosGrupo,
                    noticias: noticiasGrupo
                }
            })

        
            const gruposGuardados= await gdao.insertMany(gruposConfigurados);
            console.log("Grupos cargados correctamente con relaciones reales");
            return gruposGuardados
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
            const usuariosBD = await udao.find()
            const gruposBD = await gdao.find()

            if (!usuariosBD.length || !gruposBD.length) {
                console.error("No se pueden cargar publicaciones: faltan usuarios o el grupo en la BD");
                return;
            }

            const publicacionesCorregidas = publicaciones.map(pub => {
                const usuarioReal = usuariosBD.find(u => u.username === pub.autor.username);

                const grupoReal = gruposBD.find(g => g.nombre === pub.grupo.nombre)

                if (!usuarioReal) {
                    console.log(`No se encontró el usuario ${pub.autor.username} en la base de datos.`)
                    return null
                }

                if (!grupoReal) {
                    console.log(`No se encontró el grupo ${pub.grupo.nombre} en la base de datos.`)
                    return null
                }

                return {
                    titulo: pub.titulo,
                    contenido: pub.contenido,
                    fecha: pub.fecha,
                    autor: {
                        id: usuarioReal._id,
                        username: usuarioReal.username
                    },
                    grupo: {
                        id: grupoReal._id,
                        nombre: grupoReal.nombre
                    },
                    respuestas: pub.respuestas || []
                }
            }).filter(p => p !== null)


            
            const publicacionesGuardadas=await pdao.insertMany(publicacionesCorregidas);
            console.log("Publicaciones cargadas correctamente");
            return publicacionesGuardadas
            
        }catch(err){
            console.error("Error en la carga de Publicaciones", err)
        }
    }
    async cargaArtistas(){
        try{
            const total = await adao.countDocuments()
            if(total>0){
                console.log("Artistas ya existen")
                return
            }
            const artistasGuardados = await adao.insertMany(artistas)
            console.log("Artistas cargados")
            return artistasGuardados
        }catch(err){
            console.error("Error en la carga de Artistas", err)
        }
    }
    async cargarTodosDatos(){
        try{
            console.log("Cargando de datos...")
            await this.cargaUsuarios()
            await this.cargaNoticias()
            await this.cargaArtistas()
            await this.cargaEventos()
            await this.cargaGrupos()
            await this.cargaPublicaciones()
            console.log("Todos los datos han sido cargados exitosamente")
        }catch(err){
            console.error("Error al cargar todos los datos:", err)
        }
    }
}

module.exports = new SemillaDatos();
