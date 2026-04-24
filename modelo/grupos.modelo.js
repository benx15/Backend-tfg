    const mongoose = require("mongoose")

    const grupoSchema = new mongoose.Schema({
        nombre:{
            type: String,
            required: true,
            unique: true
        },
        cantidad:{
            type: Number,
            default: 0,
            min: [0]
        },
        genero:{
            type: String,
            required: true
        },
        usuarios: [
            {
                id: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required:true},
                username: { type: String, required: true }
            }
        ],
        eventos: [
            {
                id: { type: mongoose.Schema.Types.ObjectId, ref: "Evento", required:true },
                nombre: { type: String, required: true },
            }
        ],
        noticias:[
            {
                id: { type: mongoose.Schema.Types.ObjectId, ref: "Noticia", required:true  },
                titular: { type: String, required: true },
                contenido: { type: String, required:true },
                fecha: { type: Date,  },
                autor: {
                    name: { type: String, required:true },
                    lastName: { type: String, required:true}
                }
            }
        ],
        
    });
    grupoSchema.pre("save", async function () {
    
        this.cantidad = this.usuarios.length;


    });

    const Grupo =  mongoose.model("grupo" , grupoSchema)
    module.exports=Grupo