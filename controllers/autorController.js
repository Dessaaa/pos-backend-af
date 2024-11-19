import autorService from "../service/autorService.js"

async function buscarAutores(req, res, next) {
    try{
        res.json(await autorService.buscarAutores())
    } catch(err){
        next(err)
    }
}

async function buscarAutor(req, res, next) {
    try{
        const id = parseInt(req.params.id)
        const autor = await autorService.buscarAutor(id)

        if(!autor){
            throw new Error("Autor não encontrado!")
        }

        res.json(autor)
    } catch(err){
        next(err)
    }
}

async function criarAutor(req, res, next) {
    try{
        const { nome, bio } = req.body
        const autor = {
            nome: nome,
            bio: bio
        }
        if(!nome){
            throw new Error("Nome obrigatório!")
        }
        const novoAutor = await autorService.criarAutor(autor)
        res.status(201).json(novoAutor)
    } catch(err){
        next(err)
    }
}

async function alterarAutor(req, res, next) {
    try{
        const id = parseInt(req.params.id)    
        const { nome, bio } = req.body
        const autorAtualizado = {
            id: id,
            nome: nome, 
            bio: bio
        }
        const autor = await autorService.alterarAutor(autorAtualizado)

        if(!autor){
            throw new Error("Autor não encontrado!")
        }

        res.json(autor)
    } catch(err){
        next(err)
    }
}

async function excluirAutor(req, res, next) {
    try{
        const id = parseInt(req.params.id)
        
        const autorExcluido = await autorService.excluirAutor(id)
        if(!autorExcluido){
            throw new Error("Autor não encontrado!")
        }
        res.status(204).send()
    } catch(err){
        next(err)
    }
}

export default {
    buscarAutores, 
    buscarAutor,
    criarAutor,
    alterarAutor,
    excluirAutor
}