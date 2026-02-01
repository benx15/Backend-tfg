const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bodyParser= require("body-parser")
const rutaNoticias = require("./rutas/noticias.rutas")

//Middleware

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/noticias" , rutaNoticias)
app.get("/" , (req,res) => {
    res.status(200).send("OK")
})

// cammbiar 27017 por conexion atlas
mongoose.connect("mongodb://127.0.0.1:27017/bbdd-tfg")
.then(() => console.log("Mongodb conectado"))
.catch(() => console.log("mongodb NOO concetado"))

app.listen(3000, () => console.log("Node arrancado por el puerto 3000"))