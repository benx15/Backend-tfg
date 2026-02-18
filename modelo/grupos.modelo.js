    const mongoose = require("mongoose")

    const grupoSchema = new mongoose.Schema({
        nombre:{
            type: String,
            required: true,
            unique: true
        },
        cantidad:{
            type: Number,
            default: 2,
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
        
    });
    grupoSchema.pre("save", function (next) {
        this.cantidad = this.usuarios.length;

        if (this.cantidad < 2) {
            return next(new Error("No se aceptan grupos con menos de 2 personas"));
        }

        next();
    });

    const Grupo =  mongoose.model("grupo" , grupoSchema)
    module.exports=Grupo