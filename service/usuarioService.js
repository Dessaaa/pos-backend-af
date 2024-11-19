import usuarioRepository from "../repositories/usuarioRepository.js"

async function buscarUsuarios() {
    return await usuarioRepository.buscarUsuarios()
}

async function buscarUsuario(id) {
    return await usuarioRepository.buscarUsuario(id)
}

async function buscarUsuarioEmail(email) {
    return await usuarioRepository.buscarUsuarioEmail(email)
}

async function criarUsuario(usuario) { 
    return await usuarioRepository.criarUsuario(usuario)
}

async function alterarUsuario(usuario) {

    return await usuarioRepository.alterarUsuario(usuario)
}

async function excluirUsuario(id) {

    return await usuarioRepository.excluirUsuario(id)
}

export default {
    buscarUsuarios,
    buscarUsuario,
    buscarUsuarioEmail,
    criarUsuario,
    alterarUsuario,
    excluirUsuario
}