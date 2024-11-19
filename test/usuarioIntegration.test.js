import request from 'supertest'
import jwt from 'jsonwebtoken'
import app from '../appTest.js'


describe('Testes de integração no login', () => {
    test('Teste com login válido', async () => {
        const usuario = {
            email: 'andressa.nascimento@gmail.com',
            senha: '123456'
        }

        const res = await request(app).post('/usuarios/logar').send(usuario)

        expect(res.statusCode).toBe(200)
    })

    test('Teste com login inválido', async () => {
        const usuario = {
            email: 'andressa@gmail.com',
            senha: '123456'
        }

        const res = await request(app).post('/usuarios/logar').send(usuario)

        expect(res.statusCode).toBe(400)
    })

    test('Teste com senha inválida', async () => {
        const usuario = {
            email: 'andressa.nascimento@gmail.com',
            senha: '123'
        }

        const res = await request(app).post('/usuarios/logar').send(usuario)

        expect(res.statusCode).toBe(400)
        expect(res.body).toEqual({'error': 'Senha inválida!'})
    })
})

describe('Teste em rotas bloqueadas', () => {

    const secret = process.env.SECRET

    test('Acesso em rota bloqueada sem token', async () => {
        const livro = {
            titulo: "Poemas completos de Alberto Caeiro",
            resumo: "Em Poemas completos de Alberto Caeiro, os versos são simples e escritos em tom de parábolas. Tudo se constrói em torno da natureza contemplada. O processo criativo deste heterônimo de Fernando Pessoa é espontâneo e de completa naturalidade. Os poemas são sua própria biografia.",
            autorId: 1
        }
        const res = await request(app).post('/livros').send(livro)

        expect(res.statusCode).toEqual(403)
    })

    test('Acesso em rota bloqueada com token válido', async () => {
        const token = jwt.sign({ id: 1 }, secret, { expiresIn: '1h' })
        const livro = {
            titulo: "Poemas completos de Alberto Caeiro",
            resumo: "Em Poemas completos de Alberto Caeiro, os versos são simples e escritos em tom de parábolas. Tudo se constrói em torno da natureza contemplada. O processo criativo deste heterônimo de Fernando Pessoa é espontâneo e de completa naturalidade. Os poemas são sua própria biografia.",
            autorId: 1
        }
        const res = await request(app).post('/livros').send(livro).set('Authorization', `Bearer ${token}`)

        expect(res.statusCode).toEqual(201)
    })

    test('Acesso em rota bloqueada com token inválido', async () => {
        const livro = {
            titulo: "Poemas completos de Alberto Caeiro",
            resumo: "Em Poemas completos de Alberto Caeiro, os versos são simples e escritos em tom de parábolas. Tudo se constrói em torno da natureza contemplada. O processo criativo deste heterônimo de Fernando Pessoa é espontâneo e de completa naturalidade. Os poemas são sua própria biografia.",
            autorId: 1
        }
        const res = await request(app).post('/livros').send(livro).set('Authorization', `Bearer tokeninválido`)

        expect(res.statusCode).toEqual(401)
    })
})