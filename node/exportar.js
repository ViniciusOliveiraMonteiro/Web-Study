this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    teste: 'Teste'
}

console.log(module.exports)

module.exports = {
    condicao: true
}