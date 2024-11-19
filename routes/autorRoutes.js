import express from 'express'

import autorController from '../controllers/autorController.js' 
import autenticar from '../middleware/auth.js';

const router = express.Router();

router.use(express.json())

router.get('/', autorController.buscarAutores)

router.get('/:id', autorController.buscarAutor)

router.use(autenticar)

router.post('/', autorController.criarAutor)

router.put('/:id', autorController.alterarAutor)

router.delete('/:id', autorController.excluirAutor)

export default router