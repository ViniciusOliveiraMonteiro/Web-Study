const produto = {
    nome: "Notebook",
    valor: 4399.92,
    marca: "Lenovo"
}

const fs = require('fs')

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), erro => {
    console.log(erro || 'O arqivo foi gerado!')
})