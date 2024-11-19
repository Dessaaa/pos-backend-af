import express from 'express'

import livroController from '../controllers/livroController.js' 
import autenticar from '../middleware/auth.js';

const router = express.Router();

router.use(express.json())

router.get('/', livroController.buscarLivros)

router.get('/:id', livroController.buscarLivro)

router.use(autenticar)

router.post('/', livroController.criarLivro)

router.put('/:id', livroController.alterarLivro)

router.delete('/:id', livroController.excluirLivro)

export default router