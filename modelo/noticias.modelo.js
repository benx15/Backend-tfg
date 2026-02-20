const mongoose = require("mongoose")
const moment = require("moment-timezone")

const noticiaSchema = new mongoose.Schema({
    titular:{
        type: String,
        required: true
    },
    tematica:{
        type: String,
        required:true,
        trim: true,
        enum: ["Grupos","Quedadas","Album o EP" , "Otros"],
    },
    contenido:{
        type: String,
        required: true
    },
    genero:{
        type:String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now,
        get: (fecha) => moment(fecha).tz("Europe/Madrid").format("DD/MM/YYYY HH:mm")
    }
    
},{
    versionKey:false,
    timestamps:true,
    toJSON: { getters: true }
})

const Noticia = mongoose.model("noticia", noticiaSchema)

module.exports = Noticia