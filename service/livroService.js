import livroRepository from "../repositories/livroRepository.js"

async function buscarLivros() {
    return await livroRepository.buscarLivros()
}

async function buscarLivro(id) {
    return await livroRepository.buscarLivro(id)
}

async function criarLivro(livro) {   
    return await livroRepository.criarLivro(livro)
}

async function alterarLivro(livro) {

    return await livroRepository.alterarLivro(livro)
}

async function excluirLivro(id) {

    return await livroRepository.excluirLivro(id)
}

export default {
    buscarLivros,
    buscarLivro,
    criarLivro,
    alterarLivro,
    excluirLivro
}