const mongoose = require("mongoose")

const usuarioSchema= new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    name:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true,
        min: [18, 'Debes ser mayor de 18 años']
    },
    password:{
        type: String,
        required:true,
        unique: true,
        lowercase: true,
        trim: true,
        /* validate:{
        validator: validator.isEmail,
        message: 'Email no valido'
        }, */
        match:  [/^\S+@\S+\.\S+$/, 'El email no es válido']
    },
    enabled: {
        type: Boolean,
        default: true,
        select: false
    },
    rol : {
        type: String,
        required:true,
        trim: true,
        enum: ["ADMON","CLIENTE","TRABAJADOR"]
    }
    /* grupos publicaciones , añadimos descripcion?*/
});

const Usuario = mongoose.model("usuario", usuarioSchema)
module.exports= Usuario