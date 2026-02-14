const mongoose = require("mongoose")

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
    }
    
},{
    versionKey:false,
    timestamps:true
})
/* poner Genero*/
const Noticia = mongoose.model("noticia", noticiaSchema)

module.exports = Noticia