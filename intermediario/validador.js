const jwt = require("jsonwebtoken")

function validar(req,res,next) {
    const authHeader = req.headers.authorization; /*lee el token de la cabecera */
    if(!authHeader){
        return res.status(401).json({mensaje: "No existe token"});
    }
    
    const token = authHeader.split(" ")[1]; /*esto extrae solo el token ya un token se envia así :  Authorization: Bearer eyJh*/
     
    try{
        const decoded = jwt.verify(token, "CLAVE_SECRETA");/*verifica el token*/ 
        req.usuario= decoded; /*guarda datos del usuario en l request*/ 
        next();
    } catch (err) {
        return res.status(401).json({ mensaje: "Token inválido" });
    }
}

module.exports = validar;