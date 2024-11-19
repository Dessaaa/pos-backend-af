import livroRepository from '../repositories/livroRepository.js'

describe('Testes Repository Livros', () => {
    test('Buscar todos livros', async () => {
        const livros = await livroRepository.buscarLivros()
        expect(livros.length).toBe(5)
        expect(livros[0].titulo).toBe('Livro do desassossego')
    })
    
    test('Buscar um livro válido', async () => {
        const livro = await livroRepository.buscarLivro(1)
        expect(livro.titulo).toBe('Livro do desassossego')
    })
    
    test('Buscar um livro inválido', async () => {
        const livro = await livroRepository.buscarLivro(1000)
        expect(livro).toBeNull()
    })
    
    test('Criar um novo livro', async () => {
        const novoLivro = {
            titulo: "Novo Livro",
            resumo: 'livro de testes',
            autorId: 1
        }
        
        const livro = await livroRepository.criarLivro(novoLivro)
        expect(livro.titulo).toBe('Novo Livro')
    })
    
    test('Alterar um livro', async () => {
        const novoLivro = {
            id: 4,
            titulo: "Livro Editado",
            resumo: 'livro de testes de edição',
            autorId: 1
        }
        
        const livro = await livroRepository.alterarLivro(novoLivro)
        expect(livro.titulo).toBe('Livro Editado')
    })
    
    test('Excluir um livro', async () => {
        const livro = await livroRepository.excluirLivro(5)
        expect(livro.titulo).toBe('Poemas completos de Alberto Caeiro')
    })
})