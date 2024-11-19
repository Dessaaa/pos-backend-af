import autorRepository from '../repositories/autorRepository.js'

describe('Testes Repository Autores', () => {
    test('Buscar todos autores', async () => {
        const autores = await autorRepository.buscarAutores()
        expect(autores.length).toBe(4)
        expect(autores[0].nome).toBe('Fernando Pessoa')
    })
    
    test('Buscar um autor válido', async () => {
        const autor = await autorRepository.buscarAutor(1)
        expect(autor.nome).toBe('Fernando Pessoa')
    })
    
    test('Buscar um autor inválido', async () => {
        const autor = await autorRepository.buscarAutor(1000)
        expect(autor).toBeNull()
    })
    
    test('Criar um novo autor', async () => {
        const novoAutor = {
            nome: "Novo Autor",
            bio: 'autor de testes'
        }
        
        const autor = await autorRepository.criarAutor(novoAutor)
        expect(autor.nome).toBe('Novo Autor')
    })
    
    test('Alterar um autor', async () => {
        const novoAutor = {
            id: 4,
            nome: "Autor Editado",
            bio: 'autor de testes de edição'
        }
        
        const autor = await autorRepository.alterarAutor(novoAutor)
        expect(autor.nome).toBe('Autor Editado')
    })
    
    test('Excluir um autor', async () => {
        const autor = await autorRepository.excluirAutor(3)
        expect(autor.nome).toBe('William Shakespeare')
    })
})