import autorRepository from "../repositories/autorRepository.js"

async function buscarAutores() {
    return await autorRepository.buscarAutores()
}

async function buscarAutor(id) {
    return await autorRepository.buscarAutor(id)
}

async function criarAutor(autor) {   
    return await autorRepository.criarAutor(autor)
}

async function alterarAutor(autor) {

    return await autorRepository.alterarAutor(autor)
}

async function excluirAutor(id) {

    return await autorRepository.excluirAutor(id)
}

export default {
    buscarAutores,
    buscarAutor,
    criarAutor,
    alterarAutor,
    excluirAutor
}