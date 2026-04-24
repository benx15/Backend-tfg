const express = require("express")
const mongoose = require("mongoose")
const ruta = express.Router()
const adao = require("../modelo/artistas.modelo")


class ArtistasControlador{
    async obtenerArtistas(req, res) {
        try {
            const artistas = await adao.find();
            return res.status(200).json(artistas);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ mensaje: "Error al obtener artistas" });
    }
}
}

module.exports = new ArtistasControlador();