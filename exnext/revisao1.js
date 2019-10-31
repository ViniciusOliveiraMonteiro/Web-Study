// const e let
{
    var a = 2 // escopo de função e global
    let b = 3 // escopo de função e de bloco
    console.log(b)
}
console.log(a)

// template string
const produto = 'iPad'
console.log(`${produto} é caro!!`)

// destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, ...tras)

const [x, y, , w] = [1, 2, 3, 4]
console.log(x, y, w)

const {nome, idade} = {nome: "Ana", idade: 22}
console.log(nome, idade)
