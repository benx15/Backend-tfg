const esAdmin = (req, res,next) => {
    if(req.usuario.rol !== "ADMON"){
        return res.status(403).json({mensaje: "Solo administradores"});
    }
    next();
};
const esCliente = (req, res,next) => {
    if(req.usuario.rol !== "CLIENTE"){
        return res.status(403).json({mensaje: "Solo clientes"});
    }
    next();
};
const esTrabajador = (req, res,next) => {
    if(req.usuario.rol !== "TRABAJADOR"){
        return res.status(403).json({mensaje: "Solo trabajadores"});
    }
    next();
};

module.exports = {esAdmin,esCliente,esTrabajador};