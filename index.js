const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors");
const bodyParser= require("body-parser")
const rutaNoticias = require("./rutas/noticias.rutas")
const rutaUsuario = require("./rutas/usuario.rutas")
const rutaGrupos = require("./rutas/grupos.rutas")
const rutaEventos = require("./rutas/eventos.ruta")
const cargaDatos = require("./semilla/semilla.datos")
const rutaAdmin = require("./rutas/admin.ruta")

//Middleware
app.use(cors({
    origin: "http://localhost:4200", // <- frontend permitido
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/noticias" , rutaNoticias)
app.use("/api/usuarios" , rutaUsuario)
app.use("/api/grupos" , rutaGrupos)
app.use("/api/eventos" , rutaEventos)
app.use("/admin", rutaAdmin)
app.get("/" , (req,res) => {
    res.status(200).send("OK")
})

// cammbiar 27017 por conexion atlas
mongoose.connect("mongodb://127.0.0.1:27017/bbdd-tfg")
  .then(async () => {
    console.log("MongoDB conectado");

    await cargaDatos.cargaEventos(); 
    await cargaDatos.cargaNoticias(); 
    await cargaDatos.cargaUsuarios(); 
    await cargaDatos.cargaGrupos(); 
    await cargaDatos.cargaPublicaciones(); 

    app.listen(3000, () => {
      console.log("Node arrancado por el puerto 3000");
    });
  })
  .catch(err => {
    console.error("mongoDB NOOO conectado", err);
  });
