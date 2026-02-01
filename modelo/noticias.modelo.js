const mongoose = require("mongoose")

const noticiaSchema = new mongoose.Schema({
    titular:{
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required: true
    },
    tema:{
        type: String,
        required: true
    }

},{
    versionKey:false,
    timestamps:true
})

const Noticia = mongoose.model("noticia", noticiaSchema)

module.exports = Noticia