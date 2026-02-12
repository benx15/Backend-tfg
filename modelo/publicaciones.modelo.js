const mongoose = require("mongoose")

const publicacionesSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },

    contenido:{
        type: String,
        required: true
    },
    fecha:{
        type:Date,
        required: true,
        default: Date.now
    },
    autor: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, 
        username: { type: String, required: true } 
    },
    grupo: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Grupo', required: true 
    }, 
    respuestas: [{
        contenido: { type: String,  },
        autor: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
            username: { type: String, required: true }
        },
        fechaPublicacion: { type: Date, default: Date.now }
    }]
    /* respuesta hecho*/
});

const Publicacion = mongoose.model("publicacione", publicacionesSchema)
module.exports= Publicacion