const mongoose = require("mongoose")

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
    fecha:{
        type:Date,
        required: true,
        default: Date.now
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
    }
    /* usuarios que van a ese evento*/
});

const Evento = mongoose.model("evento", eventosSchema)
module.exports=Evento