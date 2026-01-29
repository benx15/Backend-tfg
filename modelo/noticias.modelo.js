const mongoose = require("mongoose")

const noticiaSchema = new mongoose.Schema({

},{
    versionKey:false,
    timestamps:true
})

const Noticia = mongoose.model("noticia", noticiaSchema)

module.exports = Noticia