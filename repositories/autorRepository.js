import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function buscarAutores() {
    try{
        return await prisma.autores.findMany()
    } catch(error) {
        throw error
    } 
}

async function buscarAutor(id) {
    try{
        return await prisma.autores.findUnique({
            where: { id }
        })
    } catch(error) {
        throw error
    } 
}

async function criarAutor(autor) {
    const { nome, bio } = autor
    try{
        return await prisma.autores.create({
            data: {
                nome: nome,
                bio: bio
            }
        })
    } catch(error) {
        throw error
    } 
}

async function alterarAutor(autor) {
    const { nome, bio, id} = autor
    try{
        return await prisma.autores.update({
            where: { id },
            data: {
                nome: nome,
                bio: bio
            }
        })
    } catch(error) {
        throw error
    }
}

async function excluirAutor(id) {
    try{
        return await prisma.autores.delete({
            where: { id }
        })
    } catch(error) {
        throw error
    }
}

export default {
    buscarAutores,
    buscarAutor,
    criarAutor,
    alterarAutor,
    excluirAutor
}