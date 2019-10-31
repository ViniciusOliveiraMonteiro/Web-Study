const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')

http.createServer((req, res) => {
    res.write('Seja bem vindo')
    res.end()
}).listen(8080)