const alunos = [
    {nome: "Vinicius", nota: 7.5, bolsista: true},
    {nome: "Francisco", nota: 8.9, bolsista: false},
    {nome: "Minie", nota: 7.3, bolsista: true},
    {nome: "Ednalva", nota: 9.0, bolsista: false}
]

const allBolsista = alunos.map(a => a.bolsista).reduce(function(alunoAnterior, alunoAtual){
    return alunoAnterior && alunoAtual
})

console.log(allBolsista)

const oneBolsista = alunos.map(a => a.bolsista).reduce(function(alunoAnterior, alunoAtual){
    return alunoAnterior || alunoAtual
})

console.log(oneBolsista)
