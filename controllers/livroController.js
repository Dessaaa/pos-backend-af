import livroService from "../service/livroService.js"

async function buscarLivros(req, res, next) {
    try{
        res.json(await livroService.buscarLivros())
    } catch(err){
        next(err)
    }
}

async function buscarLivro(req, res, next) {
    try{
        const id = parseInt(req.params.id)
        const livro = await livroService.buscarLivro(id)

        if(!livro){
            throw new Error("Livro não encontrado!")
        }

        res.json(livro)
    } catch(err){
        next(err)
    }
}

async function criarLivro(req, res, next) {
    try{
        const { titulo, resumo, autorId } = req.body
        const livro = {
            titulo: titulo,
            resumo: resumo,
            autorId: autorId
        }
        if(!titulo || !autorId){
            throw new Error("Título e autor obrigatórios!")
        }
        const novoLivro = await livroService.criarLivro(livro)
        res.status(201).json(novoLivro)
    } catch(err){
        next(err)
    }
}

async function alterarLivro(req, res, next) {
    try{
        const id = parseInt(req.params.id)    
        const { titulo, resumo, autorId } = req.body
        const livroAtualizado = {
            id: id,
            titulo: titulo,
            resumo: resumo,
            autorId: autorId
        }
        const livro = await livroService.alterarLivro(livroAtualizado)

        if(!livro){
            throw new Error("Livro não encontrado!")
        }

        res.json(livro)
    } catch(err){
        next(err)
    }
}

async function excluirLivro(req, res, next) {
    try{
        const id = parseInt(req.params.id)
        
        const livroExcluido = await livroService.excluirLivro(id)
        if(!livroExcluido){
            throw new Error("Livro não encontrado!")
        }
        res.status(204).send()
    } catch(err){
        next(err)
    }
}

export default {
    buscarLivros, 
    buscarLivro,
    criarLivro,
    alterarLivro,
    excluirLivro
}