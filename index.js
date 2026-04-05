const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors");
const bodyParser= require("body-parser")
const rutaNoticias = require("./rutas/noticias.rutas")
const rutaUsuario = require("./rutas/usuarios.rutas")
const rutaGrupos = require("./rutas/grupos.rutas")
const rutaEventos = require("./rutas/eventos.ruta")
const cargaDatos = require("./semilla/semilla.datos")
const rutaAdmin = require("./rutas/admin.ruta")
const rutaCliente = require("./rutas/cliente.ruta")
const rutaTrabajador= require("./rutas/trabajador.ruta")

//Middleware
app.use(cors({
    origin: "http://localhost:4200", 
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/noticias" , rutaNoticias)
app.use("/api/usuarios" , rutaUsuario)
app.use("/api/grupos" , rutaGrupos)
app.use("/api/eventos" , rutaEventos)
app.use("/admin" , rutaAdmin)
app.use("/cliente" , rutaCliente)
app.use("/trabajador" , rutaTrabajador)

app.get("/" , (req,res) => {
    res.status(200).send("OK")
})


mongoose.connect("mongodb+srv://benat_db_user:Juniml8*@micluster1.mb8xvob.mongodb.net/bbdd-tfg")
  .then(async () => {
    console.log("MongoDB conectado");

    await cargaDatos.cargarTodosDatos();

    app.listen(3000, () => {
      console.log("Node arrancado por el puerto 3000");
    });
  })
  .catch(err => {
    console.error("mongoDB NOOO conectado", err);
  });
