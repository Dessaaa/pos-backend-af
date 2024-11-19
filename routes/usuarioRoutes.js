import express from 'express'

import usuarioController from '../controllers/usuarioController.js' 

const router = express.Router();

router.use(express.json())

router.post('/logar', usuarioController.logar)

router.post('/', usuarioController.criarUsuario)

//router.use(autenticar)

router.get('/', usuarioController.buscarUsuarios)

router.get('/:id', usuarioController.buscarUsuario)

router.put('/:id', usuarioController.alterarUsuario)

router.delete('/:id', usuarioController.excluirUsuario)

export default router