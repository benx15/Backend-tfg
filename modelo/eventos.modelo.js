const mongoose = require("mongoose")
const moment = require("moment-timezone")   

const eventosSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        unique:true
    },
    precio:{
        type: Number,
        required: true,
        min: [20, "NO se adminten precios inferiores"]
    },
    artista:[
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "Artista", required: true },
            nombreArtistico: { type: String, required: true },
        }
    ],
    fecha:{
        type:Date,
        required: true,
      
        get: (fecha) => moment(fecha).tz("Europe/Madrid").format("DD/MM/YYYY HH:mm")
    },
    aforo:{
        type: Number,
        required: true,
        min: [50, "no se permite aforo inferior"]
    },
    ubicacion:{
        type: String,
        required: true
    },
    genero:{
        type:String,
        required: true
    },
    descripcion:{
        type:String
    },
    usuarios: [
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
            username: { type: String, required: true }
        }
    ],
},{
    versionKey:false,
    timestamps:true,
    toJSON: { getters: true }
});

const Evento = mongoose.model("evento", eventosSchema)
module.exports=Evento