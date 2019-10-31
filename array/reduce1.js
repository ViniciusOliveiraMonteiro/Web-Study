const alunos = [
    {nome: "Vinicius", nota: 7.5},
    {nome: "Francisco", nota: 8.9},
    {nome: "Minie", nota: 7.3},
    {nome: "Ednalva", nota: 9.0}
]

const somaDeNotas = alunos.map(a => a.nota).reduce(function(valorAnterior,valorAtual, indice){
console.log(`${indice + 1}: ${valorAnterior} + ${valorAtual}`)
return valorAnterior + valorAtual    
}, 0)

console.log(`Soma: ${somaDeNotas}`)