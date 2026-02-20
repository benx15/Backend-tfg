const mongoose = require("mongoose")
const moment = require("moment-timezone")

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
        default: Date.now,
        get: (fecha) => moment(fecha).tz("Europe/Madrid").format("DD/MM/YYYY HH:mm")
    },
    autor: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, 
        username: { type: String, required: true } 
    },
    grupo: { 
        id: { type: mongoose.Schema.Types.ObjectId, ref: "Grupo", required: true },
        nombre: { type: String, required: true },
    }, 
    respuestas: [{
        contenido: { type: String,  },
        autor: {
            id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
            username: { type: String, required: true }
        },
        fechaPublicacion: { type: Date, default: Date.now }
    }]
    
},{
    versionKey:false,
    timestamps:true,
    toJSON: { getters: true }
});

const Publicacion = mongoose.model("publicacione", publicacionesSchema)
module.exports= Publicacion