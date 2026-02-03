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
    }
    /*usuarios[]/no  eventos?si  noticias? si post si  */
});

const Grupo =  mongoose.model("grupo" , grupoSchema)
module.exports=Grupo