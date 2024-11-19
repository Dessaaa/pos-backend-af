import jwt from 'jsonwebtoken'

export default function autenticar(req,res,next) {
    const token = req.headers['authorization']?.split(' ')[1]

    if(!token) {
        res.status(403).send("Token obrigatório")
    }

    try {        
        const verificado = jwt.verify(token, process.env.SECRET)
        req.usuario = verificado
        next()
    } catch(e) {
        res.status(401).send("Token inválido")
    }
}