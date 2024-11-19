import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routerUsuarios from './routes/usuarioRoutes.js'
import routerLivros from './routes/livroRoutes.js'
import routerAutores from './routes/autorRoutes.js'

const app = express()

app.use(cors())
dotenv.config()

const PORT = 3333

app.use('/usuarios', routerUsuarios)
app.use('/livros', routerLivros)
app.use('/autores', routerAutores)

app.use((err, req, res, next) => {
    console.log(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})

app.listen(PORT, () => {
    console.log("Servidor funcionando na porta " + PORT + "!")
})