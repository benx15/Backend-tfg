const mongoose = require("mongoose")

const grupoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        unique: true
    },
    cantidad:{
        type: Number,
        required: true,
        min: [2, "No se aceptan grupos con menos de 2 personas "]
    },
    genero:{
        type: String,
        required: true
    },
    usuarios: [
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
            username: { type: String, required: true }
        }
    ],
    eventos: [
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "Evento", required: true },
            nombre: { type: String, required: true },
        }
    ],
    noticias:[
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "Noticia", required: true },
            titular: { type: String, required: true },
            contenido: { type: String, required: true }
        }
    ],
    /*usuarios[]/no  eventos?si  noticias? si post si  */
});

const Grupo =  mongoose.model("grupo" , grupoSchema)
module.exports=Grupo