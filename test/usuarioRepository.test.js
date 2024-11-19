import usuarioRepository from '../repositories/usuarioRepository.js'

describe('Testes Repository Usuários', () => {
    test('Buscar todos usuários', async () => {
        const usuarios = await usuarioRepository.buscarUsuarios()
        expect(usuarios.length).toBe(2)
        expect(usuarios[0].nome).toBe('Andressa Nascimento SA')
    })
    
    test('Buscar um usuário válido', async () => {
        const usuario = await usuarioRepository.buscarUsuario(1)
        expect(usuario.nome).toBe('Andressa Nascimento SA')
    })
    
    test('Buscar um usuário inválido', async () => {
        const usuario = await usuarioRepository.buscarUsuario(1000)
        expect(usuario).toBeNull()
    })
    
    test('Criar um novo usuário', async () => {
        const novoUsuario = {
            nome: "Fulando de Tal",
            email: 'fulano@google.com',
            senha: '654321'
        }
        
        const usuario = await usuarioRepository.criarUsuario(novoUsuario)
        expect(usuario.nome).toBe('Fulando de Tal')
    })
    
    test('Alterar um usuário', async () => {
        const novoUsuario = {
            id: 11,
            nome: "Fulando de Tal e Coisa",
            email: 'fulano55@google.com',
            senha: '654321'
        }
        
        const usuario = await usuarioRepository.alterarUsuario(novoUsuario)
        expect(usuario.nome).toBe('Fulando de Tal e Coisa')
    })
    
    test('Excluir um usuário', async () => {
        const usuario = await usuarioRepository.excluirUsuario(2)
        expect(usuario.nome).toBe('Andressa Nascimento')
    })
})