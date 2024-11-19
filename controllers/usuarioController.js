import usuarioService from "../service/usuarioService.js"
import jwt from 'jsonwebtoken'

async function buscarUsuarios(req, res, next) {
    try{
        res.json(await usuarioService.buscarUsuarios())
    } catch(err){
        next(err)
    }
}

async function buscarUsuario(req, res, next) {
    try{
        const id = parseInt(req.params.id)
        const usuario = await usuarioService.buscarUsuario(id)

        if(!usuario){
            throw new Error("Usuário não encontrado!")
        }

        res.json(usuario)
    } catch(err){
        next(err)
    }
}

async function criarUsuario(req, res, next) {
    try{
        const { nome, email, senha } = req.body
        const usuario = {
            nome: nome, 
            email: email, 
            senha: senha
        }
        if(!nome || !email || !senha){
            throw new Error("Nome, e-mail e senha obrigatórios!")
        }
        const novoUsuario = await usuarioService.criarUsuario(usuario)
        res.status(201).json(novoUsuario)
    } catch(err){
        next(err)
    }
}

async function logar(req, res, next) {
    try{
        const { email, senha } = req.body

        const usuario = await usuarioService.buscarUsuarioEmail(email)
        if(!usuario){
            throw new Error("Usuário inválido!")
        }
        if(senha !== usuario.senha) {
            throw new Error("Senha inválida!")
        }
        
        const token = jwt.sign(
            { id: usuario.id },
            process.env.SECRET,
            { expiresIn: '1h' }
        )
        res.send(token)

    } catch(err){
        next(err)
    }
}

async function alterarUsuario(req, res, next) {
    try{
        const id = parseInt(req.params.id)    
        const { nome, email, senha } = req.body
        const usuarioAtualizado = {
            id: id,
            nome: nome, 
            email: email, 
            senha: senha
        }
        const usuario = await usuarioService.alterarUsuario(usuarioAtualizado)

        if(!usuario){
            throw new Error("Usuário não encontrado!")
        }

        res.json(usuario)
    } catch(err){
        next(err)
    }
}

async function excluirUsuario(req, res, next) {
    try{
        const id = parseInt(req.params.id)
        
        const usuarioExcluido = await usuarioService.excluirUsuario(id)
        if(!usuarioExcluido){
            throw new Error("Usuário não encontrado!")
        }
        res.status(204).send()
    } catch(err){
        next(err)
    }
}

export default {
    buscarUsuarios, 
    buscarUsuario,
    logar,
    criarUsuario,
    alterarUsuario,
    excluirUsuario
}