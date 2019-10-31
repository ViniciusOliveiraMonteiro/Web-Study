const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Leitura síncrona
const conteudo = fs.readFileSync(caminho, 'UTF-8')
console.log(conteudo)

//Leitura assíncrona
fs.readFile(caminho, (err, conteudo) =>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(`Usuário:${config.db.user}, senha:${config.db.pass}`)

fs.readdir(__dirname, 'utf-8', (err, pastas) =>{
    console.log('Conteúdo das pastas')
    console.log(pastas)
})