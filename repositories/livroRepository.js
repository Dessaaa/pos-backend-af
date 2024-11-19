import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function buscarLivros() {
    try{
        return await prisma.livros.findMany()
    } catch(error) {
        throw error
    } 
}

async function buscarLivro(id) {
    try{
        return await prisma.livros.findUnique({
            where: { id }
        })
    } catch(error) {
        throw error
    } 
}

async function criarLivro(livro) {
    const { titulo, resumo, autorId } = livro
    try{
        return await prisma.livros.create({
            data: {
                titulo: titulo,
                resumo: resumo,
                autor_id: autorId
            }
        })
    } catch(error) {
        throw error
    } 
}

async function alterarLivro(livro) {
    const { titulo, resumo, autorId, id} = livro
    try{
        return await prisma.livros.update({
            where: { id },
            data: {
                titulo: titulo,
                resumo: resumo,
                autor_id: autorId
            }
        })
    } catch(error) {
        throw error
    }
}

async function excluirLivro(id) {
    try{
        return await prisma.livros.delete({
            where: { id }
        })
    } catch(error) {
        throw error
    }
}

export default {
    buscarLivros,
    buscarLivro,
    criarLivro,
    alterarLivro,
    excluirLivro
}