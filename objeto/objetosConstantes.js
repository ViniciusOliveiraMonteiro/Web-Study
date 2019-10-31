// pessoa -> 123 -> {...}
const pessoa = {nome: 'Vinicius'}

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ednalva'}

Object.freeze(pessoa)

pessoa.nome = 'Francisco'
pessoa.rua = '2 Travessa Manoel Drumondo'

delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Minie'})
pessoaConstante.nome = 'Francisco'
pessoaConstante.rua = '2 Travessa Manoel Drumondo'
console.log(pessoaConstante)
