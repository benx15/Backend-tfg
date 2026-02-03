const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors");
const bodyParser= require("body-parser")
const rutaNoticias = require("./rutas/noticias.rutas")
const rutaUsuario = require("./rutas/usuario.rutas")
const rutaGrupos = require("./rutas/grupos.rutas")
const rutaEventos = require("./rutas/eventos.ruta")

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
app.get("/" , (req,res) => {
    res.status(200).send("OK")
})

// cammbiar 27017 por conexion atlas
mongoose.connect("mongodb://127.0.0.1:27017/bbdd-tfg")
.then(() => console.log("Mongodb conectado"))
.catch(() => console.log("mongodb NOO concetado"))

app.listen(3000, () => console.log("Node arrancado por el puerto 3000"))