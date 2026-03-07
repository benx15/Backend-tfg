const mongoose = require("mongoose")
const moment = require("moment-timezone")

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
    email:{
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
        enum: ["ADMON","CLIENTE","TRABAJADOR"],
        default: "CLIENTE"
    },
    fechaRegistro:{
        type: Date,
        default: Date.now,
        get: (fecha) => moment(fecha).tz("Europe/Madrid").format("DD/MM/YYYY HH:mm")
    },
    descripcion:{
        type: String
    },
    artistas: [
        {
            id: {type: mongoose.Schema.Types.ObjectId, ref: "artista"},
            nombreArtistico: {type:String}
        }
    ]
    
},{
    versionKey:false,
    timestamps:true,
    toJSON: { getters: true }
});

const Usuario = mongoose.model("usuario", usuarioSchema)
module.exports= Usuario