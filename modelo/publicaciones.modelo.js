const mongoose = require("mongoose")

const publicacionesSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required:true
    },
    contenido:{
        type: String,
        required: true
    },
    fecha:{
        type:Date.now,
        required: true,
        default: Date.now
    }
    /* respuesta*/
});

const Publicacion = mongoose.model("publicacion", publicacionesSchema)
module.exports= Publicacion