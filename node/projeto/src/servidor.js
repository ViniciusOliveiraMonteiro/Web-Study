const porta = 3003

const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParse.urlencoded({extended: true}))

app.get('/produtos', (req, resp, next) => {
    resp.send(bancoDeDados.getProdutos()) // É convertido para JSON através do método
})

app.get('/produtos/:id', (req, resp, next) => {
    resp.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)
})

app.put('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto)
})

app.delete('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    resp.send(produto)
})

app.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}`)
})