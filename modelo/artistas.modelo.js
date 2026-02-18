const mongoose = require("mongoose")

const artistasSchema = new mongoose.Schema({
    nombreArtistico:{
        type: String,
        required:true
    },
    nacionalidad:{
        type:String,
        required:true
    },
    genero:{
        type:String,
        required: true
    }
  
})

const Artista = mongoose.model("artista", artistasSchema)
module.exports=Artista
