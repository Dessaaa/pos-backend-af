import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function buscarUsuarios() {
    try{
        return await prisma.usuarios.findMany()
    } catch(error) {
        throw error
    } 
}

async function buscarUsuario(id) {
    try{
        return await prisma.usuarios.findUnique({
            where: { id }
        })
    } catch(error) {
        throw error
    } 
}

async function buscarUsuarioEmail(email) {
    try{
        return await prisma.usuarios.findUnique({
            where: { email }
        })
    } catch(error) {
        throw error
    } 
}

async function criarUsuario(usuario) {
    const { nome, email, senha } = usuario
    try{
        return await prisma.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senha
            }
        })
    } catch(error) {
        throw error
    } 
}

async function alterarUsuario(usuario) {
    const { nome, email, senha, id} = usuario
    try{
        return await prisma.usuarios.update({
            where: { id },
            data: {
                nome: nome,
                email: email,
                senha: senha
            }
        })
    } catch(error) {
        throw error
    }
}

async function excluirUsuario(id) {
    try{
        return await prisma.usuarios.delete({
            where: { id }
        })
    } catch(error) {
        throw error
    }
}

export default {
    buscarUsuarios,
    buscarUsuario,
    buscarUsuarioEmail,
    criarUsuario,
    alterarUsuario,
    excluirUsuario
}